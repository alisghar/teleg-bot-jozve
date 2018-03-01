const Token = '516577502:AAG26BoHT_bLppbykAfqnfVdPlCrvm8erLA';
const Telegraf = require('telegraf');
const Markup = require('telegraf/markup');
const fs = require('fs');

const bot = new Telegraf(Token);

bot.use(Telegraf.log());

bot.command('start', ({ reply }) => {
    return reply('👈 منوی اصلی', Markup
        .keyboard([
            ['📒 لیست chapter های درس'],
            ['😎 درباره ما']
        ])
        .oneTime()
        .resize()
        .extra()
    )
});

bot.hears('👈 منوی اصلی', ({ reply }) => {
    return reply('👈 منوی اصلی', Markup
        .keyboard([
            ['📒 لیست chapter های درس'],
            ['😎 درباره ما']
        ])
        .oneTime()
        .resize()
        .extra()
    )
});

// bot.hears('😎 درباره ما', ({ reply }) => {
//     reply.reply('');
// });

bot.hears('📒 لیست chapter های درس', ({ reply }) => {
    return reply('برای دانلود هر کدام از chapter ها روی آن کلیک کنید', Markup
        .keyboard([
            ['📒 Chapter 01'],
            ['👈 منوی اصلی']
        ])
        .oneTime()
        .resize()
        .extra()
    )
});

bot.hears('📒 Chapter 01', (ctx) => {
    ctx.replyWithChatAction('upload_document');
    ctx.reply('اندکی صبر کنید٬ فایل مورد نظر برای شما ارسال خواهد شد 😊');
    ctx.replyWithDocument({ source: './chapters/chapter1.pdf' });
});

bot.startPolling();