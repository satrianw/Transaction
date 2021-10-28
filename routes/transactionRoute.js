const express = require('express')
const router = express.Router();
const transactionController = require('../controllers/transactionController')
const transactionModel = require('../models/transactionModel')
const amqp = require('amqplib/callback_api');

// update queue transaction
router.get('/queue', transactionController.updateQueueTransaction)
router.post('/update', transactionController.updateTransaction)
router.post('/delete', transactionController.deleteTransaction)


//transaction using rabbitmq
amqp.connect('amqps://psqrovqu:tGWmk4b86KvA8x-SiOwYji1xxIrYBlrI@poodle.rmq2.cloudamqp.com/psqrovqu', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        router.post('/create', async (req, res) => {
            const payload = req.body
            const user = transactionModel.create(payload, (err, result) =>{
                if(err){
                res.send(err)
                }
            })
            channel.sendToQueue('product_created', Buffer.from(JSON.stringify(payload)))
            return res.send(payload)
        })
    });
});

module.exports = router;