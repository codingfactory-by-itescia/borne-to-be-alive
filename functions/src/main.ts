import * as admin from 'firebase-admin'
import * as express from 'express'
import * as fireorm from 'fireorm';
import * as functions from 'firebase-functions'
import * as serviceAccount from './accountService.json'

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express'
import { NestFactory } from '@nestjs/core';
import { TicketService } from 'ticket/ticket.service';
import { ValidationPipe } from '@nestjs/common';

const server = express()

export const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance)
  );

  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle('Born to be alive')
    .setDescription('Api du projet')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
  });

  const firestore = admin.firestore();
  fireorm.initialize(firestore);

  app.enableCors();

  return app.init();
}


createNestServer(server).then(r => console.log("Nest Ready")).catch(e => console.error("Nest broken ", e))

export const api = functions.https.onRequest(server);

export const deleteAllTicketForDays = functions.pubsub
  .schedule('5 1 * * *')
  .timeZone('Europe/Paris')
  .onRun(async () => {
    try {
      const ticketService = new TicketService()
      const allTicket = await ticketService.findAllTickets()
      ticketService.deleteTickets(allTicket.map(t => t.id))
      return 'success'
    } catch (error) {
      return 'Error ' + error.message
    }
  });