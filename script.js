setInterval(()=>{
    let clock =document.getElementById('clock');
    let daydisplay=document.getElementById('day');
    let month=document.getElementById('month');
    let year=document.getElementById('year');
    //getting time
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    if(minutes<=9){
        minutes="0"+minutes;
    }
    let seconds=date.getSeconds();
    if(seconds<=9){
        seconds='0'+seconds;
    }
    let cMonth=date.getMonth() +1;
    let cYear=date.getFullYear();
    let day=date.getDay();
    let daysName=['Sunday','Monday','Tuesday','Wedesday','Thursday','Friday','Saturday'];
    if (hours<12) {
        document.getElementById('amOrpm').innerHTML='AM';
    }
    else{
        document.getElementById("amOrpm").innerHTML='PM'
    }
    clock.innerHTML=hours +":"+minutes+":"+seconds ;
    
    daydisplay.innerHTML=daysName[day];
    month.innerHTML="| " + cMonth;
    year.innerHTML=" | " +cYear
},1000);

