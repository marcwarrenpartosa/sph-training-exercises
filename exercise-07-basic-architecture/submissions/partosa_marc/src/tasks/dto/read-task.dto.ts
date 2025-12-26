import { IsString, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export default class ReadTaskDto {
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

export class PaginatedTasksDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReadTaskDto)
    data: ReadTaskDto[];

    @IsNumber()
    total: number;

    @IsNumber()
    page: number;

    @IsNumber()
    limit: number;

    @IsNumber()
    totalPages: number;
}
