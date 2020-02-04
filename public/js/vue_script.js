
const vm = new Vue({
 el: '#myID',
 data: {
 		theVeganBurger: "The Vegan Burger",
 		theAffesSpecial: "The Affes Special",
    theChickenBurger: "The Chicken Burger",
    theSchneeBurger: "The Schnee Burger",
    theSnowBurger: "The Snow Burger"
 } 
})

let menu = [theVeganBurger, theAffesSpecial, theChickenBurger, theSchneeBurger, theSnowBurger];

const vm = new Vue({
el: '#myID',
data: {
	menu
	}
})  

<div id="myID">
    <h1>Välj en burgare</h1>
    
    <li v-for="burger in menu">
      {{burger.name}}
       <p v-if="burger.gluten">
       Contains Gluten
       </p>
      <p v-if="burger.lactose">
      Contains Lactose
      </p>
    </li>
</div>

