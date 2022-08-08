const botPresence = function(client) {
    let wojaks = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
    client.user.setPresence({ 
        activity: {
            name: 'Over ' + wojaks + ' Potential Wojaks',
            type: 'WATCHING' 
        },
        status: "online"
    })
    .catch(console.error)
};
module.exports = botPresence;