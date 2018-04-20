export default function headerVideo() {
    const d = document,
        w = window,
        mq = w.matchMedia('(min-width: 64em)'),
        video = d.querySelectorAll('.VideoHeader-video')

    function startVideo(mq){
        video.forEach(video => mq.matches ? video.play() : video.autoplay = false) //Si la mediaquery coincide
    }

    mq.addListener(startVideo)
    startVideo(mq)
}