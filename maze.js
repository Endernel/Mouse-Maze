document.addEventListener("DOMContentLoaded", function() {
    let maze = document.getElementById("maze");
    let boundaries = document.querySelectorAll(".boundary");
    let start = document.getElementById("start");
    let end = document.getElementById("end");
    let message = document.getElementById("message");
    let gameActive = false;

    maze.addEventListener("mouseleave", lose);
    start.addEventListener("mouseover", startGame);
    end.addEventListener("mouseover", checkWin);

    boundaries.forEach(boundary => {
        boundary.addEventListener("mouseover", lose);
    });

    function startGame() {
        reset();
        gameActive = true;
    }

    function reset() {
        boundaries.forEach(boundary => {
            boundary.style.backgroundColor = "#CCCCCC";
        });
        message.textContent = "";
        message.style.color = "red"; 
        gameActive = false;
    }

    function lose() {
        if (gameActive) {
            boundaries.forEach(boundary => {
                boundary.style.backgroundColor = "red";
            });
            message.textContent = "You lost! Try again.";
            gameActive = false;
        }
    }

    function checkWin() {
        if (gameActive) {
            message.textContent = "You won! Play again?";
            message.style.color = "green"; 
            gameActive = false;
        }
    }

    window.restartGame = function() {
        reset();
        message.textContent = "";
    }
});
