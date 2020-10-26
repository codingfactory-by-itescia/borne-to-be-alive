import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ExpressAdapter} from '@nestjs/platform-express'
import * as express from 'express'
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

const server = express()

export const createNestServer = async (expressInstance) =>{
  const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressInstance)
    );
    return app.init();
}


createNestServer(server).then(r => console.log("Nest Ready")).catch(e=>console.error("Nest broken ", e))

export const api = functions.https.onRequest(server);