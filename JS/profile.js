document.addEventListener("DOMContentLoaded", () => {
    const profileFirstName = document.querySelector("#profile-firstname");
    const profileLastName = document.querySelector("#profile-lastname");
    const profileEmail = document.querySelector("#profile-email");
  
    // Fetch user data from local storage and display it in the profile page
    const userData = JSON.parse(localStorage.getItem("usersData"));
    if (userData && userData.length > 0) {
      const currentUser = userData[userData.length - 1];
      profileFirstName.textContent = currentUser.firstName;
      profileLastName.textContent = currentUser.lastName;
      profileEmail.textContent = currentUser.email;
    } else {
      // Redirect to signup page if no user data is found
      window.location.href = "../HTML/signup.html";
    }
  });
  
  