var playVideo = function (modal) {
    var video = modal.querySelector('iframe, video');
    //                video.play();
    if (!video) return;
    if (video.tagName.toLowerCase() === 'video') {
        video.play();
        return;
    }
    video.src = video.src + (video.src.indexOf('?') < 0 ? '?' : '&') + 'autoplay=1';
    //                            return;
}
var stopVideo = function (modal) {
    var video = modal.querySelector('iframe, video');
    //                video.pause();
    if (!video) return;
    if (video.tagName.toLowerCase() === 'video') {
        video.pause();
        return;
    }

    video.src = video.src.replace('&autoplay=1', '').replace('?autoplay=1', '');
    //                            return;
}

document.addEventListener("DOMContentLoaded", function () {

    try {

        MicroModal.init({
            awaitCloseAnimation: true,// set to false, to remove close animation
            onShow: function (modal) {
                playVideo(modal);
            },
            onClose: function (modal) {
                stopVideo(modal);
            }
        });

    } catch (e) {
        console.log("micromodal error: ", e);
    }

});

MicroModal.init({
    onShow: modal => console.info(`${modal.id} is shown`), // [1]
    onClose: modal => console.info(`${modal.id} is hidden`), // [2]
    openTrigger: 'data-custom-open', // [3]
    closeTrigger: 'data-custom-close', // [4]
    openClass: 'is-open', // [5]
    disableScroll: true, // [6]
    disableFocus: false, // [7]
    awaitOpenAnimation: false, // [8]
    awaitCloseAnimation: false, // [9]
    debugMode: true, // [10]
    callbackClose: function ( toggle, modal ) {
        stopVideo(modal);
    }
});