/*
  DÍA 15: Clases y POO básica

  Instrucciones:
  1. Clase Producto:
     - Constructor con nombre, precio, stock
     - Método aplicarDescuento(porcentaje) que rebaje el precio
     - Método vender(cantidad) que reduzca el stock (si hay suficiente)

  2. Clase Carrito:
     - Constructor con items (array vacío)
     - Método agregar(producto, cantidad)
     - Método eliminar(nombreProducto)
     - Método calcularTotal() que sume los precios * cantidades
     - Método mostrarResumen() que liste todo

  3. Clase Usuario:
     - Constructor con nombre, email
     - Método validarEmail() que verifique si tiene @ y .com
     - Getter saludar() que devuelva "Hola, soy [nombre]"

  4. Clase CuentaBancaria (con #saldo privado):
     - depositar(monto), retirar(monto), consultarSaldo()
     - No permitir retiros que dejen saldo negativo

  +++ EJERCICIO EXTRA +++
  - Creá una clase Pedido que herede de Carrito
  - Agregale: fecha, estado (pendiente/enviado/entregado)
  - Método actualizarEstado(nuevoEstado)
*/
