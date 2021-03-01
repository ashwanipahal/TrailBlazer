export const fetchMapData = (param) => {
    // `axios` function returns promise, you can use any ajax lib, which can
    // return promise, or wrap in promise ajax call
    return fetch(`/trailblazer-webservice/api/findSeat?id=${param}`)
    .then((response) => {
       return response.json().then(data=>{
            return data;
        })
    });
  };
  