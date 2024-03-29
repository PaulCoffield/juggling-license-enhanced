//
// https://prototype-kit.service.gov.uk/docs/create-routes
// For guidance on how to create routes see:
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


router.post('/new/email-address', (req, res) => {
     if(req.query.returnUrl){
        res.redirect(req.query.returnUrl);
    }else{
        res.redirect('/new/code');
    }
})

router.post('/new/code', (req, res) => {

    if(req.query.returnUrl){
        res.redirect(req.query.returnUrl);
    }else{
        res.redirect('/new/name');
    }
})

router.post('/new/name', (req,res) =>{
    if(req.query.returnUrl){
        res.redirect(req.query.returnUrl);
    }else{
        res.redirect('/new/country');
    }
})

router.post('/new/country', (req,res) =>{
    if(req.query.returnUrl){
        res.redirect(req.query.returnUrl);
    }else{
        res.redirect('/new/juggling-balls');
    }
})

router.post('/new/juggling-balls', (req,res) =>{

    if(req.body.new.numberOfBalls == 'none - I cannot juggle'){
        res.redirect('/new/not-eligible');
    }else{
        if(req.query.returnUrl){
            res.redirect(req.query.returnUrl);
        }else{
            res.redirect('/new/juggling-trick');
        }
    }

})

router.post('/new/juggling-trick', (req,res) =>{
    if(req.query.returnUrl){
        res.redirect(req.query.returnUrl);
    }else{
        res.redirect('/new/juggling-objects');
    }
})

router.post('/new/juggling-objects', (req,res) =>{
    res.redirect('/new/check');
})

router.post('/new/check', (req,res) =>{
    res.redirect('/new/confirmation');
})




// Logging session data 
 
router.use((req, res, next) => { 
    const log = { 
    method: req.method, 
    url: req.originalUrl, 
    data: req.session.data 
    } 
    console.log(JSON.stringify(log, null, 2)) 
   
    next() 
    })