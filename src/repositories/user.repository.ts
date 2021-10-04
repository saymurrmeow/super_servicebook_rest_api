import { Injectable, Logger } from '@nestjs/common';

import { IUserRepository } from './interfaces';
import { PostgresService } from '../services/postgres.service';
import { UserEntity } from '../domain/model';
import CreateUserDto from '../dto/createUser.dto';

@Injectable()
export default class UserRepository implements IUserRepository {
  private logger = new Logger(UserRepository.name);

  constructor(private postgersService: PostgresService) {}

  async create(dto: CreateUserDto) {
    this.logger.log(`execude create query with ${JSON.stringify(dto)}`);
    return this.postgersService.executeQuery<UserEntity>(
      'INSERT INTO users (user_name, email, user_password) VALUES ($1, $2, $3) returning id, user_name, email',
      [dto.name, dto.email, dto.password],
    );
  }

  async findById(id: number) {
    this.postgersService.executeQuery<UserEntity>(
      'SELECT id, user_name, email WHERE id=($1)',
      [id],
    );
  }
}
