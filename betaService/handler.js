'use strict';

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: pageHTML
    // body: JSON.stringify({
    //   message: 'Lets do it!',
    //   input: event,
    // }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

let pageHTML = `<h1>hello ${5*2} friiends!</h1>`;


