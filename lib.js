function updateAccount(product,cb){
    setTimeout(() => {
        console.log(product+' purchased');
        cb();
    }, 2000);}

    function promiseUpdate(product,chargeDebit){

     return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve()
            console.log(product+' purchased')
        }, 2000);
    })
    }

    module.exports ={
        updateAccount: updateAccount,
        promiseUpdate: promiseUpdate
    }