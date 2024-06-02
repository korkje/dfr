/**
 * Creates a promise and returns it along with resolve and reject functions.
 */
export const dfr = <Value = void, Error = void>(): {
    promise: Promise<Value>;
    resolve: (value: Value) => void;
    reject: (error: Error) => void;
} => {
    let resolve!: (value: Value) => void;
    let reject!: (error: Error) => void;

    const promise = new Promise<Value>((_resolve, _reject) => {
        resolve = _resolve;
        reject = _reject;
    });

    return { promise, resolve, reject };
};

export default dfr;
