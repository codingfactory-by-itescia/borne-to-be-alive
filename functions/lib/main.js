"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = exports.createNestServer = void 0;
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const express = require("express");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fireorm = require("fireorm");
const serviceAccount = require("./accountService.json");
const server = express();
exports.createNestServer = async (expressInstance) => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressInstance));
    app.useGlobalPipes(new common_1.ValidationPipe());
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Born to be alive')
        .setDescription('Api du projet')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('doc', app, document);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
    });
    const firestore = admin.firestore();
    fireorm.initialize(firestore);
    return app.init();
};
exports.createNestServer(server).then(r => console.log("Nest Ready")).catch(e => console.error("Nest broken ", e));
exports.api = functions.https.onRequest(server);
//# sourceMappingURL=main.js.map