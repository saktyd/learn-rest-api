axios
  .get('https://api.github.com/users/saktyd')
  .then(response => console.log(response.data))

  .catch(error => console.log(error));
