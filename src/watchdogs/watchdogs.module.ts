import { Module } from '@nestjs/common';
import { WatchdogsService } from './watchdogs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Watchdogs, WatchdogsSchema } from './schema/watchdogs.schema';
import { WatchdogsController } from './watchdogs.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Watchdogs.name, schema: WatchdogsSchema },
    ]),
  ],
  controllers: [WatchdogsController],
  providers: [WatchdogsService],
  exports: [WatchdogsService],
})
export class WatchdogsModule {}
