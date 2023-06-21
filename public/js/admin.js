fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(users => {
    const userList = document.getElementById('user-list');

    const renderUsers = (users) => {
      userList.innerHTML = '';

      users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>First Name:</strong> ${user.firstName}</p>
            <p><strong>Last Name:</strong> ${user.lastName}</p>
            <p><strong>ID:</strong> ${user.id}</p>
            <p><strong>Status:</strong> ${user.state}</p>
            <hr>
        `;
        userList.appendChild(userDiv);
      });
    };

    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', () => {
      const searchValue = searchInput.value.toLowerCase();
      const filteredUsers = users.filter(user => user.email.toLowerCase().includes(searchValue));
      renderUsers(filteredUsers);
    });

    const sortSelect = document.getElementById('sort-select');
    sortSelect.addEventListener('change', () => {
      const sortValue = sortSelect.value;
      let sortedUsers = [...users];

      if (sortValue === 'asc') {
        sortedUsers.sort((a, b) => a.email.localeCompare(b.email));
      } else if (sortValue === 'desc') {
        sortedUsers.sort((a, b) => b.email.localeCompare(a.email));
      }

      renderUsers(sortedUsers);
    });

    renderUsers(users);
  })
  .catch(error => console.error('Error:', error ));
