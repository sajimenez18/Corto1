export function bannerAccount (){
    let div = document.createElement('div');
    div.className = "div-contenedor";

    let arrowLeft = document.createElement('img');
    arrowLeft.className = "arrowLeft";
    arrowLeft.src =  "../../assets/icons/arrowLeft.png";
    div.appendChild(arrowLeft);

    let bienvenida = document.createElement('h2');
    bienvenida.textContent = "Welcome Back";
    bienvenida.className = "again";
    div.appendChild(bienvenida);

    let texto = document.createElement('p');
    texto.className = "texto";
    texto.textContent = "Yay! You're back! Thanks for shopping with us. We have excited deals and promotions going on, grab your pick now!";
    div.appendChild(texto);

    let logtext = document.createElement('h2');
    logtext.textContent = "LOG IN";
    logtext.className = "in";
    div.appendChild(logtext);

    let addres = document.createElement('h2');
    addres.textContent = "Email address";
    addres.className = "adress";
    div.appendChild(addres);

    let divEnter = document.createElement('div');
    divEnter.className = "divEnter";
    div.appendChild(divEnter);

    let sobre = document.createElement('img');
    sobre.src = "../../assets/icons/correo.png";
    sobre.className = "sobre";
    divEnter.appendChild(sobre);


    let correo = document.createElement('input');
    correo.placeholder = "hlo@geeta.co";
    correo.className = "hlo";
    divEnter.appendChild(correo);

    let password = document.createElement('h2');
    password.className = "pass";
    password.textContent = "Password";
    div.appendChild(password);

    let divEntrar = document.createElement('div');
    divEntrar.className = "divEntrar";
    div.appendChild(divEntrar);

    let candado = document.createElement('div');
    Image.src = "../../assets/icons/lock.png";
    candado.className = "candado";
    divEntrar.appendChild(candado);

    let textcontra = document.createElement('input');
    textcontra.className = "text-contra";
    textcontra.placeholder = "Enter you password";
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