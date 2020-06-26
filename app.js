

function keypress(num){

var number= document.getElementById("result");
number.value +=num;
}

function clearval(){

    var number= document.getElementById("result");
    number.value ="";
    }


    function ans(){
        var number= document.getElementById("result");
        number.value =eval(number.value);


    }