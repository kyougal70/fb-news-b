import { Controller, Get } from '@nestjs/common';
import { WatchdogsService } from './watchdogs.service';

@Controller('news')
export class WatchdogsController {
  constructor(private readonly watchdogsService: WatchdogsService) {}
  @Get()
  async findAll(): Promise<any> {
    return this.watchdogsService.fetchAndSaveNews1();
  }
}
