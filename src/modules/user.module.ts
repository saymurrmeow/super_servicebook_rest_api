import { Module } from '@nestjs/common';

import UserController from '../controllers/user.controller';
import UserRepository from '../repositories/user.repository';
import UserService from '../services/user.service';

import servicesTypes from '../services/types';
import repositoriesTypes from '../repositories/types';
import { DataBaseModule } from './database.module';

@Module({
  imports: [DataBaseModule],
  controllers: [UserController],
  providers: [
    { provide: servicesTypes.UserService, useClass: UserService },
    {
      provide: repositoriesTypes.UserRepository,
      useClass: UserRepository,
    },
  ],
})
export class UserModule {}
