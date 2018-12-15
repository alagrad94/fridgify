(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const eventListeners = {
  handleSaveButton() {
    console.log("button clicked"); // let foodNameInput = document.querySelector(".food_name");
    // let foodExpInput = document.getElementById(".food_exp");
    // let foodTypeInput = document.getElementById(".food_type");
    // foodNameInput.value = "";
    // foodExpInput.value = "";
    // foodTypeInput.value = "";
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

  postFoodObject(foodObject) {
    fetch("http://localhost:8088/fridge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(foodObject)
    });
  }

};
var _default = eventListeners;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
var _default = food;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const foodCollection = {
  getAllFoods() {
    return fetch("http://localhost:8088/fridge").then(response => response.json());
  }

};
var _default = foodCollection;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eventListeners = _interopRequireDefault(require("./eventListeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
TODO
- When event happens
    1. Get user input
    2. Create object
    3. Post new food

*/
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
    saveButton.addEventListener("click", _eventListeners.default.handleSaveButton);
    foodForm.appendChild(saveButton);
    console.log(saveButton);
  }

};
var _default = foodInputForm;
exports.default = _default;

},{"./eventListeners":1}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _foodCollection = _interopRequireDefault(require("./foodCollection"));

var _food = _interopRequireDefault(require("./food.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const foodList = {
  fridgify() {
    _foodCollection.default.getAllFoods().then(allFoods => {
      let foodDocFagment = document.createDocumentFragment();
      allFoods.forEach(foodItem => {
        let foodHTML = _food.default.foodBuilder(foodItem);

        foodDocFagment.appendChild(foodHTML);
      });
      let foodContainer = document.querySelector(".output");
      foodContainer.appendChild(foodDocFagment);
    });
  }

};
var _default = foodList;
exports.default = _default;

},{"./food.js":2,"./foodCollection":3}],6:[function(require,module,exports){
"use strict";

var _foodList = _interopRequireDefault(require("./foodList"));

var _foodForm = _interopRequireDefault(require("./foodForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_foodForm.default.foodFormBuilder();

_foodList.default.fridgify();

},{"./foodForm":4,"./foodList":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2V2ZW50TGlzdGVuZXJzLmpzIiwiLi4vc2NyaXB0cy9mb29kLmpzIiwiLi4vc2NyaXB0cy9mb29kQ29sbGVjdGlvbi5qcyIsIi4uL3NjcmlwdHMvZm9vZEZvcm0uanMiLCIuLi9zY3JpcHRzL2Zvb2RMaXN0LmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsTUFBTSxjQUFjLEdBQUc7QUFFbkIsRUFBQSxnQkFBZ0IsR0FBSTtBQUVoQixJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksZ0JBQVosRUFGZ0IsQ0FHaEI7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsR0F2QmtCOztBQXdCbkIsRUFBQSxjQUFjLENBQUUsVUFBRixFQUFhO0FBRXZCLElBQUEsS0FBSyxDQUFDLDhCQUFELEVBQWlDO0FBQ3RDLE1BQUEsTUFBTSxFQUFFLE1BRDhCO0FBRXRDLE1BQUEsT0FBTyxFQUFFO0FBQ0wsd0JBQWdCO0FBRFgsT0FGNkI7QUFLdEMsTUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxVQUFmO0FBTGdDLEtBQWpDLENBQUw7QUFPSDs7QUFqQ2tCLENBQXZCO2VBb0NlLGM7Ozs7Ozs7Ozs7QUNwQ2YsTUFBTSxJQUFJLEdBQUc7QUFFVCxFQUFBLFdBQVcsQ0FBQyxVQUFELEVBQWE7QUFFcEIsUUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZDtBQUVBLFFBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQWxCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixHQUEyQixTQUFRLFVBQVUsQ0FBQyxJQUFLLEVBQW5EO0FBRUEsUUFBSSxVQUFVLEdBQUcsUUFB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Zjs7QUFDQTs7OztBQUVBLGtCQUFTLGVBQVQ7O0FBQ0Esa0JBQVMsUUFBVCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGV2ZW50TGlzdGVuZXJzID0ge1xuXG4gICAgaGFuZGxlU2F2ZUJ1dHRvbiAoKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJidXR0b24gY2xpY2tlZFwiKVxuICAgICAgICAvLyBsZXQgZm9vZE5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vZF9uYW1lXCIpO1xuICAgICAgICAvLyBsZXQgZm9vZEV4cElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIuZm9vZF9leHBcIik7XG4gICAgICAgIC8vIGxldCBmb29kVHlwZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIuZm9vZF90eXBlXCIpO1xuXG4gICAgICAgIC8vIGZvb2ROYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAvLyBmb29kRXhwSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAvLyBmb29kVHlwZUlucHV0LnZhbHVlID0gXCJcIjtcblxuICAgICAgICAvLyBsZXQgZm9vZE5hbWUgPSBmb29kTmFtZUlucHV0LnZhbHVlO1xuICAgICAgICAvLyBsZXQgZm9vZEV4cCA9IGZvb2RFeHBJbnB1dC52YWx1ZTtcbiAgICAgICAgLy8gbGV0IGZvb2RUeXBlID0gZm9vZFR5cGVJbnB1dC52YWx1ZTtcblxuICAgICAgICAvLyBsZXQgZm9vZE9iamVjdCA9IHtcbiAgICAgICAgLy8gICAgIFwibmFtZVwiOiBgXCIke2Zvb2ROYW1lfVwiYCxcbiAgICAgICAgLy8gICAgIFwiZXhwaXJhdGlvblwiOiBgXCIke2Zvb2RFeHB9XCJgLFxuICAgICAgICAvLyAgICAgXCJ0eXBlXCI6IGBcIiR7Zm9vZFR5cGV9XCJgXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZXZlbnRMaXN0ZW5lcnMucG9zdEZvb2RPYmplY3QoZm9vZE9iamVjdCk7XG4gICAgfSxcbiAgICBwb3N0Rm9vZE9iamVjdCAoZm9vZE9iamVjdCl7XG5cbiAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvZnJpZGdlXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9vZE9iamVjdClcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50TGlzdGVuZXJzOyIsImNvbnN0IGZvb2QgPSB7XG5cbiAgICBmb29kQnVpbGRlcihmb29kT2JqZWN0KSB7XG5cbiAgICAgICAgbGV0IG5ld0Zvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcblxuICAgICAgICBsZXQgbmV3Rm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIG5ld0Zvb2ROYW1lLnRleHRDb250ZW50ID0gYE5hbWU6ICR7Zm9vZE9iamVjdC5uYW1lfWA7XG5cbiAgICAgICAgbGV0IG5ld0Zvb2RFeHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgbmV3Rm9vZEV4cC50ZXh0Q29udGVudCA9IGBFeHBpcmF0aW9uOiAke2Zvb2RPYmplY3QuZXhwaXJhdGlvbn1gO1xuXG4gICAgICAgIGxldCBuZXdGb29kVHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBuZXdGb29kVHlwZS50ZXh0Q29udGVudCA9IGBUeXBlOiAke2Zvb2RPYmplY3QudHlwZX1gO1xuXG4gICAgICAgIG5ld0Zvb2QuYXBwZW5kQ2hpbGQobmV3Rm9vZE5hbWUpO1xuICAgICAgICBuZXdGb29kLmFwcGVuZENoaWxkKG5ld0Zvb2RFeHApO1xuICAgICAgICBuZXdGb29kLmFwcGVuZENoaWxkKG5ld0Zvb2RUeXBlKTtcblxuICAgICAgICByZXR1cm4gbmV3Rm9vZDtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb29kOyIsImNvbnN0IGZvb2RDb2xsZWN0aW9uID0ge1xuXG4gICAgZ2V0QWxsRm9vZHMgKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2ggKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2ZyaWRnZVwiKVxuICAgICAgICAudGhlbiAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9vZENvbGxlY3Rpb247IiwiLypcblRPRE9cbi0gV2hlbiBldmVudCBoYXBwZW5zXG4gICAgMS4gR2V0IHVzZXIgaW5wdXRcbiAgICAyLiBDcmVhdGUgb2JqZWN0XG4gICAgMy4gUG9zdCBuZXcgZm9vZFxuXG4qL1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzXCI7XG5cbmNvbnN0IGZvb2RJbnB1dEZvcm0gPSB7XG5cbiAgICBmb29kRm9ybUJ1aWxkZXIoKSB7XG4gICAgICAgIGxldCBmb29kRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRGb3JtXCIpO1xuXG4gICAgICAgIGxldCBmb29kRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG4gICAgICAgIGxldCBmb29kSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGZvb2RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb2RfbmFtZVwiKTtcbiAgICAgICAgZm9vZElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gICAgICAgIGxldCBmb29kTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGZvb2RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJmb29kX25hbWVcIik7XG4gICAgICAgIGZvb2RMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZTogXCI7XG5cbiAgICAgICAgZm9vZEZpZWxkLmFwcGVuZENoaWxkKGZvb2RMYWJlbCk7XG4gICAgICAgIGZvb2RGaWVsZC5hcHBlbmRDaGlsZChmb29kSW5wdXQpO1xuICAgICAgICBmb29kRm9ybS5hcHBlbmRDaGlsZChmb29kRmllbGQpO1xuXG4gICAgICAgIGxldCBleHBGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbiAgICAgICAgbGV0IGV4cElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBleHBJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb2RfZXhwXCIpO1xuICAgICAgICBleHBJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblxuICAgICAgICBsZXQgZXhwTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGV4cExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImZvb2RfZXhwXCIpO1xuICAgICAgICBleHBMYWJlbC50ZXh0Q29udGVudCA9IFwiRXhwaXJhdGlvbjogXCI7XG5cbiAgICAgICAgZXhwRmllbGQuYXBwZW5kQ2hpbGQoZXhwTGFiZWwpO1xuICAgICAgICBleHBGaWVsZC5hcHBlbmRDaGlsZChleHBJbnB1dCk7XG4gICAgICAgIGZvb2RGb3JtLmFwcGVuZENoaWxkKGV4cEZpZWxkKTtcblxuICAgICAgICBsZXQgdHlwZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuICAgICAgICBsZXQgdHlwZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0eXBlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb29kX3R5cGVcIik7XG4gICAgICAgIHR5cGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblxuICAgICAgICBsZXQgdHlwZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICB0eXBlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZm9vZF90eXBlXCIpO1xuICAgICAgICB0eXBlTGFiZWwudGV4dENvbnRlbnQgPSBcIlR5cGU6IFwiO1xuXG4gICAgICAgIHR5cGVGaWVsZC5hcHBlbmRDaGlsZCh0eXBlTGFiZWwpO1xuICAgICAgICB0eXBlRmllbGQuYXBwZW5kQ2hpbGQodHlwZUlucHV0KTtcbiAgICAgICAgZm9vZEZvcm0uYXBwZW5kQ2hpbGQodHlwZUZpZWxkKTtcblxuICAgICAgICBsZXQgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHNhdmVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzYXZlQnRuXCIpO1xuICAgICAgICBzYXZlQnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XG4gICAgICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50TGlzdGVuZXJzLmhhbmRsZVNhdmVCdXR0b24pO1xuICAgICAgICBmb29kRm9ybS5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcbiAgICAgICAgY29uc29sZS5sb2coc2F2ZUJ1dHRvbilcbiAgICAgICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9vZElucHV0Rm9ybTsiLCJpbXBvcnQgZm9vZENvbGxlY3Rpb24gZnJvbSBcIi4vZm9vZENvbGxlY3Rpb25cIjtcbmltcG9ydCBmb29kIGZyb20gXCIuL2Zvb2QuanNcIjtcblxuY29uc3QgZm9vZExpc3QgPSB7XG5cbiAgICBmcmlkZ2lmeSgpIHtcblxuICAgICAgICBmb29kQ29sbGVjdGlvbi5nZXRBbGxGb29kcygpXG4gICAgICAgIC50aGVuIChhbGxGb29kcyA9PiB7XG5cbiAgICAgICAgICAgIGxldCBmb29kRG9jRmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgICAgIGFsbEZvb2RzLmZvckVhY2goZm9vZEl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGxldCBmb29kSFRNTCA9IGZvb2QuZm9vZEJ1aWxkZXIoZm9vZEl0ZW0pO1xuICAgICAgICAgICAgICAgIGZvb2REb2NGYWdtZW50LmFwcGVuZENoaWxkKGZvb2RIVE1MKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBmb29kQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIik7XG4gICAgICAgICAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2REb2NGYWdtZW50KTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvb2RMaXN0OyIsImltcG9ydCBmb29kTGlzdCBmcm9tIFwiLi9mb29kTGlzdFwiO1xuaW1wb3J0IGZvb2RGb3JtIGZyb20gXCIuL2Zvb2RGb3JtXCI7XG5cbmZvb2RGb3JtLmZvb2RGb3JtQnVpbGRlcigpO1xuZm9vZExpc3QuZnJpZGdpZnkoKTsiXX0=
