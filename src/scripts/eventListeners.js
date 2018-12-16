const eventListeners = {

    handleSaveButton () {

        let foodName = document.getElementById("food_name").value;
        let foodExp = document.getElementById("food_exp").value;
        let foodType = document.getElementById("food_type").value;

        let foodObject = {
            "name": `${foodName}`,
            "expiration": `${foodExp}`,
            "type": `${foodType}`
        }
        console.log(foodObject)
        eventListeners.postFoodObject(foodObject);
        location.reload(true);
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