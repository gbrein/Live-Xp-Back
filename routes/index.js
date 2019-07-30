var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController.js');
var userModel = require('../models/userModel.js');
var SchoolsController = require('../controllers/SchoolsController.js');
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))

var cors = require('cors');
router.use(cors());


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
router.post('/user', userController.show);

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
