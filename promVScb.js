const lib=require('./lib.js')
let amount=2000
let toCut=200

function chargeDebit(){
    amount=amount-toCut;
    console.log('remaining: '+amount);

}

// lib.updateAccount('tv',chargeDebit)
lib.promiseUpdate('tv').then(chargeDebit)