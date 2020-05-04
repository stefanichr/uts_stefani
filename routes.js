'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

        app.route('/show-sparepart')
        .get(jsonku.showsparepart);

        app.route('/show-sparepart-by-id/:id')
        .get(jsonku.showsparepartbyid);

        app.route('/show-montir')
        .get(jsonku.showmontir);

        app.route('/show-montir-by-id/:id')
        .get(jsonku.showmontirbyid);

        
}