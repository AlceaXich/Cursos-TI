# SQL interactivo
## Detalles
### Plataforma de aprendizaje
- Desafio Latam
- 
### Tiempo de duracion
- Fecha inicio: 04-01-2024
- Fechan fin:

### Recursos



## Seleccionando columnas

### 3. Asignando un alias con AS y comillas dobles

Ejemplo:
`SELECT nombre_completo, sueldo AS "Salario de Empleados" FROM empleados;`

## Seleccionando filas
### Utilizando el operador mayor que
- La cláusula WHERE en SQL se utiliza para filtrar los registros de una tabla según una condición específica.

`SELECT * FROM productos WHERE descuento > 10;`

### Utilizando el operador mayor o igual que
- El operador mayor o igual que (>=) se utiliza para seleccionar registros en los que el valor de una columna sea mayor o igual a un valor específico. 

Ejemplo:
`SELECT * FROM productos WHERE precio >= 50;`

### Utilizando el operador "menor que"
- El operador menor que (<) se utiliza para comparar valores y seleccionar filas donde el valor de una columna sea estrictamente menor que un valor específico. 

Ejemplo:
`SELECT * FROM usuarios WHERE id < 3;`

### Utilizando el operador "menor o igual que" en una condición

### Seleccionando filas bajo una condición de igualdad (tipo de dato string)
- En SQL, para comparar textos debemos utilizar comillas simples ('') o comillas dobles ("").

Ejemplo:
`SELECT * FROM productos WHERE nombre = 'Pantalón';`
`SELECT * FROM productos WHERE nombre = "Silla de Oficina";`

### Seleccionando filas bajo una condición de igualdad (tipo de dato booleano true)

Ejemplo:
`SELECT * FROM usuarios WHERE status = 1;`
`SELECT * FROM usuarios WHERE status = true;`

### Seleccionando filas bajo una condición de igualdad (tipo de dato booleano false)
Ejemplo:
`SELECT * FROM productos WHERE destacado = false;`

### Utilizando dos condiciones con operador "and"
- La claúsula WHERE se puede combinar con el operador AND para juntar múltiples condiciones en una consulta SQL. 

Ejemplo:
`SELECT * FROM usuarios WHERE nombre = 'María' AND email = 'mariagarcia@hotmail.com';`
`SELECT * FROM productos WHERE agotado = true AND precio > 100;`

### Utilizando operador "OR"
- Cuando se usa el operador OR, al menos una de las condiciones debe ser verdadera para que el registro se incluya en el resultado.

Ejemplo:
`SELECT  * FROM productos WHERE precio > 1000 OR descuento = 20;`
`SELECT * FROM clientes WHERE ciudad = 'Madrid' OR saldo < 0;`

### Seleccionando fecha
- Las fechas se guardan en un formato YYYY-MM-DD, indicando primero el año en 4 dígitos, luego el mes con dos dígitos y finalmente el día con dos dígitos. 
  - Un ejemplo de una fecha en este formato sería 2022-01-01

Ejemplo:
`SELECT * FROM productos WHERE fecha_de_creación > '2021-05-01';`

### Seleccionando datos entre dos valores con "between"

- El operador BETWEEN se utiliza para seleccionar registros cuyos valores se encuentren dentro de un rango específico.

Ejemplo:
`SELECT * FROM productos WHERE stock BETWEEN 20 AND 30;`

### Seleccionando filas con "like"
- Supongamos que queremos buscar todos los usuarios cuyo nombre empiece con la letra 'J' en la tabla de usuarios. El símbolo '%' es un comodín que representa cualquier cantidad de caracteres adicionales.

Ejemplo:
`select * from usuarios where apellido like 'Ma%';`

### Seleccionando con comodin al principio
- El símbolo '%' es un comodín que representa cualquier cantidad de caracteres adicionales. En este caso, estamos utilizando '%' antes de la letra 's' para indicar que queremos buscar cualquier nombre que termine con 's' y tenga cualquier número de caracteres adicionales antes de ella.

Ejemplo:
`select * from usuarios where nombre like '%o';`

### Seleccionando registros sin valores nulos
- Para seleccionar todos los valores no nulos utilizaremos IS NOT NULL.

Ejemplo:
`select * from productos where descuento is not null;`

### Seleccionando registros con valores nulos
Ejemplo:
`select * from usuarios where email is null;`

## denando resultados (orden y limit)
  ### Ordenando filas 
    - ORDER BY se utiliza para ordenar los resultados de una consulta según una o más columnas. Por defecto, se ordena de forma ascendente.
    - Es importante tener en cuenta que las claúsulas tienen que especificarse justo en este orden:
    * SELECT
    * FROM
    * ORDER BY
    - Ejemplo:
      * `select * from usuarios order by nombre;`

  ### Ordenando filas asc explicito
   - Con la claúsula ORDER BY podemos especificar la dirección de los resultados. Se puede ordenar en orden ascendente (ASC) o descendente (DESC).
   - Ejemplo:
     * `select * from usuarios order by nombre asc;`

  ### Ordenando filas desc
   - La cláusula ORDER BY se utiliza para ordenar los resultados de una consulta. Por defecto el orden es ascendente, pero se puede especificar que sea descendente utilizando la palabra clave DESC.
   - Ejemplo:
     * `select precio from productos order by  precio desc;` 


