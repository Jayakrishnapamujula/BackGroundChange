let button = document.getElementById("changeBgColor");
let body = document.getElementsByTagName("body");
let color = document.getElementById("color");
console.log(color.innerText);

    // // Function to create random numbers
    // let getRandomNumber = (maxNum) =>{
    //     return Math.floor(Math.random() * maxNum);
    // };

    // // Function to create random RGBA colors
    // let getRandomColor =() =>{
    // let r = getRandomNumber(256);
    // let g = getRandomNumber(256);
    // let b = getRandomNumber(256);
    // let a=Math.random().toFixed(1);

    // return `rgba(${r}, ${g}, ${b}, ${a})`;
    // };
    let getRandomColor = () =>{
        let letters = "0123456789ABCDEF";
        let colour='#';
        for(let i=0;i<6;i++)
            colour=colour+letters[(Math.floor(Math.random()*16))];

        console.log(colour);
        return colour;
    }

    //  Function to set background color
    let setBackgroundColor = () =>{
        var randomColor = getRandomColor();
        body[0].style.backgroundColor=randomColor;
        color.innerText ="Background Color  :  "+randomColor; 
        // console.log(randomColor);
    }
    
    button.addEventListener("click", setBackgroundColor);
    window.onload=setBackgroundColor;
