# dfr

Creates a promise and extracts its resolve and reject functions.

```ts
import dfr from "https://deno.land/x/dfr/mod.ts";

const { promise, resolve, reject } = dfr<string>();

setTimeout(() => resolve("hello"), 1000);

console.log(await promise); // "hello"
```
