function generateButtons() 
{
    let input = document.getElementById("numLetters").value;
    let letterArea = document.getElementById("letterArea");

    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
        "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    letterArea.innerHTML = "";

    if (input < 0 || input > 26) 
    {
        alert("Invalid input. Enter a number between 0-26! Try Again.")
        return
    } 

    for (let i = 0; i < input; i++)
    {
        let button = document.createElement("button");
        button.innerHTML = alphabet[i];
        button.className += "letters";
        letterArea.appendChild(button);

        button.addEventListener ("click", function() {
            console.log("Button " + alphabet[i] + " was pressed!" )
          });
    }

}
