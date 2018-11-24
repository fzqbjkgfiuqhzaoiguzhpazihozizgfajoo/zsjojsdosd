client.on('guildMemberAdd', member => {
    if(member.guild.id !== '428690920246870016') return;
    setTimeout(() => {
        client.channels.get('485710163966296064').send(`${member}** Welcome To Flix Community.**`);
    }, 1000);
});
client.login(process.env.BOT_TOKEN);
