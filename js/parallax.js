// paralax effect

document.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll(".object").forEach(function(move) {
        let movingValue = move.getAttribute("data-value");
        let x = (e.clientX * movingValue) / 250;
        let y = (e.clientY * movingValue) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";

    })
}