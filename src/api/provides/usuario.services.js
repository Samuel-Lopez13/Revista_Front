import {autorization, sinAutorizationJSON, autorizationJSON} from '@/api'
import {BASEURL, CREDENCIALES} from "@/utils/constantes/constantes.js";
import axios from "axios";
import {NotificacionExito} from "@/alertas/alert.js";
import router from "@/router/index.js";

export const DatosPersonales = {

    loginUser: async (correo, contrasena) => {
        try {
            const usuarioJSON = {
                correo: correo,
                contrasena: contrasena,
            };

            const [data, config] = sinAutorizationJSON(usuarioJSON);

            const response = await axios.post(BASEURL + 'Usuario/Login', data, config);

            return response.status
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.log("Error " + error)
            } else {
                //NotificacionError.ErrorWMensaje('Ops!', 'Ocurrió un error con tus credenciales');
            }
        }
    },

    postUsuario: async (nombre, correo, contrasena, pais, afiliacion) => {
        try {
            const usuarioJSON = {
                nombre: nombre,
                correo: correo,
                contrasena: contrasena,
                pais: pais,
                afiliacion: afiliacion
            };

            const [data, config] = sinAutorizationJSON(usuarioJSON);

            const response = await axios.post(BASEURL + 'Usuario/usuario', data, config);

            NotificacionExito.exitoso("El usuario se ha registrado con exito")

            setTimeout(function () {
                router.push("/");
            }, 1500);

        } catch (error) {
            console.log(error)
        }
    },
}