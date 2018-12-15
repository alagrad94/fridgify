const food = {

    foodBuilder(foodObject) {

        let newFood = document.createElement("article");

        let newFoodName = document.createElement("h3");
        newFoodName.textContent = `Name: ${foodObject.name}`;

        let newFoodExp = document.createElement("p");
        newFoodExp.textContent = `Expiration: ${foodObject.expiration}`;

        let newFoodType = document.createElement("p");
        newFoodType.textContent = `Type: ${foodObject.type}`;

        newFood.appendChild(newFoodName);
        newFood.appendChild(newFoodExp);
        newFood.appendChild(newFoodType);

        return newFood;
    }
};

export default food;