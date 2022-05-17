const profileDiv = document.getElementById("profileDisplay")
const imgDiv = document.getElementById("imageDisplay")
class UI {
  constructor() {

  }

  uiProfile(data) {
    imgDiv.innerHTML = `
    <img src="${data.picture.large}">
    `
    profileDiv.innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">
       ${data.name.title} ${data.name.first} ${data.name.last}
      </li>
      <li class="list-group-item">Age: ${data.dob.age}</li>
      <li class="list-group-item">Location: ${data.location.city}</li>
      <li class="list-group-item">Gender: ${data.gender}</li>
      <li class="list-group-item">Email: ${data.email}</li>
      </ul>
    `
  }
}


