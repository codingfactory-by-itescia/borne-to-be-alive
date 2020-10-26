import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import {ExpressAdapter} from '@nestjs/platform-express'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as express from 'express'
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

const server = express()

export const createNestServer = async (expressInstance) =>{
  const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressInstance)
    );

    app.useGlobalPipes(new ValidationPipe());

    const options = new DocumentBuilder()
    .setTitle('Born to be alive')
    .setDescription('Api du projet')
    .setVersion('1.0')
    .addTag('borne')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);

  return app.init();
}


createNestServer(server).then(r => console.log("Nest Ready")).catch(e=>console.error("Nest broken ", e))

export const api = functions.https.onRequest(server);