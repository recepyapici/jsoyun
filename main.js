var liste=["tas.png","kagit.png","makas.png"];
var tas=document.getElementById("tas");
var kagit=document.getElementById("kagit");
var makas=document.getElementById("makas");
var pcSecim=document.getElementById("pc-secim");
var sonucYazdir=document.getElementById("sonuc");
 
 
kagit.onclick=secimYap;
makas.onclick=secimYap;
tas.onclick=secimYap;
 
 
function secimYap(){
var pc= RasgeleKagit();
 
var secim= this.dataset.id;

if(pc==0 && secim==1)
{
sonuc="Kazandınız..., kağıt taşı sarar.";
document.getElementById("listeEmoji").src = "smile.png";
}
else if(pc==0 && secim==2)
{
sonuc="Kaybettiniz..., Taş makası kırar.";
}
else if(pc==0 && secim==0)
{
sonuc="ikinizde aynı seçimi yaptınız.";
}


else if(pc==1 && secim==2)
{
sonuc="Kazandınız..., makas kağıdı keser.";
}
else if(pc==1 && secim==0)
{
sonuc="Kaybettiniz..., kağıt taşı sarar.";
}
else if(pc==1 && secim==1)
{
sonuc="ikinizde aynı seçimi yaptınız.";
}


else if(pc==2 && secim==0)
{
sonuc="Kazandınız..., Taş makası kırar.";
}
else if(pc==2 && secim==1)
{
sonuc="Kaybettiniz..., makas kağıdı keser.";
}
else if(pc==2 && secim==2)
{
sonuc="ikinizde aynı seçimi yaptınız.";
}


sonucYazdir.innerHTML=sonuc;
}
 
function RasgeleKagit(){
var sayi= Math.round(Math.random()*2);
pcSecim.src=liste[sayi]; 
return sayi;
}