const utils = require('../utils/index')
const nodemailer = require('nodemailer')
const { LocalStorage } = require("node-localstorage");

const sendEmail = (service_email, client_id, private_key) => async (email, subject, text) => {

    utils.isValid(email)

    try {

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                user: service_email,
                serviceClient: client_id,
                privateKey: private_key
            }
        });

        await transporter.verify();
                
        await transporter.sendMail({
                from: service_email,
                to: email,
                subject,
                text
        });

        return {
            status : 200
        }

    } catch (error) {
        return {
            status : 500,
            error
        }
    }

}

const sendCodeEmail = (service_email, client_id, private_key) => async (email, code) => {

    utils.isValid(email)

    try {

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                user: service_email,
                serviceClient: client_id,
                privateKey: private_key
            }
        });

        await transporter.verify();
                
        await transporter.sendMail({
                from: service_email,
                to: email,
                subject: "Código de validação",
                text: `Seu código de ativação é ${code}!`
        });

        return {
            status : 200
        }

    } catch (error) {
        return {
            status : 500,
            error
        }
    }

}

const sendDataPolicy = (service_email, client_id, private_key) => async (email) => {

    utils.isValid(email)

    try {
        let localStorage = new LocalStorage('./src/mailer-integration/utils');

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                user: service_email,
                serviceClient: client_id,
                privateKey: private_key
            }
        });

        await transporter.verify();
                
        await transporter.sendMail({
                from: service_email,
                to: email,
                subject: "Termos de uso",
                text: localStorage.getItem("mailPolicy")
        });

        return {
            status : 200
        }

    } catch (error) {
        return {
            status : 500,
            error
        }
    }

}

module.exports = (service_email, client_id, private_key) => {

    return {
        sendEmail: sendEmail(service_email, client_id, private_key),
        sendCodeEmail: sendCodeEmail(service_email, client_id, private_key),
        sendDataPolicy: sendDataPolicy(service_email, client_id, private_key)
    }

}