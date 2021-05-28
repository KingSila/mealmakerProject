const menu = {

    _courses: {
        appetizers:[],
        mains:[],
        desserts:[],
    },

    get courses(){

        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        }

    },
    
        addDishToCourse(courseName, dishName,  dishPrice){
            
        const  dish = {
            name: dishName,
            price: dishPrice,
            
        
        };
        
        this._courses[courseName].push(dish);
     
    },
    getRandomDishFromCourse(courseName){

        const dishes = this._courses[courseName];
        const index = Math.floor(Math.random() * dishes.length);
        return dishes[index]
    },
    generateRandomMeal(){

        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const desserts = this.getRandomDishFromCourse('desserts');
        const price = appetizer.price + main.price + desserts.price;
        return `Your meal is ${appetizer.name}, ${main.name},${desserts.name}, The price is $${price}.`;
    },
    get appetizers(){

    },
    set appetizers(appetizersIn){

    },
    get mains(){

    },
    set mains(mainsIn){

    },
    get desserts (){

    },
    set desserts (dessertsIn){

    },
       
      }

      menu.addDishToCourse('mains','Pasta',132);
      menu.addDishToCourse('appetizers','cabbage',3.25);
     menu.addDishToCourse('desserts','icecream',56);

      
      menu.addDishToCourse('mains','Red Deluxe Meat',536);
      menu.addDishToCourse('appetizers','Lettuce',6);
      menu.addDishToCourse('desserts','Amarula',356);

      
      menu.addDishToCourse('mains','Vegie Potato',896);
      menu.addDishToCourse('appetizers','tomato',1);
      menu.addDishToCourse('desserts','MuslieCaramel',56);
      

      const meal  = menu.generateRandomMeal();

      console.log(meal);