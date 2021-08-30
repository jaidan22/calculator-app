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
display.focus();
let display_ans = document.querySelector('.answer');
display.value = '';
let keys = document.querySelector('#keys');
keys.addEventListener('click', (e) => {

    // DISPLAYING INPUT
    if (e.target.classList.contains('num') || e.target.classList.contains('func')) {
        display_ans.style.display = 'none';
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

        // INVALID FORMAT 
        if (/^\D|\D$|\D\D/.test(display.value)) {
            display.value = 'Invalid format';
        } else {
            let nos = display.value.match(/\d+([.]\d+)?/g);  // gives an array of numbers
            let ops = display.value.match(/[+/x*-]|[÷]/g);  // gives an array of operators
            let ans;
            for (let i = 0; i < ops.length; i++){
                if (ops[i] == 'x' || '÷' || '*' || '/') 
                    switch (ops[i]) {
                        case 'x':
                        case '*':
                            nos[i] = Number(nos[i]) * Number(nos[i + 1]);
                            nos.splice(i + 1, 1);
                            ops.splice(i, 1);
                            i--;
                            break;
                        case '÷':
                        case '/':
                            nos[i] = Number(nos[i]) / Number(nos[i + 1]);
                            nos.splice(i + 1, 1);
                            ops.splice(i, 1);
                            i--;
                            break;
                    }
                }
            ans = Number(nos[0]);
            for (let i = 0; i < ops.length; i++)
                switch (ops[i]) {
                    case '+':
                         ans += Number(nos[i+1]);
                         break;
                    case '-':
                         ans -= Number(nos[i+1]);
                         break;
                    }
            display_ans.value = ans;
            display_ans.style.display = 'block';
        }
    }
});


