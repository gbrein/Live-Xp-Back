var express = require('express');
var router = express.Router();
var SchoolsController = require('../controllers/SchoolsController.js');

/*
 * GET
 */
router.get('/', SchoolsController.list);

/*
 * GET
 */
router.get('/:id', SchoolsController.show);

/*
 * POST
 */
router.post('/', SchoolsController.create);

/*
 * PUT
 */
router.put('/:id', SchoolsController.update);

/*
 * DELETE
 */
router.delete('/:id', SchoolsController.remove);

module.exports = router;
