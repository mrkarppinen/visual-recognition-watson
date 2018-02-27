const td = require("testdouble");
const chai = require("chai");
const expect = chai.expect;
const tdChai = require("testdouble-chai");
const fs = require('fs');
const Classify = require('../src/classify.js');

chai.use(tdChai(td)); 

describe('Classify', function (){

    let endpoint;
    let classify;
    let dataURI = 'SGVsbG8sIFdvcmxkIQ%3D%3D';

     before( function (){
        let response = JSON.parse(fs.readFileSync('./test-resources/response-ok.json', 'utf8'));

        endpoint = td.object(['classify']);
        td.when(endpoint.classify({images_file: Buffer.from(dataURI,'base64')})).thenCallback(null, response);
    
        classify = new Classify(endpoint); 
     });   


     describe('byDataURI', function (){

        it("valid request", function() {
            
                return classify.byDataURI(dataURI).then( (response) => {
                    
                    expect(response.classes).not.to.be.null;
                    expect(response.classes[0].class).to.equal('banana');

                });
                
                
        });

    });


});

