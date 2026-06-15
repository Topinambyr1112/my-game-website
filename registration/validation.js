document.getElementById("registration").addEventListener("submit", function(event) {
    
    event.preventDefault();

    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;

    if (name === "") {
        alert("Введите имя");
        return;
    }

     if(surname === "") {
        alert("Введите фамилию");
        return;
    }

    if (password.length < 6) {
        alert("Пароль должен быть длиннее 6 символов");
        return;
    }

    if (email === "") {
        alert("Введите email");
        return;
    }

    alert("Форма отправлена");

     this.reset();
});