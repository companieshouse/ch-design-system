const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// ******* javascript-ex-1a javascript ********************************
router.get('/v1/javascript/javascript-ex-1a', function (req, res) {
  // Set URl
  res.render('v1/javascript/javascript-ex-1a', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/javascript/javascript-ex-1a', function (req, res) {
  if (req.session.data['dessert-coffee'] == 'dessert' ) {
    res.redirect('/v1/javascript/javascript-ex-1b')
  } else {
    res.redirect('/v1/javascript/javascript-ex-1c')
  }
})


module.exports=router;

