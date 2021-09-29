import { Controller, Get, Inject } from '@nestjs/common';

import UserService from '../services/user.service';
import serviceTypes from '../services/types';

@Controller('user')
export default class UserController {
  constructor(
    @Inject(serviceTypes.UserService) private userService: UserService,
  ) {}

  @Get()
  findById(): string {
    return this.userService.findById();
  }
}
