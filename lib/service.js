'use strict';

var debug = require('debug')('ewd-service-mock');

module.exports = {
  init: function (application) {
    debug('init: %s', application);
  },

  beforeHandler: function (message, session, send, finished) {
    debug('beforeHandler message: %s', JSON.stringify(message));

    if (message.params && message.params.beforeHandler) {
      finished({
        type: message.type,
        text: 'Hello from beforeHandler!'
      });

      return false;
    }
  },

  afterHandler: function (message) {
    debug('afterHandler message: %s', JSON.stringify(message));
  },

  handlers: {
    helloWorld: function (message, session, send, finished) {
      debug('%s message: %s', message.type, JSON.stringify(message));

      finished({
        type: message.type,
        text: 'Hello world!'
      });
    },
  }
};
