import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

import UserService from '../services/user.service';
import serviceTypes from '../services/types';
import CreateUserDto from '../dto/createUser.dto';

@Controller('user')
export default class UserController {
  constructor(
    @Inject(serviceTypes.UserService) private userService: UserService,
  ) {}

  @Post()
  create(@Body() createUserDTO: CreateUserDto, @Res() res: Response) {
    this.userService.create(createUserDTO).then((user) => res.json({ user }));
  }

  @Get('/:id')
  findById(@Param('id') id: string, @Res() res: Response) {
    this.userService.findById(id).then((user) => res.json({ user }));
  }
}
