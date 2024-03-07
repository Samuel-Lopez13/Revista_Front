import axios from 'axios';

const sinAutorizationJSON = (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return [data, config];
}

const autorization = () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("Credenciales")}`
        },
    };

    return config;
}

const autorizationJSON = (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("Credenciales")}`
        },
    };

    return [data, config];
}

// Exporta las funciones de configuración para que puedan ser llamadas desde otros módulos
export { autorization, autorizationJSON, sinAutorizationJSON };