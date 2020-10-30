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
    $(".grid").remove();
    rotate(0, 0);
};  

function refreshGrid(){
    clearGrid();
    createGrid(6, 4);
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

// create a 16x16 grid when the page loads
// creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
$(document).ready(function() {
    createGrid(3,3);

   // $(".grid").mouseover(function() {
   //     $(this).css("background-color", "black");
   //     });

    $(".newGrid").click(function() {
        refreshGrid();

        $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });
    });
});
