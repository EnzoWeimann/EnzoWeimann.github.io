"use strict"

let proyectosArr = ["Person Management with Spring", "Budget app with Angular", "Random quote generator", "Palindrome Checker with JS", "Showpping cart with JS"];
let urlArr = ["https://github.com/EnzoWeimann/People-Management-with-Spring", "https://github.com/EnzoWeimann/AppBudget", "https://codepen.io/Endage/pen/BagBLEp", "https://codepen.io/Endage/pen/OPPdJjW", "https://codepen.io/Endage/pen/KwwbvOd"];
let srcArr = ["/imagenes/Control_usuarios_index.png", "/imagenes/image1.png", "./imagenes/random_quote.png", "./imagenes/palindrome.png", "./imagenes/shopping_cart.png"];

let certificadosArr = ["SCRUM certificate", "Responsive web design certificate", "JavaScript certificate"];
let certificadosUrl = ["https://www.scrumstudy.com/certification/verify?type=SFC&number=1054182", "https://freecodecamp.org/certification/EnzoW/responsive-web-design", "https://www.freecodecamp.org/certification/EnzoW/javascript-algorithms-and-data-structures-v8"];
let certificadosSrc = ["./imagenes/Certificado_SCRUM.png", "./imagenes/Responsive_web_design.png", "./imagenes/Js_certificate.png"];

let seccionProyectos = document.getElementById("projects");
let seccionCertificados = document.getElementById("certificates");


for (let i = 0; i< proyectosArr.length; i++) {
    seccionProyectos.innerHTML += 
        `<a class="project-tile" href="${urlArr[i]}" target="_blank">
            <img class="project-img" src="${srcArr[i]}" alt="Imagen del proyecto" />
            <p>${proyectosArr[i]}</p>
        </a>`;
}

for (let i = 0; i< certificadosArr.length; i++) {
    seccionCertificados.innerHTML += 
        `<a class="project-tile" href="${certificadosUrl[i]}" target="_blank">
            <img class="project-img" src="${certificadosSrc[i]}" alt="Imagen del certificado" />
            <p>${certificadosArr[i]}</p>
        </a>`;
}