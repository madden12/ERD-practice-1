const buildSingleEmployee = (singleEmployee) => {
    console.log(singleEmployee);
    return `<article class="employee">
    <header class="employee_name">
      <h1>${singleEmployee.name}</h1>
        </header>
        <section class="employee_department">Works in the ${singleEmployee.department.departmentName} department.</section>
        <section class="employee_computer">Currently issued ${singleEmployee.computer.computerName}</section>
        </article`}
// console.log(buildSingleEmployee);
export default buildSingleEmployee;
