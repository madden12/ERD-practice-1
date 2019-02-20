(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const business = {
  getAllEmployees: () => {
    return fetch("http://localhost:8089/employees?_expand=department&_expand=computer").then(employees => employees.json());
  } // console.log(getAllEmployees);

};
var _default = business;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _printAll = _interopRequireDefault(require("./printAll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import buildSingleEmployee from "./singleEmployee";
// buildSingleEmployee();
(0, _printAll.default)();

},{"./printAll":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apiManager = _interopRequireDefault(require("./apiManager.js"));

var _singleEmployee = _interopRequireDefault(require("./singleEmployee.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const printAllEmployees = () => {
  _apiManager.default.getAllEmployees().then(parsedEmployees => {
    parsedEmployees.forEach(singleEmployeeObject => {
      document.querySelector("#employee-list").innerHTML += (0, _singleEmployee.default)(singleEmployeeObject);
    });
  });
};

console.log(printAllEmployees);
var _default = printAllEmployees;
exports.default = _default;

},{"./apiManager.js":1,"./singleEmployee.js":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const buildSingleEmployee = singleEmployee => {
  console.log(singleEmployee);
  return `<article class="employee">
    <header class="employee_name">
      <h1>${singleEmployee.name}</h1>
        </header>
        <section class="employee_department">Works in the ${singleEmployee.department.departmentName} department.</section>
        <section class="employee_computer">Currently issued ${singleEmployee.computer.computerName}</section>
        </article`;
}; // console.log(buildSingleEmployee);


var _default = buildSingleEmployee;
exports.default = _default;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2FwaU1hbmFnZXIuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL3ByaW50QWxsLmpzIiwiLi4vc2NyaXB0cy9zaW5nbGVFbXBsb3llZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLE1BQU0sUUFBUSxHQUFHO0FBQ2IsRUFBQSxlQUFlLEVBQUcsTUFBTTtBQUNwQixXQUFPLEtBQUssQ0FBQyxxRUFBRCxDQUFMLENBQ0YsSUFERSxDQUNHLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBVixFQURoQixDQUFQO0FBRUgsR0FKWSxDQU1qQjs7QUFOaUIsQ0FBakI7ZUFRZSxROzs7Ozs7QUNSZjs7OztBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ0hBOztBQUNBOzs7O0FBRUEsTUFBTSxpQkFBaUIsR0FBRyxNQUFNO0FBQzVCLHNCQUFTLGVBQVQsR0FDQyxJQURELENBQ08sZUFBRCxJQUFxQjtBQUN2QixJQUFBLGVBQWUsQ0FBQyxPQUFoQixDQUF3QixvQkFBb0IsSUFBSTtBQUM1QyxNQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLGdCQUF2QixFQUF5QyxTQUF6QyxJQUFzRCw2QkFBb0Isb0JBQXBCLENBQXREO0FBRUgsS0FIRDtBQUlILEdBTkQ7QUFPSCxDQVJEOztBQVNBLE9BQU8sQ0FBQyxHQUFSLENBQVksaUJBQVo7ZUFDZSxpQjs7Ozs7Ozs7Ozs7QUNkZixNQUFNLG1CQUFtQixHQUFJLGNBQUQsSUFBb0I7QUFDNUMsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLGNBQVo7QUFDQSxTQUFROztZQUVBLGNBQWMsQ0FBQyxJQUFLOzs0REFFNEIsY0FBYyxDQUFDLFVBQWYsQ0FBMEIsY0FBZTs4REFDdkMsY0FBYyxDQUFDLFFBQWYsQ0FBd0IsWUFBYTtrQkFML0Y7QUFNZSxDQVJuQixDLENBU0E7OztlQUNlLG1CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgYnVzaW5lc3MgPSB7XHJcbiAgICBnZXRBbGxFbXBsb3llZXM6ICAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg5L2VtcGxveWVlcz9fZXhwYW5kPWRlcGFydG1lbnQmX2V4cGFuZD1jb21wdXRlclwiKVxyXG4gICAgICAgICAgICAudGhlbihlbXBsb3llZXMgPT4gZW1wbG95ZWVzLmpzb24oKSlcclxuICAgIH1cclxufVxyXG4vLyBjb25zb2xlLmxvZyhnZXRBbGxFbXBsb3llZXMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnVzaW5lc3M7XHJcbiIsImltcG9ydCBwcmludEFsbEVtcGxveWVlcyBmcm9tIFwiLi9wcmludEFsbFwiO1xyXG4vLyBpbXBvcnQgYnVpbGRTaW5nbGVFbXBsb3llZSBmcm9tIFwiLi9zaW5nbGVFbXBsb3llZVwiO1xyXG5cclxuLy8gYnVpbGRTaW5nbGVFbXBsb3llZSgpO1xyXG5wcmludEFsbEVtcGxveWVlcygpO1xyXG4iLCJcclxuaW1wb3J0IGJ1c2luZXNzIGZyb20gXCIuL2FwaU1hbmFnZXIuanNcIlxyXG5pbXBvcnQgYnVpbGRTaW5nbGVFbXBsb3llZSBmcm9tIFwiLi9zaW5nbGVFbXBsb3llZS5qc1wiO1xyXG5cclxuY29uc3QgcHJpbnRBbGxFbXBsb3llZXMgPSAoKSA9PiB7XHJcbiAgICBidXNpbmVzcy5nZXRBbGxFbXBsb3llZXMoKVxyXG4gICAgLnRoZW4oKHBhcnNlZEVtcGxveWVlcykgPT4ge1xyXG4gICAgICAgIHBhcnNlZEVtcGxveWVlcy5mb3JFYWNoKHNpbmdsZUVtcGxveWVlT2JqZWN0ID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbXBsb3llZS1saXN0XCIpLmlubmVySFRNTCArPSBidWlsZFNpbmdsZUVtcGxveWVlKHNpbmdsZUVtcGxveWVlT2JqZWN0KVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5jb25zb2xlLmxvZyhwcmludEFsbEVtcGxveWVlcyk7XHJcbmV4cG9ydCBkZWZhdWx0IHByaW50QWxsRW1wbG95ZWVzOyIsImNvbnN0IGJ1aWxkU2luZ2xlRW1wbG95ZWUgPSAoc2luZ2xlRW1wbG95ZWUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHNpbmdsZUVtcGxveWVlKTtcclxuICAgIHJldHVybiBgPGFydGljbGUgY2xhc3M9XCJlbXBsb3llZVwiPlxyXG4gICAgPGhlYWRlciBjbGFzcz1cImVtcGxveWVlX25hbWVcIj5cclxuICAgICAgPGgxPiR7c2luZ2xlRW1wbG95ZWUubmFtZX08L2gxPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZW1wbG95ZWVfZGVwYXJ0bWVudFwiPldvcmtzIGluIHRoZSAke3NpbmdsZUVtcGxveWVlLmRlcGFydG1lbnQuZGVwYXJ0bWVudE5hbWV9IGRlcGFydG1lbnQuPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZW1wbG95ZWVfY29tcHV0ZXJcIj5DdXJyZW50bHkgaXNzdWVkICR7c2luZ2xlRW1wbG95ZWUuY29tcHV0ZXIuY29tcHV0ZXJOYW1lfTwvc2VjdGlvbj5cclxuICAgICAgICA8L2FydGljbGVgfVxyXG4vLyBjb25zb2xlLmxvZyhidWlsZFNpbmdsZUVtcGxveWVlKTtcclxuZXhwb3J0IGRlZmF1bHQgYnVpbGRTaW5nbGVFbXBsb3llZTtcclxuIl19
