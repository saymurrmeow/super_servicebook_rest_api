import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../repositories/interfaces';
import repoTypes from '../repositories/types';

@Injectable()
export default class UserService {
  constructor(
    @Inject(repoTypes.UserRepository) private userRepository: IUserRepository,
  ) {}

  findById() {
    return this.userRepository.findById();
  }
}
