function k(){
document.getElementById('main').innerHTML="Willkommen auf der Homepage von TSKLogistiks wir bieten ihnen Zuverlässigkeit, Kompetenz und faire Preise bei Umzügen, Transporten.<br>Mit uns sichern sie sich einen zuverlässigen Partner,bei dem die Kundenzufriedenheit an Platz 1 steht.<br>Wir bieten ihnen Vertrauenswürdigkeit und flexible Zeiten, wir sind für sie da wenn sie uns brauchen."
}
function editName2(button){
            var row = button.parentNode.parentNode;
            var AuftragsID= row.cells[1].innerText;
            var datum = row.cells[2].innerText;
            var uhrzeit = row.cells[3].innerText;
            var vorNachname= row.cells[4].innerText;
            var abholort=row.cells[5].innerText;
            var zielort=row.cells[6].innerText;
            var notizen=row.cells[7].innerText;
            var xhr5 = new XMLHttpRequest();
            xhr5.open('POST', 'anzeigenbearbeiten.php', true);
            xhr5.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr5.onreadystatechange = function() {
                if (xhr5.readyState === 4 && xhr5.status === 200) {
                    document.getElementById('main').innerHTML=xhr5.responseText;
                }
            };
  
            var data = 'datum=' + encodeURIComponent(datum) + '&uhrzeit=' + encodeURIComponent(uhrzeit) + '&name='+ encodeURIComponent(vorNachname)+'&abholort='+encodeURIComponent(abholort)+'&zielort='+ encodeURIComponent(zielort)+'&notizen='+encodeURIComponent(notizen)+'&AuftragsID='+encodeURIComponent(AuftragsID);
            xhr5.send(data);
}
function editName3(button){
            var row = button.parentNode.parentNode;
            var AuftragsID= row.cells[1].innerText;
            var datum = row.cells[2].innerText;
            var uhrzeit = row.cells[3].innerText;
            var vorNachname= row.cells[4].innerText;
            var abholort=row.cells[5].innerText;
            var zielort=row.cells[6].innerText;
            var notizen=row.cells[7].innerText;
            var xhr5 = new XMLHttpRequest();
            xhr5.open('POST', 'anzeigenbearbeiten2.php', true);
            xhr5.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr5.onreadystatechange = function() {
                if (xhr5.readyState === 4 && xhr5.status === 200) {
                    document.getElementById('main').innerHTML=xhr5.responseText;
                }
            };
            var data = 'datum=' + encodeURIComponent(datum) + '&uhrzeit=' + encodeURIComponent(uhrzeit) + '&name='+ encodeURIComponent(vorNachname)+'&abholort='+encodeURIComponent(abholort)+'&zielort='+ encodeURIComponent(zielort)+'&notizen='+encodeURIComponent(notizen)+'&AuftragsID='+encodeURIComponent(AuftragsID);
            xhr5.send(data);
}
function editName(button){
            var row = button.parentNode.parentNode;
            var AuftragsID= row.cells[1].innerText;
            var datum = row.cells[2].innerText;
            var uhrzeit = row.cells[3].innerText;
            var vorNachname= row.cells[4].innerText;
            var abholort=row.cells[5].innerText;
            var zielort=row.cells[6].innerText;
            var notizen=row.cells[7].innerText;
            var xhr5 = new XMLHttpRequest();
            xhr5.open('POST', 'anzeigenbearbeiten.php', true);
            xhr5.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr5.onreadystatechange = function() {
                if (xhr5.readyState === 4 && xhr5.status === 200) {
                    document.getElementById('main').innerHTML=xhr5.responseText;
                }
            };
            var data = 'datum=' + encodeURIComponent(datum) + '&uhrzeit=' + encodeURIComponent(uhrzeit) + '&name='+ encodeURIComponent(vorNachname)+'&abholort='+encodeURIComponent(abholort)+'&zielort='+ encodeURIComponent(zielort)+'&notizen='+encodeURIComponent(notizen)+'&AuftragsID='+encodeURIComponent(AuftragsID);
            xhr5.send(data);
}
function loeschen(button){
        var row = button.parentNode.parentNode;
        var KundenID= row.cells[0].innerText;
        var xhr6 = new XMLHttpRequest();
        xhr6.open('POST', 'accountloeschen.php', true);
        xhr6.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr6.onreadystatechange = function() {
            if (xhr6.readyState === 4 && xhr6.status === 200) {
                document.getElementById('main').innerHTML=xhr6.responseText;
                setTimeout(account2,1000);
            }
        };
        var data = 'KundenID=' + encodeURIComponent(KundenID)
        xhr6.send(data);
}
function new2(button){
        var row = button.parentNode.parentNode;
        var KundenID= row.cells[0].innerText;
        var xhr6 = new XMLHttpRequest();
        xhr6.open('POST', 'rechtenehmen.php', true);
        xhr6.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr6.onreadystatechange = function() {
            if (xhr6.readyState === 4 && xhr6.status === 200) {
                document.getElementById('main').innerHTML=xhr6.responseText;
                setTimeout(account2,1000);
            }
        };
        var data = 'ID=' + encodeURIComponent(KundenID)
        xhr6.send(data);
}
function Admingeben(button){
        var row = button.parentNode.parentNode;
        var KundenID= row.cells[0].innerText;
        var xhr6 = new XMLHttpRequest();
        xhr6.open('POST', 'rechtegeben.php', true);
        xhr6.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr6.onreadystatechange = function() {
            if (xhr6.readyState === 4 && xhr6.status === 200) {
                document.getElementById('main').innerHTML=xhr6.responseText;
                setTimeout(account2,1000);
            }
        };
        var data = 'ID=' + encodeURIComponent(KundenID)
        xhr6.send(data);
}
function Terminstornieren(button){
         var row = button.parentNode.parentNode;
            var AuftragsID= row.cells[1].innerText;
            var datum = row.cells[2].innerText;
            var uhrzeit = row.cells[3].innerText;
            var vorNachname= row.cells[4].innerText;
            var abholort=row.cells[5].innerText;
            var zielort=row.cells[6].innerText;
            var notizen=row.cells[7].innerText;
          var xhr6 = new XMLHttpRequest();
          xhr6.open('POST', 'Terminstornieren.php', true);
          xhr6.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          xhr6.onreadystatechange = function() {
              if (xhr6.readyState === 4 && xhr6.status === 200) {
                  document.getElementById('output').innerHTML=xhr6.responseText;
                  setTimeout(termineanzeigen2(),10);
              }
          };
            var data = 'datum=' + encodeURIComponent(datum) + '&uhrzeit=' + encodeURIComponent(uhrzeit) + '&name='+ encodeURIComponent(vorNachname)+'&abholort='+encodeURIComponent(abholort)+'&zielort='+ encodeURIComponent(zielort)+'&notizen='+encodeURIComponent(notizen)+'&AuftragsID='+encodeURIComponent(AuftragsID);
          xhr6.send(data);
}
function Terminloeschen(button){
            var row = button.parentNode.parentNode;
            var KundenID= row.cells[0].innerText;
            var AuftragsID= row.cells[1].innerText;
            var datum = row.cells[2].innerText;
            var vorNachname= row.cells[3].innerText;
            var abholort= row.cells[4].innerText;
            var zielort= row.cells[5].innerText;
            var notizen= row.cells[6].innerText;

            var ablehnen3 = new XMLHttpRequest();
            ablehnen3.open('POST', 'terminabsagen.php', true);
            ablehnen3.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            ablehnen3.onreadystatechange = function() {
                if (ablehnen3.readyState === 4 && ablehnen3.status === 200) {
                    document.getElementById('main').innerHTML=ablehnen3.responseText;
                }
            };
  var data = 'datum=' + encodeURIComponent(datum) +  '&name='+ encodeURIComponent(vorNachname)+'&abholort='+encodeURIComponent(abholort)+'&zielort='+ encodeURIComponent(zielort)+'&notizen='+encodeURIComponent(notizen)+'&AuftragsID='+encodeURIComponent(AuftragsID) +'&KundenID='+ encodeURIComponent(KundenID);

            ablehnen3.send(data);

}


function ablehnen(button){
            var row = button.parentNode.parentNode;
            var KundenID= row.cells[0].innerText;
            var AuftragsID= row.cells[1].innerText;
            var datum = row.cells[2].innerText;
            var vorNachname= row.cells[3].innerText;
            var abholort= row.cells[4].innerText;
            var zielort= row.cells[5].innerText;
            var notizen= row.cells[6].innerText;

            var ablehnen3 = new XMLHttpRequest();
            ablehnen3.open('POST', 'terminablehnen.php', true);
            ablehnen3.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            ablehnen3.onreadystatechange = function() {
                if (ablehnen3.readyState === 4 && ablehnen3.status === 200) {
                    document.getElementById('main').innerHTML=ablehnen3.responseText;
                }
            };
  var data = 'datum=' + encodeURIComponent(datum) +  '&name='+ encodeURIComponent(vorNachname)+'&abholort='+encodeURIComponent(abholort)+'&zielort='+ encodeURIComponent(zielort)+'&notizen='+encodeURIComponent(notizen)+'&AuftragsID='+encodeURIComponent(AuftragsID) +'&KundenID='+ encodeURIComponent(KundenID);

            ablehnen3.send(data);

}


function annehmen(button){
            var row = button.parentNode.parentNode;
            var KundenID= row.cells[0].innerText;
            var AuftragsID= row.cells[1].innerText;
            var datum = row.cells[2].innerText;
            var vorNachname= row.cells[3].innerText;
            var abholort= row.cells[4].innerText;
            var zielort= row.cells[5].innerText;
            var notizen= row.cells[6].innerText;

            var ablehnen3 = new XMLHttpRequest();
            ablehnen3.open('POST', 'terminannehmen.php', true);
            ablehnen3.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            ablehnen3.onreadystatechange = function() {
                if (ablehnen3.readyState === 4 && ablehnen3.status === 200) {
                    document.getElementById('main').innerHTML=ablehnen3.responseText;
                }
            };
  var data = 'datum=' + encodeURIComponent(datum) +  '&name='+ encodeURIComponent(vorNachname)+'&abholort='+encodeURIComponent(abholort)+'&zielort='+ encodeURIComponent(zielort)+'&notizen='+encodeURIComponent(notizen)+'&AuftragsID='+encodeURIComponent(AuftragsID) +'&KundenID='+ encodeURIComponent(KundenID);

            ablehnen3.send(data);

}

function aenderungspeichern2(button){
const form2 = document.getElementById("myformtest");
form2.onsubmit = (event)=>{
event.preventDefault();
}
let xhr8 = new XMLHttpRequest();
  xhr8.open("POST","Terminloeschen.php",true);
  xhr8.onload = () =>{
  if(xhr8.readyState==4 && xhr8.status==200){
    document.getElementById('output').innerHTML= xhr8.response;
  }
  }
let formdata2 = new FormData(form2);
xhr8.send(formdata2);

}
function Terminabsagen(button){
const form2 = document.getElementById("myformtest");
form2.onsubmit = (event)=>{
event.preventDefault();
}
let xhr8 = new XMLHttpRequest();
  xhr8.open("POST","Terminabsagen.php",true);
  xhr8.onload = () =>{
  if(xhr8.readyState==4 && xhr8.status==200){
    document.getElementById('output').innerHTML= xhr8.response;
  }
  }
let formdata2 = new FormData(form2);
xhr8.send(formdata2);

}


function aenderungspeichern(button){
const form2 = document.getElementById("myformtest");
form2.onsubmit = (event)=>{
event.preventDefault();
}
let xhr8 = new XMLHttpRequest();
  xhr8.open("POST","Terminspeichern.php",true);
  xhr8.onload = () =>{
  if(xhr8.readyState==4 && xhr8.status==200){
    document.getElementById('output').innerHTML= xhr8.response;
  }
  }
let formdata2 = new FormData(form2);
xhr8.send(formdata2);

}
function e(){
document.getElementById('main').innerHTML="Sie können uns unter folgender Nummer 01737059307 erreichen.<br> Wir sind Montags bis Samstags von 10 Uhr bis 20 Uhr für sie erreichbar.<br> sie können uns auch eine e-mail unter <a href='mailto: Koehn.bremerhaven@web.de'>Koehn.bremerhaven@web.de<a> schicken und wir antworten Ihnen so schnell wie möglich."
}
function d(){
document.getElementById('main').innerHTML="Über uns <br> Wir sind ein aufstrebendes Unternehmen, dass versucht ihnen den bestmöglichen Service zu bieten."
}
function admin(){
document.getElementById('main').innerHTML="<form align='left' id='meindatum'><input type='date' id ='datum' name='datum' style='padding: 8px; border: 1px solid #ccc; border-radius: 5px;'><br><input type='submit' id='neuesdatum' value='Filtern' style='padding: 10px 20px; background-color: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;' onmouseover='this.style.backgroundColor='#2980b9'' onmouseout='this.style.backgroundColor='#3498db''></form><div id='table'></div>"
termintable()
document.getElementById("neuesdatum").addEventListener("click", termintable);
}
function admin2(button){
document.getElementById('main').innerHTML="<form align='left' id='meindatum'><input type='date' id ='datum' name='datum' style='padding: 8px; border: 1px solid #ccc; border-radius: 5px;'><br><input type='submit' id='neuesdatum' value='Filtern' style='padding    : 10px 20px; background-color: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;' onmouseover='this.style    .backgroundColor='#2980b9'' onmouseout='this.style.backgroundColor='#3498db''></form><div id='table'></div>"
termintable()
document.getElementById("neuesdatum").addEventListener("click", termintable);
}
function termintable(){
const form = document.getElementById("meindatum");
form.onsubmit = (event)=>{
event.preventDefault();
}
let admintable = new XMLHttpRequest();
  admintable.open("POST","admintermine.php",true);
  admintable.onload = () =>{
  if(admintable.readyState==4 && admintable.status==200){
    document.getElementById("table").innerHTML= admintable.response;
  }
  }
let formdata = new FormData(form);
admintable.send(formdata);
}
function adminanfrage2(button){
document.getElementById('main').innerHTML="<form align='left' id='meindatum'><input type='date' id ='datum' name='datum' style='padding: 8px; border: 1px solid #ccc; border-radius: 5px;'><br><input type='submit' id='neuesdatum2' value='Filtern' style='padding: 10px 20px; background-color: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;' onmouseover='this.style.backgroundColor='#2980b9'' onmouseout='this.style.backgroundColor='#3498db''></form><div id='table'></div>"
anfragen()
document.getElementById("neuesdatum2").addEventListener("click", anfragen);
}

function adminanfrage(){
document.getElementById('main').innerHTML="<form align='left' id='meindatum'><input type='date' id ='datum' name='datum'><br><input type='submit' id='neuesdatum2' value='Filtern'></form><div id='table'></div>"
anfragen()
document.getElementById("neuesdatum2").addEventListener("click", anfragen);
}
function anfragen(){
const form = document.getElementById("meindatum");
form.onsubmit = (event)=>{
event.preventDefault();
}
let admintable2 = new XMLHttpRequest();
  admintable2.open("POST","adminanfragen.php",true);
  admintable2.onload = () =>{
  if(admintable2.readyState==4 && admintable2.status==200){
    document.getElementById("table").innerHTML= admintable2.response;
  }
  }
let formdata2 = new FormData(form);
admintable2.send(formdata2);
}

function nopass(){
document.getElementById('main').innerHTML="Sie brauchen ein Benutzer Konto und müssen angemeldet sein, um einen Termin zu buchen."
}
function Terminbuchen(){
  document.getElementById('main').innerHTML="<div>Buchen sie jetzt einen unverbindlichen Termin kostenlos, der Preis und die Uhrzeit des Termines werden von dem Geschäftsführer kalkuliert und ihnen dann mitgeteilt, dann können sie das Angebot annehmen oder ablehnen.</div><div id='output' color='red' style='color: red;'></div><form accept-charset='UTF-8' id='myForm' method='POST' style='max-width: 500px; margin: 0 auto;'> <label for='date' style='display: block; font-weight: bold; margin-bottom: 5px;'>Datum:</label><input type='date' id='date' name='datum' style='width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;'><br><br> <label for='adresse_von' style='display: block; font-weight: bold; margin-bottom: 5px;'>Abholort:</label><input type='text' id='adresse_von' name='abholort' required style='width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;'><br><br><label for='adresse_bis' style='display: block; font-weight: bold; margin-bottom: 5px;'>Zielort:</label><input type='text' id='adresse_bis' name='zielort' required style='width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;'><br><br><label for='sonstige_notizen' style='display: block; font-weight: bold; margin-bottom: 5px;'>Sonstige Notizen:</label><input type='text' style='width: 500px; height: 100px; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;' id='sonstige_notizen' name='notizen'><br><input id='neuertermin' type='submit' value='Abschicken' style='background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;'></form>"
  document.getElementById("neuertermin").addEventListener("click", terminanfrageneu)
}
function Terminhinzufügen(){
  document.getElementById('main').innerHTML="<div id='output' color='red' style='color: red;'></div><form accept-charset='UTF-8' id='myForm' method='POST' style='max-width: 500px; margin: 0 auto;'> <label for='Name' style='display: block; font-weight: bold; margin-bottom: 5px;'>Name:</label><input type='text' id='Name' name='Name' style='width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;'><label for='date' style='display: block; font-weight: bold; margin-bottom: 5px;'>Datum:</label><input type='date' id='date' name='datum' style='width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;'><br><br> <label for='Uhrzeit' style='display: block; font-weight: bold; margin-bottom: 5px;'>Uhrzeit:</label><input type='time' id='Uhrzeit' name='Uhrzeit' style='width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;'><label for='adresse_von' style='display: block; font-weight: bold; margin-bottom: 5px;'>Abholort:</label><input type='text' id='adresse_von' name='abholort' required style='width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;'><br><br><label for='adresse_bis' style='display: block; font-weight: bold; margin-bottom: 5px;'>Zielort:</label><input type='text' id='adresse_bis' name='zielort' required style='width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;'><br><br><label for='sonstige_notizen' style='display: block; font-weight: bold; margin-bottom: 5px;'>Sonstige Notizen:</label><input type='text' style='width: 500px; height: 100px; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;' id='sonstige_notizen' name='notizen'><br><input id='neuertermin' type='submit' value='Abschicken' style='background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;'></form>"
  document.getElementById("neuertermin").addEventListener("click", termin)
}
function loginformular(){
  document.getElementById('main').innerHTML="<div id='output' color='red' style='color: red;'></div><header style='font-size: 24px; font-weight: bold; margin-bottom: 20px;'>Anmeldung</header><form id='myform' method='post' style='max-width: 300px; margin: 0 auto;'><label for='E-mail' style='display: block; font-weight: bold; margin-bottom: 5px;'>E-Mail:</label><input type='email' id='email' name='email' style='width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;'><br><br><label for='Passwort' style='display: block; font-weight: bold; margin-bottom: 5px;'>Passwort:</label><input type='password' id='passwort' name='passwort' style='width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;'><br><br><input id='log' type='submit' value='Absenden' style='background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;'></form>"
  document.getElementById("log").addEventListener("click",anmelden)
}
function terminanfrageneu(){
  const form = document.getElementById("myForm");
  form.onsubmit = (event)=>{
    event.preventDefault();
  }
  let xhr3 = new XMLHttpRequest();
  xhr3.open("POST","terminanfrageneu.php",true);
  xhr3.onload = () =>{
    if(xhr3.readyState==4 && xhr3.status==200){
      document.getElementById("output").innerHTML= xhr3.response;
    }
  }
  let formdata = new FormData(form);
  xhr3.send(formdata);
}


function termin(){
  const form = document.getElementById("myForm");
  form.onsubmit = (event)=>{
    event.preventDefault();
  }
  let xhr3 = new XMLHttpRequest();
  xhr3.open("POST","terminneu.php",true);
  xhr3.onload = () =>{
    if(xhr3.readyState==4 && xhr3.status==200){
      document.getElementById("output").innerHTML= xhr3.response;
    }
  }
  let formdata = new FormData(form);
  xhr3.send(formdata);
}

function anmelden(){
const form = document.getElementById("myform");
form.onsubmit = (event)=>{
event.preventDefault();
}
let xhr2 = new XMLHttpRequest();
  xhr2.open("POST","login.php",true);
  xhr2.onload = () =>{
  if(xhr2.readyState==4 && xhr2.status==200){
    document.getElementById("output").innerHTML= xhr2.response;
    navbar2();
  }
  }
let formdata = new FormData(form);
xhr2.send(formdata);
}
function neuerAdmin(){
document.getElementById('main').innerHTML="<div id='output' color='red'></div><br><section style='max-width: 300px; margin: 0 auto;'><header style='font-size: 24px; font-weight: bold; margin-bottom: 20px;'>Neuen Admin hinzufügen</header><form id='myform' method='post'><label style='display: block; font-weight: bold; margin-bottom: 5px;'>Vorname</label><br><input type='text' name='vorn' placeholder='Vorname' style='width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;'/><br><label style='display: block; font-weight: bold; margin-bottom: 5px;'>Nachname</label><br><input type='text' name='nachn' placeholder='Nachname' style='width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;'/><br><label style='display: block; font-weight: bold; margin-bottom: 5px;'>E-mail</label><br><input type='text' name='email' placeholder='E-mail' style='width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;'><br><label>Passwort</label><br><input type='password' name='passw' placeholder='Passwort'style='width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;'/><br><br><input type='submit' value='Registrieren' id='regist' style='background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;'></form></section>"
document.getElementById("regist").addEventListener("click", Adminneu)
}
function Adminneu(){
const form = document.getElementById("myform");
form.onsubmit = (event)=>{
event.preventDefault();
}
let xhr7 = new XMLHttpRequest();
  xhr7.open("POST","neuerAdmin.php",true);
  xhr7.onload = () =>{
  if(xhr7.readyState==4 && xhr7.status==200){
    document.getElementById("output").innerHTML= xhr7.response;
  }
  }

let formdata = new FormData(form);
xhr7.send(formdata);
}
function termineanzeigen(event){
let kek = new XMLHttpRequest();
  kek.onreadystatechange = function() {
    if (kek.readyState == 4 && kek.status == 200) {
      document.getElementById("main").innerHTML = kek.response;
      event.preventDefault();
    }
  };
  kek.open("GET","termineanzeigenneu.php",true);
  kek.send();
}
function termineanzeigen2(){
let kek = new XMLHttpRequest();
  kek.onreadystatechange = function() {
    if (kek.readyState == 4 && kek.status == 200) {
      document.getElementById("main").innerHTML = kek.response;
    }
  };
  kek.open("GET","termineanzeigenneu.php",true);
  kek.send();
}

function account(event){
let kek2 = new XMLHttpRequest();
  kek2.onreadystatechange = function() {
    if (kek2.readyState == 4 && kek2.status == 200) {
      document.getElementById("main").innerHTML = kek2.response;
      event.preventDefault();
    }
  };
  kek2.open("GET","showinfo.php",true);
  kek2.send();
}
function account2(){
let kek2 = new XMLHttpRequest();
  kek2.onreadystatechange = function() {
    if (kek2.readyState == 4 && kek2.status == 200) {
      document.getElementById("main").innerHTML = kek2.response;
    }
  };
  kek2.open("GET","showinfo.php",true);
  kek2.send();
}



function registrieren(){
  document.getElementById('main').innerHTML="<div id='output' color='red' style='color: red;'></div><br><section style='max-width: 300px; margin: 0 auto;'><header style='font-size: 24px; font-weight: bold; margin-bottom: 20px;'>Registrierung</header><form id='myform'><label for='vorn' style='display: block; font-weight: bold; margin-bottom: 5px;'>Vorname</label><br><input type='text' name='vorn' placeholder='Vorname' style='width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;'><br><label for='nachn' style='display: block; font-weight: bold; margin-bottom: 5px;'>Nachname</label><br><input type='text' name='nachn' placeholder='Nachname' style='width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;'><br><label for='email' style='display: block; font-weight: bold; margin-bottom: 5px;'>E-mail</label><br><input type='text' name='email' placeholder='E-mail' style='width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;'><br><label for='passw' style='display: block; font-weight: bold; margin-bottom: 5px;'>Passwort</label><br><input type='password' name='passw' placeholder='Passwort' style='width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;'><br><br><input type='submit' value='Registrieren' id='regist' style='background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;'></form></section>"
  document.getElementById("regist").addEventListener("click", Reg)
}
function Reg(){
const form = document.getElementById("myform");
form.onsubmit = (event)=>{
event.preventDefault();
}
let xhr = new XMLHttpRequest();
  xhr.open("POST","Registrierung.php",true);
  xhr.onload = () =>{
  if(xhr.readyState==4 && xhr.status==200){
    document.getElementById("output").innerHTML= xhr.response;
  }
  }

let formdata = new FormData(form);
xhr.send(formdata);
}
function termineanzeigen(event){
let kek = new XMLHttpRequest();
    kek.onreadystatechange = function() {
      if (kek.readyState == 4 && kek.status == 200) {
        document.getElementById("main").innerHTML = kek.response;
        event.preventDefault();
      }
    };
    kek.open("GET","termineanzeigenneu.php",true);
    kek.send();
  }


function logout2(event){
var xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("main").innerHTML = this.responseText;
        event.preventDefault();
        navbar(event);
      }
    };
    xmlhttp2.open("GET","logout.php",true);
    xmlhttp2.send();
  }

function navbar(event) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("navbar").innerHTML = this.responseText;
        event.preventDefault();
        if(document.getElementById('logout')!==null){
          document.getElementById('logout').addEventListener('click', logout2)
        }
        if(document.getElementById('Registrieren')!==null){
          document.getElementById('Registrieren').addEventListener('click', registrieren)
        }
        if(document.getElementById('Meinetermine')!==null){
          document.getElementById('Meinetermine').addEventListener('click', termineanzeigen)
        }

        if(document.getElementById('login')!==null){
          document.getElementById('login').addEventListener('click', loginformular)
        }
        if(document.getElementById('terminbuchen')!==null){
          document.getElementById('terminbuchen').addEventListener('click', Terminbuchen)
        }
        if(document.getElementById('youshallnotpass')!==null){
          document.getElementById('youshallnotpass').addEventListener('click', nopass)
        }
        if(document.getElementById("home")!==null){
        document.getElementById('home').addEventListener('click', k)
        }
        if(document.getElementById("Kontakt")!==null){
        document.getElementById('Kontakt').addEventListener('click', e)
        }
        if(document.getElementById("about")!==null){
        document.getElementById('about').addEventListener('click', d)
        }
        if(document.getElementById('Alletermine')!==null){
          document.getElementById('Alletermine').addEventListener('click', admin)
        }
        if(document.getElementById('Alleanfragen')!==null){
          document.getElementById('Alleanfragen').addEventListener('click', adminanfrage)
        }
if(document.getElementById('neuerAdmin')!==null){
          document.getElementById('neuerAdmin').addEventListener('click', neuerAdmin)
        }
        if(document.getElementById('Nutzer')!==null){
          document.getElementById('Nutzer').addEventListener('click', account)
        }
            if(document.getElementById('Terminhinzufügen')!==null){
          document.getElementById('Terminhinzufügen').addEventListener('click', Terminhinzufügen)
        }


      }
      }
    xmlhttp.open("GET","header2.php",true);
    xmlhttp.send();

  }
function navbar2() {
      var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("navbar").innerHTML = this.responseText;
        if(document.getElementById('logout')!==null){
        document.getElementById('logout').addEventListener('click', logout2)
        }
         if(document.getElementById('Registrieren')!==null){
          document.getElementById('Registrieren').addEventListener('click', registrieren)
        }
          if(document.getElementById('login')!==null){
          document.getElementById('login').addEventListener('click', loginformular)
        }
        if(document.getElementById('terminbuchen')!==null){
          document.getElementById('terminbuchen').addEventListener('click', Terminbuchen)
        }
        if(document.getElementById('Meinetermine')!==null){
          document.getElementById('Meinetermine').addEventListener('click', termineanzeigen)
        }
        if(document.getElementById("home")!==null){
          document.getElementById('home').addEventListener('click', k)
        }
        if(document.getElementById("Kontakt")!==null){
          document.getElementById('Kontakt').addEventListener('click', e)
        }
        if(document.getElementById("about")!==null){
          document.getElementById('about').addEventListener('click', d)
        }
        if(document.getElementById('Alleanfragen')!==null){
          document.getElementById('Alleanfragen').addEventListener('click', adminanfrage)
        }
        if(document.getElementById('Alletermine')!==null){
          document.getElementById('Alletermine').addEventListener('click', admin)
        }
        if(document.getElementById('neuerAdmin')!==null){
          document.getElementById('neuerAdmin').addEventListener('click', neuerAdmin)
        }
if(document.getElementById('Nutzer')!==null){
          document.getElementById('Nutzer').addEventListener('click', account)
        }
 if(document.getElementById('Terminhinzufügen')!==null){
          document.getElementById('Terminhinzufügen').addEventListener('click', Terminhinzufügen)
        }



     }
     }
    xmlhttp.open("GET","header2.php",true);
    xmlhttp.send();
  }


function init(event){
navbar(event)
}
window.onload=init
