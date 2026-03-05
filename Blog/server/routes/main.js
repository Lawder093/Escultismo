

const express = require ('express');
const router = express.Router();

//routes 
router.get('', (req, res) => {
const locals = {
    title: " Blog Escultismo Crítico Popular",
    description: "Este blog es para poner cosas cool"
}
    res.render('index', {locals} )
});


module.exports = router;
