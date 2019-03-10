const fetchServices = async callback => {
  fetch("/api/services")
    .then(response => {
      return response
        ? response.json()
        : "Something went wrong getting the response";
    })
    .then(function(services) {
      if (callback && typeof callback === "function") {
        callback(services);
      }
    })
    .catch(console.error);
};

const addService = (service, authorization) => {
  const postData = JSON.stringify(service);

  return fetch("/api/service/0", {
    method: "post",
    headers: new Headers({
      Authorization: `Bearer ${authorization.token}`,
      "Content-Type": "application/json"
    }),
    body: postData
  })
    .then(response => {
      return response
        ? response.json()
        : "Something went wrong getting the response";
    })
    .catch(console.error);
};

export { addService, fetchServices };
