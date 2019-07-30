var SchoolsModel = require('../models/SchoolsModel.js');


/**
 * SchoolsController.js
 *
 * @description :: Server-side logic for managing Schoolss.
 */
module.exports = {

    /**
     * SchoolsController.list()
     */
    list: function (req, res) {
        SchoolsModel.find(function (err, Schoolss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Schools.',
                    error: err
                });
            }
            return res.json(Schoolss);
        });
    },

    /**
     * SchoolsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        SchoolsModel.findOne({_id: id}, function (err, Schools) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Schools.',
                    error: err
                });
            }
            if (!Schools) {
                return res.status(404).json({
                    message: 'No such Schools'
                });
            }
            return res.json(Schools);
        });
    },

    /**
     * SchoolsController.create()
     */
    create: function (req, res) {
        var Schools = new SchoolsModel({
			nome : req.body.nome,
			CNPJ : req.body.CNPJ,
			endereco : req.body.Endereco,
			email : req.body.email,
            telefone : req.body.telefone,
            descricao: req.body.descricao,
			cursos : req.body.cursos,
            categoria : req.body.categoria,
            bairro: req.body.bairro,
            CEP: req.body.CEP,
            imgLink: '',
        });
        console.log(req)
        Schools.save(function (err, Schools) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Schools',
                    error: err
                });
            }
            return res.status(201).json(Schools);
        });
    },

    /**
     * SchoolsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        SchoolsModel.findOne({_id: id}, function (err, Schools) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Schools',
                    error: err
                });
            }
            if (!Schools) {
                return res.status(404).json({
                    message: 'No such Schools'
                });
            }

            Schools.Nome = req.body.Nome ? req.body.Nome : Schools.Nome;
			Schools.CNPJ = req.body.CNPJ ? req.body.CNPJ : Schools.CNPJ;
			Schools.Endereco = req.body.Endereco ? req.body.Endereco : Schools.Endereco;
			Schools.email = req.body.email ? req.body.email : Schools.email;
			Schools.telefone = req.body.telefone ? req.body.telefone : Schools.telefone;
			Schools.cursos = req.body.cursos ? req.body.cursos : Schools.cursos;
			Schools.categoria = req.body.categoria ? req.body.categoria : Schools.categoria;
			
            Schools.save(function (err, Schools) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Schools.',
                        error: err
                    });
                }

                return res.json(Schools);
            });
        });
    },

    /**
     * SchoolsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        SchoolsModel.findByIdAndRemove(id, function (err, Schools) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Schools.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
