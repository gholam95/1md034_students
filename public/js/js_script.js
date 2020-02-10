
/*function menuItem(name, desc, calorie, allergy, ingredients, img){
    this.name = name;
    this.desc = desc;
    this.calorie = calorie;
    this.allergy = allergy;
    this.ingredients = ingredients;
    this.img = img;
    this.getInfo = function() {
        return this.name + ' ' + this.calorie;
    };
}


document.getElementById("theVeganBurger").innerHTML = "The Vegan Burger";
document.getElementById("theAffesSpecial").innerHTML = "The AffesSpecial";
document.getElementById("theChickenBurger").innerHTML = "The Chicken Burger";
document.getElementById("theSchneeBurger").innerHTML = "The Schnee Burger";
document.getElementById("theSnowBurger").innerHTML = "The Snow Burger";



let menu = [theVeganBurger, theAffesSpecial, theChickenBurger, theSchneeBurger, theSnowBurger];
let burg = document.getElementById("myID")
let i = 0;
for(i; i< 5; i++){

				let burger = menu[i];
				let node = document.createElement("li");
        let name = document.createTextNode(burger.name);
        node.appendChild(name);
        burg.appendChild(node);
}


function menuItem(name, desc, calorie, allergy, ingredients, gluten, lactose, img){
    this.name = name;
    this.desc = desc;
    this.calorie = calorie;
    this.allergy = allergy;
    this.ingredients = ingredients;
    this.gluten = gluten;
    this.lactose = lactose;
    this.img = img;
    this.getInfo = function() {
        return this.name + ' ' + this.calorie;
    };
};

*/


/*document.getElementById("theVeganBurger").innerHTML = "The Vegan Burger";
document.getElementById("theAffesSpecial").innerHTML = "The AffesSpecial";
document.getElementById("theChickenBurger").innerHTML = "The Chicken Burger";
document.getElementById("theSchneeBurger").innerHTML = "The Schnee Burger";
document.getElementById("theSnowBurger").innerHTML = "The Snow Burger";*/

/*
let menu = [theVeganBurger, theAffesSpecial, theChickenBurger, theSchneeBurger, theSnowBurger];
let burg = document.getElementById("myID")
let i = 0;
for(i; i< 5; i++){

				let burger = menu[i];
				let node = document.createElement("p");
        let name = document.createTextNode(burger.name);
        let allergy = document.createTextNode(burger.allergy);
        let containsGluten = document.createTextNode("Contains Gluten");
        let containsLactose = document.createTextNode("Contains Lactose");
        
        node.appendChild(name);
        
        if(burger.gluten){
        
        	node.appendChild(containsGluten);
        }
        else if(burger.lactose){
        node.appendChild(containsLactose);
        }
        burg.appendChild(node);
}
*/

/*function menuItem(name, desc, calorie, allergy, ingredients, img){
    this.name = name;
    this.desc = desc;
    this.calorie = calorie;
    this.allergy = allergy;;
    this.ingredients = ingredients;
    this.img = img;
}

let theVeganBurger = new menuItem("The Veg Burger", "High quality Chinese vegan burgers", "500 kCal", "Lactose and gluten free", "Burger ingredients", "https://www.santamariaworld.com/optimized/recipe-large/globalassets/_recipes/bbq/kentucky_burger.jpg?id=2357");

let theAffesSpecial = new menuItem("The Affes special", "Classis cheese burger with bacon", "1800 kCal", "Contains gluten and lactose", "Burger ingredients", "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/lotus-burger-lead.jpg?itok=HQnBHNu2&mtime=1522649088");

let theChickenBurger = new menuItem("The Chicken burger", "Deep fried Turkish chicken", "1000 kCal", "Contains gluten", "Burger ingredients",  "https://cdn.shopify.com/s/files/1/0101/0627/3877/products/image_7f849f7b-2602-4d60-88a2-8289312cdbcf_1024x1024.jpg?v=1566212019");

let theSchneeBurger = new menuItem("The Schnee Burger", "High quality Finnish meat", "15000 kCal", "Contains both gluten and lactose", "Burger ingredients", "https://cdn.breakit.se/assets/article/5e0eca0f3f5297a6309ac6805bf87231.jpg?d=980x500");

let theSnowBurger = new menuItem("The Snow Burger", "Burger description", "100 kCal", "Lactose and gluten free", "Burger ingredients", "https://media.mnn.com/assets/images/2017/06/sonic_mushroom_beef_burger.jpg.653x0_q80_crop-smart.jpg");

let menu = [theVeganBurger, theAffesSpecial, theChickenBurger, theSchneeBurger, theSnowBurger];*/
/*
let wrapper = document.getElementById("wrapper");
let i = 0;

for(i; i< 5; i++){
    let burger = menu[i];
    let theDiv = document.createElement("div");
    let theImg = document.createElement("img");
    let theHeader = document.createElement("h3");
    let theList = document.createElement("ul");
    let theListItemDesc = document.createElement("li");
    let theListItemCalorie = document.createElement("li");
    let theListItemAllergy = document.createElement("li");
    let theListItemIngredients = document.createElement("li");

    let theName = document.createTextNode(burger.name);
    let theDesc = document.createTextNode(burger.desc);
    let theCalorie = document.createTextNode(burger.calorie);
    let theAllergy = document.createTextNode(burger.allergy);
    let theIngredients = document.createTextNode(burger.ingredients);

    theImg.className = "imageClass";
    
    theHeader.style.color = 'white';
    theHeader.style.textAlign = 'center';
    theImg.src = burger.img;
    theImg.width = 165;
    theImg.height = 165;
    


    theList.style.color = 'white';

    theListItemDesc.appendChild(theDesc);
    theListItemCalorie.appendChild(theCalorie);
    theListItemAllergy.appendChild(theAllergy);
    theListItemIngredients.appendChild(theIngredients);

    theList.appendChild(theListItemDesc);
    theList.appendChild(theListItemCalorie);
    theList.appendChild(theListItemAllergy);
    theList.appendChild(theListItemIngredients);
    
    theHeader.appendChild(theName);
    
    theDiv.appendChild(theHeader);
    theDiv.appendChild(theImg)
    theDiv.appendChild(theList);
    theDiv.appendChild(theList);
    
    wrapper.appendChild(theDiv);
    
}
*/
