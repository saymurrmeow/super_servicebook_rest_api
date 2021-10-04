import { Body, Controller, Get, Inject, Post, Res } from '@nestjs/common';

import UserService from '../services/user.service';
import serviceTypes from '../services/types';
import CreateUserDto from '../dto/createUser.dto';

@Controller('user')
export default class UserController {
  constructor(
    @Inject(serviceTypes.UserService) private userService: UserService,
  ) {}

  @Post()
  create(@Body() createUserDTO: CreateUserDto, @Res() res) {
    this.userService.create(createUserDTO).then((user) => res.send(user));
  }

  @Get()
  findById() {
    //TODO
  }
}
