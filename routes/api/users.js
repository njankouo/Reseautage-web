const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
// @route   GET api/users
// @desc    Test route
// @access  Public
router.post('/',[

    check('name', 'le nom est requis').not().isEmpty(),
    check('email', 'Veuillez inclure un email valide').isEmail(),
    check('password', 'Le mot de passe doit comporter au moins 6 caractères').isLength({ min: 6 })
],
    
    
    (req, res)=>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    } 
    res.send('Users route');
});

module.exports = router;