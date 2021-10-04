import { Injectable } from '@nestjs/common';

import { IUserRepository } from './interfaces';
import { PostgresService } from '../services/postgres.service';

@Injectable()
export default class UserRepository implements IUserRepository {
  constructor(private postgersService: PostgresService) {}

  async create() {
    return this.postgersService.executeQuery('SELECT * FROM pages');
  }
}
