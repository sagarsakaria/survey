odoo.define('my_module.my_module_frontend', function (require) {
    'use strict';

    var core = require('web.core');
    var Widget = require('web.Widget');
    var session = require('web.session');

    var QWeb = core.qweb;
    var _t = core._t;

    var MyModuleFrontend = Widget.extend({
        template: 'my_module.my_module_frontend_template',

        events: {
            'click .my_button': '_onClickMyButton',
        },

        init: function (parent, options) {
            this._super.apply(this, arguments);
            this.data = options.data || {};
        },

        start: function () {
            this.$('.my_button').tooltip();
            return this._super();
        },

        _onClickMyButton: function () {
            // Handle button click logic here
            this._rpc({
                model: 'my.model',
                method: 'do_something',
                args: [this.data.record_id],
            }).then(this._onSuccess.bind(this));
        },

        _onSuccess: function (result) {
            // Handle the success response
            console.log(result);
            // Refresh the view or perform other actions as needed
        },
    });

    return MyModuleFrontend;
});
