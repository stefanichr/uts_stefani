'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

        app.route('/show-sparepart')
        .get(jsonku.showsparepart);

        app.route('/show-montir')
        .get(jsonku.showmontir);

        
}