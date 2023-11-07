var dataInformation = [];
if (localStorage.getItem('mintinfo')) {
    dataInformation = JSON.parse(localStorage.getItem('mintinfo'));
}
function showSignup() {
    document.getElementById('signup').style.display = 'flex';
    document.getElementById('login').style.display = 'none';
    document.getElementsByClassName('signup')[0].style.backgroundColor = 'white';
    document.getElementsByClassName('login')[0].style.backgroundColor = 'rgb(184, 184, 184)';
    document.getElementsByClassName('signup')[0].style.borderBottom = '1px solid white';
    document.getElementsByClassName('login')[0].style.borderBottom = '1px solid';
    document.forms[1].reset();
}

function showLogin() {
    document.getElementById('signup').style.display = 'none';
    document.getElementById('login').style.display = 'flex';
    document.getElementsByClassName('signup')[0].style.backgroundColor = 'rgb(184, 184, 184)';
    document.getElementsByClassName('login')[0].style.backgroundColor = 'white';
    document.getElementsByClassName('signup')[0].style.borderBottom = '1px solid';
    document.getElementsByClassName('login')[0].style.borderBottom = '1px solid white';
    document.forms[0].reset();
}
function validate() {
    let email = document.getElementById('email').value;
    let confemaill = document.getElementById('confemail').value;
    let contry = document.getElementById('contry').value;
    let zipcode = document.getElementById('zipcode').value;
    let pass = document.getElementById('pass').value;
    let confpas = document.getElementById('confpass').value;
    let terms = document.getElementById('termsandcond').checked;

    if (email == '' || confemaill == '' || contry == '' || zipcode == '' || pass == '' || confpas == '') {
        return;
    }
    if (email != confemaill) {
        confemail.setCustomValidity("Emails Don't Match");
        setTimeout(() => {
            confemail.setCustomValidity("");
        }, 1000);
        return;
    } else {
        confpass.setCustomValidity('');
    }
    if (pass != confpas) {
        confpass.setCustomValidity("Passwords Don't Match");
        setTimeout(() => {
            confpass.setCustomValidity("");
        }, 1000);
        return;
    } else {
        confpass.setCustomValidity('');
    }

    if (!terms) {
        return;
    }
    let information = {
        email: email,
        country: contry,
        zipcode: zipcode,
        password: pass
    }
    alert('Form is successfully submited');
    if (localStorage.getItem('mintinfo')) {
        dataInformation = JSON.parse(localStorage.getItem('mintinfo'));
    }
    dataInformation[dataInformation.length] = information;
    localStorage.setItem('mintinfo', JSON.stringify(dataInformation));
    console.log('hii');
    setTimeout(() => {
        document.forms[0].reset();
    }, 1);
}

function login() {
    let email = document.getElementById('loginemail').value;
    let passwordd = document.getElementById('loginpass').value;
    if (email == '' || passwordd == '') {
        return;
    }
    for (let i = 0; i < dataInformation.length; i++) {
        if (email == dataInformation[i].email && passwordd == dataInformation[i].password) {
            alert('Sign in Successfully');
            setTimeout(() => {
                document.forms[1].reset();
            }, 1);
            return;
        }
    }
    alert('email or password is not correct');
}