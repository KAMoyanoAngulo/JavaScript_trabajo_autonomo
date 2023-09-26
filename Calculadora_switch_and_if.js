/*     function calculadora(operacion,x,y){
      if(operacion === "Suma"){
        Sumaresultado = x+y;
        console.log("El resultado de la suma es: " + Sumaresultado)
      }else if(operacion ==="Multiplicacion"){
        Multiplicacionresultado = x*y;
        console.log("El resultado de la multiplicacion es: " + Multiplicacionresultado)
      }else if(operacion === "Divsion"){
        Divisionresultado = x/y;
        console.log("El resultado de la division es: " + Divisionresultado)
      }else if(operacion==="Exponenciacion"){
        Exponenciacionresultado = x**y;
        console.log("El resultado de la exponenciacion es: " + Exponenciacionresultado)
      }else if(operacion === "Residuo"){
        Residuoresultado = x%y;
        console.log("El resultado del residuo es: " + Residuoresultado)
      }else if(operacion === "Resta"){
        Restaresultado = x-y;
        console.log("El resultado de la resta es: " + Restaresultado);
      }
    }
    calculadora("Suma",5,5); */

    function calculadora(operacion,x,y){
      switch(operacion){
        
        case "Suma":
        Sumaresultado = x+y;
        console.log("El resultado de la suma es: " + Sumaresultado);
        break;

        case "Multiplicacion":
        Multiplicacionresultado = x*y;
        console.log("El resultado de la multiplicacion es: " + Multiplicacionresultado);
        break;  

        case "Division":
        Divisionresultado = x/y;
        console.log("El resultado de la division es: " + Divisionresultado);
        break;

        case "Exponenciacion":
        Exponenciacionresultado = x**y;
        console.log("El resultado de la exponenciacion es: " + Exponenciacionresultado);
        break;

        case "Residuo":
        Residuoresultado = x%y;
        console.log("El resultado del residuo es: " + Residuoresultado);
        break;

        case "Resta":
        Restaresultado = x-y;
        console.log("El resultado de la resta es: " + Restaresultado);
        break;
      }
    }
    calculadora("Residuo",2,4);
