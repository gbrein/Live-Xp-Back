var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var SchoolsSchema = new Schema({
	'Nome' : String,
	'CNPJ' : Number,
	'Endereco' : String,
	'email' : String,
	'telefone' : Number,
	'cursos' : Array,
	'categoria' : Array
});

module.exports = mongoose.model('Schools', SchoolsSchema);
