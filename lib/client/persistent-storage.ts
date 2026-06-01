const DB_NAME = "technical-english-learning";
const DB_VERSION = 1;
const STORE_NAME = "key-value";

let dbPromise: Promise<IDBDatabase | null> | undefined;

function canUseBrowserStorage() {
  return typeof window !== "undefined";
}

function openDatabase(): Promise<IDBDatabase | null> {
  if (!canUseBrowserStorage() || !("indexedDB" in window)) {
    return Promise.resolve(null);
  }

  if (dbPromise) {
    return dbPromise;
  }

  dbPromise = new Promise((resolve) => {
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => {
      console.error("Failed to open learning storage:", request.error);
      resolve(null);
    };
  });

  return dbPromise;
}

async function readFromIndexedDb<T>(key: string): Promise<T | null> {
  const db = await openDatabase();
  if (!db) {
    return null;
  }

  return new Promise((resolve) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const request = transaction.objectStore(STORE_NAME).get(key);

    request.onsuccess = () =>
      resolve((request.result as T | undefined) ?? null);
    request.onerror = () => {
      console.error("Failed to read learning storage:", request.error);
      resolve(null);
    };
  });
}

async function writeToIndexedDb(key: string, value: string): Promise<void> {
  const db = await openDatabase();
  if (!db) {
    return;
  }

  await new Promise<void>((resolve) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const request = transaction.objectStore(STORE_NAME).put(value, key);

    request.onsuccess = () => resolve();
    request.onerror = () => {
      console.error("Failed to write learning storage:", request.error);
      resolve();
    };
  });
}

async function removeFromIndexedDb(key: string): Promise<void> {
  const db = await openDatabase();
  if (!db) {
    return;
  }

  await new Promise<void>((resolve) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const request = transaction.objectStore(STORE_NAME).delete(key);

    request.onsuccess = () => resolve();
    request.onerror = () => {
      console.error("Failed to remove learning storage:", request.error);
      resolve();
    };
  });
}

export async function getPersistentItem<T>(key: string): Promise<T | null> {
  if (!canUseBrowserStorage()) {
    return null;
  }

  const indexedDbValue = await readFromIndexedDb<string>(key);
  const saved = indexedDbValue ?? window.localStorage.getItem(key);
  if (!saved) {
    return null;
  }

  try {
    return JSON.parse(saved) as T;
  } catch (error) {
    console.error("Failed to parse learning storage:", error);
    return null;
  }
}

export function setPersistentItem<T>(key: string, value: T): void {
  if (!canUseBrowserStorage()) {
    return;
  }

  const serialized = JSON.stringify(value);
  try {
    window.localStorage.setItem(key, serialized);
  } catch (error) {
    console.error("Failed to write local learning storage:", error);
  }

  void writeToIndexedDb(key, serialized);
}

export function removePersistentItem(key: string): void {
  if (!canUseBrowserStorage()) {
    return;
  }

  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error("Failed to remove local learning storage:", error);
  }

  void removeFromIndexedDb(key);
}
