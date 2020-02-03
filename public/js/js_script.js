
function menuItem(name, desc, calorie, allergy, ingredients, img){
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

let theVeganBurger = new menuItem("The Veg Burger", "High quality Chinese vegan burgers", "500 kCal", "Lactose and gluten free", "Homemade " "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.santamariaworld.com%2Fse%2Frecept%2Fkentucky-burger%2F&psig=AOvVaw0w1auhesapbtAGE_CRqZx8&ust=1580822636483000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLj5tbG9tecCFQAAAAAdAAAAABAD");

let theAffesSpecial = new menuItem("The Affes special", "1800 kCal", "Classis cheese burger with bacon", "Contains Bacon", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sbs.com.au%2Ffood%2Frecipes%2Flotus-cheeseburger&psig=AOvVaw1diGkMo5SJB4B0xIcNKtZE&ust=1580822702871000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLi3ytu9tecCFQAAAAAdAAAAABAD");

let theChickenBurger = new menuItem("The Chicken burger", "Deep fried Turkish chicken", "1000 kCal", "Contains gluten",  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.levelupskatepark.com.au%2Fproducts%2Fchicken-burger&psig=AOvVaw2otO9smX_fk5-LO26_Ey9K&ust=1580822780740000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDJzPW9tecCFQAAAAAdAAAAABAD");

let theSchneeBurger = new menuItem("The Schnee Burger", "High quality Finnish meat", "15000 kCal", "Contains both gluten and lactose", "Burger ingredients", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.halsanskok.se%2Frecipes%2Fincredible-burger-smakbomb-i-rosa&psig=AOvVaw0DP4D1XVPLzqz7rdUf1tkp&ust=1580823552586000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDzpOXAtecCFQAAAAAdAAAAABAW");

let theSnowBurger = new menuItem("The Snow Burger", "Burger description", "100 kCal", "Lactose and gluten free", "Burger ingredients", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.livekindly.co%2Ffinnish-burger-chain-goes-fully-vegan-for-the-environment%2F&psig=AOvVaw0DP4D1XVPLzqz7rdUf1tkp&ust=1580823552586000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDzpOXAtecCFQAAAAAdAAAAABAc");
