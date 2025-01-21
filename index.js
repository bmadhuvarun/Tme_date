function Clock() {
  var now = new Date();
  var hou = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  var day = now.getDate(); // Add this line to calculate the day
  var month = now.getMonth() + 1; // Months are zero-indexed
  var year = now.getFullYear();

  hou = hou < 10 ? "0" + hou : hou;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  day = day < 10 ? "0" + day : day; // Add leading zero for day
  month = month < 10 ? "0" + month : month;

  var time = hou + ":" + min + ":" + sec;
  var date = day + "/" + month + "/" + year; // Format: DD/MM/YYYY

  document.getElementById("clock").innerHTML = time;
  document.getElementById("date").innerHTML = date; // Set the date value
}

Clock();
setInterval(Clock, 1000); // Update every second
