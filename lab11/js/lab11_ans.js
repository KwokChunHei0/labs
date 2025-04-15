function checkUsername() {                        // Declare function
  var username = el.value;                        // Store username in variable
  if (username.length < 5) {                      // If username < 5 characters
    elMsg.className = 'warning';                  // Change class on message
    elMsg.textContent = 'too short...';				// Update message
  } else {                                        // Otherwise
    elMsg.textContent = '';                       // Clear the message
  }
}

function tipUsername() {                          // Declare function
  elMsg.className = 'tip';                        // Change class for message
  elMsg.textContent = 'Username must be at least 5 characters'; // Add message
}

var el = document.getElementById('username');     // Username input
var elMsg = document.getElementById('feedback');  // Element to hold message

var btn = document.getElementById('submit'); //Submit button

// When the username input gains / loses focus call functions above:
el.addEventListener('focus', tipUsername, false); // focus call tipUsername()
el.addEventListener('blur', checkUsername, false);// blur call checkUsername()

var myH1 = document.getElementById('coursecode');
var myH2 = document.getElementById('newacc');

function changeColor() {
myH1.style.color = 'yellow';
myH1.textContent = 'I AM STEVE';
myH2.textContent = '';
}

myH1.addEventListener('click', changeColor, false);