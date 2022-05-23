var cont = document.querySelector(".container2")
// gets user Id from the local storage. the user id was saved in the local storage when user button was clicked on the home page.
var usersId = localStorage.getItem("usersID")
// fetches specific user from server by its id.
fetch(`https://jsonplaceholder.typicode.com/users/${Number(usersId)+1}`)
.then(res => res.json())
.then(data)
// integrates user data into html
function data(user){
    let tmp = `
<div class="card" style="width: 18rem;">
<div class="card-body">
<h1>${user.name}</h1>
<h4>Username</h4>
<p>${user.username}</p>
<h4>Email</h4>
<p>${user.email}</p>
<h4>User Address</h4>
<p>Street:${user.address.street}</p>
<p>Suite:${user.address.suite}</p>
<p>City:${user.address.city}</p>
<p>ZipCode:${user.address.zipcode}</p>
<h4>Phone</h4>
<p>${user.phone}</p>
<h4>Website</h4>
<p>${user.website}</p>
<h4>Company</h4>
<p>${user.company.name}</p>
<p>${user.company.catchPhrase}</p>
<p>${user.company.bs}</p>
    </div>
  </div>
    `
    cont.innerHTML = tmp
}

function userPosts(){
  window.location.href = "userposts.html"
}

