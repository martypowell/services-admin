const Login = (username, password) => {
  return fetch("/api/users/authenticate", {
    method: "POST", // or 'PUT'
    body: JSON.stringify({
      username,
      password
    }), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .catch(error => console.error("Error:", error));
};

export { Login };
