const h1 = document.querySelector('h1');
const input1 = document.getElementById('calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const res = document.querySelector('#result');
const form = document.querySelector('#form');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    // console.log({event});
    event.preventDefault();
    const calc = Number(input1.value) + Number(input2.value);
    res.innerText = "Resultado " + calc;
    console.log(calc);
}


// console.log(input.value);
// console.log(p.textContent);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// });

// h1.innerHTML = 'Patito <br> Feo';
// h1.innerText = 'Patito <br> Feo';
// // console.log(h1.getAttribute('class'));
// // h1.setAttribute('class', 'rojo');

// h1.classList.add('rojo');
// h1.classList.remove('verde');
// // h1.classList.toggle('verde');
// // h1.classList.contains('verde');

// input.value = "Holi";

// const img = document.createElement('img');
// img.setAttribute('src', 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
// console.log(img);

// pid.innerHTML = "";
// pid.appendChild(img);