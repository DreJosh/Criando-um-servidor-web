var fs = require('fs');

fs.readFile('Texto.txt', function (e, r) {

    var log = r.toString();

    var linhas = log.split('\n');

    for (var i in linhas) {
        var partes = linhas[i].split(' ');

        console.log('______________');
        console.log("DATA:" + partes[0]);
        console.log("TIPO: " + partes[1]);
        console.log("MSG:", +partes[2]);
    }
});