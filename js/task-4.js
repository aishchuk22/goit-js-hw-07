const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
    event.preventDefault();

    const email = form.elements.email.value;
    const password = form.elements.password.value;
    
    if (email === "" || password === "") {
        return alert('All form fields must be filled in');
    };

    const result = {
        email: email,
        password: password,
    };

    console.log(result);
    form.reset()
});
