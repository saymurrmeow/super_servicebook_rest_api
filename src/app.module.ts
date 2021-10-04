import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UserModule } from './modules/user.module';

import devConfigFactory from './configs/development.config';

@Module({
  imports: [
    // TODO разобраться почему не работал .env
    ConfigModule.forRoot({ isGlobal: true, load: [devConfigFactory] }),
    UserModule,
  ],
})
export class AppModule {}
