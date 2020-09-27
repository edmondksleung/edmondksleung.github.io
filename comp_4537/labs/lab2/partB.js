function Recipe(title, serves, ingredients)
{
    this.title = title;
    this.serves = serves;
    this.ingredients = ingredients;

    let titleArea = document.getElementById("titleArea");
    let servesArea = document.getElementById("servesArea");
    let ingredientsArea = document.getElementById("ingredientsArea");

    this.print = function() {
        titleArea.innerHTML = "<br><b>Title: </b>" + title;
        servesArea.innerHTML = "<b>Serves: </b>" + serves;
        ingredientsArea.innerHTML = "<b>Ingredients:</b><br>"
        
        for (let i = 0; i < ingredients.length; i++)
        {
            ingredientsArea.innerHTML += ingredients[i] + "<br>"
        }
    }

}

function createRecipe()
{
    let myRecipe = new Recipe("Alfredo Pizza", 4, ["Dough", "Alfredo Sauce", "Chicken", "Bacon", "Cheese", "Swiss Cheese", "Ham"]);
    myRecipe.print();
}
