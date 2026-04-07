#!/bin/bash
export PATH="/Users/michaelbriones/.nvm/versions/node/v22.22.2/bin:$PATH"
cd "$(dirname "$0")"
exec npx next dev
