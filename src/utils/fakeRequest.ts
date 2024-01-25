import { FormState } from '../types';

export function fakeRequest(data: FormState) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;

      if (isSuccess) {
        console.log('data: ', data);
        resolve('The request has been successfully processed');
      } else {
        reject('An error has occurred');
      }
    }, 1000);
  });
}
