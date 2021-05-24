function OnClickEvent(form){

var käyttäjätunnus = form.Käyttäjätunnus.value;
var password = form.KäyttäjäSalasana.value;
var sähköposti = form.sähköposti.value;

//onko väärin laitettu jotakin (tarkistus)
if (käyttäjätunnus.length < 5) {
document.getElementById('varoitus').innerHTML = "Käyttäjätunnuksessa saa olla enintään 5 merkkiä";
return false;
}

if (password.length < 5) {
document.getElementById('varoitus1').innerHTML = "Salsanassa saa olla enintään 5 merkkiä";
return false;
}

if (sähköposti.length == "") {
  document.getElementById('varoitus2').innerHTML = "Sähköposti ei voi olla tyhjä";
  return false;
}

if (!ehdot.test(sähköposti)){
  var ehdot = /\S+@\S+/;
  document.getElementById('varoitus2').innerHTML = "Väärä sähköposti";
  return false;
}
}
