var express = require('express');
var router = express.Router();
var  {getAccountAddress, listAccounts} =  require("../integrations/litecoin");

router.get('/accounts', async function (req, res, next) {

    let accountList;

    try {
        accountList = await listAccounts();
    } catch(err) {
        console.log(err);
    }

    res.send({accountList: accountList});
});

router.get('/accounts/:userId/addresses/create', async function (req, res, next) {

    let userId = req.params.userId;
    let address;

    try {
        address = await getAccountAddress(userId);
    }catch(err){
        console.log(err);
    }

    console.log("Sending new address : " + address);
    res.send({address: address});
});

module.exports = router;