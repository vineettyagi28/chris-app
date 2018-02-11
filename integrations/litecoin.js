        var litecoin = require('node-litecoin');

function prepareClient() {

    return new litecoin({
        protocol: 'http',
        user: 'litecoinrpc',
        pass: 'password',
        host: '198.199.125.174',
        port: '9432'
    });
}

const getAccountAddress = accountName =>  {

    let client = prepareClient();

    console.log("Calling getAccountAddress on litecoin node for account : " + accountName);

    return new Promise(function(resolve,reject)
    {
        client.getAccountAddress(accountName, function (err, response) {

            if (err) {
                console.log("Error : " + err);
                reject(err);
            }else {
                console.log("Created new payment address for account : " + accountName + " => " + response.result);
                resolve(response.result);
            }
        });
    })

}

let listAccounts = () =>  {

    let client = prepareClient();

    console.log("Calling list accounts...");

    return new Promise(function(resolve,reject)
    {
        client.listAccounts( function (err, accountList) {

            if (err) {
                console.log("Error : " + err);
                reject(err);
            }else {
                console.log("Retrieved account list : " + accountList);
                resolve(accountList);
            }
        });
    })

}

module.exports = {getAccountAddress, listAccounts};
