import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  checkEvery30sec() {
    // console.log('cron');
    fetch('https://fb-news-b.onrender.com/hello').then((response) => {
      console.log('s');
      return true;
    });
  }
}
