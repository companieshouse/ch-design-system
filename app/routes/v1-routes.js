const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// ******* address-manual javascript ********************************
router.get('/v1/address-manual', function (req, res) {
  // Set URl
  res.render('v1/address-manual', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/address-manual', function (req, res) {
  res.redirect('/v1/address-confirm')
})


module.exports=router;

