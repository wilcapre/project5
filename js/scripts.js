
/* Treehouse FSJS Techdegree
 * Project 5 - Public API Requests
 This project is to get random employee information in the directorty.
 * app.js */

//console.log('inscript');
const modalList = document.createElement('div')
modalList.className = 'modal-container';
modalList.style.display = 'none';
//modalList.style.display = '';
const script = document.getElementsByTagName('script')
document.body.insertBefore(modalList, script[0])
//append div to modalList 
//const modal-close-btn = document.querySelector('div')
// $('button').click(function() {
//   $('modalList').append('div');
// });

// fetching data from url.
fetch('https://randomuser.me/api?results=12&nat=us')
  .then(response => response.json()) 
  .then(data => fetchUsers(data.results)); 
  
// create 12 users
function fetchUsers(data) {
  let galleryOfUsers = []
  for (let i = 0; i < data.length; i++) {
    
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
    const userModal = $(`<div class="modal-container" style="display:none">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
            <h3 id="name" class="modal-name cap">name</h3>
            <p class="modal-text">email</p>
            <p class="modal-text cap">city</p>
            <hr>
            <p class="modal-text">(555) 555-5555</p>
            <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
            <p class="modal-text">Birthday: 10/21/2015</p>
        </div>
    </div>
</div>`);
// userModal.style.display = 'none'
    users.append(userModal);
  $(users).on('click', `#${data[i].login.uuid}`,function (){
 console.log('users');
    });
//Html for the gallery modul of the 12 users

  $('#gallery').append(galleryOfUsers);
  
  //let modalMarkup;
  
  $('.card').on('click',function(event){
    //$('.card').show();
//     let div = `<div class="modal-container">
//     <div class="modal">
//         <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
//         <div class="modal-info-container">
//             <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
//             <h3 id="name" class="modal-name cap">name</h3>
//             <p class="modal-text">email</p>
//             <p class="modal-text cap">city</p>
//             <hr>
//             <p class="modal-text">(555) 555-5555</p>
//             <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
//             <p class="modal-text">Birthday: 10/21/2015</p>
//         </div>
//     </div>
// </div>`;

    // let currentIndex = $('.card').index(this);
    // $(event.target).append(div);
    // card.style.display = 'none';
    // console.log(typeof data[currentIndex]);
    // //modalMarkup(data[currentIndex]);

  });
  } 
}

// fetch('https://randomuser.me/api?inc=image,name,location,email,cell,birthday,address')
//   .then(response => response.json()) 
//   .then(data => fetchDirectory(data.results)); 

//fetch directory

function fetchDirectory(info) { 
// format date of birth https://www.w3schools.com/jsref/jsref_substr.asp
  const dob = info.dob.date;
  dob.split("\\-")
  let month = dob.substr(5, 2);
  let day = dob.substr(8, 2);
  let year= dob.substr(2, 2);

//let window = ""
  //window += `<div class=“modal-container”>`

//Html to show directory of users
`
<div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    <div class="modal-info-container">
        <img class="modal-img" src="${data[i].picture.large}" alt="profile picture">
        <h3 id="name" class="modal-name cap">${data[i].name.first} ${data[i].name.last}</h3>
        <p class="modal-text">${data[i].email}</p>
        <p class="modal-text cap">${data[i].location.city}</p>
        <hr>
        <p class="modal-text">${data[i].cell}</p>
        <p class="modal-text cap">${data[i].location.street} ${data[i].location.city} ${data[i].location.state} ${data[i].location.postcode}</p>
        <p class="modal-text">Birthday:${month}/${day}/${year}</p>
    </div>
</div>

 `; 

  //document.querySelector('div').innerHTML += window;

  $('.modal').on('click', function(){
    $('.modal').remove();
    let thisIndex = $('.modal').index(this);
    modalMarkup(data[thisIndex]);
  });
  }
// close window
$('#modal-close-btn').on('click', function (){
   $('.modal-container').remove();
  })


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
