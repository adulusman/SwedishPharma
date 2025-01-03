const scriptURL = 'https://script.google.com/macros/s/AKfycbyIIqbLMt2bciNOZTPR5swVSQgSbkgHnIEU4IkVCl5er9KUrerZDNL77a0yEYsqbTFg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {

    e.preventDefault()

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! Form is submitted"))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})