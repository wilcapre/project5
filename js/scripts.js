
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
    

    }
 
 
 
 
 
 
 <div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">first last</h3>
                        <p class="card-text">email</p>
                        <p class="card-text cap">city, state</p>
                    </div>
                </div>
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