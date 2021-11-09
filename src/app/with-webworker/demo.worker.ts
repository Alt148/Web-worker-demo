/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {

  const fib = (num): number => {

    let result = 0;
    if (num < 2) {
      result = num;
    } else {
      result = fib(num - 1) + fib(num - 2);
    }

    return result;
  };

  postMessage(fib(data));
  close();

});
