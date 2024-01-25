export function fakeRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;

      if (isSuccess) {
        resolve('The request has been successfully processed');
      } else {
        reject('An error has occurred');
      }
    }, 1000);
  });
}
