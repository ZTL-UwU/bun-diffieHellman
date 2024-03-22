# Minimal repro of https://github.com/oven-sh/bun/issues/9569

## Setup

```
bun i
```

- With `bun run dev`, it works as normal.

- Running the server after building works as well.

    ```
    NITRO_PRESET="bun" bun run build
    bun run .output/server/index.mjs
    ```

- With `bun run --bun dev`

    ```
    ERROR  [worker reload] [worker init] 1 | (function (entry, fetcher)
        ^
    SyntaxError: Export named 'diffieHellman' not found in module 'crypto'.


    ^
    SyntaxError: Export named 'diffieHellman' not found in module 'crypto'.
    
    at #onError (node:worker_threads:168:11)
    ```