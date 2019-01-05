var x;
var x;
x = 4;
x = "java";

var fileInput = document.getElementById('file');
// header for the table
var table = "<table>";
table += "<tbody>";
table += "<thead>";
table += "<br>";
table += "<th> Url </th>";
table += "<th> Protocol </th>";
table += "<th> User Info </th>";
table += "<th> Hostname </th>";
table += "<th> Port </th>";
table += "<th> Pathname </th>";
table += "<th> Query </th>";
table += "<th> Fragment </th>";
table += "</thead>";

// file reading function


fileInput.onchange = function() {
  var file = fileInput.files[0];
// console log used here to identfy the type of the file for if steatemnt
  console.log(file);
  var reader = new FileReader();
  reader.readAsText(file);

// make sure the file that is being uploaded is a txt file else return
if (file.type != "text/plain") {
  // eror msg followed by new file button followd by hr line
  document.getElementById('errorUrl').style.display = "block";
  document.getElementById('new').style.display = "inline-block";
  document.getElementById('split').style.display = 'block';
//  return;
}
else
// show new file button show <hr>
document.getElementById('new').style.display = "inline-block";
document.getElementById('split').style.display = 'block';
  reader.onload = function() {
    console.log(reader.result);


    // Turned the results from file into array string and split
    var string = reader.result.split('\n');
    // used a for loop to place urls in array and created a url object to use url api in order to get details of url
    for (var i = 0; i < string.length; i++) {
      var stringURL = new URL(string[i]);
      // i++ below can be used to force user to double space urls otherwise single space
    //  i++;

      // used var in order to display information into the table w/o formatting issues
      var url = stringURL.href;
      var proto = stringURL.protocol;
      var userinfo = stringURL.username;
      var host = stringURL.hostname;
      var port = stringURL.port;
      var path = stringURL.pathname;
      var query = stringURL.search;
      var fragment = stringURL.hash;
      // stores all url info into table using <tr> and <td>
      table += "<tr>";
      table += "<td>" + url + "</td>";
      table += "<td>" + proto + "</td>";
      table += "<td>" + userinfo + "</td>";
      table += "<td>" + host + "</td>";
      table += "<td>" + port + "</td>";
      table += "<td>" + path + "</td>";
      table += "<td>" + query + "</td>";
      table += "<td>" + fragment + "</td>";
      table += "</tr>";
    }

    table += "</table>";
    document.getElementById("table").innerHTML = table;
    //document.write(table);

    // pie chart

    // Load google charts
    google.charts.load('current', {
      'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);

    // Draw the chart and set the chart values
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Scheme', 'Counted'],
        ['.com', 5],
        ['.edu', 1],
        ['.gov', 1],
        ['other', 1],
      ]);

      // Optional; add a title and set the width and height of the chart
      var title = {
        'title': 'Url TLD',
        'width': 600,
        'height': 400
      };

      // Display the chart inside the <div> element with id="piechart"
      var chart = new google.visualization.PieChart(document.getElementById('piechart'));
      chart.draw(data, title);
    }

  }
  /* Prints all url info w/o table
  document.write("<br />");
  document.write("Url: " + stringURL.href + "<br />");
  document.write("Protocol: " + stringURL.protocol + "<br />");
  document.write("User info: " + stringURL.username + "<br />");
  document.write("Hostname: " + stringURL.hostname + "<br />");
  document.write("Port: " + stringURL.port + "<br />");
  document.write("Pathname: " + stringURL.pathname + "<br />");
  document.write("Query: " + stringURL.search + "<br />");
  document.write("Fragment: " + stringURL.hash + "<br />");
  */
//}


// IP Address Manager
