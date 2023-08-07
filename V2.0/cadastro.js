let cadastros = []

if (localStorage.getItem('usur')) {
    cadastros = JSON.parse(localStorage.getItem('usur'))
}

function cadastrar() {
    let guarda_nome = document.getElementById('nome').value
    let guarda_senha = document.getElementById('senha').value
    let guarda_CPF = document.getElementById('CPF').value
    let guarda_email = document.getElementById('email').value
    let guarda_telefone = document.getElementById('telefone').value
    let data = new Date();
    let usuario = {
        nome: guarda_nome,
        senha: guarda_senha,
        cpf: guarda_CPF,
        email: guarda_email,
        telefone: guarda_telefone,
        dataCriacao: `${data.getUTCDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    }

    if (guarda_nome.length > 2 &&
        guarda_senha.length > 5 &&
        guarda_CPF.length > 13 &&
        guarda_email.length > 5 &&
        guarda_telefone.length > 10 &&
        guarda_nome.trim().length != 0 &&
        guarda_CPF.trim().length != 0 &&
        guarda_email.trim().length != 0 &&
        guarda_telefone.trim().length != 0 &&
        guarda_senha.trim().length != 0
    ) {
        if (procura_usuario(usuario.email) == -1) {
            cadastros.push(usuario)
            localStorage.setItem('usur', JSON.stringify(cadastros))
            alert('Usuário Cadastrado!')
            location.assign('login.html')
        } else {
            alert("Usuário já existe!")
        }
    }

    if (guarda_nome.length <= 2 ||
        guarda_nome.trim().length == 0) {
        window.document.getElementById('alerta_nome').innerHTML = `Mínimo de três caracteres`
        setTimeout(() => {
            document.getElementById('alerta_nome').innerHTML = ``
        }, 3000)
    }

    if (guarda_CPF.length < 13 ||
        guarda_CPF.trim().length == 0) {
        document.getElementById('alerta_CPF').innerHTML = `Mínimo de quartoze caracteres`
        setTimeout(() => {
            window.document.getElementById('alerta_CPF').innerHTML = ``
        }, 3000)
    }

    if (guarda_email.length < 5 ||
        guarda_email.trim().length == 0) {
        document.getElementById('alerta_email').innerHTML = `Digite um email válido`
        setTimeout(() => {
            document.getElementById('alerta_email').innerHTML = ``
        }, 3000)
    }

    if (guarda_senha.length <= 5 ||
        guarda_senha.trim().length == 0) {
        document.getElementById('alerta_senha').innerHTML = `Mínimo de seis caracteres`
        setTimeout(() => {
            document.getElementById('alerta_senha').innerHTML = ``
        }, 3000)
    }

    if (guarda_telefone.length <= 10 ||
        guarda_telefone.trim().length == 0) {
        document.getElementById('alerta_telefone').innerHTML = `Mínimo de onze dígitos`
        setTimeout(() => {
            document.getElementById('alerta_telefone').innerHTML = ``
        }, 3000)
    }
}

let btn_nome = document.getElementById('nome')
let btn_CPF = document.getElementById('CPF')
let btn_email = document.getElementById('email')
let btn_senha = document.getElementById('senha')
let btn_telefone = document.getElementById ('telefone')

btn_nome.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        cadastrar();
    }
})

btn_CPF.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        cadastrar();
    }
})

btn_email.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        cadastrar();
    }
})

btn_senha.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        cadastrar();
    }
})

btn_telefone.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        cadastrar();
    }
})

function procura_usuario(guarda_email) {
    let index = cadastros.findIndex((element) => {
        return element.email == guarda_email
    })
    return index
}

function mascara_cpf() {
    var cpf = document.getElementById('CPF')
    if (cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value += "."
    } else if (cpf.value.length == 11) {
        cpf.value += "-"
    }
}

document.querySelectorAll('input[type="number"]').forEach(input => {
    input.oninput = () => {
        if (input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength);
    };
}
);