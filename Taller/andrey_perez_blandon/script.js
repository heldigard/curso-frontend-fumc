// ============================================
// ARCHIVO DE JAVASCRIPT COMPARTIDO
// ============================================

// Este archivo puede contener funciones útiles para todas las actividades

/**
 * Muestra un mensaje de bienvenida en la consola
 */
console.log("🎓 Bienvenido al Taller de Frontend FUMC");
console.log("💡 Recuerda: Presiona F12 para ver la consola");

/**
 * Función para validar si un campo está vacío
 * @param {string} valor - El valor a validar
 * @returns {boolean} - True si NO está vacío, False si está vacío
 */
function validarCampoVacio(valor) {
    return valor !== null && valor.trim() !== "";
}

/**
 * Función para validar un email
 * @param {string} email - El email a validar
 * @returns {boolean} - True si es válido, False si no lo es
 */
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Función para validar un número
 * @param {string} valor - El valor a validar
 * @returns {boolean} - True si es un número, False si no lo es
 */
function esNumero(valor) {
    return !isNaN(valor) && valor.trim() !== "";
}

/**
 * Función para formatear números como moneda colombiana
 * @param {number} numero - El número a formatear
 * @returns {string} - El número formateado como COP
 */
function formatearMoneda(numero) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(numero);
}

/**
 * Función para obtener la fecha actual en formato legible
 * @returns {string} - La fecha actual
 */
function obtenerFechaActual() {
    const fecha = new Date();
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return fecha.toLocaleDateString('es-CO', opciones);
}

/**
 * Función para generar un color aleatorio en hexadecimal
 * @returns {string} - Color en formato #RRGGBB
 */
function colorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

/**
 * Función para capitalizar la primera letra de un texto
 * @param {string} texto - El texto a capitalizar
 * @returns {string} - El texto capitalizado
 */
function capitalizarPrimeraLetra(texto) {
    if (!texto) return "";
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

/**
 * Función para contar palabras en un texto
 * @param {string} texto - El texto a analizar
 * @returns {number} - La cantidad de palabras
 */
function contarPalabras(texto) {
    if (!texto || texto.trim() === "") return 0;
    return texto.trim().split(/\s+/).length;
}

// ============================================
// EJEMPLOS DE USO (Puedes descomentar para probar)
// ============================================

// console.log("Email válido:", validarEmail("test@ejemplo.com"));
// console.log("Email inválido:", validarEmail("test@ejemplo"));
// console.log("Moneda:", formatearMoneda(1500000));
// console.log("Fecha:", obtenerFechaActual());
// console.log("Color aleatorio:", colorAleatorio());
