let menu = ['palak paneer','Chole chawal','chicken dhatura','Paneer butter masala','manchurian','chicken biryani','pizaa','Egg bujhi','soda']


function isVeg(food){
    if((food.toLowerCase().indexOf('chicken') !== -1) || food.toLowerCase().indexOf('egg') !== -1){
        return false;
    }
    return true;
}

let vegMenu = menu.filter(isVeg);
console.log(vegMenu);
console.log(menu);