import {Bot, Get, Sticker, VkController, Voice} from '../../../src/'
import {VkBot, VkMessage} from '../../../src/decorators/params-decorator/ParamInject'
import Message from '../../../src/interfaces/Message'

@VkController()
export class TestController {
    //if use container
    constructor(private bot: Bot) {}


    @Get(/hi/)
    hi(message, exec, reply) {
        reply('Hello!')
    }

    @Voice()
    voice(@VkMessage()msg: Message, @VkBot()bot: Bot) {
        this.bot.send('Wooow is voice message!', msg.peer_id)
    }

    @Sticker()
    sticker(@VkMessage()msg: Message, @VkBot()bot: Bot) {
        bot.send('Wooow is sticker!', msg.peer_id)
    }

}