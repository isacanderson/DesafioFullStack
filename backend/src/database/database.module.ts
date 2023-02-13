import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [],
      useFactory: () => {
        return {
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: 'password',
          database: 'desafioFS',
          synchronize: true,
          autoLoadEntities: true,
        }
      }
    }),
  ],
  providers: [],
  exports: [TypeOrmModule],
})
export class DatabaseCoreModule { }
