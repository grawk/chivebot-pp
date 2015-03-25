'use strict';

var pkg = require('./package');


module.exports = {

  name: pkg.name,

  version: pkg.version,

  register: function (plugin, options, next) {

    plugin.dependency('chivebot', function (plugin, next) {

      plugin.plugins.chivebot.registerCommand('pp', function (raw, args, cb) {
        args.shift(); //remove 'pp'

        if (args.length === 0) {
          args = ['I', 'am', 'not', 'PayPal', 'technology', ':hotdog:'];
        }
        var ppsentence = 'pp' + args.join(' pp');
        console.log(ppsentence);
        cb(null, ppsentence);
      });

      next();

    });

    next();

  }

};