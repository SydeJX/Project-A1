  function OnCLickEvent() {
    //Ottaa id
    function tarkista(form)
    {
    var sähköposti = form.sähköposti.value;
    var käyttäjätunnus = form.Käyttäjätunnus.value;
    var käyttäjäSalasana = form.KäyttäjäSalasana.value;

//Tämä katsoo jos olet kirjoitanut mitään
    if (käyttäjätunnus.value == "") {
      alert("Et ole kirjoitanut mitään tunnusta");
      if (käyttäjätunnus.length < 5){
        alert("Vähintää viisi kirjainta")
      }
  } else if (käyttäjäSalasana.length < 5) {
        alert("Vähintää viisi kirjainta")
  } else if (sähköposti.value == ""){
      alert("Et ole kirjoitanut mitään Sähköpostia");
      let Mail = sähköposti.value;
      var ehdot = /\S+@\S+/;
      if (!ehdot.test(Mail))
      {
        alert("Anna Kunnon Sähköposti");
      }

  } else {
      if (checkbox1.checked == true) {
        //qe
      }

    }
  }
}
