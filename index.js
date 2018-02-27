
const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
const Classify = require('./src/classify.js');


exports.main = (params) => {
   
    var visualRecognition = new VisualRecognitionV3({
        api_key: params.apiKey,
        version_date: VisualRecognitionV3.VERSION_DATE_2016_05_20
    });
           

    return new Classify(visualRecognition).byDataURI(params.file);
}
