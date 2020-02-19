const express = require('express');
const router = express.Router();
const Process = require('../models/process')

//Get all process
router.get('/', async (req, res) => {
    const process = await Process.find();
    res.status(200).json({
        items: process
    });
});

//Create process
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

//Update process
router.put('/:processId', async (req, res) => {
   
    const { processId } = req.params;
    const process = {
        nameProcess: req.body.nameProcess,
        namePetitioner: req.body. namePetitioner,
        identification: req.body.identification,
        phone: req.body.phone,
        dateReceived: req.body.dateReceived,
        dateResponse: req.body.dateResponse,       
        status: req.body.status,
        files: req.body.files
    
    }

    await Process.findByIdAndUpdate(processId, {$set: process}, {new: true, useFindAndModify: false});
    res.status(200).json({
        message: 'Updated process',
        process: process
    });
     
 });




module.exports = router;