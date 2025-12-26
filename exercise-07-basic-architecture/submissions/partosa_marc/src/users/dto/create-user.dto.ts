import { IsString, IsEmail } from 'class-validator';

export default class CreateUserDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  token: string;
}
