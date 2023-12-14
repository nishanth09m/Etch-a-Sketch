

 for(let i = 0; i < 16; i++){
    let main = document.querySelector('#container');
    let div = document.createElement('div');
    div.setAttribute('id',`${i}`);
    div.setAttribute('style', 'background: white; height: 35px; width: 560px;display: flex;');    
    main.appendChild(div);
    for(let j = 0; j < 16; j++){
        let div1 = document.createElement('div');
        div1.setAttribute('id',`${i}` + `${j}`);
        div1.setAttribute('style', 'background: blue; height: 35px; width: 35px;');    

        div1.addEventListener("mouseenter", (event) => {
            div1.style.backgroundColor = 'black';
        })

        div.appendChild(div1);

    }
}

