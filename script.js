const userContainer = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

// Function to fetch and display users
function fetchUsers() {
  userContainer.innerHTML = "<p>Loading...</p>";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then(users => {
      userContainer.innerHTML = ""; // Clear container
      users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");

        userCard.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        
        userContainer.appendChild(userCard);
      });
    })
    .catch(error => {
      userContainer.innerHTML = `<p style="color:red;">Error fetching data: ${error.message}</p>`;
    });
}

// Reload button functionality
reloadBtn.addEventListener("click", fetchUsers);

// Fetch users on page load
fetchUsers();
