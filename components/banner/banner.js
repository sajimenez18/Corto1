export function banner(){
    let div = document.createElement('div');
    div.className = "div-banner";

    let span = document.createElement('span');
    span.textContent = "Geeta.";
    div.appendChild(span);

    let divBoton = document.createElement('div');
    divBoton.className = "div-boton";
    
    let aBoton = document.createElement('a');
    aBoton.href = 'pages/login/login.html';
    aBoton.textContent = "SHOP NOW";

    divBoton.appendChild(aBoton);

    div.appendChild(divBoton);

    return div;
}