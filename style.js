function sprawdz(){
    let liczba = document.getElementById('pole').value
    console.log(liczba);
    if (liczba<0){document.getElementById('wynik').innerHTML = "ujemna"}
    else if (liczba==0){document.getElementById('wynik').innerHTML="zero"}
    else if (liczba>0){document.getElementById('wynik').innerHTML="dodatnia"}
};

function wypisz(){
    let polea = document.getElementById('polea').value;
    let poleb = document.getElementById('poleb').value;
    let ciag = '';
    if (polea<poleb){
        for (i=polea; poleb>=i; i++)
        {
           ciag = ciag +i+" "; 
        }document.getElementById('wynik2').innerHTML = ciag; 
    }else {document.getElementById('wynik2').innerHTML = "Pierwsza liczba musi być mniejsza od drugiej!!!"};
};

function randomer(){
   let number = Math.floor(Math.random()*5)+1;
    console.log(number);
};
