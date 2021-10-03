import { Inject, Injectable } from '@nestjs/common';

import { IUserRepository } from './interfaces';
import CreateUserDto from '../dto/createUser.dto';
import serviceTypes from '../services/types';

@Injectable()
export default class UserRepository implements IUserRepository {
  // constructor(@Inject(serviceTypes.PostgresConnectionService) private db) {
  //   console.log(this.db);
  // }
}
