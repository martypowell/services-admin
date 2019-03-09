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

export { fetchServices };
