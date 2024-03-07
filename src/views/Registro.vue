<script setup>
/****************************************             IMPORT             ***********************************************/
import router from "@/router/index.js";
import {ref} from "vue";
import {DatosPersonales} from "@/api/provides/usuario.services.js";
import {NotificacionExito} from "@/alertas/alert.js";

/**************************************             VARIABLES             **********************************************/
const nombre = ref("");
const correo = ref("");
const contrasena = ref("");
const pais = ref("");
const afiliacion = ref("");
const validaciones = ref([false, false, false, false, false])
const success = ref(false)

/*************************************             ON MOUNTED             **********************************************/

/****************************************             WATCH              ***********************************************/

/****************************************             METODOS             **********************************************/
const irLogin = () => {
    router.push('/')
}

const validar = (booleano, posicion) =>{
    if (booleano) {
        validaciones.value[posicion] = true;
        success.value = false;
    } else {
        validaciones.value[posicion] = false;
        success.value = true;
    }
}

const agregarUsuario = async () => {
    validar(nombre.value.length == 0, 0)
    validar(correo.value.length == 0, 1)
    validar(contrasena.value.length == 0, 2)
    validar(pais.value.length == 0, 3)
    validar(afiliacion.value.length == 0, 4)

    if (success.value) {
        await DatosPersonales.postUsuario(nombre.value, correo.value, contrasena.value, pais.value, afiliacion.value);
    }
}
</script>

<template>
    <div class="contenedor d-flex flex-column justify-content-center align-items-center">
        <div class="contenedor__box d-flex flex-column justify-content-center align-items-center">
            <div class="box__title">
                <h3 class="title__h3">
                    Registrate gratis
                </h3>
            </div>
            <form @submit.prevent="agregarUsuario()"
                  class="box__form d-flex flex-column justify-content-center align-items-center">
                <div class="form__box">
                    <label class="form__label" for="nombre">Nombre</label>
                    <input v-model="nombre" class="form__input" type="text" name="nombre"
                           placeholder="Nombre de usuario">
                    <span v-if="validaciones[0]" class="alert__campos">Obligatorio rellenar este campo</span>
                </div>
                <div class="form__box">
                    <label class="form__label" for="correo">Correo electronico</label>
                    <input v-model="correo" class="form__input" type="text" name="correo"
                           placeholder="Correo electronico">
                    <span v-if="validaciones[1]" class="alert__campos">Obligatorio rellenar este campo</span>
                </div>
                <div class="form__box">
                    <label class="form__label d-flex align-items-center gap-2" for="contrasena">Contraseña <img
                        class="alerta__n" src="../assets/icons/alert.png" width="18px" height="18px"></label>
                    <input v-model="contrasena" class="form__input" type="password" name="contrasena"
                           placeholder="Contraseña">
                    <span v-if="validaciones[2]" class="alert__campos">Obligatorio rellenar este campo</span>
                </div>
                <div class="form__box">
                    <label class="form__label" for="pais">País</label>
                    <input v-model="pais" class="form__input" type="text" name="pais" placeholder="Pais">
                    <span v-if="validaciones[3]" class="alert__campos">Obligatorio rellenar este campo</span>
                </div>
                <div class="form__box">
                    <label class="form__label" for="afiliacion">Afiliación</label>
                    <input v-model="afiliacion" class="form__input" type="text" name="afiliacion"
                           placeholder="Afiliacion">
                    <span v-if="validaciones[4]" class="alert__campos">Obligatorio rellenar este campo</span>
                </div>
                <button class="button__iniciar">Registrarse</button>
            </form>
        </div>
        <div class="contenedor__links d-flex flex-column justify-content-center align-items-center">
            <p>¿Ya tienes cuenta? <span class="links__pag" @click="irLogin()">iniciar sesion</span></p>
        </div>
    </div>
</template>

<style scoped>

h3 {
    margin: 0;
    font-family: Poppins;
    font-weight: bold;
    font-size: 24px;
    color: rgba(0, 0, 0, 0.6);
}

p {
    margin: 0;
    font-family: Poppins;
    font-weight: normal;
    font-size: 15px;
    color: var(--color-text_principal);
}

.alert__campos {
    font-family: Poppins;
    font-weight: normal;
    font-size: 12px;
    color: red;
}

.contenedor {
    width: 100%;
    height: 100vh;
    background-color: var(--color-background);
    gap: 30px;
}

.contenedor__box {
    width: 500px;
    height: 750px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);



       
}

.box__title {
    width: 450px;
    height: 80px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);


}

.title__h3 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box__form {
    width: 500px;
    height: 650px;
    gap: 30px;


}
.form__box {
    width: 450px;
    height: 80px;

    


}
.button__iniciar {
    width: 450px;
    height: 40px;
    background-color: var(--color-principal);
    font-family: Poppins;
    font-weight: bold;
    font-size: 20px;
    color: white;
    border-radius: 5px;
    border: none;
}

.button__iniciar:hover {
    background-color: #0078FF;
} 
.contenedor__links {
    width: 100%;
    height: 60px;
    gap: 10px;

    
}
.links__pag {
    cursor: pointer;
    color: var(--color-principal);
    text-decoration: underline;
    text-decoration-color: var(--color-principal);;
    text-decoration-thickness: 2px;
}
.form__label {
    width: 100%;
    height: 40px;
    font-family: Poppins;
    font-weight: normal;
    font-size: 18px;
    color: var(--color-text_principal);
}

.form__input {
    width: 100%;
    height: 40px;
    padding-left: 15px;
    border: .5px solid rgba(0, 0, 0, 0.11);
    border-radius: 5px;
    font-size: 17px;
    color: rgba(0, 0, 0, 0.5);
}

.form__input::placeholder {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.2);
}

.form__input:focus {
    outline: none;
}
</style>