const div = document.getElementById("time");

setInterval(() => {
    const date = new Date(Date.now());
    const time = `${date.toLocaleTimeString()}`;
    if(div.firstChild) div.firstChild.remove();
    div.appendChild(document.createTextNode(time));
}, 1000); 