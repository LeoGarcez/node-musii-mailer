const emailDataPolicy = () => {
  
  return `<!DOCTYPE html>
  <html>
  <head>
  <style type="text/css">
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&display=swap');
  * {
    margin: 0;
    border: 0;
    padding: 0;
  }
  body {
    font-family: 'Cairo', sans-serif;
    max-width: 800px;
    margin: 0 auto;
    background: #f1f1f1;
  }
  p {
    padding-bottom: 30px;
  }
  h1 {
    font-size: 36px;
    line-height: 48px;
  }
  </style>
  </head>
  <body>
    <div style="background: #fff; font-size: 16px; line-height: 24px; font-weight: 300; color:#605b6d;">
      <div style="height: 50px; padding-top: 32px; padding-right: 48px; padding-bottom: 8px;">
        <img width="48" align="right" src="http://musii-imagens.s3.us-east-1.amazonaws.com/header_logo.png" /> 
      </div>
      <div style="padding-left: 48px;">
        <h1 style="color: #774980;">Termos<br> e Condições</h1>
      </div>
      <div style="padding: 48px 48px 48px;">
        <p style="font-size: 18px;">Olá!</p>
        <p>
          Conforme solicitou, aqui estão os "<a href="https://1drv.ms/b/s!AunOkXxY_m_EgdsXTwDcQglWNDA1Zw?e=3jEb8w" target="_blank" style="text-decoration: none; color:#605b6d; font-weight: 700;">Termos e Condições</a>" do musii.<br>
          Somos uma rede que preza pela transparência e seguraça dos nossos usuários. Caso tenha alguma dúvida ou sugestão, queremos te ouvir.<br> Responda a esse e-mail com sua questão ou feedback.
        </p>
        <p>Obrigado mais uma vez por ser membro da nossa comunidade!</p>
        <p>
          Um abraço!<br>
          Equipe musii
        </p>
      </div>
      <div style="width: 100%; background: #2c2452; height: 120px; padding-top: 40px; padding-bottom: 0;">
        <div style="position: absolute; float: left; margin-left: 48px; opacity: 0.2;">
          <img src="http://musii-imagens.s3.us-east-1.amazonaws.com/footer_logo.png" width="42" /> 
        </div>
        <div style="position: relative; float: right; margin-right: 48px; margin-top: 4px; opacity: 0.2;">
          <a href="https://www.instagram.com/musii.app/" target="_blank"><img src="https://influenciadoradesucesso.opoderdaimagem.net.br/wp-content/uploads/2019/03/007-instagram-logo-white.png" width="28" /></a>
        </div>
        <p style="margin-top: 72px; margin-left: 48px; font-size: 14px; color: #fff; opacity: 0.2;">©2020 Musii Serviços de Música Ltda.</p>
      </div>
    </div>
  </body>
  </html>`
}

module.exports = {
  emailDataPolicy
}