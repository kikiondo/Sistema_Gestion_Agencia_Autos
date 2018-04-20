(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = headerVideo;
function headerVideo() {
    var d = document,
        w = window,
        mq = w.matchMedia('(min-width: 64em)'),
        video = d.querySelectorAll('.VideoHeader-video');

    function startVideo(mq) {
        video.forEach(function (video) {
            return mq.matches ? video.play() : video.autoplay = false;
        }); //Si la mediaquery coincide
    }

    mq.addListener(startVideo);
    startVideo(mq);
}

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
'use strict';

var _youtube_video = require('./components/youtube_video');

var _youtube_video2 = _interopRequireDefault(_youtube_video);

var _header_video = require('./components/header_video');

var _header_video2 = _interopRequireDefault(_header_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _youtube_video2.default)();
(0, _header_video2.default)();

},{"./components/header_video":1,"./components/youtube_video":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy9oZWFkZXJfdmlkZW8uanMiLCJzcmMvanMvY29tcG9uZW50cy95b3V0dWJlX3ZpZGVvLmpzIiwic3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDQXdCLFc7QUFBVCxTQUFTLFdBQVQsR0FBdUI7QUFDbEMsUUFBTSxJQUFJLFFBQVY7QUFBQSxRQUNJLElBQUksTUFEUjtBQUFBLFFBRUksS0FBSyxFQUFFLFVBQUYsQ0FBYSxtQkFBYixDQUZUO0FBQUEsUUFHSSxRQUFRLEVBQUUsZ0JBQUYsQ0FBbUIsb0JBQW5CLENBSFo7O0FBS0EsYUFBUyxVQUFULENBQW9CLEVBQXBCLEVBQXVCO0FBQ25CLGNBQU0sT0FBTixDQUFjO0FBQUEsbUJBQVMsR0FBRyxPQUFILEdBQWEsTUFBTSxJQUFOLEVBQWIsR0FBNEIsTUFBTSxRQUFOLEdBQWlCLEtBQXREO0FBQUEsU0FBZCxFQURtQixDQUN3RDtBQUM5RTs7QUFFRCxPQUFHLFdBQUgsQ0FBZSxVQUFmO0FBQ0EsZUFBVyxFQUFYO0FBQ0g7Ozs7Ozs7O2tCQ0N1QixZO0FBYnhCOzs7Ozs7Ozs7Ozs7O0FBYWUsU0FBUyxZQUFULEdBQXlCO0FBQ3RDLE1BQU0sSUFBSSxRQUFWO0FBQUEsTUFDRSxJQUFJLE1BRE47QUFBQSxNQUVFLEtBQUssRUFBRSxVQUFGLENBQWEsbUJBQWIsQ0FGUDtBQUFBLE1BR0UsVUFBVSxFQUFFLGdCQUFGLENBQW1CLFVBQW5CLENBSFo7QUFBQSxNQUlFLGlCQUFnQixFQUFFLGdCQUFGLENBQW1CLGtCQUFuQixDQUpsQjtBQUFBLE1BS0UsYUFBYSxFQUxmO0FBQUEsTUFNRSxnQkFBZ0IsRUFObEI7O0FBUUEsVUFBUSxPQUFSLENBQWdCLFVBQUMsS0FBRCxFQUFRLEtBQVI7QUFBQSxXQUFrQixXQUFXLEtBQVgsSUFBb0IsTUFBTSxFQUE1QztBQUFBLEdBQWhCOztBQUVBOztBQUVBLFdBQVMsU0FBVCxDQUFvQixFQUFwQixFQUF3QjtBQUN0QixRQUFJLEdBQUcsT0FBUCxFQUFnQjtBQUNkLHFCQUFlLE9BQWYsQ0FBdUIsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUN2QyxjQUFNLFNBQU4sbURBQWdFLFdBQVcsS0FBWCxDQUFoRTtBQUNELE9BRkQ7QUFHRCxLQUpELE1BSU87QUFDTCxxQkFBZSxPQUFmLENBQXVCLFVBQUMsS0FBRCxFQUFRLEtBQVIsRUFBa0I7QUFDdkMsY0FBTSxTQUFOLGlEQUE4RCxXQUFXLEtBQVgsQ0FBOUQ7QUFDRCxPQUZEO0FBR0Q7QUFDRjs7QUFFRCxLQUFHLFdBQUgsQ0FBZSxTQUFmO0FBQ0EsWUFBVSxFQUFWO0FBQ0Q7Ozs7O0FDeENEOzs7O0FBQ0E7Ozs7OztBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXJWaWRlbygpIHtcbiAgICBjb25zdCBkID0gZG9jdW1lbnQsXG4gICAgICAgIHcgPSB3aW5kb3csXG4gICAgICAgIG1xID0gdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA2NGVtKScpLFxuICAgICAgICB2aWRlbyA9IGQucXVlcnlTZWxlY3RvckFsbCgnLlZpZGVvSGVhZGVyLXZpZGVvJylcblxuICAgIGZ1bmN0aW9uIHN0YXJ0VmlkZW8obXEpe1xuICAgICAgICB2aWRlby5mb3JFYWNoKHZpZGVvID0+IG1xLm1hdGNoZXMgPyB2aWRlby5wbGF5KCkgOiB2aWRlby5hdXRvcGxheSA9IGZhbHNlKSAvL1NpIGxhIG1lZGlhcXVlcnkgY29pbmNpZGVcbiAgICB9XG5cbiAgICBtcS5hZGRMaXN0ZW5lcihzdGFydFZpZGVvKVxuICAgIHN0YXJ0VmlkZW8obXEpXG59IiwiLyoqXG4qICAgQGZpbGVvdmVydmlld1xuKiAgICAgQ29tcG9uZW50ZSBwYXJhIGluY3J1c3RhciB1biB2aWRlbyBkZSBZb3VUdWJlIGVuIG51ZXN0cm8gc2l0aW8gd2ViIGN1YW5kbyBsYSByZXNvbHVjacOzbiBlcyBtYXlvciBhIDY0ZW0gKDEwMjRweCksIGN1YW5kbyBlcyBtZW5vciBzZSBhZ3JlZ2EgdW4gZW5sYWNlIGFsIHZpZGVvXG4qICAgICBEZXBlbmRlbmNpYXM6IGZvbnQtYXdlc29tZVxuKlxuKiAgIEBwYXJhbSB7U3RyaW5nfSBpZCwgaWQgZGVsIHZpZGVvIGRlIFlvdVR1YmUsIHNlIGRlZmluZSBlbiBlbCBhcmNoaXZvIHB1Z1xuKiAgIEBwYXJhbSB7U3RyaW5nfSAkdmlkZW8td2lkdGgsIGFuY2h1cmEgZGVsIGNvbnRlbmVkb3IgZGVsIHZpZGVvLCBzZSBkZWZpbmUgZW4gZWwgYXJjaGl2byBzY3NzXG4qXG4qICAgQHJldHVybnMge3ZvaWR9IG5vIHJldG9ybmEgbmFkYVxuKlxuKiAgIEBhdXRob3IgSm9uYXRoYW4gTWlyQ2hhIDxqb25taXJjaGFAZ21haWwuY29tPlxuKiAgIEB2ZXJzaW9uIDEuMC4wXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24geW91dHViZVZpZGVvICgpIHtcbiAgY29uc3QgZCA9IGRvY3VtZW50LFxuICAgIHcgPSB3aW5kb3csXG4gICAgbXEgPSB3Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDY0ZW0pJyksXG4gICAgeW91dHViZSA9IGQucXVlcnlTZWxlY3RvckFsbCgnLllvdXR1YmUnKSxcbiAgICB5b3V0dWJlV3JhcHBlciA9ZC5xdWVyeVNlbGVjdG9yQWxsKCcuWW91dHViZS13cmFwcGVyJyksXG4gICAgeW91dHViZUlkcyA9IFtdLFxuICAgIHlvdXR1YmVJZnJhbWUgPSBbXVxuXG4gIHlvdXR1YmUuZm9yRWFjaCgodmlkZW8sIGluZGV4KSA9PiB5b3V0dWJlSWRzW2luZGV4XSA9IHZpZGVvLmlkKVxuXG4gIC8vY29uc29sZS5sb2coIHlvdXR1YmVJZHMgKVxuXG4gIGZ1bmN0aW9uIHNob3dWaWRlbyAobXEpIHtcbiAgICBpZiAobXEubWF0Y2hlcykge1xuICAgICAgeW91dHViZVdyYXBwZXIuZm9yRWFjaCgodmlkZW8sIGluZGV4KSA9PiB7XG4gICAgICAgIHZpZGVvLmlubmVySFRNTCA9IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7eW91dHViZUlkc1tpbmRleF19XCIgZnJhbWVib3JkZXI9XCIwXCI+PC9pZnJhbWU+YFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgeW91dHViZVdyYXBwZXIuZm9yRWFjaCgodmlkZW8sIGluZGV4KSA9PiB7XG4gICAgICAgIHZpZGVvLmlubmVySFRNTCA9IGA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0ke3lvdXR1YmVJZHNbaW5kZXhdfVwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiZmEgZmEteW91dHViZS1wbGF5XCI+PC9pPiBWZXIgVmlkZW88L2E+YFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBtcS5hZGRMaXN0ZW5lcihzaG93VmlkZW8pO1xuICBzaG93VmlkZW8obXEpO1xufVxuIiwiaW1wb3J0IHlvdXR1YmVWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMveW91dHViZV92aWRlbydcbmltcG9ydCBoZWFkZXJWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyX3ZpZGVvJ1xueW91dHViZVZpZGVvKClcbmhlYWRlclZpZGVvKCkiXX0=
