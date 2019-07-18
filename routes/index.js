var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController.js');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var userModel = require('../models/userModel.js');
var SchoolsController = require('../controllers/SchoolsController.js');
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({
    extended: true
  }));
router.use(passport.initialize());
router.use(passport.session());

passport.use(new LocalStrategy(function (username, password, done) {
    userModel
        .findOne({
            username: username
        }, function (err, user) {
            if (err) {
                return done(err);
            }

            if (!user) {
                return done(null, false);
            }

            if (user.password != password) {
                return done(null, false);
            }
            return done(null, user);
        });
}));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    userModel
        .findOne({
            _id: id
        }, '-password -salt', function (err, user) {
            done(err, user);
        });
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/index3',
    failureRedirect: '/',
    failureFlash: true
}));

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/index3', function (req, res, next) {
    res.render('index3', {title: 'Express'});
});

/*
 * GET
 */
router.get('/listed', userController.list);

/*
 * GET
 */
router.get('/user/:id', userController.show);

router.get('/subscribe', (request, response) => {
    response.render('subscribe');
});

/*
 * POST
 */
router.post('/create', userController.create, (request, response) => {
    response
        .status(200)
        .send('sucess');
});

/*
 * PUT
 */
router.put('/:id', userController.update);

/*
 * DELETE
 */
router.delete('/:id', userController.remove);

/* GET users listing. */
router.get('/list', function (req, res, next) {
    res.send('respond with a resource');
});


/* Schools*/


/*
 * GET
 */
router.get('/schools', SchoolsController.list);

/*
 * GET
 */
router.get('/schools/:id', SchoolsController.show);

/*
 * POST
 */
router.post('/schools', SchoolsController.create);

/*
 * PUT
 */
router.put('/schools/:id', SchoolsController.update);

/*
 * DELETE
 */
router.delete('/schools/:id', SchoolsController.remove);

module.exports = router;
