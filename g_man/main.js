console.log("Script Linked");

let data;
let display = document.getElementsByClassName('sub-content')[0];
let point = -1;
let timeout;
let typing = new Audio('typing.mp3');
typing.loop = true;

let xhr = new XMLHttpRequest;
xhr.open('GET', 'g_raw.txt', true);
xhr.onload = function () {
    data = xhr.responseText;
    data = data.split('\n');
    data.splice(-1);
};
xhr.send(null);

document.addEventListener('click', function(){

    point ++;
    if(point<data.length){
        //console.log(data[point]);
        line = data[point];
        typing.play();
        typeWritter(0, line);
    }else{
        typing.pause();
    }

    
});

function typeWritter(pos, line){
    console.log("typeWritter: " + pos)
    display.innerHTML = (data[point]).substring(0,pos+1);
    
    
    
    if(pos<line.length){
        clearTimeout(timeout);
        timeout = setTimeout(function(){
            typeWritter(pos+1,line)
        }, 9);
    }else{
        typing.pause();
    }
}