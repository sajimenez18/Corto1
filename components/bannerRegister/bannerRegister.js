export function bannerRegister (){

    let div = document.createElement('div');
    div.className = "divEspacio";

    let arrowIzq = document.createElement('div');
    arrowLeft.className = "arrowIzq";
    div.appendChild(arrowIzq);


    let bienvenida = document.createElement('h2');
    bienvenida.textContent = "Get's started with Geeta";
    bienvenida.className = "start";
    div.appendChild(bienvenida);

    let texto = document.createElement('p');
    texto.className = "textolog";
    texto.textContent = "Already have an account? Log in";
    div.appendChild(texto);

    let logtext = document.createElement('h2');
    logtext.textContent = "REGISTER";
    logtext.className = "in";
    div.appendChild(logtext);

    let name = document.createElement('h2');
    name.textContent = "Your Name";
    name.className = "name";
    div.appendChild(name);

    let divPrimero = document.createElement('div');
    divPrimero.className = "divPrimero";
    div.appendChild(divPrimero);

    let silueta = document.createElement('div');
    silueta.className = "silueta";
    divPrimero.appendChild(silueta);


    let fullName = document.createElement('span');
    fullName.textContent = "Your Full Name";
    fullName.className = "full-name";
    divPrimero.appendChild(fullName);

    //
    let addres = document.createElement('h2');
    addres.textContent = "Email address";
    addres.className = "adress";
    div.appendChild(addres);

    let divEnter = document.createElement('div');
    divEnter.className = "divEnter";
    div.appendChild(divEnter);

    let sobre = document.createElement('div');
    sobre.className = "sobre";
    divEnter.appendChild(sobre);


    let correo = document.createElement('span');
    correo.textContent = "hlo@geeta.co";
    correo.className = "hlo";
    divEnter.appendChild(correo);

    let error = document.createElement('div');
    error.className = "error";
    divEnter.appendChild(error); 

    let password = document.createElement('h2');
    password.className = "pass";
    password.textContent = "Password";
    div.appendChild(password);

    let divEntrar = document.createElement('div');
    divEntrar.className = "divEntrar";
    div.appendChild(divEntrar);

    let candado = document.createElement('div');
    candado.className = "candado";
    divEntrar.appendChild(candado);

    let textcontra = document.createElement('p');
    textcontra.className = "text-contra";
    textcontra.textContent = "Enter you password";
    divEntrar.appendChild(textcontra);

    //
    let checkboxDiv = document.createElement('div');
    checkboxDiv.className = "checkbox-div";
    div.appendChild(checkboxDiv);

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "remember";
    checkboxDiv.appendChild(checkbox);

    let checkboxLabel = document.createElement('label');
    checkboxLabel.textContent = "Remember me";
    checkboxLabel.className = "me";
    checkboxDiv.appendChild(checkboxLabel);

    let forgotPassword = document.createElement('a');
    forgotPassword.href = "#";
    forgotPassword.className = "forgot-password";
    forgotPassword.textContent = "Forget Password?";
    checkboxDiv.appendChild(forgotPassword);

    let loginButton = document.createElement('button');
    loginButton.className = "login-button";
    loginButton.textContent = "LOG IN";
    div.appendChild(loginButton);

    let conjunto = document.createElement('div');
    conjunto.className = "conjunto"
    div.appendChild(conjunto);
;
    let registerText = document.createElement('p');
    registerText.className = "register-text";
    registerText.textContent = "Not registered yet?";
    conjunto.appendChild(registerText);
    
    let createText = document.createElement('a');
    createText.className = "create-text";
    createText.textContent = "Create an Account";
    conjunto.appendChild(createText);

    return div
}
