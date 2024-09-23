//------------------------ Backend APIs ----------------------//
export const API_URL = {


    /***************** AUTHENTICATION APIS **********************/
    REGISTER_USER: '/users/register/',
    LOGIN: 'https://kordesroses.thinksynergyltd.com/api1/rest/login.php',


    /***************** TEST APIS **********************/
    CREATE_TEST: 'https://kordesroses.thinksynergyltd.com/api1/rest/searchbyname.php',
    SCAN_TEST: 'https://kordesroses.thinksynergyltd.com/api1/rest/getvaselifetest.php',
    ADD_MEASUREMENT: 'https://kordesroses.thinksynergyltd.com/api1/rest/updatevaselifetest.php'
}


//------------------------ Application APIs ----------------------//
export const APP_API_URL = {

    /***************** AUTH **********************/
    REGISTER_USER: '/api/register',
    LOGIN: '/api/auth/login',


    /***************** TEST APIS **********************/
    CREATE_TEST: '/api/create_test',
    SCAN_TEST: '/api/scan-test',
    ADD_MEASUREMENT: '/api/add-measurement',

}

export const API_METHODS = {
    GET:'GET',
    POST: 'POST',
    PATCH: 'PATCH',
    PUT: 'PUT',
    DELETE: 'DELETE'
}
