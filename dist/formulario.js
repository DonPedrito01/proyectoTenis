const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const terminos = document.getElementById('terminos');
const terminosError = document.getElementById('terminos-error');

// Expresiones regulares para validar los campos
const expresiones = {
    nombres: /^[a-zA-ZÀ-ÿ\s]{3,30}$/, // Letras y espacios, pueden llevar acentos.
    apellidos: /^[a-zA-ZÀ-ÿ\s]{3,30}$/, 
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 números.
};

// Estado de los campos
const campos = {
    nombres: false,
    apellidos: false,
    correo: false,
    telefono: false
};

// Función para validar cada campo del formulario
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombres":
            validarCampo(expresiones.nombres, e.target, 'nombres');
            break;
        case "apellidos":
            validarCampo(expresiones.apellidos, e.target, 'apellidos');
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
            break;
    }
};

// Función para validar los campos usando expresiones regulares
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-incorrecto');
        document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-correcto');
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo-${campo} .formulario-input-error`).classList.remove('formulario-input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-incorrecto');
        document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-correcto');
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo-${campo} .formulario-input-error`).classList.add('formulario-input-error-activo');
        campos[campo] = false;
    }
    verificarErrores();
};

// Función para verificar si todos los campos están correctos y ocultar el mensaje de error
const verificarErrores = () => {
    if (campos.nombres && campos.apellidos && campos.correo && campos.telefono) {
        document.getElementById('formulario-mensaje').classList.remove('formulario-mensaje-activo');
    }
};

// Eventos para validar los campos en tiempo real
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

// Evento para el checkbox de términos y condiciones
terminos.addEventListener('change', () => {
    if (terminos.checked) {
        terminosError.classList.remove('formulario-input-error-activo');
    }
});

// Evento para enviar el formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.nombres && campos.apellidos && campos.correo && campos.telefono && terminos.checked) {
        // Restablecer formulario
        formulario.reset();

        // Mostrar mensaje de éxito
        document.getElementById('formulario-mensaje-exito').classList.add('formulario-mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario-mensaje-exito').classList.remove('formulario-mensaje-exito-activo');
        }, 5000);

        // Ocultar mensajes de error
        document.getElementById('formulario-mensaje').classList.remove('formulario-mensaje-activo');
        terminosError.classList.remove('formulario-input-error-activo');

        // Resetear estilos de validación
        document.querySelectorAll('.formulario-grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario-grupo-correcto');
        });

        // Resetear estado de los campos
        Object.keys(campos).forEach(campo => campos[campo] = false);
    } else {
        // Mostrar mensaje de error general
        document.getElementById('formulario-mensaje').classList.add('formulario-mensaje-activo');

        // Mostrar error si no acepta los términos
        if (!terminos.checked) {
            terminosError.classList.add('formulario-input-error-activo');
        }
    }
});

