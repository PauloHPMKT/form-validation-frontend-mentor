const form = document.querySelector('#formCadastro')

form.onsubmit = function(e) {
    e.preventDefault()

    let temErro = false

    let inputFirstName = document.forms['formCadastro']['name']

    if (!inputFirstName.value) {
        temErro = true
        inputFirstName.classList.add('inputError')
        inputFirstName.placeholder = ''
        const span = inputFirstName.nextSibling.nextSibling
        span.classList.add('error')
        span.innerText = 'First name cannot be empty'
    } else {
        inputFirstName.classList.remove('inputError')
        const span = inputFirstName.nextSibling.nextSibling
        span.classList.remove('error')
        span.innerText = ''
    }


    let inputLastName = document.forms['formCadastro']['lastName']

    if (!inputLastName.value) {
        temErro = true
        inputLastName.classList.add('inputError')
        inputLastName.placeholder = ''
        const span = inputLastName.nextSibling.nextSibling
        span.classList.add('error')
        span.innerText = 'Last name cannot be empty'
    } else {
        inputLastName.classList.remove('inputError')
        const span = inputLastName.nextSibling.nextSibling
        span.classList.remove('error')
        span.innerText = ''
    }


    let inputEmail = document.forms['formCadastro']['email']

    if (!inputEmail.value) {
        temErro = true
        inputEmail.classList.add('inputError')
        inputEmail.placeholder = 'exemplo@exemplo.com'

        const span = inputEmail.nextSibling.nextSibling
        span.classList.add('error')
        span.innerText = 'E-mail cannot be empty'
    } else {
        inputEmail.classList.remove('inputError')
        const span = inputEmail.nextSibling.nextSibling
        span.classList.remove('error')
        span.innerText = ''
    }


    let inputPassword = document.forms['formCadastro']['password']

    if (!inputPassword.value) {
        temErro = true
        inputPassword.classList.add('inputError')
        inputPassword.placeholder = ''
        const span = inputPassword.nextSibling.nextSibling
        span.classList.add('error')
        span.innerText = 'Password cannot be empty'
    } else {
        inputPassword.classList.remove('inputError')
        inputPassword.placeholder = ''
        const span = inputPassword.nextSibling.nextSibling
        span.classList.remove('error')
        span.innerText = ''
    }

    if (!temErro) {
        form.submit()

    }

}