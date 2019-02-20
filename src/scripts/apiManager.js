const business = {
    getAllEmployees:  () => {
        return fetch("http://localhost:8089/employees?_expand=department&_expand=computer")
            .then(employees => employees.json())
    }
}
// console.log(getAllEmployees);

export default business;
