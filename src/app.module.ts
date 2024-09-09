import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { TimestampMiddleware } from './middleware/timestamp.middleware';

@Module({
  controllers: [AppController],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TimestampMiddleware).forRoutes('random');
  }
}
