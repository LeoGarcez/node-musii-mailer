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
    isValid
}