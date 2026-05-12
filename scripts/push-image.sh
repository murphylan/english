#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

source "${SCRIPT_DIR}/image-env.sh"

TAG="${1:-latest}"

if ! "${CONTAINER_BIN}" image inspect "${IMAGE}:${TAG}" >/dev/null 2>&1; then
  echo "Image ${IMAGE}:${TAG} not found. Run ./scripts/build-image.sh ${TAG} first." >&2
  exit 1
fi

"${CONTAINER_BIN}" push "${PUSH_TLS_ARGS[@]}" "${IMAGE}:${TAG}"

if [[ "${TAG}" != "latest" ]]; then
  if ! "${CONTAINER_BIN}" image inspect "${IMAGE}:latest" >/dev/null 2>&1; then
    "${CONTAINER_BIN}" tag "${IMAGE}:${TAG}" "${IMAGE}:latest"
  fi
  "${CONTAINER_BIN}" push "${PUSH_TLS_ARGS[@]}" "${IMAGE}:latest"
fi

echo "Pushed ${IMAGE}:${TAG}"
