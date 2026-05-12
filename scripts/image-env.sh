#!/usr/bin/env bash
set -euo pipefail

REGISTRY="${REGISTRY:-zot.murphylan.cloud}"
REPOSITORY="${REPOSITORY:-murphy/english}"
IMAGE="${IMAGE:-${REGISTRY}/${REPOSITORY}}"
PLATFORM="${PLATFORM:-linux/amd64}"

if command -v podman >/dev/null 2>&1; then
  CONTAINER_BIN="${CONTAINER_BIN:-podman}"
  PUSH_TLS_ARGS=(--tls-verify=false)
elif command -v docker >/dev/null 2>&1; then
  CONTAINER_BIN="${CONTAINER_BIN:-docker}"
  PUSH_TLS_ARGS=()
else
  echo "podman or docker is required" >&2
  exit 1
fi

export REGISTRY REPOSITORY IMAGE PLATFORM CONTAINER_BIN
