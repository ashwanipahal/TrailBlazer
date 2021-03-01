export const fetchContacts = (param) => {
  // `axios` function returns promise, you can use any ajax lib, which can
  // return promise, or wrap in promise ajax call
  return fetch(`/trailblazer-webservice/api/getContactInfo?id=${param}`)
  .then((response) => {
     return response.json().then(data=>{
          return data;
      })
  });
};
