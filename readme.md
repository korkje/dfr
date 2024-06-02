# dfr [![JSR](https://jsr.io/badges/@korkje/dfr)](https://jsr.io/@korkje/dfr)

Creates a promise and returns it along with resolve and reject functions.

```ts
import dfr from "jsr:@korkje/dfr";

const { promise, resolve, reject } = dfr<string>();

setTimeout(() => resolve("hello"), 1000);

console.log(await promise); // "hello"
```
