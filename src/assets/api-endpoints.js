//------------------------ Backend APIs ----------------------//
export const API_URL = {


    /***************** AUTHENTICATION APIS **********************/
    REGISTER_USER: '/users/register/',
    LOGIN: 'https://kordesroses.thinksynergyltd.com/api1/rest/login.php',


    /***************** TEST APIS **********************/
    SCAN_MEASUREMENT: 'https://kordesroses.thinksynergyltd.com/api1/rest/getgermanyvaselifetest.php',
    UPDATE_TEST: 'https://kordesroses.thinksynergyltd.com/api1/rest/updatevaselifetestdetails.php',
    ADD_MEASUREMENT: 'https://kordesroses.thinksynergyltd.com/api1/rest/updatevaselifetest.php',
    FETCH_TESTS: ' https://kordesroses.thinksynergyltd.com/api1/rest/viewrecords.php',
}


//------------------------ Application APIs ----------------------//
export const APP_API_URL = {

    /***************** AUTH **********************/
    REGISTER_USER: '/api/register',
    LOGIN: '/api/auth/login',


    /***************** TEST APIS **********************/
    SCAN_MEASUREMENT: '/api/scan-measurement',
    UPDATE_TEST: '/api/scan-measurement/update-test',
    ADD_MEASUREMENT: '/api/add-measurement',
    FETCH_TESTS: '/api/fetch-tests',

}

export const API_METHODS = {
    GET:'GET',
    POST: 'POST',
    PATCH: 'PATCH',
    PUT: 'PUT',
    DELETE: 'DELETE'
}
