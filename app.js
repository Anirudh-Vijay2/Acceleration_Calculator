function find() {
    const final = document.getElementById('value1').value;
    const initial = document.getElementById('value2').value;
    const time = document.getElementById('value3').value;
    const velocity1 = parseInt(final)
    const velocity2 = parseInt(initial)
    const time1 = parseInt(time)
    const velocityafter = velocity1 - velocity2;
    const lastanswer = velocityafter / time1;

    if(initial == "", time == ""){
        document.getElementById('error').style.display="block";
        document.getElementById('message').style.display="none";
   document.getElementById('thanks').style.display="none";
    }

    else if(final == ""){
        document.getElementById('error').style.display="block";
        document.getElementById('message').style.display="none";
   document.getElementById('thanks').style.display="none";
    }

    else{
    document.getElementById('answer').innerHTML = lastanswer + ("m/s");
   document.getElementById('message').style.display="block";
   document.getElementById('thanks').style.display="block";
   document.getElementById('error').style.display="none";
    }
  
}