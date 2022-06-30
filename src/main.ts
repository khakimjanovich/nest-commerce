import { NestFactory } from "@nestjs/core";
import { AppModule } from "./botstrap/app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const PORT = process.env.APP_PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("/api");

  const config = new DocumentBuilder()
    .setTitle("API BACKEND")
    .setDescription("Documentation REST API")
    .setVersion("1.0.0")
    .addTag("KHAKIMJANOVICH")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

bootstrap();
