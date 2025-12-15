import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WatchdogsDocument = HydratedDocument<Watchdogs>;
@Schema({ timestamps: true })
export class Watchdogs {
  @Prop({ type: String, required: true })
  title: string;
  @Prop({ type: String, required: true })
  link: string;
  @Prop({ type: String, required: false })
  pubDate: string;
  @Prop({ type: String, required: true })
  source: string;
  @Prop({ type: String, required: true })
  author: string;
  @Prop({ type: String, required: false })
  description: string;
  @Prop({ type: String, required: false })
  image: string;
  @Prop({ type: String, required: false })
  content: string;
}
export const WatchdogsSchema = SchemaFactory.createForClass(Watchdogs);
WatchdogsSchema.index({ topic: 1, title: 1 }, { unique: true });
