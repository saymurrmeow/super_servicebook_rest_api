import { Inject, Injectable } from '@nestjs/common';

import CreateUserDto from '../dto/createUser.dto';
import { IUserRepository } from '../repositories/interfaces';
import repoTypes from '../repositories/types';

@Injectable()
export default class UserService {
  constructor(
    @Inject(repoTypes.UserRepository) private userRepository: IUserRepository,
  ) {}

  async create(dto: CreateUserDto) {
    return this.userRepository.create(dto);
  }

  findById() {
    //return this.userRepository.findById();
  }
}
