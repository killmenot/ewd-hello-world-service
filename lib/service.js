'use strict';

module.exports = {

  handlers: {
    helloWorld: function (messageObj, session, send, finished) {
      finished({
        type: messageObj.type,
        text: 'Hello world!'
      });
    }
  }
};
