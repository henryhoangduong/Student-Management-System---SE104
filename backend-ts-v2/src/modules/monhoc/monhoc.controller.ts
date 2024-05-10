import { Controller, Post, Body, Res, Param, Put, Get } from '@nestjs/common';
import { MonhocService } from './monhoc.service';
import { MonhocDto } from 'src/data-object/monhoc.dto';
import { Response } from 'express';

@Controller('monhoc')
export class MonhocController {
  constructor(private readonly monhocService: MonhocService) {}
  @Get()
  async read(@Res() res: Response): Promise<Response> {
    return res.status(200).json(await this.monhocService.findAll());
  }
  @Put('/:id')
  async change(
    @Body() { tenmonhoc }: { tenmonhoc: string },
    @Param('id') id,
    @Res()
    res: Response,
  ): Promise<Response> {
    const monhoc = await this.monhocService.findOne({
      mamonhoc: id,
    });
    if (!monhoc) {
      return res.status(409).json({ message: "monhoc doesn't exists" });
    } else {
      monhoc.tenmonhoc = tenmonhoc;
    }
    const monhocChanged = await this.monhocService.update(monhoc);
    return res.status(200).json({ monhocChanged });
  }
  @Post()
  async create(
    @Body() monhocDto: MonhocDto,
    @Res() res: Response,
  ): Promise<Response> {
    const monhoc = await this.monhocService.findOne({
      tenmonhoc: monhocDto.tenmonhoc,
    });
    if (monhoc) {
      return res.status(409).json({ message: 'monhoc already exists' });
    }
    const data = await this.monhocService.create(monhocDto);
    return res.status(200).json(data);
  }
}
