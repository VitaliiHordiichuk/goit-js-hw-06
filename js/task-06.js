const nameInput = document.querySelector('#validation-input');
console.log(nameInput.getAttribute('data-length'));
nameInput.addEventListener('blur', event => {
     if (event.target.value.length == nameInput.getAttribute('data-length')) {
          nameInput.classList.add('valid');
          if (nameInput.classList.contains('invalid')) {
               nameInput.classList.remove('invalid');
          }
     } else {
          if (nameInput.classList.contains('valid')) {
               nameInput.classList.remove('valid');
          }
          nameInput.classList.add('invalid');
     }
});
