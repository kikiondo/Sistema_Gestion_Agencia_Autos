(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = youtubeVideo;
/**
*   @fileoverview
*     Componente para incrustar un video de YouTube en nuestro sitio web cuando la resolución es mayor a 64em (1024px), cuando es menor se agrega un enlace al video
*     Dependencias: font-awesome
*
*   @param {String} id, id del video de YouTube, se define en el archivo pug
*   @param {String} $video-width, anchura del contenedor del video, se define en el archivo scss
*
*   @returns {void} no retorna nada
*
*   @author Jonathan MirCha <jonmircha@gmail.com>
*   @version 1.0.0
*/
function youtubeVideo() {
  var d = document,
      w = window,
      mq = w.matchMedia('(min-width: 64em)'),
      youtube = d.querySelectorAll('.Youtube'),
      youtubeWrapper = d.querySelectorAll('.Youtube-wrapper'),
      youtubeIds = [],
      youtubeIframe = [];

  youtube.forEach(function (video, index) {
    return youtubeIds[index] = video.id;
  });

  //console.log( youtubeIds )

  function showVideo(mq) {
    if (mq.matches) {
      youtubeWrapper.forEach(function (video, index) {
        video.innerHTML = '<iframe src="https://www.youtube.com/embed/' + youtubeIds[index] + '" frameborder="0"></iframe>';
      });
    } else {
      youtubeWrapper.forEach(function (video, index) {
        video.innerHTML = '<a href="https://www.youtube.com/watch?v=' + youtubeIds[index] + '" target="_blank"><i class="fa fa-youtube-play"></i> Ver Video</a>';
      });
    }
  }

  mq.addListener(showVideo);
  showVideo(mq);
}

},{}],2:[function(require,module,exports){
'use strict';

var _youtube_video = require('./components/youtube_video');

var _youtube_video2 = _interopRequireDefault(_youtube_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _youtube_video2.default)();

},{"./components/youtube_video":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy95b3V0dWJlX3ZpZGVvLmpzIiwic3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDYXdCLFk7QUFieEI7Ozs7Ozs7Ozs7Ozs7QUFhZSxTQUFTLFlBQVQsR0FBeUI7QUFDdEMsTUFBTSxJQUFJLFFBQVY7QUFBQSxNQUNFLElBQUksTUFETjtBQUFBLE1BRUUsS0FBSyxFQUFFLFVBQUYsQ0FBYSxtQkFBYixDQUZQO0FBQUEsTUFHRSxVQUFVLEVBQUUsZ0JBQUYsQ0FBbUIsVUFBbkIsQ0FIWjtBQUFBLE1BSUUsaUJBQWdCLEVBQUUsZ0JBQUYsQ0FBbUIsa0JBQW5CLENBSmxCO0FBQUEsTUFLRSxhQUFhLEVBTGY7QUFBQSxNQU1FLGdCQUFnQixFQU5sQjs7QUFRQSxVQUFRLE9BQVIsQ0FBZ0IsVUFBQyxLQUFELEVBQVEsS0FBUjtBQUFBLFdBQWtCLFdBQVcsS0FBWCxJQUFvQixNQUFNLEVBQTVDO0FBQUEsR0FBaEI7O0FBRUE7O0FBRUEsV0FBUyxTQUFULENBQW9CLEVBQXBCLEVBQXdCO0FBQ3RCLFFBQUksR0FBRyxPQUFQLEVBQWdCO0FBQ2QscUJBQWUsT0FBZixDQUF1QixVQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWtCO0FBQ3ZDLGNBQU0sU0FBTixtREFBZ0UsV0FBVyxLQUFYLENBQWhFO0FBQ0QsT0FGRDtBQUdELEtBSkQsTUFJTztBQUNMLHFCQUFlLE9BQWYsQ0FBdUIsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUN2QyxjQUFNLFNBQU4saURBQThELFdBQVcsS0FBWCxDQUE5RDtBQUNELE9BRkQ7QUFHRDtBQUNGOztBQUVELEtBQUcsV0FBSCxDQUFlLFNBQWY7QUFDQSxZQUFVLEVBQVY7QUFDRDs7Ozs7QUN4Q0Q7Ozs7OztBQUVBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyoqXG4qICAgQGZpbGVvdmVydmlld1xuKiAgICAgQ29tcG9uZW50ZSBwYXJhIGluY3J1c3RhciB1biB2aWRlbyBkZSBZb3VUdWJlIGVuIG51ZXN0cm8gc2l0aW8gd2ViIGN1YW5kbyBsYSByZXNvbHVjacOzbiBlcyBtYXlvciBhIDY0ZW0gKDEwMjRweCksIGN1YW5kbyBlcyBtZW5vciBzZSBhZ3JlZ2EgdW4gZW5sYWNlIGFsIHZpZGVvXG4qICAgICBEZXBlbmRlbmNpYXM6IGZvbnQtYXdlc29tZVxuKlxuKiAgIEBwYXJhbSB7U3RyaW5nfSBpZCwgaWQgZGVsIHZpZGVvIGRlIFlvdVR1YmUsIHNlIGRlZmluZSBlbiBlbCBhcmNoaXZvIHB1Z1xuKiAgIEBwYXJhbSB7U3RyaW5nfSAkdmlkZW8td2lkdGgsIGFuY2h1cmEgZGVsIGNvbnRlbmVkb3IgZGVsIHZpZGVvLCBzZSBkZWZpbmUgZW4gZWwgYXJjaGl2byBzY3NzXG4qXG4qICAgQHJldHVybnMge3ZvaWR9IG5vIHJldG9ybmEgbmFkYVxuKlxuKiAgIEBhdXRob3IgSm9uYXRoYW4gTWlyQ2hhIDxqb25taXJjaGFAZ21haWwuY29tPlxuKiAgIEB2ZXJzaW9uIDEuMC4wXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24geW91dHViZVZpZGVvICgpIHtcbiAgY29uc3QgZCA9IGRvY3VtZW50LFxuICAgIHcgPSB3aW5kb3csXG4gICAgbXEgPSB3Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDY0ZW0pJyksXG4gICAgeW91dHViZSA9IGQucXVlcnlTZWxlY3RvckFsbCgnLllvdXR1YmUnKSxcbiAgICB5b3V0dWJlV3JhcHBlciA9ZC5xdWVyeVNlbGVjdG9yQWxsKCcuWW91dHViZS13cmFwcGVyJyksXG4gICAgeW91dHViZUlkcyA9IFtdLFxuICAgIHlvdXR1YmVJZnJhbWUgPSBbXVxuXG4gIHlvdXR1YmUuZm9yRWFjaCgodmlkZW8sIGluZGV4KSA9PiB5b3V0dWJlSWRzW2luZGV4XSA9IHZpZGVvLmlkKVxuXG4gIC8vY29uc29sZS5sb2coIHlvdXR1YmVJZHMgKVxuXG4gIGZ1bmN0aW9uIHNob3dWaWRlbyAobXEpIHtcbiAgICBpZiAobXEubWF0Y2hlcykge1xuICAgICAgeW91dHViZVdyYXBwZXIuZm9yRWFjaCgodmlkZW8sIGluZGV4KSA9PiB7XG4gICAgICAgIHZpZGVvLmlubmVySFRNTCA9IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7eW91dHViZUlkc1tpbmRleF19XCIgZnJhbWVib3JkZXI9XCIwXCI+PC9pZnJhbWU+YFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgeW91dHViZVdyYXBwZXIuZm9yRWFjaCgodmlkZW8sIGluZGV4KSA9PiB7XG4gICAgICAgIHZpZGVvLmlubmVySFRNTCA9IGA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0ke3lvdXR1YmVJZHNbaW5kZXhdfVwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiZmEgZmEteW91dHViZS1wbGF5XCI+PC9pPiBWZXIgVmlkZW88L2E+YFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBtcS5hZGRMaXN0ZW5lcihzaG93VmlkZW8pO1xuICBzaG93VmlkZW8obXEpO1xufVxuIiwiaW1wb3J0IHlvdXR1YmVWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMveW91dHViZV92aWRlbydcblxueW91dHViZVZpZGVvKCkiXX0=
