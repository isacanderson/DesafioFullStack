import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './entities/report.entity';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Injectable()
export class ReportService {
    constructor(@InjectRepository(Report) private reportRepository: Repository<Report> ) { }

  async findAll(): Promise<Report[]> {
    return this.reportRepository.find();
  }

  async create(createReportDto: CreateReportDto): Promise<Report> {
    const report = this.reportRepository.create(createReportDto);
    return this.reportRepository.save(report);
  }
  
  async findOne(id: number): Promise<Report> {    
    const report = await this.reportRepository.findOneBy({id_report: id});
    if (!report)
      throw new HttpException(`Report with id: ${id} not found`, HttpStatus.NOT_FOUND);
    return report;
  }

  async update(id: number, updateReportDto: UpdateReportDto): Promise<Report> {
    const existReport = await this.findOne(id);
    if (!existReport)
      throw new HttpException(`Report with id: ${id} not found`, HttpStatus.NOT_FOUND);
    // update existReport with the values from updateReportDto
    const updatedReport = Object.assign(existReport, UpdateReportDto);
    return this.reportRepository.save(updatedReport);    
  }
  
  async delete(id: number): Promise<Report> {
    const existReport = await this.findOne(id);
    if (!existReport)
      throw new HttpException(`Report with id $:{id} not found`, HttpStatus.NOT_FOUND);
    return this.reportRepository.remove(existReport);
  }

  async findByWord(word: string): Promise<Report[]> {
    const reports = await this.reportRepository.find({ where: { cropName: word } });
    return reports;
  }
}
