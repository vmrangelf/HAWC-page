function get_data(arg) {
    var data = arg;
    document.getElementById('title').innerHTML =" <h3>Aditional Information</h3>";
    create_table(data);
}

function create_table(data){
    var tabla = "<table>";
    var row1 = ""
    for (i in data){
        row1 = ""
        row1 += "<tr><th>"+ i +"</th>";
        row1 += "<td>"+ data[i] +"</td></tr>";
        tabla += row1;
    }
    tabla += "</table>";
    document.getElementById("data").innerHTML = tabla;
}
