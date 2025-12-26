import { IsString } from 'class-validator';

export default class CreateTaskDto {
    @IsString()
    id: string;

    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsString()
    status: string;

    @IsString()
    userId: string;
}