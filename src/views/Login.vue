<script setup>
/****************************************             IMPORT             ***********************************************/
import router from "@/router/index.js";
import {DatosPersonales} from "@/api/provides/usuario.services.js";
import {ref} from "vue";

/**************************************             VARIABLES             **********************************************/
const correo = ref("")
const contrasena = ref("")
const alerta = ref(false)

/*************************************             ON MOUNTED             **********************************************/

/****************************************             WATCH              ***********************************************/

/****************************************             METODOS             **********************************************/
const agregarUsuario = async () => {
    const val = await DatosPersonales.loginUser(correo.value, contrasena.value);

    if(val == 200){
        alerta.value = false;
        router.push("/Home")
    } else{
        alerta.value = true;
    }
}
const irResgistro = () => {
    router.push('/Registro')
}
</script>

<template>
    <div class="contenedor d-flex flex-column justify-content-center align-items-center">
        <div class="contenedor__box d-flex">
            <div class="box__title d-flex flex-column justify-content-center align-items-center">
                <h1 class="title__h1"><b>Revista App</b></h1>
                <img src="../assets/icons/book.png">
            </div>
            <form @submit.prevent="agregarUsuario" class="box__form d-flex flex-column justify-content-center align-items-center">
                <div class="alerta d-flex align-items-center" v-if="alerta">
                    <img src="../assets/icons/error.png">
                    <h5>Nombre de usuario y/o contraseña incorrectos</h5>
                </div>
                <div class="form__box">
                    <label class="form__label" for="correo">Correo electronico</label>
                    <input v-model="correo" class="form__input" type="text" name="correo" placeholder="Correo electronico">
                </div>
                <div class="form__box">
                    <label class="form__label" for="contrasena">Contraseña</label>
                    <input v-model="contrasena" class="form__input" type="password" name="contrasena" placeholder="Contraseña">
                </div>
                <button class="button__iniciar">iniciar sesion</button>
            </form>
        </div>
        <div class="contenedor__links d-flex flex-column justify-content-center align-items-center">
            <p>¿No tienes cuenta? <span class="links__pag" @click="irResgistro()">Registrate</span></p>
            <p>¿Olvidaste tu contraseña? <span class="links__pag">Recupéra aquí</span></p>
        </div>
    </div>
</template>

<style scoped>
p {
    margin: 0;
    font-family: Poppins;
    font-weight: normal;
    font-size: 15px;
    color: var(--color-text_principal);
}

h5{
    margin: 0;
    font-family: Poppins;
    font-weight: normal;
    font-size: 16px;
    color: #D9010C;
}

h1 {
    margin: 0;
    font-family: Poppins;
    font-weight: bold;
    font-size: 32px;
    color: var(--color-principal);
}

.alerta{
    width: 450px;
    height: 40px;
    background-color: #FED0D1;
    border-radius: 5px;
    gap: 10px;
    padding-left: 10px;
}

.contenedor {
    width: 100%;
    height: 100vh;
    background-color: var(--color-background);
    gap: 30px;
}

.contenedor__box {
    width: 850px;
    height: 450px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);

    .box__title {
        width: 320px;
        height: 100%;
        gap: 40px;
    }

    .box__form {
        width: 530px;
        height: 100%;
        gap: 30px;

        .form__box {
            width: 450px;
            height: 80px;

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

            .form__input:focus {
                outline: none;
            }

            .form__input::placeholder {
                font-size: 15px;
                color: rgba(0, 0, 0, 0.2);
            }
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
    }
}

.contenedor__links {
    width: 100%;
    height: 60px;
    gap: 10px;

    .links__pag {
        cursor: pointer;
        color: var(--color-principal);
        text-decoration: underline;
        text-decoration-color: var(--color-principal);;
        text-decoration-thickness: 2px;
    }
}
</style>