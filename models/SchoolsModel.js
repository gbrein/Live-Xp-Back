var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var SchoolsSchema = new Schema({
	'nome' : String,
	'CNPJ' : Number,
	'endereco' : String,
	'email' : String,
	'telefone' : Number,
	'cursos' : Array,
	'categoria' : Array,
	'CEP': Number,
	'bairro': String,
	'imgLink': String,
});

module.exports = mongoose.model('Schools', SchoolsSchema);
