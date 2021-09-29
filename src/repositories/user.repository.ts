import { Injectable } from '@nestjs/common';
import { IUserRepository } from './interfaces';

@Injectable()
export default class UserRepository implements IUserRepository {
  findById() {
    return '';
  }
}
