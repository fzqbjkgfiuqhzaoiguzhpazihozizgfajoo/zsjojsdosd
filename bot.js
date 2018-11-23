client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("485710163966296064");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(` ** Welcome To ** ``Flix-Host ``
`), 4000)        
}
});
client.login(process.env.BOT_TOKEN);
