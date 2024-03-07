import Swal from 'sweetalert2';
export const NotificacionExito= {
    exitoso: async (texto = "Exito al realizar la operación") => {
        Swal.fire({
            background: '#006287',
            position: 'center',
            icon: 'success',
            iconColor: '#ffffff',
            showConfirmButton: false,
            timer: 1500,
            html: `<h1 style="color: #ffffff; font-weight: bold">${texto}</h1>`
        })
    },
}