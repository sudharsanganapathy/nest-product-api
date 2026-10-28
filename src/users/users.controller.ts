import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';

import { UsersService } from './users.service.js';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    const user = this.usersService.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}