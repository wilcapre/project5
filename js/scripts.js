
/* Treehouse FSJS Techdegree
 * Project 5 - Public API Requests
 This project is to get random employee information in the directorty.
 * app.js */

console.log('inscript');

// fetching data from url.
fetch('https://randomuser.me/api/')
  .then(response => response.json()) 
  .then(data => getUsers(data.result)); 
  



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