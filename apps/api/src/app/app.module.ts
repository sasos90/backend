import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';

console.log({
  host: process.env.db_host || 'db',
  port: Number(process.env.db_port) || 5432,
  username: process.env.db_username,
  password: process.env.db_password,
  database: process.env.db_name,
});

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.db_host || 'db',
      port: Number(process.env.db_port) || 5432,
      username: process.env.db_username,
      password: process.env.db_password,
      database: process.env.db_name,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PhotoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
