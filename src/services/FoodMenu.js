export function fetchMenu() {
  // `axios` function returns promise, you can use any ajax lib, which can
  // return promise, or wrap in promise ajax call
  return fetch('/trailblazer-webservice/api/getFoodMenuImage').then((response) => response.json());
}
