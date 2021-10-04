import { Injectable } from '@nestjs/common';

import { IUserRepository } from './interfaces';
import { PostgresService } from '../services/postgres.service';
import { UserEntity } from '../domain/model';
import CreateUserDto from '../dto/createUser.dto';

@Injectable()
export default class UserRepository implements IUserRepository {
  constructor(private postgersService: PostgresService) {}

  async create(dto: CreateUserDto) {
    return this.postgersService.executeRow<UserEntity>(
      'INSERT INTO users (user_name, email, user_password) VALUES ($1, $2, $3) returning id, user_name, email',
      [dto.name, dto.email, dto.password],
    );
  }

  async findById(id: string) {
    return this.postgersService.executeRow<UserEntity>(
      'SELECT id, user_name, email, user_password FROM users WHERE id=($1)',
      [id],
    );
  }
}
