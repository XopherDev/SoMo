const form = document.querySelector('#contactForm form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the default form submission behavior

  const useName = document.querySelector('#name').value;
  const useEmail = document.querySelector('#email').value;
  const useMessage = document.querySelector('#message').value;

  const url = `/apis/savecontact?name=${encodeURIComponent(useName)}&email=${encodeURIComponent(useEmail)}&message=${encodeURIComponent(useMessage)}`;

  
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      // handle the response here
      console.log(response.message);
      document.getElementById('contactForm').innerHTML = `<p style=\"font-size:40px;\">${response.message}</p><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br>`;
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      // handle the error here
      console.log('Error:', xhr.status);
    }
  };
  xhr.open('GET', url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send();

});




