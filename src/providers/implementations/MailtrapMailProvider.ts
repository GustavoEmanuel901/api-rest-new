/// <reference path="../../@types/env.d.ts" />

import { IMailProvider, IMessage } from '@providers/IMailProvider'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

require('dotenv').config({
  path: '.env'
})

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail;

  constructor () {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD
      }
    })

    console.log(process.env.MAILTRAP_PORT)
  }

  async sendMail (message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}
