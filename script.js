rgb = []

function backgroundColor(){
    return Math.floor(Math.random()*255);
}

function generateColor(){
    rgb=[]
for(let i=0; i<3; i++){
    const setColor=backgroundColor();
    rgb.push(setColor);
    }

    document.querySelector('.result').innerHTML = `R:${rgb[0]} G:${rgb[1]} B:${rgb[2]}`;
    document.body.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
}


addEventListener('click',  generateColor)
  
