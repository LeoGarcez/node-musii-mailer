const { mailer } = require('./mailer-integration/index')
const utils = require('./mailer-integration/utils/index')

let __service_email = ''
let __client_id = ''
let __private_key = ''

module.exports = (service_email, client_id, private_key) => {

    utils.isValid(service_email)

    __service_email = service_email
    __client_id = client_id
    __private_key = private_key

    return {
        mailer: mailer(__service_email, __client_id, __private_key)
    }

}