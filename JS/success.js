// JavaScript to display messages
function displayMessage(message) {
    const messageBox = document.getElementById("messageBox");
    messageBox.innerText = message;
  
    // Automatically clear the message after a few seconds
    setTimeout(() => {
      messageBox.innerText = "";
    }, 5000); // 5 seconds
  }
  