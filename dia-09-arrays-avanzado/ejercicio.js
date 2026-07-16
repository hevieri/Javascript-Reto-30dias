/*
  DÍA 9: Arrays avanzado - map, filter, reduce

  Instrucciones:

  1. map - IVA:
     Tenés precios sin IVA: [100, 250, 500, 1200, 80]
     Usá map para obtener los precios con IVA (21%).

  2. map - Temperaturas:
     Tenés [0, 25, 30, 100, -5] en Celsius.
     Usá map para pasarlos a Fahrenheit: F = C * 9/5 + 32.

  3. map - Extraer datos:
     const usuarios = [
       { nombre: "Ana", edad: 25 },
       { nombre: "Luis", edad: 30 },
       { nombre: "Carla", edad: 22 }
     ]
     Usá map para obtener solo los nombres.

  4. filter:
     Del array de usuarios, filtrá los mayores de 18 (>18).

  5. reduce:
     Sumá todos los precios de un carrito: [1500, 2300, 800, 4200].

  6. ENCADENAMIENTO:
     Dado [12, 5, 8, 21, 3, 14, 7]:
     - Filtrar solo pares
     - Multiplicar cada uno por 3
     - Sumar el resultado

  7. Agrupar personas por ciudad usando reduce:
     const personas = [
       { nombre: "Ana", ciudad: "Madrid" },
       { nombre: "Luis", ciudad: "Barcelona" },
       { nombre: "Carla", ciudad: "Madrid" }
     ]
     → { "Madrid": ["Ana", "Carla"], "Barcelona": ["Luis"] }

  +++ EJERCICIO EXTRA +++
  - Del array de usuarios [{nombre, edad, ciudad}], obtené:
    a) Solo nombres de los mayores de 20
    b) La suma de edades
    c) Personas agrupadas por ciudad (usando reduce)
*/

//1.
const preciosSinIVA = [100, 250, 500, 1200, 80];
const preciosConIVA = preciosSinIVA.map(precio => precio * 1.21);
console.log("Precios con IVA:", preciosConIVA);

//2.
const temperaturasCelsius = [0, 25, 30, 100, -5];
const temperaturasFahrenheit = temperaturasCelsius.map( celsius => celsius * 9/5 + 32);
console.log("Temperaturas en Fahrenheit:", temperaturasFahrenheit);