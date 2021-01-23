const service_email = "admin@musii.app"


const chai = require('chai')
const expect = require('chai').expect
const mailerService = require('../src/index')

describe('testing initial service', () => {

    it('sending emptu client credentials', async () => { 
        expect(() => mailerService(client_id)).to.throw()
    })

})

describe('mailer', () => {

    const service = mailerService(service_email, client_id, private_key)

    /*it('sendEmail', async () => {
        const retorno = await service.mailer.sendEmail('garceleo@gmail.com', 'test', 'teste')
        chai.assert.equal(retorno.status, 200)
    })*/

    /*it('sendCodeEmail', async () => {
        const retorno = await service.mailer.sendCodeEmail('garceleo@gmail.com', 'rafabambokian', 105905)
        chai.assert.equal(retorno.status, 200)
    })*/

    it('sendCodeEmail', async () => {
        const retorno = await service.mailer.sendDataPolicy('pedrodnrm@gmail.com')
        chai.assert.equal(retorno.status, 200)
    })

    /*it('sendDataPolicy', async () => {
        const retorno = await service.mailer.sendDataPolicy('garceleo@gmail.com')
        chai.assert.equal(retorno.status, 200)
    })*/
})