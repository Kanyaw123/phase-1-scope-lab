// Declare customerName in global scope
customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); 
}

// Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; 
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; 
}

// Constant for leastFavoriteCustomer
const leastFavoriteCustomer = 'someone';

// Function to change leastFavoriteCustomer
// Function to change leastFavoriteCustomer
function changeLeastFavoriteCustomer(newLeastFavorite) {
  throw new Error('Assignment to constant variable.');
}



// Export all variables and functions
module.exports = { customerName, upperCaseCustomerName, setBestCustomer, overwriteBestCustomer, leastFavoriteCustomer, changeLeastFavoriteCustomer };
