let hr= document.getElementById('hour');
let min= document.getElementById('min');
let sec= document.getElementById('sec');

function V(){
    let date=new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();
    
    let hours=30*hh+mm/2;
    let minutes=6*mm;
    let seconds=6*ss;

    hr.style.transform='rotate(${hours}deg)';
    min.style.transform= 'rotate(${minutes}deg)';
    sec.style.transform='rotate(${seconds}deg)';


}

setInterval(V,1000);



