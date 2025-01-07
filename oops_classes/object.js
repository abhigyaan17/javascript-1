function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function hinduwhore(boobs,ass) {
    let feel
    if(boobs > 30 && ass === "tight"){
        feel = "Great"
    }
    else if(boobs > 40 && ass === "tight"){
        feel = "Heavenly"
    }
    else{
        feel = "Average"
    }
    this.feel = feel
}

hinduwhore.prototype.figure = function(whorename) {
    console.log(`Whore ${whorename} has a ${this.feel} figure`);
}

const savita = new hinduwhore(32, "tight")
const swastika = new hinduwhore(42, "tight")

savita.figure("savita")
swastika.figure("swastika")