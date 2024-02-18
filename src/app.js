const hamburguerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function toggleButton(){
    navList.classList.toggle('show')
}

hamburguerButton.addEventListener('click', toggleButton);


const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.action);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      form.reset();
      alert('Gracias por contactarnos, te responderemos pronto.');
    } else {
      alert('Lo siento, ha ocurrido un error. Inténtalo de nuevo más tarde.');
    }
  };
  xhr.send(formData);
});

