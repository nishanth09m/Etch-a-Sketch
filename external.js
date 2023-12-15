let size = 16;
function egrid(size){
 for(let i = 0; i < size; i++){
    let div = document.createElement('div');
    div.setAttribute('id',`${i}`);
    div.setAttribute('style', 'background: green; height: 35px; width: 560px;display: flex;flex: 1;');    
    main.appendChild(div);
    for(let j = 0; j < size; j++){
        let div1 = document.createElement('div');
        div1.setAttribute('id',`${i}` + `${j}`);
        div1.setAttribute('style', 'background: blue; width: 35px; display: flex; flex-grow: 1;');    

        div1.addEventListener("mouseenter", (event) => {
            div1.style.backgroundColor = 'black';
        })

        div.appendChild(div1);
    }
}
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let main = document.querySelector('#container');
egrid(size);

let btn = document.querySelector('#btn');
btn.addEventListener('click', (event) =>{
    size = Number(prompt("Enter your prefered grid size?"));
    removeAllChildNodes(main);
    egrid(size);
});

let clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    removeAllChildNodes(main);
    egrid(size);
})



