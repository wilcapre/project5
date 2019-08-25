
/* Treehouse FSJS Techdegree
 * Project 5 - Public API Requests
 This project is to get random employee information in the directorty.
 * app.js */

//create an element for div, get a class name and get container for the modal.
const modalList = document.createElement('div')
modalList.className = 'modal-container';
modalList.style.display = 'none';
//getting body part of document with two argument and append div.
const script = document.getElementsByTagName('script')
document.body.insertBefore(modalList, script[0])

// fetching data from url.
fetch('https://randomuser.me/api?results=12&nat=us')
  .then(response => response.json()) 
  .then(data => fetchUsers(data.results)); 
  
// create 12 users
function fetchUsers(data) {
  let galleryOfUsers = []
  for (let i = 0; i < data.length; i++) {
  //Html for the gallery modal of the 12 users
    const users = ($(`
    <div class="card">
        <div class="card-img-container">
          <img class="card-img" src="${data[i].picture.large}" alt="profile picture">
         </div>
         <div class="card-info-container">
          <h3 id="name" class="card-name cap">${data[i].name.first} ${data[i].name.last}</h3>
          <p class="card-text">${data[i].email}</p>
          <p class="card-text cap">${data[i].location.city}</p>
        </div>
    </div>`));
    galleryOfUsers.push(users);

  }
  $('#gallery').append(galleryOfUsers); 
  for (let i=0; i<$('.card').length; i++){
  $('.card').eq(i).on('click', function(event) {
    fetchDirectory(data[i])
  })
} 
}

//fetch directory
function fetchDirectory(data) { 
// format date of birth https://www.w3schools.com/jsref/jsref_substr.asp
//console.log(data);
  const dob = data.dob.date;
  dob.split("\\-")
  let month = dob.substr(5, 2);
  let day = dob.substr(8, 2);
  let year= dob.substr(2, 2);

let window = 
  //window += `<div class=“modal-container”>`

//Html to show directory of users that includes all informations
`
<div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    <div class="modal-info-container">
        <img class="modal-img" src="${data.picture.large}" alt="profile picture">
        <h3 id="name" class="modal-name cap">${data.name.first} ${data.name.last}</h3>
        <p class="modal-text">${data.email}</p>
        <p class="modal-text cap">${data.location.city}</p>
        <hr>
        <p class="modal-text">${data.cell}</p>
        <p class="modal-text cap">${data.location.street}. ${data.location.city} ${data.location.state} ${data.location.postcode}</p>
        <p class="modal-text">Birthday: ${month}/${day}/${year}</p>
    </div>
</div>

 `; 
 $('.modal-container').html(window).show();

 //close up window for when you click and exit out on the user
 $('#modal-close-btn').on('click', function (){
      $('.modal-container').hide();
  })
  }

