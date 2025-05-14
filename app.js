const time = document.getElementById('time')

function display () {
    const date = new Date ()
    const stringTime = `${date.getHours()}:
                        ${date.getMinutes()}:
                        ${date.getSeconds()}`
   
   time.innerHTML = stringTime
}

setInterval (display , 1000);