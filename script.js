let gastos = [];
const categoria = document.querySelector("#categorias");
const descripcion = document.querySelector("#descripcion");
const monto = document.querySelector("#monto");
const btnAgregar = document.querySelector("#agregar");
const totalHoy = document.querySelector("#totalHoy");
const totalMes = document.querySelector("#totalMes");
const totalCategoria = document.querySelector("#totalCategoria");
const totalGastosIndividuales = document.querySelector("#totalGastosIndividuales");

btnAgregar.addEventListener("click", agregarGastos);

function agregarGastos(params) {
    const datosGuardados = localStorage.getItem("gastos");
    if (datosGuardados) {
        gastos = JSON.parse(localStorage.getItem("gastos"));
    }

    let descGastos = descripcion.value;
    let montoGastos = Number(monto.value);
    let catgGastos = categoria.value;
    if (descGastos === "" || montoGastos <= 0) {
        alert("⚠ Ingreso una descripción y un monto válido ⚠")
        return;
    }
    const gasto = {
        descripcion: descGastos,
        monto: montoGastos,
        categoria: catgGastos,
        fecha: new Date().toISOString()
    }
    gastos.push(gasto);
    localStorage.setItem("gastos", JSON.stringify(gastos));
    limpiarFormulario();
    actualizarPantalla();
}
function limpiarFormulario() {
    descripcion.value = "";
    monto.value = "";
    categoria.selectedIndex = 0;
}
function actualizarPantalla() {
    gastosHoy();
    totalMes();
    totalCategoria();
    totalListaGastos();
}
function gastosHoy(gasto) {
    const fechaGasto = new Date(gasto.fecha);
    const hoy = new Date();
    return (
        fechaGasto.getDate() === hoy.getDate() &&
        fechaGasto.getMonth() === hoy.getMonth() &&
        fechaGasto.getFullYear() === hoy.getFullYear()
    );
}
function totalMes() {

}
function totalCategoria() {

}
function totalListaGastos() {

}