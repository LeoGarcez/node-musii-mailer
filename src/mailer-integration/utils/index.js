const { emailAuthenticateCode } = require('../utils/email_codigo-de-autenticacao')
const { emailDataPolicy } = require('../utils/email_data_policy')
const { textDataPolicy } = require('../utils/text_data_policy')
const { emailNewPassword } = require('../utils/email_new_password')

const isValid = (item) => {

    if (!item || item === undefined || item === '') {
        throw new Error('Invalid Value')
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (!re.test(String(item).toLowerCase())) {
            throw new Error('Invalid Email')
        }
    }

}

module.exports = {
    isValid,
    emailAuthenticateCode,
    emailNewPassword,
    emailDataPolicy,
    textDataPolicy
}