import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //Salva apenas os campos que estão mapeados no DTO
    forbidNonWhitelisted: true, //Não permite salvar se mandar dados além do DTO
    transform: true, //Transforma a tipagem para a mesma do DTO
  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
