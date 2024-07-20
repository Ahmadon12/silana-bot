import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
> *مول البوت هو ساسكي للتقنية أتمنى لك التوفيق*

*Number :*\nwa.me/212710725533
*instagram:*\ninstagram.com/sasuke_tech

*youtube:*\nyoutube.com/sasuke_tech

*facebook page:*\nwww.facebook.com/profile.php?id=100063533185520

*script bot :* github.com/sasuke_tech133

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
