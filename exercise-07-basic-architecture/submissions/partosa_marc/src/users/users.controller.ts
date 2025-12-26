import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import CreateUserDto from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Get all users
  @Get()
  getAllUsers(): CreateUserDto[] {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): CreateUserDto | undefined {
    return this.usersService.getUserById(id);
  }
}
