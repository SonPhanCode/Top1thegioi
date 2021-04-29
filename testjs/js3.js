// var connection = new ActiveXObject("adodb.connection");

// var connectionstring = "Data Source=TRUONGJAE\\SQLEXPRESS;Initial Catalog=QLSV;Integrated Security=True";

// connection.Open(connectionstring);
// var rs = new ActiveXObject("adodb.Recordset");

// rs.Open("SELECT * FROM LOP", connection);
// rs.MoveFirst
// while (!rs.eof) {
//     document.write(rs.fields(1));
//     rs.movenext;
// }

// rs.close;
// connection.close;
var d;
// Lấy giá trị từ người dùng
d = prompt("PASSWORD:");
var pass = "3668d28a81c75466e7287ff0fe7bd114";
if (md5(d) == pass) {
    alert("haha");
}