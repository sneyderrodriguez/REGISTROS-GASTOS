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

const datosGuardados = localStorage.getItem("gastos");
if (datosGuardados) {
    gastos = JSON.parse(datosGuardados);
}
actualizarPantalla();

function agregarGastos() {
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
    mostrarGastosHoy();
    mostrarGastosMes();
    mostrarGastosCategorias();
    totalListaGastos();
}
function calcularHoy(gasto) {
    const fechaGasto = new Date(gasto.fecha);
    const hoy = new Date();
    return (
        fechaGasto.getDate() === hoy.getDate() &&
        fechaGasto.getMonth() === hoy.getMonth() &&
        fechaGasto.getFullYear() === hoy.getFullYear()
    );
}
function mostrarGastosHoy() {
    const gastosHoy = gastos.filter(calcularHoy);
    const totaldeHoy = gastosHoy.reduce((acumulador, gasto) => {
        return acumulador + gasto.monto;
    }, 0);
    totalHoy.textContent = totaldeHoy;
}

function calcularMes(gasto) {
    const fechaGasto = new Date(gasto.fecha);
    const hoy = new Date();
    return (
        fechaGasto.getMonth() === hoy.getMonth() &&
        fechaGasto.getFullYear() === hoy.getFullYear()
    );
}
function mostrarGastosMes() {
    const gastosMes = gastos.filter(calcularMes)
    const totaldelmes = gastosMes.reduce((acumulador, gasto) => {
        return acumulador + gasto.monto;
    }, 0);
    totalMes.textContent = totaldelmes;
}

/*=============================================================
                            PARTE 5
  =============================================================*/
function mostrarGastosCategorias() {
    const comida = gastos.filter((gasto) => {
    return gasto.categoria === "Comida";
})
const totalComida = comida.reduce((acumulador, gasto) => {
    return acumulador + gasto.monto;
}, 0)

const transporte = gastos.filter((gasto) => {
    return gasto.categoria === "Transporte";
})
const totalTransporte = transporte.reduce((acumulador, gasto) => {
    return acumulador + gasto.monto;
}, 0)

const entretenimiento = gastos.filter((gasto) => {
    return gasto.categoria === "Entretenimiento";
})
const totalEntretenimiento = entretenimiento.reduce((acumulador, gasto) => {
    return acumulador + gasto.monto;
}, 0)

const servicios = gastos.filter((gasto) => {
    return gasto.categoria === "Servicios";
})
const totalServicios = servicios.reduce((acumulador, gasto) => {
    return acumulador + gasto.monto;
}, 0)

const otros = gastos.filter((gasto) => {
    return gasto.categoria === "Otros";
})
const totalOtros = otros.reduce((acumulador, gasto) => {
    return acumulador + gasto.monto;
}, 0)
totalCategoria.innerHTML = `
    <p>Comida: $${totalComida}</p>
    <p>Transporte: $${totalTransporte}</p>
    <p>Entretenimiento: $${totalEntretenimiento}</p>
    <p>Servicios: $${totalServicios}</p>
    <p>Otros: $${totalOtros}</p>`

}
/*=============================================================
                            PARTE 6
  =============================================================*/
function totalListaGastos() {
    totalGastosIndividuales.innerHTML = "";
    gastos.forEach((gasto, indice) => {
        totalGastosIndividuales.innerHTML += `
            <div class="gasto">
                <p>Descripción: ${gasto.descripcion}</p>
                <p>Categoría: ${gasto.categoria}</p>
                <p>Monto: $${gasto.monto}</p>

                <button onclick="eliminarGasto(${indice})">
                    Eliminar
                </button>
            </div>`
    })

}
function eliminarGasto(indice) {
    if (!confirm("⚠ ¿Está seguro de eliminar el gasto?")) {
        return;
    }
    gastos.splice(indice, 1);
    localStorage.setItem("gastos", JSON.stringify(gastos));
    actualizarPantalla();
}