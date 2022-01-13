// Zadanie 1 
function sprawdz(){
    let liczba = document.getElementById('pole').value
    console.log(liczba);
    if (liczba<0){document.getElementById('wynik').innerHTML = "UJEMNA"}
    else if (liczba==0){document.getElementById('wynik').innerHTML="ZERO"}
    else if (liczba>0){document.getElementById('wynik').innerHTML="DODATNIA"}
};
// Zadanie 2
function wypisz(){
    let polea = document.getElementById('polea').value;
    let poleb = document.getElementById('poleb').value;
    let ciag = '';
    if (polea<poleb){
        for (i=polea; poleb>i; i++)
        {
           ciag = ciag +i+" "; 

        }document.getElementById('wynik2').innerHTML = ciag; 
    }else {document.getElementById('wynik2').innerHTML = "Pierwsza liczba musi być mniejsza od drugiej!!!"};
};
// Zadanie 3
function randomer1(){
    let number = Math.floor(Math.random()*50)+1;
    console.log(number);
    document.getElementById('X').innerHTML="--X--";
};

function randomer2(){
    console.log(number);
    let los = document.getElementById('liczbaWprowadzana').value;
        if(number<los){document.getElementById('wynik3').innerHTML = "Za dużo spróbój jeszcze raz";}
        else if(number>los){document.getElementById('wynik3').innerHTML = "Za mało spróbój jeszcze raz";}
        else if(number=los){document.getElementById('wynik3').innerHTML = "Gratulacje!!! Wygrałeś !!!";}
};
