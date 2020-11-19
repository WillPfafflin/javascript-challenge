
var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach(function(x) {
    console.log(x);

    var row = tbody.append("tr");

    Object.entries(x).forEach(function([key, value]) {
      console.log(key, value);

      var cell = row.append("td");
      cell.text(value);
    });
  });

var filterButton = d3.select("#filter-btn");

filterButton.on("click", function() {

    d3.select("tbody").html("");
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var date = inputElement.property("value");
    console.log(date);

    var filteredData = tableData.filter(x => x.datetime === date);
    console.log(filteredData);

    filteredData.forEach((x) => {
        var row = tbody.append('tr');
    
        Object.entries(x).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
});
});