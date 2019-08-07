
/* Treehouse FSJS Techdegree
 * Project 5 - Public API Requests
 This project is to get random employee information in the directorty.
 * app.js */

console.log('inscript');

// fetching data from url.
fetch('https://randomuser.me/api/')
  .then(response => response.json()) 
  .then(data => fetchUsers(data.result)); 
  
// create 12 users
function fetchUsers(data) {
  const galleryOfUsers = ""
  var i;
  for (i = 0; i < data.length; i++) {
    galleryOfUsers += 
`
 <div class="card">
     <div class="card-img-container">
       <img class="card-img" src="${data[i].picture.large}" alt="profile picture">
      </div>
      <div class="card-info-container">
       <h3 id="name" class="card-name cap">${data[i].name.first} ${data[i].name.last}</h3>
       <p class="card-text">${data[i].email}</p>
       <p class="card-text cap">${data[i].location.city}</p>
     </div>
 </div>
 `;
document.querySelector('#gallery').innerHTML = galleryOfUsers;

}


// var request = new HMLHttRequest();
// request.data = function () {
    
// };
// request.open('GET', 'https://randomuser.me/api/');
// request.send();
const gallery = $('#gallery');
for (var i=0; i< 12; i+=1){
   gallery.append(i);

    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
          console.log(data);
          FileList = data.result;
        }
      });
}


document.getElementById('#gallery');