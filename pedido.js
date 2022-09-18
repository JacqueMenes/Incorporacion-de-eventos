//Simulacion de tienda online.

//Saludo de bienvenida.
let boton = document.getElementById("boton")
boton.addEventListener ("click", botonPrincipal)


    function botonPrincipal() {
        console.log("Respuesta evento")
        let carritoDeCompras = confirm("Bienvenida, a continuacion te ayudamos a completar tu carrito de compras.")
        sistemadeStock()
    }

//Modificando HTML con DOM 
let titulo = document.getElementById("titulo")
titulo.innerText = "Tienda Online Your Style"
let subTitulo = document.getElementById("subTitulo")
let detalle = document.getElementById("detalle")

//Creo objeto con una clase constructora
class articulo{
    constructor(id, categoria, producto, precio, cantidad){
        this.id = id,
        this.categoria = categoria,
        this.producto = producto,
        this.precio = precio,
        this.cantidad = cantidad
    }//Se agrega un metodo y lo muestra por Alert y Por consola muestra el Total
    verDatos(){
        alert(`Stock en En Sistema:\nID: ${this.id}\nCategoria: ${this.categoria}\nProducto: ${this.producto}\nPrecio de Costo: ${this.precio}\nStock: ${this.cantidad} `)
        console.log(`Stock en En Sistema:\nID: ${this.id}\nCategoria: ${this.categoria}\nProducto: ${this.producto}\nPrecio de Costo: ${this.precio}\nStock: ${this.cantidad} `)
    }
}

//Crea la Instanciación de Objetos - STOCK DE ARTICULOS PARA LA VENTA CON CANTIDAD EN INVENTARIO

const producto1 = new articulo(1, "Remera", "Musculosa Basica Blanca", 500, 100)
const producto2 = new articulo(2, "Remera", "Musculosa Basica Negra", 500, 100)
const producto3 = new articulo(3, "Camisa", "Camisa de Jean", 2500, 100)
const producto4 = new articulo(4, "Camisa", "Camisa de Lino", 3000, 100)
const producto5 = new articulo(5, "Campera", "Campera de ecocuero", 8000, 20)
const producto6 = new articulo(6, "Campera", "campera de Jean", 6000, 30)
const producto7 = new articulo(7, "Pollera", "Pollera blanca", 2500, 50)
const producto8 = new articulo(8, "Pollera", "Pollera Negra", 2500, 50)
const producto9 = new articulo(9, "Pantalon", "Jean Skinny Negro", 3500, 20)
const producto10 = new articulo(10, "Pantalon", "Jean Celeste", 3500, 15)
const producto11 = new articulo(11, "Calzado", "Botas Caña Alta", 10000, 10)
const producto12 = new articulo(12, "Calzado", "Botas Bucanera", 13000, 15)

//Constantes de los Descuentos
const descuentos5 = new articulo(55,"Descuento", "Del 5% sobre el Total", 0.05, 4)
const descuentos10 = new articulo(110,"Descuento", "Del 10% sobre el Total", 0.10, 4)
const descuentos15 = new articulo(115,"Descuento", "Del 15% sobre el Total", 0.15, 4)

//Array con todo el Stock de la tienda

const stock = [producto1,producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12]

//Array para cada categoria de productos

const remeraYS = [producto1, producto2]
const camisaYS = [producto3, producto4]
const camperaYS = [producto5, producto6]
const polleraYS = [producto7, producto8]
const pantalonYS = [producto9, producto10]
const calzadoYS = [producto11, producto12]

//Array de cupones de descuento

const descuentos = [descuentos5, descuentos10, descuentos15]

// Funcion Que busca un Articulo por el ID. Utiliza FIND , Y pega 3 valores con RETURN , separados por coma de la constante correspondiente al articulo.
// Si el usuario pone cero, deja vacio el campo, o pone un ID que no existeo retorna el ID cero, que es un articulo con valores en cero

function remeras(){
    let buscarProducto = prompt(`Elija la remera que desea:\nPara ${producto1.producto} Ingrese ${producto1.id}\nPara ${producto2.producto} Ingrese ${producto2.id}\nSi NO desea ninguna REMERA presione ENTER o ingrese 0`)
    let idEncontrado = remeraYS.find((articulos)=> articulos.id == buscarProducto)
    if(idEncontrado == undefined) {
        alert(`Este articulo no se encuentra en Stock`)
        return [0, "No ingresado", "Articulo"]
    } else {
        alert(`Usted eligio ${idEncontrado.categoria} ${idEncontrado.producto} ${idEncontrado.precio} (Sin impuestos)`)
        return [idEncontrado.precio, idEncontrado.producto, idEncontrado.categoria]
    }
}

function camisas(){
    let buscarProducto = prompt(`Elija la camisa que desea:\nPara ${producto3.producto} Ingrese ${producto3.id}\nPara ${producto4.producto} Ingrese ${producto4.id}\nSi NO desea ninguna Camisa presione ENTER o ingrese 0`)
    let idEncontrado = camisaYS.find((articulos)=> articulos.id == buscarProducto)
    if(idEncontrado == undefined) {
        alert(`Este articulo no se encuentra en Stock`)
        return [0, "No ingresado", "Articulo"]
    } else {
        alert(`Usted eligio ${idEncontrado.categoria} ${idEncontrado.producto} ${idEncontrado.precio} (Sin impuestos)`)
        return [idEncontrado.precio, idEncontrado.producto, idEncontrado.categoria]
    }
}

function camperas(){
    let buscarProducto = prompt(`Elija la campera que desea:\nPara ${producto5.producto} Ingrese ${producto5.id}\nPara ${producto6.producto} Ingrese ${producto6.id}\nSi NO desea ninguna Campera presione ENTER o ingrese 0`)
    let idEncontrado = camperaYS.find((articulos)=> articulos.id == buscarProducto)
    if(idEncontrado == undefined) {
        alert(`Este articulo no se encuentra en Stock`)
        return [0, "No ingresado", "Articulo"]
    } else {
        alert(`Usted eligio ${idEncontrado.categoria} ${idEncontrado.producto} ${idEncontrado.precio} (Sin impuestos)`)
        return [idEncontrado.precio, idEncontrado.producto, idEncontrado.categoria]
    }
}

function polleras(){
    let buscarProducto = prompt(`Elija la Pollera que desea:\nPara ${producto7.producto} Ingrese ${producto7.id}\nPara ${producto8.producto} Ingrese ${producto8.id}\nSi NO desea ninguna Pollera presione ENTER o ingrese 0`)
    let idEncontrado = polleraYS.find((articulos)=> articulos.id == buscarProducto)
    if(idEncontrado == undefined) {
        alert(`Este articulo no se encuentra en Stock`)
        return [0, "No ingresado", "Articulo"]
    } else {
        alert(`Usted eligio ${idEncontrado.categoria} ${idEncontrado.producto} ${idEncontrado.precio} (Sin impuestos)`)
        return [idEncontrado.precio, idEncontrado.producto, idEncontrado.categoria]
    }
}

function pantalones(){
    let buscarProducto = prompt(`Elija el Pantalon que desea:\nPara ${producto9.producto} Ingrese ${producto9.id}\nPara ${producto10.producto} Ingrese ${producto10.id}\nSi NO desea ningun Pantalon presione ENTER o ingrese 0`)
    let idEncontrado = pantalonYS.find((articulos)=> articulos.id == buscarProducto)
    if(idEncontrado == undefined) {
        alert(`Este articulo no se encuentra en Stock`)
        return [0, "No ingresado", "Articulo"]
    } else {
        alert(`Usted eligio ${idEncontrado.categoria} ${idEncontrado.producto} ${idEncontrado.precio} (Sin impuestos)`)
        return [idEncontrado.precio, idEncontrado.producto, idEncontrado.categoria]
    }
}

function calzados(){
    let buscarProducto = prompt(`Elija la remera:\nPara ${producto11.producto} Ingrese ${producto11.id}\nPara ${producto12.producto} Ingrese ${producto12.id}\nSi NO desea ninguna Calzado presione ENTER o ingrese 0`)
    let idEncontrado = calzadoYS.find((articulos)=> articulos.id == buscarProducto)
    if(idEncontrado == undefined) {
        alert(`Este articulo no se encuentra en Stock`)
        return [0, "No ingresado", "Articulo"]
    } else {
        alert(`Usted eligio ${idEncontrado.categoria} ${idEncontrado.producto} ${idEncontrado.precio} (Sin impuestos)`)
        return [idEncontrado.precio, idEncontrado.producto, idEncontrado.categoria]
    }
}

//Funciones descuento desde un array con cupon

function Descuento(){
    let buscarProducto = prompt(`Si tenes un codigo de descuento ingresalo a continuacion. \nSi no tiene presione ENTER o ingrese 0`)
    let idEncontrado = descuentos.find((articulos)=> articulos.id == buscarProducto)
    if(idEncontrado == undefined) {
        alert(`Este codigo de descuento no existe`)
        return [0, "Sin", "descuento"]
    }else {
        alert(`Usted ingreso ${idEncontrado.categoria} ${idEncontrado.producto}`)
        return [idEncontrado.precio, idEncontrado.producto, idEncontrado.categoria]
    }
}

//FUNCION PARA MOSTRAR EL STOCK
function mostrarStock(array){
    alert("Su Stock sera mostrado en PopUp y Tambien por Consola")
    console.log("Su Stock sera mostrado en PopUp y Tambien por Consola")
    array.forEach((deposito)=>{
        deposito.verDatos()
    })
}

//FUNCION PARA AGREGAR STOCK
function nuevoProducto(array){
    let CategoriaNueva = prompt("Ingrese la Categoria del Producto")
    let productoNuevo = prompt("Ingrese el Nuevo Producto")
    let precioSiniva = prompt("Ingrese el precio de costo del producto")
    let stockNew = prompt("Ingrese el Stock del producto")
    let productoCreado = new articulo(stock.length, CategoriaNueva, productoNuevo, precioSiniva,stockNew)
    array.push(productoCreado)
    alert(`El Articulo ha sido agregado exitosamente.Por Favor Revise El nuevo Stock en la opcion 1`)
}

//BORRAR UN ARTICULO CON SPLICE
function eliminamosArticulo(stock){
    let posicion1 = prompt("Para eliminar un producto, indique el ID del mismo")
    let posicion2 = prompt("Indique el ID del producto siguiente para poder eliminar el primero. Si desea eliminar mas de uno, indique el ID del producto hasta donde quiera que sean eliminados.")
    borrarArticulo = confirm("Desea eliminar el/los productos seleccionados?")
        if (borrarArticulo == true){
            stock.splice(posicion1, posicion2)
            alert("El/los productos fueron eliminados de la base de datos. Revise el menú para confirmar")
        }else{
            alert("Seleccione otra opción del menú")
        }
    }  

//Menu Del sistema - POP UP del usuario
function sistemadeStock(){
    let ingresoUsuario = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                        1 - Ver Stock disponible
                        2 - Para cargar un Pedido de Venta
                        3 - Eliminar producto del stock 
                        4 - Agregar un producto al Stock
                        0 - Para finalizar
                        `))
    menu(ingresoUsuario)
}



function carritoCompras(){
    //Llama a la funcion especifica del Articulo con el return y divido los resultados para usarlos de diferentes formas
    let [precioR, productoR, categoriaR] = remeras()
    let [precioCam, productoCam, categoriaCam] = camisas()
    let [precioC, productoC, categoriaC] = camperas()
    let [precioP, productoP, categoriaP] = polleras()
    let [precioPA, productoPA, categoriaPA] = pantalones()
    let [precioCa, productoCa, categoriaCa] = calzados()
    
    let sumaTotal = document.getElementById("sumaTotal")
   
    
    //Llamada a los descuentos
    let [precioD, productoD, categoriaD] = Descuento()

    //Suma de los precios de todos los articulos, menos el descuento en caso de corresponder
    let carritoCompras2 = precioR + precioCam + precioC + precioP + precioPA + precioCa
    let impuesto = carritoCompras2 * 0.21
    let precioFinal = carritoCompras2 + impuesto
    let porcentajeDescuento = precioFinal * precioD
    let descuentoTotal = precioFinal - porcentajeDescuento

    //Resultado de compra impreso en HTML 
    titulo.innerText = "Tienda Online Your Style"
    subTitulo.remove()
    detalle.remove()

    sumaTotal.innerHTML = `<p>Gracias por su compra.</p>
    <p>Su compra incluye:</p>
    <ul>${categoriaR} ${productoR} $${precioR}</ul>
    <ul>${categoriaCam} ${productoCam} $${precioCam}</ul>
    <ul>${categoriaC} ${productoC} $${precioC}</ul>
    <ul>${categoriaP} ${productoP} $${precioP}</ul>
    <ul>${categoriaPA} ${productoPA} $${precioPA}</ul>
    <ul>${categoriaCa} ${productoCa} $${precioCa}</ul>
    <p>Subtotal: $${carritoCompras2}</p>
    <p>IVA: $${impuesto}</p>
    <p>Precio Final: $${precioFinal}</p>
    <p>Descuento: $${porcentajeDescuento}</p>
    <p>Precio Final con descuento: $${descuentoTotal}</p>`

}

//Funcion Switch que llama a las funciones antes creadas en base a la seleccion del usuario
function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert(`Gracias por Utilizar nuestro sistema de Stock`)
    break    
        case 1:
            mostrarStock(stock)
    break
        case 2:
            carritoCompras()
    break
        case 3:
            eliminamosArticulo(stock)
    break
        case 4:
            nuevoProducto(stock)
    break
        default:
            alert(`Si Finalizo su trabajo y desea salir, presione 0 por favor`)
    }
}
