var ffmpeg = require("ffmpeg")

async function markVideo(file) {
    const video = await new ffmpeg(file)
    const watermarkPath = "sammy.png"
    const newFilepath = "watermarked_video.mp4"

    var settings = {
        position: "SE", // Position: NE NC NW SE SC SW C CE CW
        margin_nord: null,
        margin_sud: null, 
        margin_east: null, 
        margin_west: null 
    }

    // creates watermarked video
    const markedVideo = video.fnAddWatermark(watermarkPath, newFilepath, settings);
    return markedVideo;
}

exports.markVideo = markVideo