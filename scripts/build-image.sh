#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

source "${SCRIPT_DIR}/image-env.sh"

TAG="${1:-latest}"

cd "${ROOT_DIR}"

"${CONTAINER_BIN}" build \
  --platform "${PLATFORM}" \
  -f Containerfile \
  -t "${IMAGE}:${TAG}" \
  .

if [[ "${TAG}" != "latest" ]]; then
  "${CONTAINER_BIN}" tag "${IMAGE}:${TAG}" "${IMAGE}:latest"
fi

echo "Built ${IMAGE}:${TAG}"
