async function getAllUsers() {
    const response =  await fetch("https://dummyjson.com/users")
    
    const data = await response.json()

    const users = data.users

    renderUsers(users)
  }


  async function getAllUsers() {
    fetch("https://dummyjson.com/users")
      .then(response => response.json())
      .then(data => {
        users = data.users;
        renderUsers(data.users);
      })
      .catch((error) => {
          console.error('Erro ao obter os usuários', error)
      });
  }




function renderUsers(users){
    usersElement.innerHTML = ""

    users.forEach((user) => {
        const element = document.createElement('div')
        element.className = "user"

        element.innerHTML = `
        <img src = "${user.image}" alt = "user pictture">
        <p class = "nome">${user.firtName} ${user.maidenName} ${user.lastName}</p>
        <span>${user.email}</span>"
        `;

        usersElement.appendChild(element);
        
    });

    return element
}


searchElement.addEventListener('keyup', () => {
    let term = searchElement.value

    

    let listaNomes = Array.from(document.getElementsByClassName('nome'))

    listaNomes.map()


})

