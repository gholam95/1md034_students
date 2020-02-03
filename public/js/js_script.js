
function menuItem(name, calorie, allergy, ingredients, img){
    this.name = name;
    this.calorie = calorie;
    this.allergy = allergy;
    this.ingredients = ingredients;
    this.img = img;
    this.getInfo = function() {
        return this.name + ' ' + this.calorie;
    };
 }
