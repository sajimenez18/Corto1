import {banner2} from "../../components/bannerlogin/bannerLogin.js"

export function login(){
    let login = document.createElement('div');
    login.className = "login";

    login.appendChild(banner2())
    return login;
}

document.body.appendChild(login());
