type Input<I, R> = (input: I) => R;
type Callback<R> = (error?: Error, result?: R) => void;

function serviceRequest<I, R>(fn: Input<I, R>) {
  return async (call: any, callback: Callback<R>) => {
    var obj = call.request;
    delete obj['req'];

    try {
      const result = await fn(call.request);

      callback(null, result);
    } catch (error) {
      callback(error);
    }
  };
}

export { serviceRequest };
