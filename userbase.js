var cont = document.querySelector(".container")
// fetches user list from server
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data)
// Fetches user list from server and attaches it to html.
function data(user){
    var users;
    for(let i = 0; i<user.length; i++){
        users = user[i]
        tmp = `

                  <button class="btn-danger userbutton" id="${i}" onclick="handleUserClick(event)" style="width: 200px; height:50px; border-radius: 3px; border: none;">${users.name}</button>
            `
             cont.innerHTML += tmp
            localStorage.setItem('objarr', users.name)
    }
}
// Handles click on specific user and saves its Id in Local Storage. Redirects to user page
function handleUserClick(e){
   var userId = e.target.getAttribute("id")
   localStorage.setItem("usersID", userId)
   window.location.href = "user.html"
}











