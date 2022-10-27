const amount = document.querySelector("#cantidaProducto");
const color = document.querySelector("#inputColor");
const nombreColor = document.querySelector("#inputColor").innerHTML;
const talla = document.querySelector("#inputTalla");
const btnCalcula = document.querySelector("#butonCalcula");
const price = document.querySelector("#precioProducto").innerHTML;
const total = document.querySelector("#totalCompra");

let montoFormat = price.replace(/[$.]/g, "");

amount.addEventListener("change", () => {
	let total = montoFormat * amount.value;
	let montoFinal = Intl.NumberFormat("es-CL", {
		style: "currency",
		currency: "CLP",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(total);
	totalCompra.textContent = "Total Compra: " + montoFinal;
});

btnCalcula.addEventListener("click", () => {
	console.log("estamos ok");
	let color = document.querySelector("#inputColor").value;
	console.log(color);
	checkAmount();
});

function checkAmount() {
	if (amount.value != "") {
		console.log(amount.value);
		checkColor();
	} else {
		document.getElementById("mensaje").innerHTML =
			"No ha ingresado cantidad";
		console.log("cantidad");
		modal();
	}
}

function checkColor() {
	if (color.value != "Color..") {
		console.log(color.value);
		checkTalla();
	} else {
		document.getElementById("mensaje").innerHTML =
			"No ha seleccionado un color";
		console.log("color");
		modal();
	}
}

function checkTalla() {
	if (talla.value != "Talla..") {
		console.log(talla.value);
		exito();
	} else {
		document.getElementById("mensaje").innerHTML =
			"No ha seleccionado la talla de la Bicicleta";
		console.log("talla");
		modal();
	}
}

function modal() {
	let modal = "modalmensajes";
	let mensaje = document.getElementById("mensaje").innerHTML;
	modalcontenido.innerHTML = `
            <div class="modal-header">
                <h5 class="modal-title text-center" >Datos Incompletos</h5>
            </div>
            
            <div class="modal-body">
            	<h5 class="text-black">${mensaje}</h5>
            </div>
                

                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
                </div>
            </div>
            `;

	$("#" + modal).modal("show");
}

function exito() {
	let modal = "modalmensajes";
	let mensaje = document.getElementById("mensaje").innerHTML;
	let montoFinal = document.querySelector("#totalCompra").innerHTML;

	modalcontenido.innerHTML = `
            <div class="modal-header">
                <h5 class="modal-title text-center" >Compra Exitosa!!</h5>
            </div>
            
            <div class="modal-body">
            		<small> Estamos muy contentos que hayas seleccionado uno de nuestros productos. </small>
            	<br>
            		<small><strong>MERIDA SCULTURA 300 2023</strong></small>
            	<br>
            	<br>
            		<small>El detalle de tu compra es el siguiente: </small>
            	<br>
            		<small>${montoFinal}</small>
            	<br>
            		<small>Cantidad: ${amount.value}</small>
            	<br>
            		<small>Talla: ${talla.value}</small>
            	<div class="containerLeft">
            		<div class=pe-2>
            		 <small px-4>Color:</small>
            		 </div>
            		 		<div class="circulo" style="background:${color.value}; "></div>
            	</div>
            </div>
                

                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
                </div>
            </div>
            `;

	$("#" + modal).modal("show");
}
