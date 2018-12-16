(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const eventListeners = {
  handleSaveButton() {
    let foodName = document.getElementById("food_name").value;
    let foodExp = document.getElementById("food_exp").value;
    let foodType = document.getElementById("food_type").value;
    let foodObject = {
      "name": `"${foodName}"`,
      "expiration": `"${foodExp}"`,
      "type": `"${foodType}"`
    };
    console.log(foodObject);
    eventListeners.postFoodObject(foodObject);
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

const foodInputForm = {
  foodFormBuilder() {
    let foodForm = document.querySelector(".inputForm");
    foodForm.addEventListener("click", function (event) {
      event.preventDefault();
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2V2ZW50TGlzdGVuZXJzLmpzIiwiLi4vc2NyaXB0cy9mb29kLmpzIiwiLi4vc2NyaXB0cy9mb29kQ29sbGVjdGlvbi5qcyIsIi4uL3NjcmlwdHMvZm9vZEZvcm0uanMiLCIuLi9zY3JpcHRzL2Zvb2RMaXN0LmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsTUFBTSxjQUFjLEdBQUc7QUFFbkIsRUFBQSxnQkFBZ0IsR0FBSTtBQUVoQixRQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixXQUF4QixFQUFxQyxLQUFwRDtBQUNBLFFBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DLEtBQWxEO0FBQ0EsUUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUMsS0FBcEQ7QUFFQSxRQUFJLFVBQVUsR0FBRztBQUNiLGNBQVMsSUFBRyxRQUFTLEdBRFI7QUFFYixvQkFBZSxJQUFHLE9BQVEsR0FGYjtBQUdiLGNBQVMsSUFBRyxRQUFTO0FBSFIsS0FBakI7QUFLQSxJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksVUFBWjtBQUNBLElBQUEsY0FBYyxDQUFDLGNBQWYsQ0FBOEIsVUFBOUI7QUFDSCxHQWZrQjs7QUFnQm5CLEVBQUEsY0FBYyxDQUFFLFVBQUYsRUFBYTtBQUV2QixJQUFBLEtBQUssQ0FBQyw4QkFBRCxFQUFpQztBQUN0QyxNQUFBLE1BQU0sRUFBRSxNQUQ4QjtBQUV0QyxNQUFBLE9BQU8sRUFBRTtBQUNMLHdCQUFnQjtBQURYLE9BRjZCO0FBS3RDLE1BQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsVUFBZjtBQUxnQyxLQUFqQyxDQUFMO0FBT0g7O0FBekJrQixDQUF2QjtlQTRCZSxjOzs7Ozs7Ozs7O0FDNUJm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STtBQUVmLFVBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxzQkFBVCxFQUFyQjtBQUNBLE1BQUEsUUFBUSxDQUFDLE9BQVQsQ0FBaUIsUUFBUSxJQUFJO0FBQ3pCLFlBQUksUUFBUSxHQUFHLGNBQUssV0FBTCxDQUFpQixRQUFqQixDQUFmOztBQUNBLFFBQUEsY0FBYyxDQUFDLFdBQWYsQ0FBMkIsUUFBM0I7QUFDQyxPQUhMO0FBSUEsVUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBcEI7QUFDQSxNQUFBLGFBQWEsQ0FBQyxXQUFkLENBQTBCLGNBQTFCO0FBQ0gsS0FWRDtBQVdIOztBQWZZLENBQWpCO2VBa0JlLFE7Ozs7OztBQ3JCZjs7QUFDQTs7OztBQUVBLGtCQUFTLGVBQVQ7O0FBQ0Esa0JBQVMsUUFBVCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGV2ZW50TGlzdGVuZXJzID0ge1xuXG4gICAgaGFuZGxlU2F2ZUJ1dHRvbiAoKSB7XG5cbiAgICAgICAgbGV0IGZvb2ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb29kX25hbWVcIikudmFsdWU7XG4gICAgICAgIGxldCBmb29kRXhwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb29kX2V4cFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGZvb2RUeXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb29kX3R5cGVcIikudmFsdWU7XG5cbiAgICAgICAgbGV0IGZvb2RPYmplY3QgPSB7XG4gICAgICAgICAgICBcIm5hbWVcIjogYFwiJHtmb29kTmFtZX1cImAsXG4gICAgICAgICAgICBcImV4cGlyYXRpb25cIjogYFwiJHtmb29kRXhwfVwiYCxcbiAgICAgICAgICAgIFwidHlwZVwiOiBgXCIke2Zvb2RUeXBlfVwiYFxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGZvb2RPYmplY3QpXG4gICAgICAgIGV2ZW50TGlzdGVuZXJzLnBvc3RGb29kT2JqZWN0KGZvb2RPYmplY3QpO1xuICAgIH0sXG4gICAgcG9zdEZvb2RPYmplY3QgKGZvb2RPYmplY3Qpe1xuXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2ZyaWRnZVwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvb2RPYmplY3QpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBldmVudExpc3RlbmVyczsiLCJjb25zdCBmb29kID0ge1xuXG4gICAgZm9vZEJ1aWxkZXIoZm9vZE9iamVjdCkge1xuXG4gICAgICAgIGxldCBuZXdGb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG5cbiAgICAgICAgbGV0IG5ld0Zvb2ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBuZXdGb29kTmFtZS50ZXh0Q29udGVudCA9IGBOYW1lOiAke2Zvb2RPYmplY3QubmFtZX1gO1xuXG4gICAgICAgIGxldCBuZXdGb29kRXhwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIG5ld0Zvb2RFeHAudGV4dENvbnRlbnQgPSBgRXhwaXJhdGlvbjogJHtmb29kT2JqZWN0LmV4cGlyYXRpb259YDtcblxuICAgICAgICBsZXQgbmV3Rm9vZFR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgbmV3Rm9vZFR5cGUudGV4dENvbnRlbnQgPSBgVHlwZTogJHtmb29kT2JqZWN0LnR5cGV9YDtcblxuICAgICAgICBuZXdGb29kLmFwcGVuZENoaWxkKG5ld0Zvb2ROYW1lKTtcbiAgICAgICAgbmV3Rm9vZC5hcHBlbmRDaGlsZChuZXdGb29kRXhwKTtcbiAgICAgICAgbmV3Rm9vZC5hcHBlbmRDaGlsZChuZXdGb29kVHlwZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ld0Zvb2Q7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9vZDsiLCJjb25zdCBmb29kQ29sbGVjdGlvbiA9IHtcblxuICAgIGdldEFsbEZvb2RzICgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoIChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9mcmlkZ2VcIilcbiAgICAgICAgLnRoZW4gKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvb2RDb2xsZWN0aW9uOyIsImltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9ldmVudExpc3RlbmVyc1wiO1xuXG5jb25zdCBmb29kSW5wdXRGb3JtID0ge1xuXG4gICAgZm9vZEZvcm1CdWlsZGVyKCkge1xuICAgICAgICBsZXQgZm9vZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0Rm9ybVwiKTtcbiAgICAgICAgZm9vZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGZvb2RGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbiAgICAgICAgbGV0IGZvb2RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZm9vZElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9vZF9uYW1lXCIpO1xuICAgICAgICBmb29kSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbiAgICAgICAgbGV0IGZvb2RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgZm9vZExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImZvb2RfbmFtZVwiKTtcbiAgICAgICAgZm9vZExhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lOiBcIjtcblxuICAgICAgICBmb29kRmllbGQuYXBwZW5kQ2hpbGQoZm9vZExhYmVsKTtcbiAgICAgICAgZm9vZEZpZWxkLmFwcGVuZENoaWxkKGZvb2RJbnB1dCk7XG4gICAgICAgIGZvb2RGb3JtLmFwcGVuZENoaWxkKGZvb2RGaWVsZCk7XG5cbiAgICAgICAgbGV0IGV4cEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuICAgICAgICBsZXQgZXhwSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGV4cElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9vZF9leHBcIik7XG4gICAgICAgIGV4cElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gICAgICAgIGxldCBleHBMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgZXhwTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZm9vZF9leHBcIik7XG4gICAgICAgIGV4cExhYmVsLnRleHRDb250ZW50ID0gXCJFeHBpcmF0aW9uOiBcIjtcblxuICAgICAgICBleHBGaWVsZC5hcHBlbmRDaGlsZChleHBMYWJlbCk7XG4gICAgICAgIGV4cEZpZWxkLmFwcGVuZENoaWxkKGV4cElucHV0KTtcbiAgICAgICAgZm9vZEZvcm0uYXBwZW5kQ2hpbGQoZXhwRmllbGQpO1xuXG4gICAgICAgIGxldCB0eXBlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG4gICAgICAgIGxldCB0eXBlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHR5cGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb2RfdHlwZVwiKTtcbiAgICAgICAgdHlwZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gICAgICAgIGxldCB0eXBlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHR5cGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJmb29kX3R5cGVcIik7XG4gICAgICAgIHR5cGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVHlwZTogXCI7XG5cbiAgICAgICAgdHlwZUZpZWxkLmFwcGVuZENoaWxkKHR5cGVMYWJlbCk7XG4gICAgICAgIHR5cGVGaWVsZC5hcHBlbmRDaGlsZCh0eXBlSW5wdXQpO1xuICAgICAgICBmb29kRm9ybS5hcHBlbmRDaGlsZCh0eXBlRmllbGQpO1xuXG4gICAgICAgIGxldCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc2F2ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNhdmVCdG5cIik7XG4gICAgICAgIHNhdmVCdXR0b24udGV4dENvbnRlbnQgPSBcIlNhdmVcIjtcbiAgICAgICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRMaXN0ZW5lcnMuaGFuZGxlU2F2ZUJ1dHRvbik7XG4gICAgICAgIGZvb2RGb3JtLmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xuICAgICAgICBjb25zb2xlLmxvZyhzYXZlQnV0dG9uKVxuICAgICAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb29kSW5wdXRGb3JtOyIsImltcG9ydCBmb29kQ29sbGVjdGlvbiBmcm9tIFwiLi9mb29kQ29sbGVjdGlvblwiO1xuaW1wb3J0IGZvb2QgZnJvbSBcIi4vZm9vZC5qc1wiO1xuXG5jb25zdCBmb29kTGlzdCA9IHtcblxuICAgIGZyaWRnaWZ5KCkge1xuXG4gICAgICAgIGZvb2RDb2xsZWN0aW9uLmdldEFsbEZvb2RzKClcbiAgICAgICAgLnRoZW4gKGFsbEZvb2RzID0+IHtcblxuICAgICAgICAgICAgbGV0IGZvb2REb2NGYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgYWxsRm9vZHMuZm9yRWFjaChmb29kSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGZvb2RIVE1MID0gZm9vZC5mb29kQnVpbGRlcihmb29kSXRlbSk7XG4gICAgICAgICAgICAgICAgZm9vZERvY0ZhZ21lbnQuYXBwZW5kQ2hpbGQoZm9vZEhUTUwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IGZvb2RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKTtcbiAgICAgICAgICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZERvY0ZhZ21lbnQpO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9vZExpc3Q7IiwiaW1wb3J0IGZvb2RMaXN0IGZyb20gXCIuL2Zvb2RMaXN0XCI7XG5pbXBvcnQgZm9vZEZvcm0gZnJvbSBcIi4vZm9vZEZvcm1cIjtcblxuZm9vZEZvcm0uZm9vZEZvcm1CdWlsZGVyKCk7XG5mb29kTGlzdC5mcmlkZ2lmeSgpOyJdfQ==
