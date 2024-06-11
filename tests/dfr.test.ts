import { assertEquals, assertInstanceOf, assertRejects,  } from "@std/assert";
import dfr from "lib/dfr.ts";

Deno.test("dfr", () => {
    const { promise, resolve, reject } = dfr<number>();

    assertInstanceOf(promise, Promise);
    assertEquals(typeof resolve, "function");
    assertEquals(typeof reject, "function");
});

Deno.test("resolve", async () => {
    const { promise, resolve } = dfr<number>();

    resolve(42);

    assertEquals(await promise, 42);
});

Deno.test("reject", () => {
    const { promise, reject } = dfr<number, string>();

    reject("error");

    assertRejects(() => promise, "error");
});
