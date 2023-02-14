import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller(':producer/reports')
@ApiTags('Reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  findAll() {
    return this.reportService.findAll();
  }

  @Post()
  create(@Body() createPerfileDto: CreateReportDto) {
    return this.reportService.create(createPerfileDto);
  }

  @Get(':id')
  findOne(@Param('id') idReport: string) {
    return this.reportService.findOne(+idReport);
  }

  @Put(':id')
  update(
    @Param('id') idReport: string,
    @Body() updatePerfileDto: UpdateReportDto,
  ) {
    return this.reportService.update(+idReport, updatePerfileDto);
  }

  @Delete(':id')
  delete(@Param('id') idReport: string) {
    return this.reportService.delete(+idReport);
  }

  @Get('search')
  findByWord(@Query('query') word: string) {
    return this.reportService.findByWord(word);
  }
}
