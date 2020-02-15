let printText = function(){
    console.log("Button clicked")
};

let orderInformation = function(){
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value.indexOf("@");
   // var street = document.getElementById("numberhouse").value;
    var payment = document.getElementById("paymentoption");
    var genderV = document.getElementById("gender");
    var genderValue;
    for(var i = 0; i < genderV.length; i++){
        if(genderV[i].checked){
            genderValue = genderV[i].value;
        }
    }

    console.log(name, email, payment, genderValue);
    var returnValue = new Array();
    returnValue = [name, email, payment, genderValue];
    return returnValue;
}


