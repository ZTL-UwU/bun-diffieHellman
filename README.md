# Minimal repro of https://github.com/oven-sh/bun/issues/9569

## Setup

```
bun i
```

- With `bun run dev`, it works as normal.

- With `bun run --bun dev`

    ```
    ERROR  [worker reload] [worker init] 1 | (function (entry, fetcher)
        ^
    SyntaxError: Export named 'diffieHellman' not found in module 'crypto'.


    ^
    SyntaxError: Export named 'diffieHellman' not found in module 'crypto'.
    
    at #onError (node:worker_threads:168:11)
    ```