const emailAuthenticateCode = (tag, code) => {
  
  const splitedCode = code.toString().split('')
  
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
        <h1 style="color: #774980;">Código de<br> autenticação</h1>
      </div>
      <div style="padding: 48px 48px 48px;">
        <p style="font-size: 18px;">Olá, <span style="font-size: 20px; font-weight: 700;">${tag}</span>!</p>

        <div style="margin: 0 auto 32px; display: table; border-collapse: separate; border-spacing: 8px 0; font-size: 48px; font-weight: 700;">
          <div style="color: rgba(95,52,112,1); display: table-cell;">${splitedCode[0]}</div>
          <div style="color: rgba(101,52,114,1); display: table-cell;">${splitedCode[1]}</div>
          <div style="color: rgba(107,53,114,1); display: table-cell;">${splitedCode[2]}</div>
          <div style="color: rgba(114,54,116,1); display: table-cell;">${splitedCode[3]}</div>
          <div style="color: rgba(119,54,117,1); display: table-cell;">${splitedCode[4]}</div>
          <div style="color: rgba(125,55,118,1); display: table-cell;">${splitedCode[5]}</div>
        </div>

        <p>Este aqui é o código de autenticação para criar sua conta no musii.<br>
        Insira-o no campo indicado para prosseguir com o seu cadastro, está quase terminando.</p>
        <p>Se não solicitou esse código ou precisar de ajuda, <a href="#" target="_blank" style="text-decoration: none; color:#605b6d; font-weight: 700;">clique aqui</a> para falar com a gente.</p>
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
  emailAuthenticateCode
}