let saveEl = document.getElementById("save-el")
let count=0;

function incre(){
    count=count+1;
    document.getElementById("count-displayed").innerHTML=count;
}

function decre(){
    if(count>0){
    count=count-1;
    document.getElementById("count-displayed").innerHTML=count;
    }
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    document.getElementById("count-displayed").innerHTML=0;
    count = 0
}
