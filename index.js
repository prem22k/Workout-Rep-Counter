let count = 0; 
let saveEl = document.getElementById("save-el"); 

function increment() {
    count++; 
    document.getElementById("count-el").innerText = count;
}

function save() {
    let previousEntries = saveEl.innerText;
    saveEl.innerText = previousEntries + " " + count;
    count = 0; 
    document.getElementById("count-el").innerText = count; 
}
