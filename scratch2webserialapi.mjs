import React from 'react';
import { FormattedMessage } from 'react-intl';
import formatMessage from 'format-message';

var translationMap = {
  'ja': {
    'gui.extension.scratch2webserialapi.description': 'Web Serial APIに接続する。'
  },
  'ja-Hira': {
    'gui.extension.scratch2webserialapi.description': 'Web Serial APIにせつぞくする。'
  }
};
var entry = {
  name: 'Scratch2WebSerialAPI',
  extensionId: 'scratch2webserialapi',
  extensionURL: 'http://localhost:8000/scratch2webserialapi.mjs',
  collaborator: 'champierre',
  iconURL: scratch2webserialapiIconURL,
  insetIconURL: scratch2webserialapiInsetIconURL,
  description: /*#__PURE__*/React.createElement(FormattedMessage, {
    defaultMessage: "Scratch2WebSerialAPI Blocks.",
    description: "Description for Scratch2WebSerialAPI Blocks.",
    id: "gui.extension.scratch2webserialapi.description"
  }),
  featured: true,
  disabled: false,
  bluetoothRequired: false,
  internetConnectionRequired: true,
  helpLink: 'https://github.com/champierre/scratch2webserialapi/',
  translationMap: translationMap
};

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/**
 * Block argument types
 * @enum {string}
 */
var ArgumentType = {
  /**
   * Numeric value with angle picker
   */
  ANGLE: 'angle',

  /**
   * Boolean value with hexagonal placeholder
   */
  BOOLEAN: 'Boolean',

  /**
   * Numeric value with color picker
   */
  COLOR: 'color',

  /**
   * Numeric value with text field
   */
  NUMBER: 'number',

  /**
   * String value with text field
   */
  STRING: 'string',

  /**
   * String value with matrix field
   */
  MATRIX: 'matrix',

  /**
   * MIDI note number with note picker (piano) field
   */
  NOTE: 'note',

  /**
   * Inline image on block (as part of the label)
   */
  IMAGE: 'image'
};
var argumentType = ArgumentType;

/**
 * Types of block
 * @enum {string}
 */
var BlockType = {
  /**
   * Boolean reporter with hexagonal shape
   */
  BOOLEAN: 'Boolean',

  /**
   * A button (not an actual block) for some special action, like making a variable
   */
  BUTTON: 'button',

  /**
   * Command block
   */
  COMMAND: 'command',

  /**
   * Specialized command block which may or may not run a child branch
   * The thread continues with the next block whether or not a child branch ran.
   */
  CONDITIONAL: 'conditional',

  /**
   * Specialized hat block with no implementation function
   * This stack only runs if the corresponding event is emitted by other code.
   */
  EVENT: 'event',

  /**
   * Hat block which conditionally starts a block stack
   */
  HAT: 'hat',

  /**
   * Specialized command block which may or may not run a child branch
   * If a child branch runs, the thread evaluates the loop block again.
   */
  LOOP: 'loop',

  /**
   * General reporter with numeric or string value
   */
  REPORTER: 'reporter'
};
var blockType = BlockType;

var blockIconURI = 'data:image/png;base64,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';
var Message = {
  connect: {
    'ja': '接続',
    'ja-Hira': 'せつぞく',
    'en': 'connect',
    'ko': '연결'
  },
  disconnect: {
    'ja': '切断',
    'ja-Hira': 'せつだん',
    'en': 'disconnect',
    'ko': '연결 해제'
  },
  send: {
    'ja': '[MSG]を送る',
    'ja-Hira': '[MSG]をおくる',
    'en': 'send [MSG]',
    'ko': '[MSG] 보내기'
  },
  read: {
    'ja': 'データを読み込む',
    'en': 'read data'
  }
};
var AvailableLocales = ['en', 'ja', 'ja-Hira', 'ko'];
/**
 * URL to get this extension as a module.
 * When it was loaded as a module, 'extensionURL' will be replaced a URL which is retrieved from.
 * @type {string}
 */

var extensionURL = 'http://localhost:8000/scratch2webserialapi.mjs';

var Scratch3Scratch2WebSerialAPIBlocks = /*#__PURE__*/function () {
  function Scratch3Scratch2WebSerialAPIBlocks(runtime) {
    _classCallCheck(this, Scratch3Scratch2WebSerialAPIBlocks);

    this.runtime = runtime;
    this.port = '';
  }

  _createClass(Scratch3Scratch2WebSerialAPIBlocks, [{
    key: "getInfo",
    value: function getInfo() {
      this.locale = this.setLocale();
      return {
        id: Scratch3Scratch2WebSerialAPIBlocks.EXTENSION_ID,
        name: Scratch3Scratch2WebSerialAPIBlocks.EXTENSION_NAME,
        extensionURL: Scratch3Scratch2WebSerialAPIBlocks.extensionURL,
        blockIconURI: blockIconURI,
        blocks: [{
          opcode: 'connect',
          blockType: blockType.COMMAND,
          text: Message.connect[this.locale]
        }, {
          opcode: 'disconnect',
          blockType: blockType.COMMAND,
          text: Message.disconnect[this.locale]
        }, {
          opcode: 'send',
          blockType: blockType.COMMAND,
          text: Message.send[this.locale],
          arguments: {
            MSG: {
              type: argumentType.STRING,
              defaultValue: 'test'
            }
          }
        }, {
          opcode: 'read',
          blockType: blockType.REPORTER,
          text: Message.read[this.locale]
        }],
        menus: {}
      };
    }
  }, {
    key: "connect",
    value: function () {
      var _connect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('connect');

                if (!('serial' in navigator)) {
                  _context.next = 16;
                  break;
                }

                _context.prev = 2;
                _context.next = 5;
                return navigator.serial.requestPort();

              case 5:
                this.port = _context.sent;
                _context.next = 8;
                return this.port.open({
                  baudRate: 115200
                });

              case 8:
                alert('Connected to the serial port');
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                console.error('Error:', _context.t0);

              case 14:
                _context.next = 17;
                break;

              case 16:
                console.error('Web Serial API not supported.');

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 11]]);
      }));

      function connect() {
        return _connect.apply(this, arguments);
      }

      return connect;
    }()
  }, {
    key: "disconnect",
    value: function () {
      var _disconnect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('disconnect');

                if (!('serial' in navigator)) {
                  _context2.next = 12;
                  break;
                }

                if (!(this.port && this.port.close)) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 5;
                return this.port.close();

              case 5:
                port = null;
                alert('Disconnected from the serial port');
                _context2.next = 10;
                break;

              case 9:
                console.error('No active serial connection to disconnect');

              case 10:
                _context2.next = 13;
                break;

              case 12:
                console.error('Web Serial API not supported.');

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function disconnect() {
        return _disconnect.apply(this, arguments);
      }

      return disconnect;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(args) {
        var writer, data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log(args.MSG);

                if (!(this.port && this.port.writable)) {
                  _context3.next = 7;
                  break;
                }

                writer = this.port.writable.getWriter();
                data = new TextEncoder().encode(args.MSG);
                _context3.next = 6;
                return writer.write(data);

              case 6:
                writer.releaseLock();

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function send(_x) {
        return _send.apply(this, arguments);
      }

      return send;
    }()
  }, {
    key: "read",
    value: function () {
      var _read = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var reader, _yield$reader$read, value;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(this.port && this.port.readable)) {
                  _context4.next = 10;
                  break;
                }

                reader = this.port.readable.getReader();
                _context4.next = 4;
                return reader.read();

              case 4:
                _yield$reader$read = _context4.sent;
                value = _yield$reader$read.value;
                reader.releaseLock();

                if (!value) {
                  _context4.next = 10;
                  break;
                }

                return _context4.abrupt("return", new TextDecoder().decode(value));

              case 10:
                return _context4.abrupt("return", '');

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function read() {
        return _read.apply(this, arguments);
      }

      return read;
    }()
    /**
     * Get locale for message text.
     * @return {string} - Locale of this editor.
     */

  }, {
    key: "setLocale",
    value: function setLocale() {
      var locale = formatMessage.setup().locale;

      if (AvailableLocales.includes(locale)) {
        return locale;
      }

      return 'en';
    }
  }], [{
    key: "EXTENSION_NAME",
    get:
    /**
     * @return {string} - the name of this extension.
     */
    function get() {
      return 'Scratch2WebSerialAPI';
    }
    /**
     * @return {string} - the ID of this extension.
     */

  }, {
    key: "EXTENSION_ID",
    get: function get() {
      return 'scratch2webserialapi';
    }
    /**
     * URL to get this extension.
     * @type {string}
     */

  }, {
    key: "extensionURL",
    get: function get() {
      return extensionURL;
    }
    /**
     * Set URL to get this extension.
     * extensionURL will be reset when the module is loaded from the web.
     * @param {string} url - URL
     */
    ,
    set: function set(url) {
      extensionURL = url;
    }
  }]);

  return Scratch3Scratch2WebSerialAPIBlocks;
}();

var blockClass = Scratch3Scratch2WebSerialAPIBlocks; // loadable-extension needs this line.

var _scratch2webserialapi = Scratch3Scratch2WebSerialAPIBlocks;
_scratch2webserialapi.blockClass = blockClass;

export { _scratch2webserialapi as __moduleExports, blockClass, entry };
