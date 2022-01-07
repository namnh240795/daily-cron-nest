import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import axios from 'axios';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  @Cron('0 55 17 * * 1-6')
  async handleReport() {
    const data = {
      content: 'Report nhé mọi người @everyone',
    };

    axios.post(
      'https://discord.com/api/v8/webhooks/928930500125540372/F8jAOCclkP_pojrN-BJLVrNIHO8IZaPV9biYjccvcfHUoh3aWSYNEZL6YV7sOx7fq9Re',
      data,
    );
  }

  @Cron('0 0 9 * * 1-6')
  async handleMeeting() {
    const data = {
      content: 'Vào họp nào mọi người',
      embeds: [
        {
          title: 'Daily meeting',
          description: 'Google link \n https://meet.google.com/ghm-hrqj-bov',
          color: 5814783,
        },
      ],
    };

    axios.post(
      'https://discord.com/api/v8/webhooks/928930500125540372/F8jAOCclkP_pojrN-BJLVrNIHO8IZaPV9biYjccvcfHUoh3aWSYNEZL6YV7sOx7fq9Re',
      data,
    );
  }
}
