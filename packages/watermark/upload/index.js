const { markVideo } = require('./markVideo');
const { readMultipart } = require('./readMultipart');
const { spacesUpload } = require('./spacesUpload');

async function main(args) {
  try {
    const parts = await readMultipart(args);
    const video = await markVideo(parts.file);
    const data = await spacesUpload(video);
    return {
      body: data
    }
  } catch (error) {
    return {
      body: {
        error: error
      }
    }
  }
}

exports.main = main;