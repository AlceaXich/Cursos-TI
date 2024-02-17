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
    -
## Distinc
  ### Seleccionar filtrando datos repetidos
    - En SQL el keyword DISTINCT nos permite filtrar los resultados repetidos de una consulta.
    - Ejemplo: SELECT DISTINCT color AS color_unico from colores;
  ### Seleccionando correos únicos
    - select distinct correo as correo_unico from usuarios;
  ### Seleccionar distintos años
    - select distinct strftime('%m', fecha_venta) as mes_unico from ventas;
  ### Contar los valores distintos
    - Se puede combinar las funciones COUNT y DISTINCT de la siguiente manera:COUNT(DISTINCT columna)
    - Ejemplo: select count(distinct telefono) as telefonos_unicos from usuarios;
  ### Contando correos únicos
    - select count(distinct correo) as correos_cant from usuarios;
  ### Distinct con múltiples columnas
    - select distinct categoria, precio from productos;

## Introducción a grupos
  ### Agrupando valores con GROUP BY
  - La cláusula GROUP BY es una poderosa herramienta en SQL que se utiliza para agrupar filas con valores idénticos en una o varias columnas específicas, permitiendo realizar operaciones de agregación en cada grupo.
  - Ejemplo: select correo as correo_unico from usuarios group by correo;
  ### Agrupar y contar 
  - GROUP BY es comúnmente utilizada junto con funciones de agregación como COUNT, MAX, MIN, SUM y AVG para obtener información resumida de un conjunto de datos.
  - Ejemplo:  select correo, count(correo) as repeticiones from usuarios group by correo;
  ### Ejercitando agrupar y contar
  - select departamento, count(nombre) as cantidad_empleados from empleados group by departamento;
  ### Agrupar y sumar
  - select categoria, sum(monto) as monto_total from ventas group by categoria;
  ### Agrupar y promediar
  - select nombre_completo, avg(nota) as promedio_notas from estudiantes group by nombre_completo;
  ### Máximo por grupo
  - select categoria, max(monto) as monto_mas_alto from ventas group by categoria;
  ### Mínimo por grupo
  - select categoria, min(monto) as monto_mas_bajo from ventas group by categoria;
  ### Funciones de agregación y fechas
  - select sum(monto) as suma_ventas, strftime('%m', fecha_venta) as mes from ventas group by strftime('%m',fecha_venta);
  ### Ejercitando funciones de agregación con fechas
  - select strftime('%m', fecha_inscripcion) as mes, count(strftime('%m', fecha_inscripcion)) as cantidad_usuarios from inscripciones group by strftime('%m', fecha_inscripcion);
  ### Agrupando sin indicar el nombre de las columnas
    - select correo, count(correo) as repeticiones from usuarios group by correo order by correo asc;
  ### Agrupando por múltiples columnas
    - select correo, materia, avg(nota) as promedio_notas from estudiantes group by correo,materia;
## Having
  ### Introducción a having
    - HAVING se emplea para filtrar los resultados de una consulta que involucra funciones agregadas. 
    - HAVING permite aplicar condiciones de filtrado a los resultados de funciones como COUNT, MAX, MIN, SUM y AVG después de que se han agrupado los datos con la cláusula GROUP BY.
    - Ejemplo: **select strftime('%m',Fecha_Inscripcion) as mes, count(Fecha_Inscripcion) as cantidad_usuarios from inscripciones group by strftime('%m', Fecha_Inscripcion) having cantidad_usuarios = 1;**
  ### Buscando  duplicados
    - **select correo, count(correo) as cuenta_correos from correos_corporativos group by correo having cuenta_correos > 1;**
  ### Having y cuenta
    - **select count(nombre) as cantidad_de_usuarios, departamento from empleados group by departamento having cantidad_de_usuarios > 1; **
  ### Having y promedio
    - **select email, avg(notas) as promedio_notas from notas group by email having promedio_notas >= 50;**
  ### Having y order
    - **select producto, sum(cantidad) as cantidad_total from ventas group by producto having cantidad_total > 1000 order by cantidad_total desc;**
  ### Having y order 2
    - **select departamento, avg(salario) as salario_Promedio from empleados group by departamento order by departamento desc;**

## Sub-consultas
  ### Introducción a subconsultas
    - Las subconsultas o "subqueries", nos permiten utilizar los resultados de una consulta dentro de otra consulta.
    - Ejemplo: selecciona todos los registros cuyo sueldo sea menor o igual al promedio.
    `select * from empleados where sueldo <= (select avg(sueldo) from empleados);`
  ### Subconsultas y where parte 1
    - Selecciona toda la información de los registros que sean mayores al promedio del departamento de finanzas.
    - Ejemplo:
      `select * from empleados where sueldo > (select avg(sueldo) from empleados where departamento = 'Finanzas');`
  ### Subconsultas y where parte 2
    - Ejemplo: Utilizando los datos de la tabla empleados, selecciona todos los empleados cuyo sueldo sea mayor al empleado que tiene el mayor sueldo del departamento de finanzas.
    - `select * from empleados where sueldo > (select sueldo from empleados where departamento = 'Finanzas');`
  ### Subconsultas y where parte 3
    - Ejemplo: Selecciona todos los registros superiores al promedio de nota.
    - `select * from notas where notas > (select avg(notas) from notas);`
  ### Subconsultas con IN
    - El operador IN es un operador muy útil en subconsultas
    - Ejemplo:
      - `select nombre from estudiantes where estudiante_id in (select estudiante_id from promedios where promedio_notas > 50);`
  ### Subconsultas con IN parte 2
    - select nombre as nombres_seleccionados from libros where libro_id in (select libro_id from valoraciones where valoracion_promedio > 4);
  ### Subconsultas con IN parte 3
    - select nombre as nombres_pacientes from pacientes where paciente_id in (select paciente_id from consultas where fecha_consulta < '2023-05-16');
  ### Subconsultas en el from
    - Una subconsulta en el FROM tiene la siguiente forma. -> SELECT * FROM (SELECT * FROM tabla1)
    - Ejemplo: 
      - **select avg(total_ventas) as promedio_ventas from ( select empleado_id, sum(monto) as total_ventas from ventas group by empleado_id)**
  ### Subconsultas en el FROM parte2
    - `select avg(total_goles) as promedio_goles from (select jugador_id, sum(goles) as total_goles from goles group by jugador_id)`

## Combinación de consultas
  ### Introducción a la cláusula unión de SQL
    - La sintaxis básica de UNION es la siguiente:
  `SELECT columna1, columna2
    FROM tabla1 
    UNION SELECT columna1, columna2
    FROM tabla2; `
    - Ejemplo:
    - select nombre as nombres from estudiantes union select nombre from profesores;
  ### Eliminar duplicados con union
    - La principal característica de UNION es que elimina las filas duplicadas del resultado final.
    - select email as correos_unicos from usuarios union select email from clientes;
  ### Union vs Union all
    - UNION ALL selecciona todos los registros incluido los dupplicado
    - Ejemplo: select * from empleados1 union all select * from empleados2;
  ### Introducción a intersección
    - El operador INTERSECT se utiliza para combinar dos SELECT y devolver los resultados que se encuentran en ambas consultas.
    - Ejemplo: select cliente from lista1 intersect select cliente from lista2;
  ### El operador Except
    - El operador EXCEPT en SQL se utiliza para devolver todas las filas en la primera consulta que no están presentes en la segunda consulta. En otras palabras, EXCEPT devuelve solo las filas, que son parte de la primera consulta pero no de la segunda consulta.
    - Ejemplo: select nombre from empleados except select nombre from gerentes;
  
## Inserción de registros
  ### Añadir un registro en una tabla
    - La instrucción INSERT la acompañaremos de las palabra clave INTO para especificar en qué tabla queremos insertar un valor y VALUES para especificar los valores que queremos insertar.
    - Ejemplo: ***insert into usuarios values(7,'Lucía','Sánchez','luciasanchez@outlook.com','555-5555');***

  ### Añadir un registro en una tabla parte 2
    - Ejemplo: ***insert into productos values (7,'Bolso',1000,10);***
  ### Especificando valores nulos
    - A la hora de insertar datos, si hay un valor que no conocemos, o es un valor que no queremos especificar, podemos ingresar un valor nulo.
    - Ejemplo: ***insert into productos values (7,'Bolso',1000,null);***
  ### Añadir un registro especificando columnas
    - Ejemplo: ***insert into usuarios (id, apellido, nombre, telefono, email) values (7,'Sánchez','Lucía','333-3333','luciasanchez@outlook.com');***
  ### Añadir un registro especificando solo algunas columnas
    - Ejemplo: ***insert into productos (nombre,stock) values ('Bolso',10);***
  ### Añadir fecha de hoy a un registro
    - Si queremos insertar la fecha actual al momento de crear un registro, podemos utilizar la función CURRENT_DATE para obtenerla.
    - Ejemplo: ***insert into productos (nombre, stock, fecha) values ('bolso',10,current_date);***
  ### Añadiendo fecha y hora al insertar
    - Si queremos insertar una fecha cualquiera al momento de crear un registro, simplemente debemos hacerlo especificando la fecha en el formato esperado.
    - Ejemplo: ***insert into productos (nombre,stock,fecha) values ('Bolso',10,'2023-01-01');***

  ### Añadir múltiples valores
    - Podemos ingresar varios registros en una tabla en una sola sentencia INSERT.
    - Ejemplo: ***insert into ventas values('Gorro', 5,1000),('Camiseta',10,500),('Pantalón',8,1500);***
  ### Crear un registro con un campo autoincremental
    - Ejemplo: ***insert into empleados (nombre, apellido) values ('Jane','Smith');***
  ### Añadir un registro asumiendo un valor por defecto
    - Al crear una tabla en SQL, puedes asignar valores predeterminados a sus columnas.
      - **CREATE TABLE Productos (ID INTEGER PRIMARY KEY AUTOINCREMENT, Nombre TEXT, Precio INTEGER DEFAULT 10);**
    - Ejemplo: ***insert into usuarios (nombre,apellido,email) values ('Lucía','Sánchez','luciasanchez@outlook.com');***
## Borrado y modificación de registros
  ### Borrar todos los registros de una tabla
    - La cláusula DELETE se utiliza para eliminar registros de una tabla. Cuando se ejecuta la instrucción DELETE FROM nombre_tabla, se eliminan todos los registros de la tabla especificada.
    - Ejemplo: ***delete from productos;***

  ### Borrar un registro con where
    - La sentencia DELETE se utiliza para eliminar datos de una tabla. Si queremos eliminar filas específicas en lugar de todos los datos de la tabla, podemos usar la cláusula WHERE junto con la sentencia DELETE.
    - Ejemplo: ***delete from usuarios where id = 2;***
  ###  Editar registros
    - La sentencia UPDATE se utiliza para realizar modificaciones en datos ya existentes de una tabla.
      - **UPDATE nombre_tabla SET nombre_columna = nuevo_valor**
    - La instrucción UPDATE afecta todas las filas de la tabla, ya que no hemos utilizado la cláusula WHERE para establecer una condición de filtro.
    - Ejemplo: ***update usuarios set registrado = true;***
  ### Editar todos los registros utilizando where
    - Ejemplo: ***update usuarios set telefono = '123-456' where id=4;***
  ### Editar múltiples columnas
    - En SQL es posible editar múltiples columnas de un registro utilizando la cláusula SET.
    - Ejemplo: 
      - ***update posts
        set
            titulo = 'Aprendiendo SQL',
            contenido = 'SQL es un lenguaje de programación para gestionar bases de datos relacionales'
        where
            id = 1;***
##