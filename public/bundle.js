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
      "name": `${foodName}`,
      "expiration": `${foodExp}`,
      "type": `${foodType}`
    };
    console.log(foodObject);
    eventListeners.postFoodObject(foodObject);
    location.reload(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2V2ZW50TGlzdGVuZXJzLmpzIiwiLi4vc2NyaXB0cy9mb29kLmpzIiwiLi4vc2NyaXB0cy9mb29kQ29sbGVjdGlvbi5qcyIsIi4uL3NjcmlwdHMvZm9vZEZvcm0uanMiLCIuLi9zY3JpcHRzL2Zvb2RMaXN0LmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsTUFBTSxjQUFjLEdBQUc7QUFFbkIsRUFBQSxnQkFBZ0IsR0FBSTtBQUVoQixRQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixXQUF4QixFQUFxQyxLQUFwRDtBQUNBLFFBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DLEtBQWxEO0FBQ0EsUUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUMsS0FBcEQ7QUFFQSxRQUFJLFVBQVUsR0FBRztBQUNiLGNBQVMsR0FBRSxRQUFTLEVBRFA7QUFFYixvQkFBZSxHQUFFLE9BQVEsRUFGWjtBQUdiLGNBQVMsR0FBRSxRQUFTO0FBSFAsS0FBakI7QUFLQSxJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksVUFBWjtBQUNBLElBQUEsY0FBYyxDQUFDLGNBQWYsQ0FBOEIsVUFBOUI7QUFDQSxJQUFBLFFBQVEsQ0FBQyxNQUFULENBQWdCLElBQWhCO0FBQ0gsR0FoQmtCOztBQWlCbkIsRUFBQSxjQUFjLENBQUUsVUFBRixFQUFhO0FBRXZCLElBQUEsS0FBSyxDQUFDLDhCQUFELEVBQWlDO0FBQ3RDLE1BQUEsTUFBTSxFQUFFLE1BRDhCO0FBRXRDLE1BQUEsT0FBTyxFQUFFO0FBQ0wsd0JBQWdCO0FBRFgsT0FGNkI7QUFLdEMsTUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxVQUFmO0FBTGdDLEtBQWpDLENBQUw7QUFP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QUVQLDRCQUFlLFdBQWYsR0FDQyxJQURELENBQ08sUUFBUSxJQUFJO0FBRWYsVUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLHNCQUFULEVBQXJCO0FBQ0EsTUFBQSxRQUFRLENBQUMsT0FBVCxDQUFpQixRQUFRLElBQUk7QUFDekIsWUFBSSxRQUFRLEdBQUcsY0FBSyxXQUFMLENBQWlCLFFBQWpCLENBQWY7O0FBQ0EsUUFBQSxjQUFjLENBQUMsV0FBZixDQUEyQixRQUEzQjtBQUNDLE9BSEw7QUFJQSxVQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFwQjtBQUNBLE1BQUEsYUFBYSxDQUFDLFdBQWQsQ0FBMEIsY0FBMUI7QUFDSCxLQVZEO0FBV0g7O0FBZlksQ0FBakI7ZUFrQmUsUTs7Ozs7O0FDckJmOztBQUNBOzs7O0FBRUEsa0JBQVMsZUFBVDs7QUFDQSxrQkFBUyxRQUFUIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB7XG5cbiAgICBoYW5kbGVTYXZlQnV0dG9uICgpIHtcblxuICAgICAgICBsZXQgZm9vZE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb2RfbmFtZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGZvb2RFeHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb2RfZXhwXCIpLnZhbHVlO1xuICAgICAgICBsZXQgZm9vZFR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb2RfdHlwZVwiKS52YWx1ZTtcblxuICAgICAgICBsZXQgZm9vZE9iamVjdCA9IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBgJHtmb29kTmFtZX1gLFxuICAgICAgICAgICAgXCJleHBpcmF0aW9uXCI6IGAke2Zvb2RFeHB9YCxcbiAgICAgICAgICAgIFwidHlwZVwiOiBgJHtmb29kVHlwZX1gXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coZm9vZE9iamVjdClcbiAgICAgICAgZXZlbnRMaXN0ZW5lcnMucG9zdEZvb2RPYmplY3QoZm9vZE9iamVjdCk7XG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgICB9LFxuICAgIHBvc3RGb29kT2JqZWN0IChmb29kT2JqZWN0KXtcblxuICAgICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9mcmlkZ2VcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb29kT2JqZWN0KVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRMaXN0ZW5lcnM7IiwiY29uc3QgZm9vZCA9IHtcblxuICAgIGZvb2RCdWlsZGVyKGZvb2RPYmplY3QpIHtcblxuICAgICAgICBsZXQgbmV3Rm9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuXG4gICAgICAgIGxldCBuZXdGb29kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgbmV3Rm9vZE5hbWUudGV4dENvbnRlbnQgPSBgTmFtZTogJHtmb29kT2JqZWN0Lm5hbWV9YDtcblxuICAgICAgICBsZXQgbmV3Rm9vZEV4cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBuZXdGb29kRXhwLnRleHRDb250ZW50ID0gYEV4cGlyYXRpb246ICR7Zm9vZE9iamVjdC5leHBpcmF0aW9ufWA7XG5cbiAgICAgICAgbGV0IG5ld0Zvb2RUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIG5ld0Zvb2RUeXBlLnRleHRDb250ZW50ID0gYFR5cGU6ICR7Zm9vZE9iamVjdC50eXBlfWA7XG5cbiAgICAgICAgbmV3Rm9vZC5hcHBlbmRDaGlsZChuZXdGb29kTmFtZSk7XG4gICAgICAgIG5ld0Zvb2QuYXBwZW5kQ2hpbGQobmV3Rm9vZEV4cCk7XG4gICAgICAgIG5ld0Zvb2QuYXBwZW5kQ2hpbGQobmV3Rm9vZFR5cGUpO1xuXG4gICAgICAgIHJldHVybiBuZXdGb29kO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvb2Q7IiwiY29uc3QgZm9vZENvbGxlY3Rpb24gPSB7XG5cbiAgICBnZXRBbGxGb29kcyAoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCAoXCJodHRwOi8vbG9jYWxob3N0OjgwODgvZnJpZGdlXCIpXG4gICAgICAgIC50aGVuIChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmb29kQ29sbGVjdGlvbjsiLCJpbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcblxuY29uc3QgZm9vZElucHV0Rm9ybSA9IHtcblxuICAgIGZvb2RGb3JtQnVpbGRlcigpIHtcbiAgICAgICAgbGV0IGZvb2RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dEZvcm1cIik7XG4gICAgICAgIGZvb2RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBmb29kRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG4gICAgICAgIGxldCBmb29kSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGZvb2RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb2RfbmFtZVwiKTtcbiAgICAgICAgZm9vZElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gICAgICAgIGxldCBmb29kTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGZvb2RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJmb29kX25hbWVcIik7XG4gICAgICAgIGZvb2RMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZTogXCI7XG5cbiAgICAgICAgZm9vZEZpZWxkLmFwcGVuZENoaWxkKGZvb2RMYWJlbCk7XG4gICAgICAgIGZvb2RGaWVsZC5hcHBlbmRDaGlsZChmb29kSW5wdXQpO1xuICAgICAgICBmb29kRm9ybS5hcHBlbmRDaGlsZChmb29kRmllbGQpO1xuXG4gICAgICAgIGxldCBleHBGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbiAgICAgICAgbGV0IGV4cElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBleHBJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb2RfZXhwXCIpO1xuICAgICAgICBleHBJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblxuICAgICAgICBsZXQgZXhwTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGV4cExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImZvb2RfZXhwXCIpO1xuICAgICAgICBleHBMYWJlbC50ZXh0Q29udGVudCA9IFwiRXhwaXJhdGlvbjogXCI7XG5cbiAgICAgICAgZXhwRmllbGQuYXBwZW5kQ2hpbGQoZXhwTGFiZWwpO1xuICAgICAgICBleHBGaWVsZC5hcHBlbmRDaGlsZChleHBJbnB1dCk7XG4gICAgICAgIGZvb2RGb3JtLmFwcGVuZENoaWxkKGV4cEZpZWxkKTtcblxuICAgICAgICBsZXQgdHlwZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuICAgICAgICBsZXQgdHlwZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0eXBlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb29kX3R5cGVcIik7XG4gICAgICAgIHR5cGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblxuICAgICAgICBsZXQgdHlwZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICB0eXBlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZm9vZF90eXBlXCIpO1xuICAgICAgICB0eXBlTGFiZWwudGV4dENvbnRlbnQgPSBcIlR5cGU6IFwiO1xuXG4gICAgICAgIHR5cGVGaWVsZC5hcHBlbmRDaGlsZCh0eXBlTGFiZWwpO1xuICAgICAgICB0eXBlRmllbGQuYXBwZW5kQ2hpbGQodHlwZUlucHV0KTtcbiAgICAgICAgZm9vZEZvcm0uYXBwZW5kQ2hpbGQodHlwZUZpZWxkKTtcblxuICAgICAgICBsZXQgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHNhdmVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzYXZlQnRuXCIpO1xuICAgICAgICBzYXZlQnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XG4gICAgICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50TGlzdGVuZXJzLmhhbmRsZVNhdmVCdXR0b24pO1xuICAgICAgICBmb29kRm9ybS5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcbiAgICAgICAgY29uc29sZS5sb2coc2F2ZUJ1dHRvbilcbiAgICAgICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9vZElucHV0Rm9ybTsiLCJpbXBvcnQgZm9vZENvbGxlY3Rpb24gZnJvbSBcIi4vZm9vZENvbGxlY3Rpb25cIjtcbmltcG9ydCBmb29kIGZyb20gXCIuL2Zvb2QuanNcIjtcblxuY29uc3QgZm9vZExpc3QgPSB7XG5cbiAgICBmcmlkZ2lmeSgpIHtcblxuICAgICAgICBmb29kQ29sbGVjdGlvbi5nZXRBbGxGb29kcygpXG4gICAgICAgIC50aGVuIChhbGxGb29kcyA9PiB7XG5cbiAgICAgICAgICAgIGxldCBmb29kRG9jRmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgICAgIGFsbEZvb2RzLmZvckVhY2goZm9vZEl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGxldCBmb29kSFRNTCA9IGZvb2QuZm9vZEJ1aWxkZXIoZm9vZEl0ZW0pO1xuICAgICAgICAgICAgICAgIGZvb2REb2NGYWdtZW50LmFwcGVuZENoaWxkKGZvb2RIVE1MKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBmb29kQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIik7XG4gICAgICAgICAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2REb2NGYWdtZW50KTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvb2RMaXN0OyIsImltcG9ydCBmb29kTGlzdCBmcm9tIFwiLi9mb29kTGlzdFwiO1xuaW1wb3J0IGZvb2RGb3JtIGZyb20gXCIuL2Zvb2RGb3JtXCI7XG5cbmZvb2RGb3JtLmZvb2RGb3JtQnVpbGRlcigpO1xuZm9vZExpc3QuZnJpZGdpZnkoKTsiXX0=
