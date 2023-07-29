// JavaScript to be included in both Signup and Profile pages
document.addEventListener("DOMContentLoaded", function () {
    // Check if the user is logged in (access token present in local storage)
    const userDetails = JSON.parse(localStorage.getItem("user"));
  
    // If the user is logged in and tries to access the Signup page, redirect to Profile page
    if (userDetails && userDetails.accessToken && window.location.pathname.includes("signup.html")) {
      window.location.href = "profile.html";
    }
  
    // If the user is not logged in and tries to access the Profile page, redirect to Signup page
    if (!userDetails && window.location.pathname.includes("profile.html")) {
      window.location.href = "signup.html";
    }
  });
  