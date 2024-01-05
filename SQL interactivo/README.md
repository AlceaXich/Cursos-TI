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