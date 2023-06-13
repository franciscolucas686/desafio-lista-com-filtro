let users = [];

const usersElement = document.getElementById("user-list");
const searchElement = document.querySelector('#input-search');






function renderUsers(users) {
  usersElement.innerHTML = "";

  users.forEach((user) => {
    const element = document.createElement("div");
    element.className = "user";

    element.innerHTML = `
      <img src="${user.image}" alt="user picture">
        <p class="nome">${user.firstName} ${user.maidenName} ${user.lastName}</p>
      <span>${user.email}</span>
    `;

    usersElement.appendChild(element);
  });
}

async function getAllUsers() {
    const response =  await fetch("https://dummyjson.com/users")
    
    const data = await response.json()

    const users = data.users

    renderUsers(users)
  }

function filterUser(term) {
    
   

      

        
        
        
        
        
      
      
      
  
  
  
      
  
  

  
}

    
  

function sortUsers(order) {}

window.addEventListener("load", () => {
  getAllUsers();
  filterUser()

});



















