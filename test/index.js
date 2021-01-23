const service_email = "admin@musii.app"
const client_id = "107206163678750474892"
const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQClIgZ0itcovuh4\nkaxPJYW4vnGUoM2KKARnFI7ofKZjvyezWaXYu+nK7ljzXruVUh8ovQivDJRD35WO\nUqKMmCvURoJSGrx/jEVqHGJEQtHKQylp0cHv31rug0kJOncfG1pvjK7qVlKa22gG\nvpY1pwQtKTp67yxQFe/o1BKa/zxNDUCUVW/2xgX0vfDlI5c8wdZDB8fJJ7rNvzGi\ngsifTJvZY3bm4fT6ySHXVBkPR3uy41O3z8kVLF0GU+1SbihLdsLoFX5gpJ0TUTL8\nfBKEPb/kicOE/AclgrN/sG8NNU+/uFwiLdjplwDx8tK1IA4anWrfnVYXqsLhFDWh\nzCCtmWWDAgMBAAECggEACqvLAJGzciixOUaFxfWRbNYySqcAHwHu3S/Y/Agap6no\ncqeD6XvJf2dIoz/HcCwG402zXCvzJI0hwfAUrydY0t+LSj2yx2OQXaJo7T1VB2uM\nFRBxOLD6HWZgV6munWc1Lht/UnTymb+qqMRYTMCSKynMiCdX1PMLrTGPv6lnw2H2\nWNXfEnakDpq3tgukTCFAJutGpduJ3krH1+oz0N5yc1UajQMacY7UneF8A49BPK+F\njAcezeVYDLGXABm5AzXBb1ZBu/fQVQg3QMEwmimhkHcpxFjN+IFqpZjKePaFNKeM\ntot1eEb16AFxCrnlz5T6kJofahtp88rEAL0NVXex8QKBgQDRHKSBVwte66UI694L\nybyIBaE8qP4ea0H5Jl0B7T0p/0pJBz1jYZhXSNiQv98ZX8GD+xa7KcZ4zZFhclFL\nbZzvmqUkptzffwWRGeKSeoOT1eOJeeT9ce2LpqPy9vNmYh9izSGHeVWC4rn8prrZ\npfQRWQUkLtwo2zfKinPjOLdm8wKBgQDKKOtD7goBioDcfo36pvWolxQ2zUBt3P19\nrmycc4hv723D8wzX9Dm0kRfLwijyrWCwWDkP9xKdgAK4rV3OkPDj7tXb/VyyEI9V\ncB6dTbZfLDzVz9nvtjx3KJw4fKFZIrpMF55eCUQThccTPrfdYu7P+x8zDF+iLNl5\nHWLZO7TLMQKBgDp1+X+3aBRnaMIvvuoowi589HDTBghXECCpmwL44kqldo0oGv93\nv3FXikQdgC/F14IgZmB482W+gtBtd1DRGjjaUSUICWPqTRId3Hv7CGICQBSlIWHB\nwhlyww8f/zg2YnPqyV7oiwGGhVye+En03WEkNA3DlAVQFC7pujBiINQFAoGBAJUJ\nI6CZzaCjNirX1d3y1mpqrslT+erEn9DXFVUly3ESJ27tMQvIDf6zdMKPqlZ2QTDg\naXj+oieg5uC1VtHhguXW/qzHFV5k3PaUyM0ZLJjvaQ4LxNR3Gg6SztDJ+L1Y39UX\nGHalCB4IYuIqO6ynsf18Wdztg1dxDwa+BlC2NqwRAoGAdc/cYnXPTmncoeROXO+T\nvo03F3Cv+MdpNOLVC3H/usgHmW6qClUXFUi2lb0XOM4g9yNLEpvue7CwqKP8+r/2\nLwsjC964UYivZMzHB7QE8MYYt6qq/TqLZzhRG4TQUSeus88xVV9OKE106OfWZ8LP\nbOuzZi13JEWqPVBR5OpNmM0=\n-----END PRIVATE KEY-----\n"

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