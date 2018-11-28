const request = require('request-promise');
const Promise = require('bluebird');

// amount of Christmas joy to spread
const numRequests = 1000;
const requestUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc46bByCUYFvKtOiKfdOr83jnSNwVhx2I6hOa-SoG9JEZAAhg/formResponse';
let counter = 0;

Promise.map(new Array(numRequests), () => allIWant(), {
  concurrency: 15
} );

function allIWant() {
  console.log(`Requesting All I Want for Christmas is You... #${counter++}`);
  
  return request
    .post(requestUrl, {
      form: {
        'entry.1299052505':'All I Want for Christmas is You', 
        'entry.1639397315': 'Mariah Carey'
      }
    })
    .then(() => {
      console.log('    Success!');
    })
    .catch((err) => {
      console.log(err);
    });
}