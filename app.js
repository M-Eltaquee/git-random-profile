const profiles = new Profiles
const ui = new UI


const nextBtn = document.getElementById("next");

// add Event Listner
nextBtn.addEventListener("click", showProfile)

//functions 

function showProfile(e) {
  profiles.getProfile()
    .then(respo => {
      seka = rotate(respo.results).next().val
      ui.uiProfile(seka)
    })
  e.preventDefault()
}

// rotate function
function rotate(arr) {
  let indx = 0;
  return {
    next: function () {
      return indx < arr.length ?
        { val: arr[indx], done: false } :
        { done: true }
    }
  }
}
