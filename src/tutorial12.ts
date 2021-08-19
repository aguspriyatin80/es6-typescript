let percentBonus = () => 0.1;
let getValue = function(value=10,bonus=10*percentBonus()){
    console.log(value+bonus);
    console.log("argument: ", arguments.length);
}

getValue();
getValue(20);
getValue(20,30);
getValue(undefined,30);