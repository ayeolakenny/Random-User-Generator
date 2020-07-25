let username = document.querySelector("#username"),
name = document.querySelector("#fullname"),
email = document.querySelector("#email"),
img = document.querySelector("#avatar"),
city = document.querySelector("#city"),
btn = document.querySelector("#btn"),
url = "https://randomuser.me/api/";

btn.addEventListener('click', handleRequest);

function handleRequest (){
  fetch(url)
  .then(hanldleError)
  .then(parseJson)
  .then(updateProfile)
  .catch(printError)
}

function hanldleError (response){
  if(!response.ok){
    throw Error(response.status);
  }
  return response
}

function parseJson (response){
  return response.json()
  .then(function(data){
    return data.results[0];
  })
}

function updateProfile (data){
  img.src = data.picture.medium;
  name.textContent = `${data.name.first} ${data.name.last}`;
  username.textContent = data.login.username;
  email.textContent = data.email;
  city.textContent = data.location.city;
}

function printError (error){
  console.log(error);
}