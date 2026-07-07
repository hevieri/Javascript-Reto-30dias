/*
  DÍA 8: Objetos literales, propiedades, métodos, this

  Instrucciones:
  1. Crea un objeto producto con: nombre, precio, stock, descuento
     - Método calcularPrecioFinal() que aplique el descuento
     - Método mostrarInfo() que devuelva string con toda la info

  2. CARRITO DE COMPRAS:
     - Objeto carrito con propiedad items (array)
     - Métodos: agregar(producto, cantidad), eliminar(nombre),
       calcularTotal(), mostrarResumen()

  3. Objeto anidado: persona → dirección (calle, ciudad, pais)
     - Método que devuelva "Vive en calle, ciudad, pais"

  +++ EJERCICIO EXTRA +++
  - Creá 3 objetos producto y agregalos al carrito
  - El carrito debe calcular el total correctamente
  - Hacé que eliminar reduzca la cantidad o quite el item
*/

//1.
const producto = {
  nombre: 'Camiseta',
  precio: 20,
  stock: 50,
  descuento: 0.1, // 10% de descuento
  calcularPrecioFinal: function() {
    return this.precio - (this.precio * this.descuento);
  },
  mostrarInfo: function() {
    return `Producto: ${this.nombre}, Precio: $${this.precio}, Stock: ${this.stock}`;
  }
};