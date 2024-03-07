import router from "@/router";
import {DatosPersonales} from "@/api/provides/usuario.services";

export const CREDENCIALES = "Credenciales"
export const BASEURL = "http://localhost:7105/"

export const verificarAcceso =  () => {
    if(localStorage.getItem("Credenciales") == null){
        router.push("/");
    }
}