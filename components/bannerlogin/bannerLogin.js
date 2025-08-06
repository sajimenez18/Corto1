export function banner2(){
    let div = document.createElement('div');
    div.className = "div-banner2";

    let titulo = document.createElement('h1');
    titulo.textContent = "Geeta.";
    div.appendChild(titulo);

    let subtitulo = document.createElement('h3');
    subtitulo.textContent = "Create your fashion in your own way";
    div.appendChild(subtitulo);

    let descripcion = document.createElement('p');
    descripcion.textContent = "Each men and women has their own style, Geeta help you to create your unique style.";
    descripcion.className = "descrip";
    div.appendChild(descripcion);

    let logBoton = document.createElement('div');
    logBoton.textContent = "LOG IN";
    logBoton.className = "log-boton";
    div.appendChild(logBoton);

    let option = document.createElement('p');
    option.textContent = "OR";
    option.className = "option";
    div.appendChild(option);

    let registerBoton = document.createElement('div');
    registerBoton.textContent = "REGISTER";
    registerBoton.className = "reg-boton";
    div.appendChild(registerBoton);


    return div
}
