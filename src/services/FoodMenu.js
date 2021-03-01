export function fetchMenu() {
  return fetch(`/trailblazer-webservice/api/getFoodMenuImage`)
  .then((response) => {
    return response.text();
  }).catch(e=>{
    console.log("error>>>",e);
  });
}
