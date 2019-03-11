const getRequestHeaders = token => new Headers({
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
});

const fetchServices = async (authorization, callback) => {
    fetch("/api/services", {
        headers: getRequestHeaders(authorization.token)
    })
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
      headers: getRequestHeaders(authorization.token),
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
