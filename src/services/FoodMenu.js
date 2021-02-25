export function fetchMenu() {
  // `axios` function returns promise, you can use any ajax lib, which can
  // return promise, or wrap in promise ajax call
  return fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
}
