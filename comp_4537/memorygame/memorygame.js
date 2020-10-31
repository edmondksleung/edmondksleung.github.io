function createGrid(x, y) {
    let id = 0;

    var correctGrids = random(x, y)

    for (var cols = 0; cols < x; cols++) {
        for (var rows = 0; rows < y; rows++) {

            if (correctGrids.includes(id)) {
                var item = "<div id=g" + id + " class='grid correct'></div>";
            } else {
                var item = "<div id=g" + id + " class='grid incorrect'></div>";
            }
        
            $("#playable").append(item);
            id++;
        };
    };
    $("#playable").width(85 * x);
    $("#playable").height(85 * y);

    setTimeout(function(){ $(".correct").css("background-color", "white"); rotate(90, 1200); }, 2000);
    
};

function clearGrid(){
    $("#playable").removeClass("harder");
    $(".grid").remove();
    rotate(0, 0);
};  

function random(x, y) {
    var randomArray = [];

    for (var i = 0; i < x; i++) {
        var randomInt = Math.floor(Math.random() * (x * y));

        if (randomArray.includes(randomInt)) {
            var randomInt = Math.floor(Math.random() * (x * y));
        }

        randomArray.push(randomInt)
    }
    
    return randomArray
}

function rotate(x, y) {
    $('#playable').animate(
        { deg: x },
        {
            duration: y,
            step: function(now) {
              $(this).css({ transform: 'rotate(' + now + 'deg)' });
            }
        }
    );    
}

function game(cols, rows, score) {
    clearGrid();
    createGrid(cols, rows);

    var correct = 0;
    var incorrect = 0;
    var clicks = 0;
    var x = cols;
    var y = rows;
    var scr = score;

    $(".grid").click(function() {

        if ($(this).hasClass("correct")) {
            $(this).css("background-color", "greenyellow");
            correct++;
            clicks++;
            scr++;
            $("#score").text("Score: " + scr)
        } else {
            $(this).css("background-color", "red");
            clicks++;
            incorrect++;
            scr--;
            $("#score").text("Score: " + scr)
        }

        if (clicks == x && correct == x) {
            $("#playable").addClass("harder");
        }

        if (clicks == x && incorrect > 0) {
            x--;
            y--;
            setTimeout(function(){ game(x, y, scr); }, 1000);
        }

        if ($("#playable").hasClass("harder")) {
            x++;
            y++;
            setTimeout(function(){ game(x, y, scr); }, 1000);
        }

    });
}

$(document).ready(function() {
    game(3, 3, 0);

    $("#finish").click(function() {
        clearGrid();
        $("#message").text("Game finished!");
    })
});
