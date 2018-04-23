import navigationOffCanvas from './components/navigation_off_canvas'
import youtubeVideo from './components/youtube_video'
import transparentHeader from './components/transparent_header'
import headerVideo from './components/header_video'
transparentHeader()
navigationOffCanvas()
headerVideo()

if (location.pathname.includes('index.html')) {
    headerVideo()
}