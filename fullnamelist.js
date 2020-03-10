d3.select("ol")
  .selectAll("li")
    .data(employees)
    .enter()
  .append ("li")
    .text (function(employee)
      {
    console.log(employee.firstName+ " "+ employee.lastName);
    return employee.firstName+ " "+ employee.lastName;
})