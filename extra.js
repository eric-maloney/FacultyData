 var row = d3.select("tbody")
.selectAll("tr")
.data(employees)
.enter()
.append ("tr")
row.append("td")
 .text (function(employee)
      {
    console.log(employee.firstName+ " "+ employee.lastName);
    return employee.firstName+ " "+ employee.lastName;
})
 row.append("td")
.append("img")
 .attr("src",function(employee)
      {
    console.log(employee.photo);
    return employee.photo;
})
