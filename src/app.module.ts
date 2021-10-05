import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UserModule } from './modules/user.module';
import configFactory from './configs/config';

@Module({
  imports: [
    // .env file shuld be in root folder
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configFactory],
    }),
    UserModule,
  ],
})
export class AppModule {}
