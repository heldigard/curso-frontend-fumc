# 🎯 Ejercicios Prácticos de HTML y CSS

## 📍 ¿Dónde trabajar?

Vamos a usar **OneCompiler** para hacer nuestros ejercicios. Es una herramienta online que no requiere instalación.

🔗 **Link para trabajar:** [https://onecompiler.com/html/3x2zp2yd7](https://onecompiler.com/html/3x2zp2yd7)

---

## 📚 Ejercicios Progresivos

### 🟢 Ejercicio 1: Mi Primera Página Web

**Objetivo:** Crear tu primera página HTML con información personal.

**Instrucciones:**
1. Crea un título principal con tu nombre
2. Agrega un subtítulo que diga "Sobre mí"
3. Escribe un párrafo contándote quién eres
4. Agrega tu edad, ciudad y hobbie favorito

**Pista:** Usa las etiquetas `<h1>`, `<h2>` y `<p>`

**Código de ejemplo:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi Página</title>
</head>
<body>
    <h1>Juan Pérez</h1>
    <h2>Sobre mí</h2>
    <p>Hola, soy Juan y estoy aprendiendo HTML.</p>
    <p>Tengo 20 años y vivo en la Ciudad de México.</p>
    <p>Mi hobbie favorito es programar.</p>
</body>
</html>
```

---

### 🟢 Ejercicio 2: Mi Lista de Compras

**Objetivo:** Crear listas ordenadas y desordenadas.

**Instrucciones:**
1. Crea un título que diga "Lista de Compras"
2. Haz una lista desordenada con 5 productos que necesitas comprar
3. Crea otro título que diga "Pasos para ir al supermercado"
4. Haz una lista ordenada con 4 pasos

**Pista:** Usa `<ul>` con `<li>` para listas desordenadas y `<ol>` con `<li>` para listas ordenadas

**Código de ejemplo:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Lista de Compras</title>
</head>
<body>
    <h1>🛒 Lista de Compras</h1>
    <ul>
        <li>Leche</li>
        <li>Pan</li>
        <li>Huevos</li>
        <li>Frutas</li>
        <li>Verduras</li>
    </ul>

    <h2>Pasos para ir al supermercado</h2>
    <ol>
        <li>Hacer la lista</li>
        <li>Tomar dinero o tarjeta</li>
        <li>Ir al supermercado</li>
        <li>Comprar los productos</li>
    </ol>
</body>
</html>
```

---

### 🟡 Ejercicio 3: Mis Enlaces Favoritos

**Objetivo:** Aprender a crear enlaces y agregar imágenes.

**Instrucciones:**
1. Crea un título "Mis Sitios Web Favoritos"
2. Crea 3 enlaces a páginas que te gusten (Google, YouTube, etc.)
3. Agrega un subtítulo "Mi Imagen Favorita"
4. Inserta una imagen de internet (usa una URL de una imagen)

**Pista:** Usa `<a href="...">` para enlaces y `<img src="...">` para imágenes

**Código de ejemplo:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Mis Enlaces</title>
</head>
<body>
    <h1>🔗 Mis Sitios Web Favoritos</h1>
    <p><a href="https://www.google.com" target="_blank">Google</a></p>
    <p><a href="https://www.youtube.com" target="_blank">YouTube</a></p>
    <p><a href="https://www.github.com" target="_blank">GitHub</a></p>

    <h2>🖼️ Mi Imagen Favorita</h2>
    <img src="https://picsum.photos/300/200" alt="Imagen aleatoria">
</body>
</html>
```

---

### 🟡 Ejercicio 4: Agregando Colores (Tu Primer CSS)

**Objetivo:** Dar estilo a tu página con colores básicos.

**Instrucciones:**
1. Crea una página con un título y dos párrafos
2. En la etiqueta `<style>`, cambia el color de fondo del body
3. Cambia el color del texto del título
4. Cambia el color de los párrafos

**Pista:** Usa `background-color` para fondos y `color` para texto

**Código de ejemplo:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi Página con Colores</title>
    <style>
        body {
            background-color: lightblue;
        }
        
        h1 {
            color: darkblue;
        }
        
        p {
            color: navy;
        }
    </style>
</head>
<body>
    <h1>Bienvenido a mi página colorida</h1>
    <p>Este es mi primer párrafo con estilo.</p>
    <p>Este es mi segundo párrafo con estilo.</p>
</body>
</html>
```

---

### 🟡 Ejercicio 5: Tarjeta de Presentación

**Objetivo:** Crear una tarjeta con bordes, padding y alineación.

**Instrucciones:**
1. Crea un `<div>` con tu nombre, profesión y un párrafo sobre ti
2. Dale un borde al div
3. Agrega espacio interno (padding)
4. Centra el texto
5. Cambia el color de fondo

**Pista:** Usa `border`, `padding`, `text-align` y `background-color`

**Código de ejemplo:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi Tarjeta</title>
    <style>
        .tarjeta {
            border: 3px solid #333;
            padding: 20px;
            background-color: #f0f0f0;
            text-align: center;
            width: 300px;
            margin: 50px auto;
        }
        
        h2 {
            color: #2c3e50;
        }
        
        p {
            color: #555;
        }
    </style>
</head>
<body>
    <div class="tarjeta">
        <h2>María González</h2>
        <h3>Estudiante de Programación</h3>
        <p>Me encanta aprender cosas nuevas y crear páginas web.</p>
    </div>
</body>
</html>
```

---

### 🔴 Ejercicio 6: Mi Currículum Simple

**Objetivo:** Combinar todo lo aprendido en una sola página.

**Instrucciones:**
1. Crea secciones para: Datos Personales, Educación, Habilidades
2. Usa títulos, párrafos y listas
3. Aplica CSS para que se vea profesional:
   - Fondo de color suave
   - Títulos de un color destacado
   - Bordes en las secciones
   - Espaciado entre elementos

**Código de ejemplo:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi Currículum</title>
    <style>
        body {
            background-color: #ecf0f1;
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        
        .seccion {
            background-color: white;
            border-left: 5px solid #3498db;
            padding: 15px;
            margin-bottom: 20px;
        }
        
        h1 {
            color: #2c3e50;
            text-align: center;
        }
        
        h2 {
            color: #3498db;
        }
        
        ul {
            line-height: 1.8;
        }
    </style>
</head>
<body>
    <h1>📄 MI CURRÍCULUM</h1>
    
    <div class="seccion">
        <h2>Datos Personales</h2>
        <p><strong>Nombre:</strong> Tu Nombre</p>
        <p><strong>Email:</strong> tucorreo@ejemplo.com</p>
        <p><strong>Teléfono:</strong> 555-1234</p>
    </div>
    
    <div class="seccion">
        <h2>Educación</h2>
        <p><strong>Universidad XYZ</strong></p>
        <p>Ingeniería en Sistemas - 2020-2024</p>
    </div>
    
    <div class="seccion">
        <h2>Habilidades</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Trabajo en equipo</li>
            <li>Resolución de problemas</li>
        </ul>
    </div>
</body>
</html>
```

---

### 🔴 Ejercicio 7: Galería de Fotos

**Objetivo:** Crear una galería simple con CSS.

**Instrucciones:**
1. Crea un título "Mi Galería de Fotos"
2. Agrega 4 imágenes (puedes usar https://picsum.photos/200)
3. Haz que las imágenes tengan bordes redondeados
4. Agrégales un efecto hover (que cambie al pasar el mouse)
5. Organízalas en fila

**Código de ejemplo:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Galería</title>
    <style>
        body {
            background-color: #222;
            text-align: center;
            padding: 20px;
        }
        
        h1 {
            color: white;
        }
        
        .galeria {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        
        .foto {
            border-radius: 10px;
            border: 3px solid white;
            transition: transform 0.3s;
        }
        
        .foto:hover {
            transform: scale(1.1);
        }
    </style>
</head>
<body>
    <h1>🖼️ Mi Galería de Fotos</h1>
    <div class="galeria">
        <img class="foto" src="https://picsum.photos/200/200?random=1" alt="Foto 1">
        <img class="foto" src="https://picsum.photos/200/200?random=2" alt="Foto 2">
        <img class="foto" src="https://picsum.photos/200/200?random=3" alt="Foto 3">
        <img class="foto" src="https://picsum.photos/200/200?random=4" alt="Foto 4">
    </div>
</body>
</html>
```

---

### 🔴 Ejercicio 8: Menú de Navegación

**Objetivo:** Crear un menú de navegación estilizado.

**Instrucciones:**
1. Crea una lista de enlaces (Inicio, Servicios, Contacto)
2. Elimina las viñetas de la lista
3. Haz que los enlaces estén en horizontal
4. Dale estilo a los enlaces (color, fondo, hover)
5. Agrega contenido debajo del menú

**Código de ejemplo:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi Sitio Web</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: Arial, sans-serif;
        }
        
        nav {
            background-color: #2c3e50;
            padding: 15px;
        }
        
        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 30px;
        }
        
        nav a {
            color: white;
            text-decoration: none;
            padding: 10px 20px;
            display: block;
            border-radius: 5px;
            transition: background-color 0.3s;
        }
        
        nav a:hover {
            background-color: #3498db;
        }
        
        .contenido {
            padding: 40px;
            text-align: center;
        }
    </style>
</head>
<body>
    <nav>
        <ul>
            <li><a href="#inicio">🏠 Inicio</a></li>
            <li><a href="#servicios">💼 Servicios</a></li>
            <li><a href="#contacto">📧 Contacto</a></li>
        </ul>
    </nav>
    
    <div class="contenido">
        <h1>Bienvenido a mi sitio web</h1>
        <p>Este es un ejemplo de menú de navegación</p>
    </div>
</body>
</html>
```

---

## 💡 Consejos para los Ejercicios

1. **Copia el código en OneCompiler** y haz clic en "Run" para ver el resultado
2. **Experimenta**: Cambia colores, textos y tamaños
3. **No tengas miedo de equivocarte**: Los errores son parte del aprendizaje
4. **Personaliza los ejemplos**: Usa tu información real, tus colores favoritos
5. **Consulta**: Si tienes dudas, pregunta al profesor

---

## 📖 Referencia Rápida

### Colores comunes que puedes usar:
- `red`, `blue`, `green`, `yellow`, `purple`, `orange`
- `lightblue`, `lightgreen`, `lightpink`
- `darkblue`, `darkgreen`, `darkred`
- O usa códigos hex como: `#3498db`, `#e74c3c`, `#2ecc71`

### Propiedades CSS útiles:
```css
color: blue;                    /* Color del texto */
background-color: lightblue;    /* Color de fondo */
font-size: 20px;               /* Tamaño de letra */
text-align: center;            /* Alineación del texto */
padding: 20px;                 /* Espacio interno */
margin: 10px;                  /* Espacio externo */
border: 2px solid black;       /* Borde */
border-radius: 10px;           /* Bordes redondeados */
width: 300px;                  /* Ancho */
```

---

### 🔴 Ejercicio 9: Tabla de Horario de Clases (PLUS) ⭐

**Objetivo:** Aprender a crear y estilizar tablas en HTML.

**Instrucciones:**
1. Crea un título "Mi Horario Semanal"
2. Crea una tabla con 6 columnas (Hora, Lunes, Martes, Miércoles, Jueves, Viernes)
3. Agrega al menos 4 filas con diferentes horarios
4. Dale estilo a la tabla con bordes, colores y padding
5. Destaca la fila de encabezado con un color diferente

**Pista:** Usa `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>` y `<td>`

**Código de ejemplo:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi Horario</title>
    <style>
        body {
            background-color: #f5f5f5;
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        
        h1 {
            text-align: center;
            color: #2c3e50;
        }
        
        /* Estilo de la tabla */
        table {
            width: 100%;
            max-width: 900px;
            margin: 20px auto;
            border-collapse: collapse;
            background-color: white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        /* Encabezados de la tabla */
        th {
            background-color: #3498db;
            color: white;
            padding: 15px;
            text-align: center;
            font-weight: bold;
        }
        
        /* Celdas de la tabla */
        td {
            padding: 12px;
            text-align: center;
            border: 1px solid #ddd;
        }
        
        /* Alternar colores en las filas */
        tbody tr:nth-child(odd) {
            background-color: #f9f9f9;
        }
        
        tbody tr:nth-child(even) {
            background-color: #ffffff;
        }
        
        /* Efecto hover en las filas */
        tbody tr:hover {
            background-color: #e8f4f8;
            transition: background-color 0.3s;
        }
        
        /* Primera columna (horas) */
        td:first-child {
            background-color: #ecf0f1;
            font-weight: bold;
            color: #2c3e50;
        }
    </style>
</head>
<body>
    <h1>📅 Mi Horario Semanal</h1>
    
    <table>
        <thead>
            <tr>
                <th>⏰ Hora</th>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miércoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>8:00 - 9:00</td>
                <td>Matemáticas</td>
                <td>Historia</td>
                <td>Matemáticas</td>
                <td>Inglés</td>
                <td>Ciencias</td>
            </tr>
            <tr>
                <td>9:00 - 10:00</td>
                <td>Programación</td>
                <td>Matemáticas</td>
                <td>Programación</td>
                <td>Historia</td>
                <td>Programación</td>
            </tr>
            <tr>
                <td>10:00 - 11:00</td>
                <td>Inglés</td>
                <td>Ciencias</td>
                <td>Educación Física</td>
                <td>Programación</td>
                <td>Arte</td>
            </tr>
            <tr>
                <td>11:00 - 12:00</td>
                <td>Historia</td>
                <td>Programación</td>
                <td>Inglés</td>
                <td>Matemáticas</td>
                <td>Inglés</td>
            </tr>
        </tbody>
    </table>
    
    <p style="text-align: center; color: #666; margin-top: 20px;">
        💡 Puedes agregar más filas o columnas según necesites
    </p>
</body>
</html>
```

**Variación - Tabla de Calificaciones:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Mis Calificaciones</title>
    <style>
        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            font-family: Arial, sans-serif;
            padding: 40px;
            min-height: 100vh;
        }
        
        .contenedor {
            max-width: 700px;
            margin: 0 auto;
        }
        
        h1 {
            text-align: center;
            color: white;
            margin-bottom: 30px;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        
        th {
            background-color: #5a67d8;
            color: white;
            padding: 15px;
            text-align: left;
        }
        
        td {
            padding: 12px 15px;
            border-bottom: 1px solid #e2e8f0;
        }
        
        tr:last-child td {
            border-bottom: none;
        }
        
        /* Colorear calificaciones */
        .excelente {
            color: #48bb78;
            font-weight: bold;
        }
        
        .bueno {
            color: #4299e1;
            font-weight: bold;
        }
        
        .regular {
            color: #ed8936;
            font-weight: bold;
        }
        
        .bajo {
            color: #f56565;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="contenedor">
        <h1>📊 Mis Calificaciones del Semestre</h1>
        
        <table>
            <thead>
                <tr>
                    <th>Materia</th>
                    <th>Parcial 1</th>
                    <th>Parcial 2</th>
                    <th>Promedio</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Programación</td>
                    <td class="excelente">95</td>
                    <td class="excelente">98</td>
                    <td class="excelente">96.5</td>
                </tr>
                <tr>
                    <td>Matemáticas</td>
                    <td class="bueno">85</td>
                    <td class="bueno">88</td>
                    <td class="bueno">86.5</td>
                </tr>
                <tr>
                    <td>Historia</td>
                    <td class="regular">78</td>
                    <td class="bueno">82</td>
                    <td class="bueno">80</td>
                </tr>
                <tr>
                    <td>Inglés</td>
                    <td class="excelente">92</td>
                    <td class="excelente">90</td>
                    <td class="excelente">91</td>
                </tr>
                <tr>
                    <td>Ciencias</td>
                    <td class="bueno">88</td>
                    <td class="excelente">91</td>
                    <td class="bueno">89.5</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
```

**Conceptos de tablas que aprenderás:**

- `<table>` - Contenedor principal de la tabla
- `<thead>` - Encabezado de la tabla
- `<tbody>` - Cuerpo de la tabla
- `<tr>` - Table Row (fila)
- `<th>` - Table Header (celda de encabezado)
- `<td>` - Table Data (celda de datos)
- `border-collapse` - Une los bordes de las celdas
- `:nth-child()` - Selecciona filas pares/impares
- `:hover` - Efecto al pasar el mouse

**💡 Ideas para personalizar:**
- Crea tu propio horario real
- Haz una tabla de tus películas favoritas
- Crea una tabla de precios de productos
- Diseña una tabla de tus metas del mes

---

## 🎯 Reto Final (Opcional)

**Crea tu propia página web** combinando elementos de todos los ejercicios:
- Un menú de navegación
- Una sección de presentación
- Una galería de imágenes
- Una lista de habilidades o intereses
- Una tabla (¡tu nuevo super poder!)
- ¡Dale tu toque personal con colores y estilos!

---

## ✅ Entrega

Una vez que termines los ejercicios que puedas, comparte tu código con el profesor o toma capturas de pantalla de tus páginas terminadas.

¡Mucho éxito! 🚀
