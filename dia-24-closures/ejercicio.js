/*
  DÍA 24: Closures y Scope

  Instrucciones:
  1. CONTADOR PRIVADO:
     - Función crearContador(inicial = 0) que devuelva objeto con:
       { incrementar, decrementar, obtenerValor }
     - El valor debe ser privado (closure, no propiedad del objeto)

  2. MEMOIZACIÓN:
     - Función memoize(fn) que guarde resultados en un Map
     - Si ya se llamó con esos args, devuelva el valor cacheado
     - Aplicar a fibonacci

  3. BANCA PRIVADA:
     - Función crearCuenta(saldoInicial) que devuelva:
       depositar(monto), retirar(monto), consultarSaldo()
     - saldo debe ser privado

  4. once(fn):
     - Función que ejecute fn solo la primera vez
     - Llamadas subsecuentes no hacen nada

  +++ EJERCICIO EXTRA +++
  - Crea una función parcial(fn, ...argsPreset) que devuelva
    una función con argumentos ya fijados (currying básico)
*/
