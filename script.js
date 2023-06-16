let initialUsers = [];

const SORT_ORDERS = {
  asc: 'a-z',
  desc: 'z-a'
};

const usersElement = document.getElementById("user-list");
const searchElement = document.getElementById('input-search');
const sortElement = document.getElementById('sort-field');

function clearSearchValue() {
  searchElement.value = '';
}

function clearContainerApp() {
  renderContainerApp('');
}

function renderContainerApp(node) {
  usersElement.innerHTML = node;
}

function renderListUsers(users) {
  clearContainerApp();

  if (!users?.length) {
    renderContainerApp('<p>Nenhum usuário encontrado</p>');
    return;
  }

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

function getFullName(user) {
  return `${user.firstName} ${user.maidenName} ${user.lastName}`;
}

async function getAllUsers() {
  try {
    const response =  await fetch("https://dummyjson.com/users");
    const data = await response.json();
    initialUsers = sortUsers(data.users, SORT_ORDERS.asc);
    renderListUsers(initialUsers);
  } catch (error) {
    console.error('Não foi possível se comunicar com a API.');
  }
}

function filterUserByName(value) {
  const term = value.toLowerCase();

  if (!term) {
    return initialUsers;
  }

  return initialUsers.filter(user => getFullName(user).toLowerCase().startsWith(term));
}

function sortUsers(users, order) {
  if (order === SORT_ORDERS.asc) {
    return users.sort((a, b) => {
      if (a.firstName < b.firstName) return -1;
      if (a.firstName > b.firstName) return 1;
      return 0;
    });
  }

  return users.sort((a, b) => {
    if (a.firstName > b.firstName) return -1;
    if (a.firstName < b.firstName) return 1;
    return 0;
  });
}

searchElement.addEventListener("keyup", (e) => {
  const inputValue = e.target.value;
  const newUsers = filterUserByName(inputValue);
  renderListUsers(newUsers);
});

sortElement.addEventListener("change", (e) => {
  const selectValue = e.target.value;
  const newUsers = sortUsers(initialUsers, selectValue);
  renderListUsers(newUsers);
});

window.addEventListener("load", () => getAllUsers());
