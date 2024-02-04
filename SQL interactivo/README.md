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

## Ordenando resultados (orden y limit)
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
  ### Ordenando con nulos al final
    - ORDER BY junto con NULLS FIRST o NULLS LAST para especificar cómo queremos que se ordenen las filas con valores nulos.
    - Ejemplo:
      * `select * from productos order by precio nulls last;`
  ### Combinaciones de orden
    - Se puede ordenar en función de múltiples columnas
    - Ejemplo:
      * `select * from empleados order by salario asc, nombre asc;` 
  ### Combinaciones de orden asc y desc
    - Ejemplo:
      * `select * from productos order by stock desc, color asc;` 

## Limit
  ### Limitando la cantidad de resultados
    - La cláusula LIMIT se utiliza para limitar la cantidad de resultados devueltos por una consulta.
    - Ejemplo: `select * from usuarios limit 3;`
  ### Obtener los primeros alumnos con mejor nota
    - La combinación de las cláusulas ORDER BY y LIMIT nos permite obtener el valor o valores máximos de una columna en una tabla.
    - Ejemplo: ` select puntaje from puntajes order by puntaje desc limit 1; ` 
  ### Obtener el nombre del concierto con más entradas vendidas
    - Ejemplo: `select nombre_concierto, entradas_vendidas from conciertos order by entradas_vendidas desc limit 1;`
## Operaciones con string
  ### Transformando un string a mayúsculas
    - Para transformar un string a mayúsculas en SQLITE podemos utilizar la función UPPER().
    - Ejemplo: `select upper(email) as email_upper from usuarios;`
  ### Trasformando un string a minúsculas
    - La función LOWER() en SQLite se utiliza para convertir todos los caracteres de un texto a minúsculas
    - Ejemplo: `select lower(email) as email_lower from usuarios;`
  ### Quitando espacios en blanco de un string
    - En SQLite la función TRIM() se utiliza para eliminar los espacios en blanco iniciales y finales de un string.
    - Ejemplo: `select trim(nombre), trim(email) from usuarios;`
  ### Combinando funciones
    - Se pueden combinar funciones lower y trim.
    - Ejemplo: `select lower(trim(nombre)) as nombre_limpsio, lower(trim(apellido)) as apellido_limpio, lower(trim(email)) as email_limpio from usuarios;`
  ### Obteniendo el largo de un string
    - En SQL, podemos utilizar la función LENGTH() para obtener la longitud de una cadena de caracteres. 
    - Ejemplo: `select length(apellido) from usuarios;`
  ### Obteniendo el nombre mas largo de la tabla
    - `select length(email) from usuarios order by length(email) desc limit 3;`
  ### Ordenando todos los datos y la funcion
    - `select email,length(email)  from usuarios order by length(email) desc limit 3;`
  ### Concatenar strings
    - `select producto || '-' || marca as marca_producto from productos;``
  ### Seleccionando caracteres de un string con SUBSTR
    - La función SUBSTR() se utiliza para seleccionar una determinada cantidad de caracteres de un string: SUBSTR( string, inicio, largo )
    - select substr(apellido,1,3) as primeras_letras from usuarios;
    - select substr(apellido,2,3) as tres_caracteres_del_apellido from usuarios where nombre = 'Marí## 

## Operaciones con fechas
  ### Obteniendo la fecha de hoy
    - Con la función DATE() podemos obtener la fecha de hoy.
    - Ejemplo: select descripcion from tareas where fecha_limite=date();
  ### Obteniendo la fecha de mañana
    - EN SQL es posible sumar fechas para obtener fechas futuras. 
    - Ejemplo: select * from tareas where fecha_limite = Date('now', '1 day');
  ### Obteniendo la fecha de ayer
    - EN SQL es posible restar fechas para obtener fechas anteriores.
    - Ejemplo: select monto from ganancias where fecha = date('now', '-1 day');
  ### Extraccion del año
    -
    - Ejemplo: select monto, strftime('%Y', fecha_venta) as año_venta from ventas;
  ### Extracción del mes
    -
    - Ejemplo: select monto, strftime('%m',fecha_venta) as mes_venta, strftime('%Y', fecha_venta) as año_venta from ventas;
  ### Extracción del mes y año
    -
    - Ejemplo: select monto, strftime('%Y-%m',fecha_venta) as año_mes from ventas;
  ### Extracciones y where
    -
    - Ejemplo: select * from ventas where strftime('%Y',fecha_venta) = '2015';
## Funciones de agregación
  ### El mayor valor de una columna
    - En SQL hay funciones que nos permiten ejecutar operaciones sobre un conjunto de resultados. Estas reciben el nombre de funciones de agregación.
    - Ejemplo: select max(edad) from empleados;
  ### El menor valor de una columna
    - Otra función de agregación frecuentemente utilizada es MIN(). Esta función toma como argumento el nombre de la columna y devuelve el valor más pequeño en esa columna.
    - Ejemplo: select min(sueldo) from empleados;
  ### Suma de elementos en una columna
    - Es importante tener en cuenta que la columna sobre la cual se aplica la función SUM() debe contener valores numéricos.
    - Ejemplo: select sum(sueldo) from empleados;
  ### Promedio de una columna
    - select avg(sueldo) from empleados;
  ### Contando elementos en una tabla
    - select count(*) from empleados;
  ### Ejercicio 1 : Funciones de agregacion con where
    - select sum(sueldo) from empleados where edad > 27;
  ### Ejercicio 2 : Funciones de agregacion con where
    - SELECT AVG(sueldo) from empleados WHERE sueldo > 50000;
  ### Ejercicio 3 : Funciones de agregacion con where
    - select count(*) from empleados  where departamento = 'Marketing';
  ### Ejercicio 4 : Funciones de agregacion con where
    - select count(*) from empleados where departamento = 'Finanzas' or departamento = 'Marketing';
  ### Conteo con condiciones con string
    - select count(*) from usuarios where nombre like '%a';
