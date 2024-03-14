<script setup>
/****************************************             IMPORT             ***********************************************/
import router from "@/router/index.js";
import {DatosPersonales} from "@/api/provides/usuario.services.js";
import {ref} from "vue";
import AlertPassword from "@/components/alertPassword.vue";

/**************************************             VARIABLES             **********************************************/
const correo = ref("")
const contrasena = ref("")
const alerta = ref(false)
const password = ref('password');

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

const passwordView = () =>{
    if (password.value === 'password'){
        password.value = 'text'
    }else{
        password.value='password'
    }
}

const blur = (event, value) =>{
    if (value.trim() === '') {
        event.target.classList.add('empty');
    } else {
        event.target.classList.remove('empty');
    }
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
                    <label class="form__label" for="correo">Correo electrónico</label>
                    <input v-model="correo" @blur="blur($event, correo)" class="form__input form__input-correo" type="text" name="correo" placeholder="Correo electrónico">
                </div>
                <div class="form__box">
                    <label class="form__label d-flex align-items-center gap-2" for="contrasena">
                        Contraseña
                    </label>
                    <div class="input__pass d-flex">
                        <input v-model="contrasena" @blur="blur($event, contrasena)" class="form__input form__input-password" :type="password" name="contrasena"
                               placeholder="Contraseña">
                        <img class="eyesPass" :src="password == 'password' ? 'https://res.cloudinary.com/dnbwjuwvx/image/upload/v1710405604/Icons/eyesCloses.svg' : 'https://res.cloudinary.com/dnbwjuwvx/image/upload/v1710405604/Icons/eyesOpen.svg'" role="button" @click="passwordView">
                    </div>
                </div>
                <button class="button__iniciar">iniciar sesión</button>
            </form>
        </div>
        <div class="contenedor__links d-flex flex-column justify-content-center align-items-center">
            <p>¿No tienes cuenta? <span class="links__pag" @click="irResgistro()">Regístrate</span></p>
            <p>¿Olvidaste tu contraseña? <span class="links__pag">Recupéra aquí</span></p>
        </div>
    </div>
</template>

<style scoped>
.empty {
    border: .5px solid #ff5f5f !important;
    //background-color: #FFCCCC;
}

.form__input-password{
    padding-right: 40px;
}

.eyesPass{
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    bottom: 10px;
}
.input__pass{
    position: relative;
}

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