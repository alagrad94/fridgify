const eventListeners = {

    handleSaveButton () {

        console.log("button clicked")
        // let foodNameInput = document.querySelector(".food_name");
        // let foodExpInput = document.getElementById(".food_exp");
        // let foodTypeInput = document.getElementById(".food_type");

        // let foodName = foodNameInput.value;
        // let foodExp = foodExpInput.value;
        // let foodType = foodTypeInput.value;

        // let foodObject = {
        //     "name": `"${foodName}"`,
        //     "expiration": `"${foodExp}"`,
        //     "type": `"${foodType}"`
        // }
        // eventListeners.postFoodObject(foodObject);
    },
    postFoodObject (foodObject){

        fetch("http://localhost:8088/fridge", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(foodObject)
        })
    }
}

export default eventListeners;