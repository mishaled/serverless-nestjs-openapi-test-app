// import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    CatsModule,
    // HttpModule.register({
    //   timeout: 5000,
    //   maxRedirects: 5,
    //   responseType: 'json',
    // }),
  ],
})
export class AppModule {}
