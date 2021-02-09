
function increment() {
    const value = document.getElementById('counter').textContent;
    document.getElementById('counter').innerHTML = parseInt(value)+1;
}

function decrement() {
    const value = document.getElementById('counter').textContent;
    document.getElementById('counter').innerHTML = parseInt(value)-1;
}
