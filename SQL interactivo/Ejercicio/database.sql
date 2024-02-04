--TABLA Departamentos
CREATE TABLE Departamentos (
    ID INT PRIMARY KEY,
    Nombre_del_Departamento VARCHAR(100),
    Ubicacion VARCHAR(200)
);

-- TABLA Cursos
CREATE TABLE Cursos (
    ID INT PRIMARY KEY,
    Nombre_del_Curso VARCHAR(50),
    Departamento_ID INT,
    Duracion_del_Curso INT,
    Creditos INT,
    FOREIGN KEY (Departamento_ID) REFERENCES Departamentos(ID)
);

--TABLA Docentes
CREATE TABLE Docentes (
    ID INT PRIMARY KEY,
    Nombre_del_Docente VARCHAR(100),
    Departamento_ID INT,
    Titulo_Academico VARCHAR(200),
    FOREIGN KEY (Departamento_ID) REFERENCES Departamentos(ID)
);

-- TABLA Alumnos
CREATE TABLE Alumnos (
    ID INT PRIMARY KEY,
    Nombre_del_Alumno VARCHAR(100),
    Fecha_de_Nacimiento DATE,
    Direccion VARCHAR(200),
    Correo_Electronico VARCHAR(100)
);

--TABLA Matriculas
CREATE TABLE Matriculas (
    ID INT PRIMARY KEY,
    Alumno_ID INT,
    Curso_ID INT,
    Fecha_de_Matricula DATE,
    Estado_de_Matricula BOOLEAN,
    FOREIGN KEY (Alumno_ID) REFERENCES Alumnos(ID) ON DELETE CASCADE,
    FOREIGN KEY (Curso_ID) REFERENCES Cursos(ID) ON DELETE CASCADE
);

INSERT INTO Departamentos (ID, Nombre_del_Departamento, Ubicacion) VALUES 
(1, 'Departamento de Idiomas', 'Salon 1'), 
(2, 'Departamento de Deportes', 'Loza deportiva A'), 
(3, 'Departamento de Profesores', 'Salon 2');

INSERT INTO Cursos (ID, Nombre_del_Curso, Departamento_ID, Duracion_del_Curso, Creditos) VALUES
(1, 'Inglés', 1, 2, 2),
(2, 'Frances', 1, 3, 3),
(3, 'Portugues', 1, 2, 2),
(4, 'Futbol', 2, 2, 2),
(5, 'Natación', 2, 2, 2),
(6, 'Tutoria', 3, 1, 1);

INSERT INTO Docentes (ID, Nombre_del_Docente, Departamento_ID, Titulo_Academico) VALUES 
(1, 'Maria Perez', 1, 'Mg. Lenguas Extranjeras'),
(2, 'Daniela Torres', 1, 'Mg. Lenguas Extranjeras'),
(3, 'Pedro Carrera', 2, 'Mg. Atletismo'),
(4, 'Ana Maria Cervantes', 2, 'Mg. Atletismo'),
(5, 'Sofia Pade', 3, 'Mg. Psicologia');

INSERT INTO Alumnos (ID, Nombre_del_Alumno, Fecha_de_Nacimiento, Direccion, Correo_Electronico) VALUES 
(1, 'Claudo Lopez', TO_DATE('20001110', 'YYYYMMDD'), 'Calle 5', 'claudo@email.com'),
(2, 'Mariana Coa', TO_DATE('20010510', 'YYYYMMDD'), 'Calle 22', 'mariana@email.com'),
(3, 'Cesar Cahui', TO_DATE('20001205', 'YYYYMMDD'), 'Calle 4', 'cesar@email.com'),
(4, 'Lorena Quesada', TO_DATE('20001025', 'YYYYMMDD'), 'Calle 7', 'lorena@email.com'),
(5, 'Lucas Zet', TO_DATE('20010813', 'YYYYMMDD'), 'Calle 44', 'lucas@email.com');

INSERT INTO Matriculas (ID, Alumno_ID, Curso_ID, Fecha_de_Matricula, Estado_de_Matricula) VALUES 
(1, 1, 1,TO_DATE('20230314', 'YYYYMMDD'),TRUE),
(2, 2, 1,TO_DATE('20230314', 'YYYYMMDD'),TRUE),
(3, 2, 2,TO_DATE('20230314', 'YYYYMMDD'),TRUE),
(4, 3, 3,TO_DATE('20230314', 'YYYYMMDD'),FALSE),
(5, 3, 4,TO_DATE('20230314', 'YYYYMMDD'),FALSE),
(6, 4, 5,TO_DATE('20230314', 'YYYYMMDD'),TRUE),
(7, 5, 6,TO_DATE('20230314', 'YYYYMMDD'),FALSE),
(8, 4, 1,TO_DATE('20230314', 'YYYYMMDD'),TRUE),
(9, 5, 2,TO_DATE('20230314', 'YYYYMMDD'),TRUE),
(10, 5, 1,TO_DATE('20230314', 'YYYYMMDD'),FALSE);


-- Consultas
SELECT Alumnos.* FROM Alumnos INNER JOIN Matriculas ON Alumnos.ID = Matriculas.Alumno_ID
WHERE Matriculas.estado_de_matricula = TRUE and Matriculas.Curso_ID = 3; 