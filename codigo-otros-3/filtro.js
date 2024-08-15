// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "/codigo-otros-3/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "/codigo-otros-3/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "/codigo-otros-3/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "/codigo-otros-3/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "/codigo-otros-3/zapato-rojo.jpg"}
]

const divLis = document.getElementById("lista-de-productos")
const $i = document.querySelector('.input');
/* Se cambia la constante li por divLis para hacer alucion al div*/
/* Cambio de getelmentName a getElementById*/

/* se agrga la funcion display productos*/
function displayProductos(productos)
{
for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)
  divLis.appendChild(d)
}
}

displayProductos(productos)

//**/ */

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (divLis.firstChild) {
    divLis.removeChild(divLis.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  
  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    divLis.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  