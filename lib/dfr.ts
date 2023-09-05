export const dfr = <Value = void, Error = void>() => {
    let resolve!: (value: Value) => void;
    let reject!: (error: Error) => void;

    const promise = new Promise<Value>((_resolve, _reject) => {
        resolve = _resolve;
        reject = _reject;
    });

    return { promise, resolve, reject };
};

export default dfr;
