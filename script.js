// TOGGLE DARK
let toggleD = document.querySelector('#toggle_d');
toggleD.addEventListener('click', (e) => {
    document.querySelector('#style').setAttribute('href','style_dark.css');
});

// TOGGLE LIGHT
let toggleL = document.querySelector('#toggle_l');
toggleL.addEventListener('click', (e) => {
    document.querySelector('#style').setAttribute('href','style.css');
});

let display = document.querySelector('.type');
let display_ans = document.querySelector('.answer');
display.value = '';
let keys = document.querySelector('#keys');
keys.addEventListener('click', (e) => {

    // DISPLAYING INPUT
    if (e.target.classList.contains('num')||e.target.classList.contains('func')) {
            display.value += e.target.innerText;
    }

    // DELETE and ALL CLEAR BUTTON
    if (e.target.classList.contains('del')) {
        display_ans.style.display = 'none';
        if (e.target.innerText=='AC') {
            display.value = '';
        } else {
            display.value = display.value.slice(0,-1);
        }
    }

    // OPERATIONS
    if (e.target.classList.contains('equal')) {
        if (/^\D|\D$|\D\D/.test(display.value)) {
            display.value = 'Invalid format';
        } else {
            let nos = display.value.match(/\d+/g);
            let ans = Number(nos[0]);   // gives an array of numbers
            let ops = display.value.match(/\D/g);  // gives an array of operators
            for (let i = 0; i < ops.length; i++)
                switch (ops[i]) {
                    case '+':
                        ans += Number(nos[i+1]);
                        break;
                    case '-':
                        ans -= Number(nos[i+1]);
                        break;
                    case 'x':
                        ans *= Number(nos[i+1]);
                        break;
                    case '÷':
                        ans /= Number(nos[i+1]);
                        break;
                }
            display_ans.innerText = ans;
            display_ans.style.display = 'block';
        }
    }
});


