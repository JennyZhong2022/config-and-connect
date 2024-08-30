import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ConfigModule } from '@nestjs/config';

// import { DogsModule } from './dogs/dogs.module';
// import { ConfigModule } from '@nestjs/config';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [
    // we moved our config to mikro-orm.config.ts
    MikroOrmModule.forRoot(),
    ConfigModule.forRoot({cache:true}),
    DogsModule,
   
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
