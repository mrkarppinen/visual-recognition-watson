

module.exports = class Classify{

    constructor (endpoint){
        this.endpoint = endpoint;
    }


    byDataURI(dataURI){

        return new Promise( (resolve, reject) => {

            this.endpoint.classify(
              {
                  images_file: Buffer.from(dataURI,'base64')
              }
              , (err, res) => {

              if (err) {
                resolve( {error: true, error:err});
              } else {
                  if (res &&  res.images && res.images.length > 0 && res.images[0].classifiers && res.images[0].classifiers.length > 0){
                      resolve({ classes: res.images[0].classifiers[0].classes });
                  }else {
                      resolve({classes: []});
                  }  
  
              }
            });
  
        });
    }

}