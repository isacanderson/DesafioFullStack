import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportModule } from './report/report.module';
import { DatabaseCoreModule } from './database/database.module';

@Module({
  imports: [ReportModule, DatabaseCoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
