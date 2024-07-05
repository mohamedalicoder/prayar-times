
function gett(city) {
  axios
    .get(`http://api.aladhan.com/v1/timingsByCity?country=EG&city=${city}`)
    .then((response) => {
      let i = response.data.data.timings;
      let y = response.data.data;

      fillTime("fajr", i.Fajr);
      fillTime("doha", i.Sunrise);
      fillTime("dohr", i.Dhuhr);
      fillTime("asr", i.Asr);
      fillTime("maghrib", i.Maghrib);
      fillTime("isha", i.Isha);
      document.querySelector("p").innerHTML = y.date.readable;
      document.querySelector("h2").innerHTML = y.date.hijri.weekday.ar;
      console.log(response);
    });
}
function fillTime(id, time) {
  document.getElementById(id).innerHTML = time;
}
gett("Cairo")
document.querySelector("select").addEventListener("click", function () {
  var x = document.getElementById("select").value;
  console.log(x);
  if (x == "") {
    alert("Please select city");
  } else {
    gett(x);
  }
  document.getElementById("ctr").innerHTML = x;
});
