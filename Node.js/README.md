# Node.js
## Detalles
### Plataforma de aprendizaje
- Udemy - Building Nodejs API with MongoDB For Beginners
- EDx - Introduction to Node.js
### Tiempo de duracion
- Fecha inicio: 05-01-2024
- Fechan fin:

### Recursos
- [EDx - Introduction to Node.js](https://www.edx.org/learn/node-js/the-linux-foundation-introduction-to-node-js)
- [Udemy - Building Nodejs API with MongoDB For Beginners](https://www.udemy.com/course/nodejs-api-with-mongodb-for-beginners/)

## 1. Introducción a Node.js
### Set up Node en Linux
1. Instalar fnm: 
   * `$ curl -fsSL https://fnm.vercel.app/install | bash`
2. Verificar si fnm instalo correctamente: 
   * `$ fnm --version`
3. Intalar la último LTS (Long-Term Support) version de Node: 
   * `$ fnm install --lts`
4. Veificar si Node esta instalado: 
   * `$ node -v`

**Nota:** Para "fijar" una versión específica de Node.js para su proyecto, debe crear un archivo .nvmrc en la raíz del directorio de su proyecto.
### Empezando un proyecto Node
1. Para empezar un Node project, se necesita crear **package.json**, usando el siguiente comando: 
   * `npm init`.
2. Servir los archivos de una carpeta, usando serve: 
   * `npm install serve`.
3. Crear una nueva carpeta llamada static en el directorio de su proyecto:
   * `mkdir static`.
4. Crear 2 archivos dentro de la carpeta static:
   * index.html
   * app.js
5. Navegar hasta el directorio que contiene la carpeta static dentro de la terminal.
6. Para iniciar el servidor de archivos:
   * `npx serve -p 5050 static`
7. Navegar a: http://localhost:5050

![Resultado del proyecto node 00-Hello-node](./00-Hello-Node/assets/img/result-web-0.png)

### Creando comandos de shell de NPM
1. Para crear comandos de shell personalizados de Node Package Manager (NPM), se definen dentro del archivo **package.json**, específicamente en el objeto scripts.

2. En el script se encuentra los siguientes comandos:
   * **static** ejecuta serve -p 5050 static, que empieza el archivo servidor en el port 5050. 
   * **test**  muestra un mensaje de error.

3. Para ejecutar los comandos del script, dentro del terminal, se usa el siguiente comando, junto con el nombre del script:
   * `npm run static `

![Ejecucion del npm run static](./00-Hello-Node/assets/img/script.png)
4. 