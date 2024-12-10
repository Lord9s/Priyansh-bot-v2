module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Jayden Smith",
	description: "turn the bot off",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = ["61560050885709", "61570484453100"];
  	if (!permission.includes(event.senderID)) return api.sendMessage("[ ERR ] You don't have permission to use this command, This Command Only For Team Smith", event.threadID, event.messageID);
  api.sendMessage(`OK  ${global.config.BOTNAME} Bot are now turned off now.`,event.threadID, () =>process.exit(0))
}
