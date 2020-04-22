// const push = document.addEventListener('click', addItem());
let second = () => {
    const figure = document.querySelector('figure');
    const grid = document.createElement('h5');
    grid.innerText= "Grid in a Second";
    grid.style.fontSize = "6rem";
    figure.appendChild(grid);
    setTimeout(() => {
        grid.remove();
    }, 999);
}
second();
const addItem = () => {
    const figure = document.querySelector('figure');
    let i;
    for (i=0; i<10; i++){
        const itemDiv = document.createElement('div');
        let secondClass = itemDiv.innerText = `item-${i+1}`;
        itemDiv.classList.add('item');
        let three = itemDiv.classList.add(secondClass);
        figure.appendChild(itemDiv);
        // console.log(i)
    }
}

setTimeout(() => {
    addItem();
}, 1000);

setTimeout(()=>{
    let grids = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
for(let q = 0; q<10; q++){
    let itemClass = `.item-${q+1}`;
    let num = Math.floor((Math.random() * 1000));
    let colors = `#${num*2}`;
    let backColor =`#${num}`;
    document.querySelector(itemClass).style.backgroundColor=backColor;
    document.querySelector(itemClass).style.color=colors;
    let element = document.querySelector(itemClass).style.gridArea=grids[q];
    console.log(num);
    console.log(element)
}
},2000);