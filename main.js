//event listener waits for user input
// console.log('connected')

// let numberBoxes = document.querySelectorAll('.numberButton')
// console.log(numberBoxes)
// let opBoxes = document.querySelectorAll('.opButton')
// console.log(opBoxes)
// let mathProblem = document.querySelector('#mathProblem')
// console.log(mathProblem)

// for (let numBox of numberBoxes) {
//     numBox.addEventListener('click', () => {
//         console.log(numBox.innerText)
//         let text = document.createTextNode(numBox.innerText)
//         mathProblem.appendChild(text)
//         // when the user clicks on the box, console log the name inside the box. the action inside the {} is called a callback
//         // () => shorthand for "do an anonymous function" the contents of that function being below, to display the innerText of the div box
//     })
// }

// for (let opBox of opBoxes) {
//     opBox.addEventListener('click', () => {
//         console.log(opBox.innerText)
//         let text = document.createTextNode(opBox.innerText)
//         mathProblem.appendChild(text)
//     })
// }

// clearButton.addEventListener('click', () => {
//     mathProblem.innerText = ''; 
// })

// let question = document.getElementById('mathProblem');

// equalsButton.addEventListener('click', () => {
//     console.log(eval(question.textContent))
//     mathProblem.innerText = eval(question.textContent); 
// })

var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btnText = e.target.innerText;
        if(btnText === '×') {
            btnText = '*';
        }
        if(btnText === '÷') {
            btnText = '/';
        } 
        screen.value+=btnText;
    });
}

function sin() {
    screen.value=Math.sin(screen.value);
}

function cos() {
    screen.value=Math.cos(screen.value);
}

function tan() {
    screen.value=Math.tan(screen.value);
}

function pow() {
    screen.value=Math.pow(screen.value,2);
}

function sqrt() {
    screen.value=Math.sqrt(screen.value,2);
}

function log() {
    screen.value=Math.log(screen.value);
}

function pi() {
    screen.value= 3.141592653589793238462643383279502884197; 
}

function sien() {
    screen.value=2.71828182846;
}

function fact() {
    var i, num, f;
    f=1
    num=screen.value;
    for(i=1; i<=num; i++)
    {
        f=f*i;
    }

    i=i-1;

    screen.value=f;
}

function backspc() {
    screen.value=screen.value.substr(0,screen.value.length-1);
}

