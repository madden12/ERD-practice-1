
import business from "./apiManager.js"
import buildSingleEmployee from "./singleEmployee.js";

const printAllEmployees = () => {
    business.getAllEmployees()
    .then((parsedEmployees) => {
        parsedEmployees.forEach(singleEmployeeObject => {
            document.querySelector("#employee-list").innerHTML += buildSingleEmployee(singleEmployeeObject)

        })
    })
}
console.log(printAllEmployees);
export default printAllEmployees;