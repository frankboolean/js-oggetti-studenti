

// /esercizio  1
$(document).ready(function(){



 var studente= {
   "nome": "Francesco",
   "cognome" : "Iozzia",
   "eta" : 29
 };


 for (var key in studente){
   var valore =(studente[key]);
   // prece= document.getElementById('ciao').innerHTML;
   // document.getElementById('ciao').innerHTML= prece + " " + studente[key];
   $("ul").append("<div><ul class= 'ciao'>"+ valore + "</ul></div>")

 }

// es 2

var studenti = [
  {
    "nome" :"marco",
    "cognome" : "landi"
  },
  {
    "nome":"gianni",
    "cognome":"sperti"
  }
];
console.log(studenti)

for (var i=0; i < studenti.length; i++){

  var oggetto= studenti[i];
  $(".sec").append("<div><ul class= 'seconda'>" + oggetto.nome + oggetto.cognome +"</ul></div>");
  // var nomeStudente= oggetti.nome;
  // var cognomeStudente= oggetti.cognome;

  }
 var esempio= prompt(" aggiungi studente")



});
