const { Snowflake } = require("@sapphire/snowflake");
const  { Client , GatewayIntentBits , EmbedBuilder , PermissionsBitField , Permissions, ActivityType, DiscordAPIError } = require(`discord.js`);
const prefix = '-';
const client = new Client ({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});
const { token } = require('./config.json');



client.on("ready", ()=>{
    console.log("✅✅✅✅");
    console.log("El puto esta on");
    console.log("✅✅✅✅");
    client.user.setActivity(`El perreo intenso` ,{type: ActivityType.Listening}); 
})
client.on("messageCreate", (message) =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //message array
    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    //Comando Help display todo los comandos
    if(command === 'help' || command === 'ayuda' || command === 'commands' || command === 'comandos'){
        const exampleEmbed = new EmbedBuilder()
        .setColor("Orange")
        .setAuthor({name: `Machi`, iconURL: `https://www.shitpostbot.com/img/sourceimages/mr-bubz-5bc19ec0a4809.jpeg`})
        .setTitle('Commands')
        .addFields({ name: "-help", value: "Shows all comands."},
         {name: "-pp", value: "Shows how big is your pp."},
          {name: "-btc", value: "Shows btc info."},
          {name: "-eth", value: "Shows eth info"},
          {name: "-crypto", value: "Shows top 10 crypto by market cap"})
        .setThumbnail('https://wonderens.com/storage/products/WSyeViQhK884HvZAgEOlJ6kcclhbfS5qLnMMMmAZ.jpg')
        .setFooter({text: "Yautia is good so eat it" , iconURL: 'https://wonderens.com/storage/products/WSyeViQhK884HvZAgEOlJ6kcclhbfS5qLnMMMmAZ.jpg'})
        .setTimestamp()

message.channel.send({ embeds: [exampleEmbed] });
    }

    //comandos fun
    if(command === 'puto'){
        message.channel.send("Y tu maricon");
    }
    
    if(command === 'pp'){
        let x = Math.floor(Math.random() * 20);
        let palabrita = "8";
        for (let i = 0; i < x; i++) {
            palabrita += "=";
          }
          palabrita += "3";

        message.channel.send('este cabron tiene un pp asi ' + palabrita);
    }

    if(command === 'roll'){
        let x = Math.floor(Math.random() * 6) + 1;
        message.channel.send('Dice: ' + x);
    }

    // mensajes cacas luego se cambia
    if(command === 'alex'){
        message.channel.send("ese tipo una perra");
    }
    if(command === 'cam'){
        message.channel.send("ese tipo es el mejor de su casa");
    }
    if(command === 'flashi'){
        message.channel.send("ese tipo es un 🐷🐷🐷🐷🐷🐷🐷🐷");
    }
    if(command === 'ace'){
        message.channel.send("ese tipo es un ace pods 💧💧💧");
    }
    if(command === 'mclean'){
        message.channel.send("ese tipo es bien sus super sus");
    }
    if(command === 'nick'){
        message.channel.send("ese tipo se cree que mata todo el solo");
    }



    
//Get price of cryptos
    if(command === 'bitcoin' || command === 'btc' ){
         btc();
    }
    if(command === 'ethereum' || command === 'eth' ){
        eth();
   }
   if(command === 'crypto'){
    crypto();
}
    
    
//////////////////
//funciones
/////////////////

//funcion de btc
async function btc(){
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    var data = await response.json();
    console.log(data[0].current_price);
   const exampleEmbed = new EmbedBuilder()
        .setColor("Yellow")
        .setTitle(data[0].name + '#' + data[0].market_cap_rank)
        .setDescription('Current Price $' + data[0].current_price)
        .setURL('https://www.coingecko.com/es')
        .setThumbnail(data[0].image)
        .addFields({ name: 'All time high.' , value: `$${data[0].ath}`},{name: 'Ath % change.', value: `$${data[0].ath_change_percentage}`},{ name: 'Market cap.', value:  `$${data[0].market_cap}`})
        .setFooter({text: 'Yautia is good so eat it' , iconURL: 'https://wonderens.com/storage/products/WSyeViQhK884HvZAgEOlJ6kcclhbfS5qLnMMMmAZ.jpg'})
        .setTimestamp()

message.channel.send({ embeds: [exampleEmbed] });
    }

    async function eth(){
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        var data = await response.json();
        console.log(data[1].current_price)
       const exampleEmbed = new EmbedBuilder()
            .setColor("Blue")
            .setTitle(data[1].name + '#' + data[1].market_cap_rank)
            .setURL('https://www.coingecko.com/es')
            .setDescription('Current Price $' +data[1].current_price)
            .setThumbnail(data[1].image)
            .addFields({ name: 'All time high.' , value: `$${data[1].ath}`},{name: 'Ath % change.', value: `$${data[1].ath_change_percentage}`},{ name: 'Market cap.', value:  `$${data[1].market_cap}`})
            .setFooter({text: 'Yautia is good so eat it' , iconURL: 'https://wonderens.com/storage/products/WSyeViQhK884HvZAgEOlJ6kcclhbfS5qLnMMMmAZ.jpg'})
            .setTimestamp()
    
    message.channel.send({ embeds: [exampleEmbed] });
        }
        async function crypto(){
            const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
            var data = await response.json();
            console.log(data[0].current_price);
           const exampleEmbed = new EmbedBuilder()
                .setColor("Red")
                .setTitle('Top 10 crypto by market cap')
                .setURL('https://www.coingecko.com/es')
                .addFields(
                {name: data[0].name , value: `$${data[0].current_price}`}
                ,{name: data[1].name , value: `$${data[1].current_price}`}
                ,{name: data[2].name , value: `$${data[2].current_price}`},
                {name: data[3].name , value: `$${data[3].current_price}`},
                {name: data[4].name , value: `$${data[4].current_price}`},
                {name: data[5].name , value: `$${data[5].current_price}`},
                {name: data[6].name , value: `$${data[6].current_price}`},
                {name: data[7].name , value: `$${data[7].current_price}`},
                {name: data[8].name , value: `$${data[8].current_price}`},
                {name: data[9].name , value: `$${data[9].current_price}`})
                .setFooter({text: 'Yautia is good so eat it' , iconURL: 'https://wonderens.com/storage/products/WSyeViQhK884HvZAgEOlJ6kcclhbfS5qLnMMMmAZ.jpg'})
                .setTimestamp()
        
        message.channel.send({ embeds: [exampleEmbed] });
            }
})




client.login(token);