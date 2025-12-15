import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Watchdogs } from './schema/watchdogs.schema';
import { Model } from 'mongoose';
import axios from 'axios';

@Injectable()
export class WatchdogsService {
  constructor(
    @InjectModel(Watchdogs.name)
    private watchdogsModel: Model<Watchdogs>,
  ) {
    // this.fetchAndSaveNews2();
  }
  async fetchAndSaveNews2(): Promise<any[]> {
    const newsData: any = await axios.get(
      'https://newsapi.org/v2/everything?q=japan&apiKey=2d819af9e6a24725a2bbcf152ee717a0',
    );
    console.log(newsData, 'aaaaaaaaa');
    const xx: any[] = [];
    for (const item of newsData.data.articles) {
      try {
        const x = await this.watchdogsModel.create({
          title: item.title,
          link: item.url,
          pubDate: item.publishedAt,
          source: item.source.name || 'Unknown',
          author: item.author || 'Unknown',
          description: item.description,
          image: item.urlToImage,
          content: item.content,
        });
        xx.push(x);
      } catch (e) {
        console.log('error in watchdogsService');
      }
    }
    console.log('watchdogs saved', xx.length);
    return xx;
  }

  async fetchAndSaveNews1(): Promise<any[]> {
    return await this.watchdogsModel.find().exec();
  }
}
