var val = document.getElementById('bx1').innerHTML;
var currentturn;
currentturn = "X";
var Xwin = 0;
var OWin = 0;

var currentturn2;
var boxID = "";
var moves = 0;


// function Toggleturn()
// {


// }
// Game Logic 


document.getElementById('bx1').addEventListener('click', function () {

    if (document.getElementById('bx1').innerHTML == "-") {
        document.getElementById('bx1').innerHTML = "X";
        var currentturn = document.getElementById('bx1').innerHTML;
        moves++;
        Checkwinner();

    }
    else if (document.getElementById('bx1').innerHTML == "X") {
        document.getElementById('CurrentTurn').innerHTML = "Current Turn is : O"
    }
    else if (document.getElementById('bx1').innerHTML == "O") {
        document.getElementById('CurrentTurn').innerHTML == "Current Turn is : X";
    }


})


document.getElementById('bx2').addEventListener('click', function () {

    if (document.getElementById('bx2').innerHTML == "-") {
        if (currentturn == "X") {

            document.getElementById('bx2').innerHTML = "O";
            currentturn = document.getElementById('bx2').innerHTML;
            moves++;
            Checkwinner();
        }
        else if (currentturn == "O") {

            document.getElementById('bx2').innerHTML = "X";
            currentturn = document.getElementById('bx2').innerHTML;
            moves++;
            Checkwinner();
        }

    }
    else if (document.getElementById('bx2').innerHTML == "X") {
        document.getElementById('CurrentTurn').innerHTML = "Current Turn is : O"
    }
    else if (document.getElementById('bx2').innerHTML == "O") {
        console.log(currentturn);
        document.getElementById('CurrentTurn').innerHTML = "Current Turn is : X";
    }


})


document.getElementById('bx3').addEventListener('click', function () {

    if (document.getElementById('bx3').innerHTML == "-") {
        if (currentturn == "X") {

            document.getElementById('bx3').innerHTML = "O";
            currentturn = document.getElementById('bx3').innerHTML;
            moves++;
            Checkwinner();

        }
        else if (currentturn == "O") {

            document.getElementById('bx3').innerHTML = "X";
            currentturn = document.getElementById('bx3').innerHTML;
            moves++;
            Checkwinner();
        }

    }
    else if (document.getElementById('bx3').innerHTML == "X") {
        document.getElementById('CurrentTurn').innerHTML = "Current Turn is : O"
    }
    else if (document.getElementById('bx3').innerHTML == "O") {
        document.getElementById('CurrentTurn').innerHTML = "Current Turn is : X";
    }
})



document.getElementById('bx4').addEventListener('click', function () {

    if (document.getElementById('bx4').innerHTML == "-") {
        if (currentturn == "X") {

            document.getElementById('bx4').innerHTML = "O";
            currentturn = document.getElementById('bx4').innerHTML;
            moves++;
            Checkwinner();

        }
        else if (currentturn == "O") {

            document.getElementById('bx4').innerHTML = "X";
            currentturn = document.getElementById('bx4').innerHTML;
            moves++;
            Checkwinner();

        }

    }
    else if (document.getElementById('bx4').innerHTML == "X") {
        document.getElementById('CurrentTurn').innerHTML = "Current Turn is : O"
    }
    else if (document.getElementById('bx4').innerHTML == "O") {
        document.getElementById('CurrentTurn').innerHTML = "Current Turn is : X";
    }
})



document.getElementById('bx5').addEventListener('click', function () {

    if (document.getElementById('bx5').innerHTML == "-") {
        if (currentturn == "X") {

            document.getElementById('bx5').innerHTML = "O";
            currentturn = document.getElementById('bx5').innerHTML;
            moves++;
            Checkwinner();

        }
        else if (currentturn == "O") {

            document.getElementById('bx5').innerHTML = "X";
            currentturn = document.getElementById('bx5').innerHTML;
            moves++;
            Checkwinner();
        }

    }
    else if (document.getElementById('bx5').innerHTML == "X") {
        document.getElementById('CurrentTurn').innerHTML = "Current Turn is : O"
    }
    else if (document.getElementById('bx5').innerHTML == "O") {
        document.getElementById('CurrentTurn').innerHTML = "Current Turn is : X";
    }


})




document.getElementById('bx6').addEventListener('click', function () {

    if (document.getElementById('bx6').innerHTML == "-") {
        if (currentturn == "X") {

            document.getElementById('bx6').innerHTML = "O";
            currentturn = document.getElementById('bx6').innerHTML;
            moves++;
            Checkwinner();

        }
        else if (currentturn == "O") {

            document.getElementById('bx6').innerHTML = "X";
            currentturn = document.getElementById('bx6').innerHTML;
            moves++;
            Checkwinner();
        }
    }
    else if (document.getElementById('bx6').innerHTML == "X") {
        document.getElementById('CurrentTurn').innerHTML = "Current Turn is : O"
    }
    else if (document.getElementById('bx6').innerHTML == "O") {
        document.getElementById('CurrentTurn').innerHTML = "Current Turn is : X";
    }

})




document.getElementById('bx7').addEventListener('click', function () {

    if (document.getElementById('bx7').innerHTML == "-") {
        if (currentturn == "X") {

            document.getElementById('bx7').innerHTML = "O";
            currentturn = document.getElementById('bx7').innerHTML;
            moves++;
            Checkwinner();

        }
        else if (currentturn == "O") {

            document.getElementById('bx7').innerHTML = "X";
            currentturn = document.getElementById('bx7').innerHTML;
            moves++;
            Checkwinner();
        }

    }
    else if (document.getElementById('bx7').innerHTML == "X") {
        document.getElementById('CurrentTurn').innerHTML = "Current Turn is : O"
    }
    else if (document.getElementById('bx7').innerHTML == "O") {
        document.getElementById('CurrentTurn').innerHTML = "Current Turn is : X";
    }

})



document.getElementById('bx8').addEventListener('click', function () {

    if (document.getElementById('bx8').innerHTML == "-") {
        if (currentturn == "X") {

            document.getElementById('bx8').innerHTML = "O";
            currentturn = document.getElementById('bx8').innerHTML;
            moves++;
            Checkwinner();

        }
        else if (currentturn == "O") {

            document.getElementById('bx8').innerHTML = "X";
            currentturn = document.getElementById('bx8').innerHTML;
            moves++;
            Checkwinner();

        }

    }
    else if (document.getElementById('bx8').innerHTML == "X") {
        document.getElementById('CurrentTurn').innerHTML = "Current Turn is : O"
    }
    else if (document.getElementById('bx8').innerHTML == "O") {
        document.getElementById('CurrentTurn').innerHTML = "Current Turn is : X";
    }


})



document.getElementById('bx9').addEventListener('click', function () {

    if (document.getElementById('bx9').innerHTML == "-") {
        if (currentturn == "X") {

            document.getElementById('bx9').innerHTML = "O";
            currentturn = document.getElementById('bx9').innerHTML;
            moves++;
            Checkwinner();

        }
        else if (currentturn == "O") {

            document.getElementById('bx9').innerHTML = "X";
            currentturn = document.getElementById('bx9').innerHTML;
            moves++;
            Checkwinner();
        }

    }
    else if (document.getElementById('bx9').innerHTML == "X") {
        document.getElementById('CurrentTurn').innerHTML = "Current Turn is : O"
    }
    else if (document.getElementById('bx9').innerHTML == "O") {
        document.getElementById('CurrentTurn').innerHTML = "Current Turn is : X";
    }

})
// Winning Logic 
function Checkwinner() {
    if (
        (document.getElementById('bx1').innerHTML == "X" && document.getElementById('bx2').innerHTML == "X" && document.getElementById('bx3').innerHTML == "X") ||
        (document.getElementById('bx4').innerHTML == "X" && document.getElementById('bx5').innerHTML == "X" && document.getElementById('bx6').innerHTML == "X") ||
        (document.getElementById('bx7').innerHTML == "X" && document.getElementById('bx8').innerHTML == "X" && document.getElementById('bx9').innerHTML == "X") ||
        (document.getElementById('bx1').innerHTML == "X" && document.getElementById('bx4').innerHTML == "X" && document.getElementById('bx7').innerHTML == "X") ||
        (document.getElementById('bx2').innerHTML == "X" && document.getElementById('bx5').innerHTML == "X" && document.getElementById('bx8').innerHTML == "X") ||
        (document.getElementById('bx3').innerHTML == "X" && document.getElementById('bx6').innerHTML == "X" && document.getElementById('bx9').innerHTML == "X") ||
        (document.getElementById('bx1').innerHTML == "X" && document.getElementById('bx5').innerHTML == "X" && document.getElementById('bx9').innerHTML == "X") ||
        (document.getElementById('bx3').innerHTML == "X" && document.getElementById('bx5').innerHTML == "X" && document.getElementById('bx7').innerHTML == "X")
    ) {
        document.getElementById('Gamewin').innerHTML = "X is Winner Congratulations !!!";
    } else if (
        (document.getElementById('bx1').innerHTML == "O" && document.getElementById('bx2').innerHTML == "O" && document.getElementById('bx3').innerHTML == "O") ||
        (document.getElementById('bx4').innerHTML == "O" && document.getElementById('bx5').innerHTML == "O" && document.getElementById('bx6').innerHTML == "O") ||
        (document.getElementById('bx7').innerHTML == "O" && document.getElementById('bx8').innerHTML == "O" && document.getElementById('bx9').innerHTML == "O") ||
        (document.getElementById('bx1').innerHTML == "O" && document.getElementById('bx4').innerHTML == "O" && document.getElementById('bx7').innerHTML == "O") ||
        (document.getElementById('bx2').innerHTML == "O" && document.getElementById('bx5').innerHTML == "O" && document.getElementById('bx8').innerHTML == "O") ||
        (document.getElementById('bx3').innerHTML == "O" && document.getElementById('bx6').innerHTML == "O" && document.getElementById('bx9').innerHTML == "O") ||
        (document.getElementById('bx1').innerHTML == "O" && document.getElementById('bx5').innerHTML == "O" && document.getElementById('bx9').innerHTML == "O") ||
        (document.getElementById('bx3').innerHTML == "O" && document.getElementById('bx5').innerHTML == "O" && document.getElementById('bx7').innerHTML == "O")
    ) {
        document.getElementById('Gamewin').innerHTML = "O is Winner Congratulations !!!";
    }
    else if (moves == 9) {
        document.getElementById('Gamewin').innerHTML = "Game is Tie :(";
    }
}
