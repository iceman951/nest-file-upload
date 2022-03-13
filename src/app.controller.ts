import { BadRequestException, Controller, Post, Req, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import {filesFilter}  from './fileFilter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    {name: 'ice', maxCount: 1},
    {name: 'red', maxCount: 1},
    {name: 'green', maxCount: 1},
  ], {dest: './uploads',fileFilter: filesFilter}))
  async uploadFiles(@Req() req: any,@UploadedFiles() files: {
    ice?: Express.Multer.File,
    red?: Express.Multer.File,
    green?: Express.Multer.File
  }){
    if(!files || req.error) throw new BadRequestException("must have files")
    return files;
  }
}
