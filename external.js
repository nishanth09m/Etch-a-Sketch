let size = 16;
let randomColor = false;
let eraseColor = false;
function egrid(size){
    for(let i = 0; i < size; i++){
        let div = document.createElement('div');
        div.setAttribute('id',`${i}`);
        div.setAttribute('style', 'height: 35px; width: 560px;display: flex;flex: 1;');    
        main.appendChild(div);
        for(let j = 0; j < size; j++){
            let div1 = document.createElement('div');
            div1.setAttribute('id',`${i}` + `${j}`);
            div1.setAttribute('style', 'background: white; width: 35px; display: flex; flex-grow: 1;');    

            div1.addEventListener("mouseenter", (event) => {
                if(randomColor){
                    div1.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
                }else{
                    let picker = document.querySelector('#colorpicker');
                    div1.style.backgroundColor = picker.value;
                }

                if(eraseColor){
                    div1.style.backgroundColor = 'white';
                }
            });
            div.appendChild(div1);
        }
    }
}

let main = document.querySelector('#container');
let clear = document.querySelector('#clear');
let random = document.querySelector('#randomcolor');
let btn = document.querySelector('#btn');
let color = document.querySelector('#color');
let erase =  document.querySelector('#erase');

main.setAttribute('style', 'align-items: center; justify-content: center;')

egrid(size);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

btn.addEventListener('click', (event) =>{
    size = Number(prompt("Enter your prefered grid size?"));
    removeAllChildNodes(main);
    randomColor = false;
    eraseColor = false;
    egrid(size);
});

clear.addEventListener('click', () => {
    removeAllChildNodes(main);
    randomColor = false;
    eraseColor = false;
    egrid(size);
});

random.addEventListener('click',() => {
    randomColor = true;
    eraseColor = false;
});

color.addEventListener('click', () => {
    randomColor = false;
    eraseColor = false;
});

erase.addEventListener('click', () => { 
    eraseColor = true;
    randomColor = false;
});



