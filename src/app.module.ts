import { Module } from '@nestjs/common';

// Types ...
import servicesTypes from './services/types';
import repositoriesTypes from './repositories/types';

// Controllers ...
import UserController from './controllers/user.controller';

// Services ...
import UserService from './services/user.service';

// Repositories ...
import UserRepository from './repositories/user.repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    { provide: servicesTypes.UserService, useValue: UserService },
    { provide: repositoriesTypes.UserRepository, useValue: UserRepository },
  ],
})
export class AppModule {}
