import { assert } from "@std/assert";
import dfr from "../lib/dfr.ts";

Deno.test("dfr", async () => {
    const { promise, resolve, reject } = dfr<number>();

    assert(promise instanceof Promise);
    assert(typeof resolve === "function");
    assert(typeof reject === "function");
    resolve(42);
    assert(await promise === 42);
});
