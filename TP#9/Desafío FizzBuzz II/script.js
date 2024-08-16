function fizzBuzz2(fizz_num,buzz_num,contar_hasta){
    
    for(let i = 1; i < contar_hasta; i++){

        if((i % fizz_num == 0) && (i % buzz_num == 0)){
            console.log("zzuBzziF");
        }
        else if(i % fizz_num == 0){
            console.log("zziF");
        }
        else if(i % buzz_num == 0){
            console.log("zzuB");
        }        
        else{
           console.log(i); 
        }

    }
    
}

fizzBuzz2(3,5,100);