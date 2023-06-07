const url = "https://dummyjson.com/users"


function getAllUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => {

        userList = document.querySelector("#user-list")
        userList.innerHTML = ""

        data.users.forEach((user) => {
            const divUser = document.createElement("div")
            divUser.className = "user"
    
            divUser.innerHTML = `
            <img src = "${user.image}" alt="user picture">
            <p class ="nome">${user.firstName} ${user.maidenName} ${user.lastName}</p>
            <span>${user.email}</span>
            `
    
            userList.appendChild(divUser)   
        });
    })
    .catch((error) => {
        console.error('Erro ao obter os usuários', error)
    })

    
}
getAllUsers()


const searchTerm = document.querySelector('#input-search')

















