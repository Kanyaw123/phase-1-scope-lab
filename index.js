customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); 
}

function setBestCustomer() {
  bestCustomer = 'not bob'; 
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; 
}

const leastFavoriteCustomer = 'someone';


function changeLeastFavoriteCustomer(newLeastFavorite) {
  throw new Error('Assignment to constant variable.');
}



module.exports = { customerName, upperCaseCustomerName, setBestCustomer, overwriteBestCustomer, leastFavoriteCustomer, changeLeastFavoriteCustomer };
