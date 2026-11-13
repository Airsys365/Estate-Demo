// Cloudflare Worker: отдаёт статику сайта и принимает заявки с формы.
// В реальном проекте здесь отправка письма (Resend) владельцу агентства.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/lead' && request.method === 'POST') {
      const data = await request.formData();
      console.log('Новая заявка', Object.fromEntries(data));
      return new Response('<meta charset=utf-8><p>Спасибо! Мы свяжемся с вами. <a href="/">На главную</a></p>',
        { headers: { 'content-type': 'text/html; charset=utf-8' } });
    }
    return env.ASSETS.fetch(request);
  },
};
