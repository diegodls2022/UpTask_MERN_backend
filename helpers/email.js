import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
    const { email, nombre, token } = datos

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      });

      // informacion del email

      const info = await transport.sendMail({
        from: '"UpTask - Administrador de Proyecto" <diegodls_20@hotmail.com>',
        to: email,
        subject: "UpTask - Confirma Tu Cuenta",
        text: "Comprueba tu cuenta en Uptask",
        html: `<p>Bienvenido: ${nombre} a tu cuenta en Uptask</p>
        <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace: 
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Click Aquí</a>
        </p>
        <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
        `
      })
};

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos

  const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

    // informacion del email

    const info = await transport.sendMail({
      from: '"UpTask - Administrador de Proyecto" <diegodls_20@hotmail.com>',
      to: email,
      subject: "UpTask - Reestablece tu Password",
      text: "Reestablece tu Password",
      html: `<p>Bienvenido: ${nombre} has solicitado reestablecer tu password</p>

      <p>Sigue el siguiente enlace para generar un nuevo password: 

      <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>
      </p>
      <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
      `
    })
};