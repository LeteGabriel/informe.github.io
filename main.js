var boton = document.getElementById("copiador");
boton.addEventListener("click", copiarAlPortapapeles, false);
function copiarAlPortapapeles() {
  var enlace = document.getElementById("nuevodato");
  var inputFalso = document.createElement("input");
  inputFalso.setAttribute("value", enlace.innerHTML);
  document.body.appendChild(inputFalso);
  inputFalso.select();
  document.execCommand("copy");
  document.body.removeChild(inputFalso);
  alert("Copiado al portapapeles!");
};

document.getElementById('boton1').onclick = function(){
    let inicio = document.getElementById('ini').value;
    let fin = document.getElementById('fin').value;
    let fecha = document.getElementById('fecha').value;
    let barrio = document.getElementById('bar').value;
    let evento = document.getElementById('eve').value;
    let lote = document.getElementById('lotes').value;
    let informe = document.getElementById('info').value;
    let part1 = document.getElementById('part1').value;
    let puesto1 = document.getElementById('puesto1').value;
    let part2 = document.getElementById('part2').value;
    let puesto2 = document.getElementById('puesto2').value;
    let part3 = document.getElementById('part3').value;
    let puesto3 = document.getElementById('puesto3').value;
    let part4 = document.getElementById('part4').value;
    let puesto4 = document.getElementById('puesto4').value;
    
    document.getElementById('datos').innerHTML = "";
    document.getElementById('nuevodato').style.display = "block";
    document.getElementById('copiador').style.display = "block";
    document.getElementById('nuevodato').innerHTML = ("El " + fecha + " siendo las " + inicio + " en el barrio Nuestra señora de " + barrio + " se produce un evento de " + evento + " en el lote " + lote + ", el cual finalizo siendo las " + fin + " acudieron al evento los Sres " + part1 + " " + puesto1 + ", "  + ", " + part2 + " " + puesto2 + ", "  + part3 + " " + puesto3 + ", "  + part4 + " " + puesto4 + ". Se informo a " + informe + ".");
    document.getElementById('comparte').style.display = "block";



//    confirm("El " + fecha + " siendo las " + inicio + " en el barrio Nuestra señora de " + barrio + " se produce un evento de " + evento + " en el lote " + lote + ", el cual finalizo siendo las " + fin + " acudieron al evento los Sres " + part1 + " " + puesto1 + ", "  + ", " + part2 + " " + puesto2 + ", "  + part3 + " " + puesto3 + ", "  + part4 + " " + puesto4 + ". Se informo a " + informe + ".");
   
};
