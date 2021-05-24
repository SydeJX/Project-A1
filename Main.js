function OnClickEvent(form){

var käyttäjätunnus = form.Käyttäjätunnus.value;
var password = form.KäyttäjäSalasana.value;
var sähköposti = form.sähköposti.value;
var result = 0;
  var ehdot = /\S+@\S+/;
//onko väärin laitettu jotakin (tarkistus)
if (käyttäjätunnus.length < 5) {
document.getElementById('varoitus').innerHTML = "Käyttäjätunnuksessa saa olla enintään 5 merkkiä";
  var result = 1;
} else {
  document.getElementById('varoitus').innerHTML = "";
}

if (password.length < 5) {
document.getElementById('varoitus1').innerHTML = "Salsanassa saa olla enintään 5 merkkiä";
  var result = 1;
} else {
  document.getElementById('varoitus1').innerHTML = "";
}

if (sähköposti.length == "") {
  document.getElementById('varoitus2').innerHTML = "Sähköposti ei voi olla tyhjä";
  var result = 1;
} else if (!ehdot.test(sähköposti)){
  document.getElementById('varoitus2').innerHTML = "Väärä sähköposti";
  var result = 1;
} else {
    document.getElementById('varoitus2').innerHTML = "";
}

if (result === 1)
return false;
}
