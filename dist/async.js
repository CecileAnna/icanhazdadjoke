"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

document.querySelector('#d-btn').addEventListener('click', function () {
  var myFetch = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var response, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('https://icanhazdadjoke.com/', {
                headers: {
                  Accept: "application/json"
                }
              });

            case 2:
              response = _context.sent;

              if (response.ok) {
                _context.next = 5;
                break;
              }

              throw new Error("Joke didn't land...");

            case 5:
              ;
              _context.next = 8;
              return response.json();

            case 8:
              data = _context.sent;
              return _context.abrupt("return", data);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function myFetch() {
      return _ref.apply(this, arguments);
    };
  }();

  myFetch().then(function (data) {
    var jokeArea = document.querySelector("#jokearea");
    jokeArea.textContent = data.joke;
  });
});