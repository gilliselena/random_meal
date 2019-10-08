const menu = {
  _courses: {
  	appetizers: [],
    mains: [],
    desserts: []
	},
  
  get courses(){
  	return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  
  get appetizers(){
    return this._courses.appetizers
  },
  
  set appetizers(appetizer){
    this._courses.appetizers.push(appetizer)
  },
  get mains(){
    return this._courses.mains
  },
  
  set mains(main){
    this._courses.mains.push(main)
  },
  get desserts(){
    return this._courses.desserts
  },
  
  set desserts(dessert){
    this._courses.desserts.push(dessert)
  },
  
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice
    }
    
    if(courseName == 'appetizers') {
      this.appetizers = dish;
    } else if (courseName == 'mains') {
      this.mains = dish;
    } else if (courseName == 'desserts') {
      this.desserts = dish;
    } else {
      throw 'CourseDoesNotExist'
    }
  },
  
  getRandomDishFromCourse(courseName) {
    let dishes = [];
    
    if(courseName == 'appetizers') {
      dishes = this.appetizers;
    } else if (courseName == 'mains') {
      dishes = this.mains
    } else if (courseName == 'desserts') {
      dishes = this.desserts
    } else {
      throw 'CourseDoesNotExist'
    }
    
    if (dishes.length == 0) {
      return null;
    }
    
    let randomIndex = Math.random() * dishes.length;
    randomIndex = Math.floor(randomIndex);
    
    return dishes[randomIndex];
  },
  
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts')
    
    let totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Appetizer: ${appetizer.name}, Mains: ${main.name}, Desserts: ${dessert.name} and your Total Price is ${totalPrice}`;
    
  }

}

menu.addDishToCourse('appetizers', 'wings', 7.99);
menu.addDishToCourse('appetizers', 'mozzarella sticks', 7.99);
menu.addDishToCourse('mains', 'spaghetti', 8.99);
menu.addDishToCourse('desserts', 'cheesecake', 9.99);

menu.addDishToCourse('appetizers', 'Ceasar Salad', 4.25)
menu.addDishToCourse('appetizers', 'Wings', 7.00)
menu.addDishToCourse('appetizers', 'Crab Dip', 11.00)

menu.addDishToCourse('mains', 'Chicken skewers', 15.00)
menu.addDishToCourse('mains', 'Meatloaf and Mash', 13.00)
menu.addDishToCourse('mains', 'Steak and vegetables', 18.00)

menu.addDishToCourse('desserts', 'Ice Cream Sunday', 6.75)
menu.addDishToCourse('desserts', 'Cheesecake', 8.75)
menu.addDishToCourse('desserts', 'Pecant Pie', 5)

let meal = menu.generateRandomMeal();
console.log(meal)




























// const menu = {
//   _courses: {
//     appetizers: [],
//     mains: [],
//     desserts: []
//   },
//   get _courses(){
//     return {
//       appetizers: this.appetizers,
//       mains: this.mains,
//       desserts: this.desserts
//     }
// 	},
  
//   addDishToCourse(courseName, dishName, dishPrice){
//     let dish = {
//       name: this.dishName,
//       price: this.price,
//     }
//     console.log(this._courses)
//     this._courses[courseName].push(dish); 

//     },

//   getRandomDishFromCourse(courseName){
//     const dishes = this._courses[courseName];
//     const randomIndex = Math.floor(Math.random() * dishes.length);
//     return dishes[randomIndex];
//   },
  
//   generateRandomMeal : function(){
//     const appetizer = this.getRandomDishFromCourse('appetizer');
//     const main = this.getRandomDishFromCourse('main');
//     const dessert = this.getRandomDishFromCourse('dessert');
    
//     return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}`
//   },
  
//   get appetizers(){
    
//   },
//   set appetizers(appetizerIn){
//     if(courseName === "appetizers") {
//       this._course.appetizers(dish)
//     }
//   },
    
//   get mains(){
    
//   },
//   set mains(mainsIn){
//     if(courseName === "main") {
//       this._course.main(dish)
//     }
//   },
//   get desserts(){
    
//   },
//   set desserts(dessertsIn){
//     if(courseName === "desserts") {
//       this._course.desserts(dish)
//     }
//   }
  
// }


// menu.addDishToCourse('appetizers', 'Ceasar Salad', 4.25)
// //menu.addDishToCourse('appetizers', 'Wings', 7.00)
// //menu.addDishToCourse('appetizers', 'Crab Dip', 11.00)

// //menu.addDishToCourse('main', 'Chicken skewers', 15.00)
// //menu.addDishToCourse('main', 'Meatloaf and Mash', 13.00)
// //menu.addDishToCourse('main', 'Steak and vegetables', 18.00)

// //menu.addDishToCourse('desserts', 'Ice Cream Sunday', 6.75)
// //menu.addDishToCourse('desserts', 'Cheesecake', 8.75)
// //menu.addDishToCourse('desserts', 'Pecant Pie', 5)

// //let meal = menu.generateRandomMeal();
// menu.console.log(menu);
