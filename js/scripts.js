
/* Treehouse FSJS Techdegree
 * Project 5 - Public API Requests
 This project is to get random employee information in the directorty.
 * app.js */

//console.log('inscript');

// fetching data from url.
fetch('https://randomuser.me/api?results=12&nat=us')
  .then(response => response.json()) 
  .then(data => fetchUsers(data.results)); 
  
// create 12 users
function fetchUsers(data) {
  let galleryOfUsers = ""
  for (let i = 0; i < data.length; i++) {
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

  $('.card').on('click', function(){
    let thisIndex = $('.card').index(this);
    modalMarkup(data[thisIndex]);
  });
  } 
}

fetch('https://randomuser.me/api?inc=image,name,location,email,cell,birthday,address')
  .then(response => response.json()) 
  .then(data => fetchDirectory(data.results)); 

function fetchDirectory(data) {
  let modalCloseBtn = ""
  for (let i = 0; i < data.length; i++) {
     modalCloseBtn  += 
`
<div class="modal-container">
<div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    <div class="modal-info-container">
        <img class="modal-img" src="${data[i].picture}" alt="profile picture">
        <h3 id="name" class="modal-name cap">${data[i].name}</h3>
        <p class="modal-text">${data[i].email}</p>
        <p class="modal-text cap">${data[i].city}</p>
        <hr>
        <p class="modal-text">${data[i].cell}(555)555-5555</p>
        <p class="modal-text">${data[i].address}123 Portland Ave., Portland, OR 97204</p>
        <p class="modal-text">${data[i].Birthday} 10/21/2015</p>
    </div>
</div>

 `; 
  document.querySelector('#modalCloseBtn').innerHTML = modalCloseBtn;

  $('.modal').on('click', function(){
    let thisIndex = $('.modal').index(this);
    modalMarkup(data[thisIndex]);
  });
  }

}
// var request = new HMLHttRequest();
// request.data = function () {
    
// };
// request.open('GET', 'https://randomuser.me/api/');
// request.send();
// const gallery = $('#gallery');
// for (var i=0; i< 12; i+=1){
//    gallery.append(i);

//     $.ajax({
//         url: 'https://randomuser.me/api/',
//         dataType: 'json',
//         success: function(data) {
//           console.log(data);
//           FileList = data.result;
//         }
//       });
// 
