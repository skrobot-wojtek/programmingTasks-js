// zadanie 1
function sprawdz(){

    let liczba  = document.getElementById('pole').value;
    if (liczba<0) document.getElementById('wynik').innerHTML='ujemna';
    else if(liczba==0) document.getElementById('wynik').innerHTML='zero';
    else if(liczba>0) document.getElementById('wynik').innerHTML='dodatnia';
    else document.getElementById('wynik').innerHTML='to nie jest lczba';
}
// zadanie 2 
function wypisz(){

    let liczba1 = document.getElementById("pole1").value;
    let liczba2 = document.getElementById("pole2").value;
    let ciag = "";
    for(i=liczba1; i<=liczba2; i++)
    {
        ciag = ciag+i+' ';
    }
    document.getElementById('wynik2').innerHTML=ciag;
}
    // zadanie 3 
    let numer = Math.floor(Math.random()*5)+1;
    console.log(numer);
  

    function slajder(){
       
  document.getElementById('qwe').innerHTML=numer;


    }
