/*
TODO
- When event happens
    1. Get user input
    2. Create object
    3. Post new food

*/
import eventListeners from "./eventListeners";

const foodInputForm = {

    foodFormBuilder() {
        let foodForm = document.querySelector(".inputForm");

        let foodField = document.createElement("fieldset");
        let foodInput = document.createElement("input");
        foodInput.setAttribute("id", "food_name");
        foodInput.setAttribute("type", "text");

        let foodLabel = document.createElement("label");
        foodLabel.setAttribute("for", "food_name");
        foodLabel.textContent = "Name: ";

        foodField.appendChild(foodLabel);
        foodField.appendChild(foodInput);
        foodForm.appendChild(foodField);

        let expField = document.createElement("fieldset");
        let expInput = document.createElement("input");
        expInput.setAttribute("id", "food_exp");
        expInput.setAttribute("type", "text");

        let expLabel = document.createElement("label");
        expLabel.setAttribute("for", "food_exp");
        expLabel.textContent = "Expiration: ";

        expField.appendChild(expLabel);
        expField.appendChild(expInput);
        foodForm.appendChild(expField);

        let typeField = document.createElement("fieldset");
        let typeInput = document.createElement("input");
        typeInput.setAttribute("id", "food_type");
        typeInput.setAttribute("type", "text");

        let typeLabel = document.createElement("label");
        typeLabel.setAttribute("for", "food_type");
        typeLabel.textContent = "Type: ";

        typeField.appendChild(typeLabel);
        typeField.appendChild(typeInput);
        foodForm.appendChild(typeField);

        let saveButton = document.createElement("button");
        saveButton.setAttribute("id", "saveBtn");
        saveButton.textContent = "Save";
        saveButton.addEventListener("click", eventListeners.handleSaveButton);
        foodForm.appendChild(saveButton);
        console.log(saveButton)
        }
};

export default foodInputForm;