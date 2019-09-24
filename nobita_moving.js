function arrow_moving() {
    window.addEventListener("keydown", onKeyDown);
}

function onKeyDown(event) {

    const velocity = 5;
    const roomSide = 400;
    const arrowLeftKeyCode = 37;
    const arrowUpKeyCode = 38;
    const arrowRightKeyCode = 39;
    const arrowDownKeyCode = 40;

    let nobiElement = document.getElementById("nobita");

    let nobiElementTopping = nobiElement.style.top;
    let top = parseInt(nobiElementTopping);

    let nobiElementLeft = nobiElement.style.left;
    let left = parseInt(nobiElementLeft);

    let key = event.which;
    switch (key) {
        case arrowLeftKeyCode:
            left -= velocity;
            if (left < 0) {
                left += roomSide;
            }
            break;
        case arrowUpKeyCode:
            top -= velocity;
            if (top < 0) {
                top += roomSide;
            }
            break;
        case arrowRightKeyCode:
            left += velocity;
            if (left > roomSide) {
                left -= roomSide;
            }
            break;
        case arrowDownKeyCode:
            top += velocity;
            if (top > roomSide) {
                top -= roomSide;
            }
            break;
    }

    nobiElement.style.top = top + "px";
    nobiElement.style.left = left + "px";
}
