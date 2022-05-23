var cont = document.querySelector(".container")
// gets user Id from the local storage. the user id was saved in the local storage when user button was clicked on the home page.
var userId = localStorage.getItem('usersID')
// fetches specific posts from server by user Id.
fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
.then(res => res.json())
.then(data)
// integrates user data into html
function data(user){
for(let i of user){
    let tmp = `
<div class="card text-center">

  <div class="card-body">
    <h5 class="card-title">${i.title}</h5>
    <p class="card-text">${i.body}</p>
  </div>

</div>`
cont.innerHTML += tmp
}
}
