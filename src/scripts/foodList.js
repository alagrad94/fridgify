import foodCollection from "./foodCollection";
import food from "./food.js";

const foodList = {

    fridgify() {

        foodCollection.getAllFoods()
        .then (allFoods => {

            let foodDocFagment = document.createDocumentFragment();
            allFoods.forEach(foodItem => {
                let foodHTML = food.foodBuilder(foodItem);
                foodDocFagment.appendChild(foodHTML);
                });
            let foodContainer = document.querySelector(".output");
            foodContainer.appendChild(foodDocFagment);
        })
    }
}

export default foodList;