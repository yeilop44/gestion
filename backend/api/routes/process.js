const express = require('express');
const router = express.Router();
const Process = require('../models/process')

router.get('/', async (req, res) => {
    const process = await Process.find();
    res.status(200).json({
        items: process
    });
});

router.post('/', async (req, res) => {
    
    const process = new Process ({
        nameProcess: req.body.nameProcess,
        namePetitioner: req.body.namePetitioner,    
        identification: req.body.identification, 
        phone: req.body.phone,        
        dateCreate: req.body.dateCreate,
        dateReceived: req.body.dateReceived,
        dateResponse: req.body.dateResponse,
        status: req.body.status,
        files: req.body.files        
    });

    await process.save();
    res.status(200).json({
        message: 'process created',
        items: process
    });
});




module.exports = router;