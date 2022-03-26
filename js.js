
var nombre = document.getElementById("user").value;
var email = document.getElementById("email").value;

var button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");

button1.onclick=function(){
    var nombre = document.getElementById("user").value;
    var email = document.getElementById("email").value;
   
    document.getElementById("setUser").innerHTML=nombre;
    document.getElementById("setEmail").innerHTML=email;
}
button2.onclick=function(){
    var b1 = document.getElementById("2b-1").value;
    var b2 = document.getElementById("2b-2").value;
    var b3 = document.getElementById("2b-3").value;
    var b4 = document.getElementById("2b-4").value;

    document.getElementById("setSuma").innerHTML=parseFloat(b1)+parseFloat(b2);
    document.getElementById("setMultiplicacion").innerHTML=b3*b4;
}

button3.onclick=function(){
    var c1 = document.getElementById("2c-1").value;
    var c2 = document.getElementById("2c-2").value;
    
    c1 = parseFloat(c1);
    c2 = parseFloat(c2);

    var suma = c1+c2;
    var resta = c1-c2;
    var multi = c1*c2;
    var divi = c1/c2;

    divi = divi.toFixed(2);

    if(c1>c2){
        document.getElementById("enunciado").innerHTML="Como el primero es mayor que el segundo se muestra la suma "+suma+" y diferencia "+resta;
    }
    //El problema da a entender que también si son iguales se muestre la multiplicación y división
    else if (c1==c2){
        document.getElementById("enunciado").innerHTML="Como el primero es igual que el segundo se muestra la multiplicación "+multi+" y la división "+divi;
    }
    else{
        document.getElementById("enunciado").innerHTML="Como el primero es menor que el segundo se muestra la multiplicación "+multi+" y la división "+divi;
    }
}

button4.onclick=function(){
    var d1 = document.getElementById("2d-1").value;
    var d2 = document.getElementById("2d-2").value;
    var d3 = document.getElementById("2d-3").value;
    
    d1 = parseFloat(d1);
    d2 = parseFloat(d2);
    d3 = parseFloat(d3);

    prom = (d1+d2+d3)/3;
    
    if(prom>=4){
        document.getElementById("promedio").innerHTML=prom;
        document.getElementById("mensajePromedio").innerHTML="<b>Regular</b>";
    }
    else{
        document.getElementById("promedio").innerHTML=prom;
        document.getElementById("mensajePromedio").innerHTML="<b>Reprobado</b>";
    }
    
}
button5.onclick=function(){
    var e1 = document.getElementById("2e-1").value;
    var e2 = document.getElementById("2e-2").value;
    var e3 = document.getElementById("2e-3").value;

    e1 = parseFloat(e1);
    e2 = parseFloat(e2);
    e3 = parseFloat(e3);

    if(e1>e2){
        if(e1>e3){
            document.getElementById("respuestaMayor").innerHTML=e1;
        }
        else{
            document.getElementById("respuestaMayor").innerHTML=e3;
        }
    }
    else{
        if(e2>e3){
            document.getElementById("respuestaMayor").innerHTML=e2;
        }
        else{
            document.getElementById("respuestaMayor").innerHTML=e3;
    }
    }
}


