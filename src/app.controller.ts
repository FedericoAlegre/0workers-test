import { Controller, InternalServerErrorException, Post } from '@nestjs/common';

@Controller('random')
export class AppController {
  @Post()
  generateRandomNumber() {
    try {
      const randomNumber = ~~(Math.random() * 100) + 1;
      return { value: randomNumber };
    } catch (error) {
      throw new InternalServerErrorException('Error generating random number');
    }
  }  
}
