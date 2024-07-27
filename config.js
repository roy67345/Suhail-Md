const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ROY" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_28_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg1LFxuICAgICAgICA3NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc1LFxuICAgICAgICA1MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDczLFxuICAgICAgICAxOTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxODcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI1LFxuICAgICAgICAzOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA1LFxuICAgICAgICA4NyxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDgyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODksXG4gICAgICAgIDEzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDQxLFxuICAgICAgICAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDksXG4gICAgICAgIDM1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIsXG4gICAgICAgIDcwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU0LFxuICAgICAgICAzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUwLFxuICAgICAgICAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDQzLFxuICAgICAgICAzNixcbiAgICAgICAgODYsXG4gICAgICAgIDk4LFxuICAgICAgICAwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4LFxuICAgICAgICA2NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NixcbiAgICAgICAgMjEsXG4gICAgICAgIDMzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpaEVwUDNnTHFYS3pnT3VKNnJ2MHlpYlBLdHErUVdJUldkMDl3UHdnaktRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnS2hNTzM5N1RfNkR3Uk93NUJrVUhBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM3YWJlNjg3LTVjZGQtNDI0NS04OThkLWVhMWZjN2VkY2JhMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTQsXG4gICAgICAxMzgsXG4gICAgICAyMDIsXG4gICAgICAyMTgsXG4gICAgICAxMTMsXG4gICAgICA5NyxcbiAgICAgIDE2NCxcbiAgICAgIDM3LFxuICAgICAgNjcsXG4gICAgICAxNTYsXG4gICAgICAxODIsXG4gICAgICAyMjIsXG4gICAgICAyOSxcbiAgICAgIDIyNixcbiAgICAgIDIyNCxcbiAgICAgIDcsXG4gICAgICA0NSxcbiAgICAgIDc1LFxuICAgICAgMTQ2LFxuICAgICAgMTA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzgsXG4gICAgICA4MixcbiAgICAgIDM5LFxuICAgICAgMjA2LFxuICAgICAgNDksXG4gICAgICAxMTMsXG4gICAgICAyMTQsXG4gICAgICAxMzQsXG4gICAgICAyMjgsXG4gICAgICAxMjAsXG4gICAgICAxLFxuICAgICAgNDQsXG4gICAgICAyMTIsXG4gICAgICAyMTksXG4gICAgICAyMjAsXG4gICAgICAxMDIsXG4gICAgICAyMTQsXG4gICAgICA5OCxcbiAgICAgIDE0OSxcbiAgICAgIDcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1B3aStvREVLRERrclVHR0FrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvaHdyT0piWjZxL0RTNUJZemlHallvMjBLNUoxYzl5S3Qvc3d2WVNSQ0FNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRHRlc0WWNJdXM3MUFPNktWbFFtdkJFQkVoWGNPcC9oRlhnMjJyc1pKMXMvV0ZmbU9xT09qZk1CeWZXWkZUNlVWaTQ3WW4rQ3F5RGkxMU03WFdEZkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlA4WFFTZGI0QXBMcmFxZ1AxWGpMVnV3QXZ4OEZCSEg1Q1J1TElqNFo3QVk5MHBidDFzbmQ4OUo3U09qaThCWWVMNlhYdlM1b2IzcW9wUmZhdmovYUJ3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzA2NjA4MTMxOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzMTY5Njk5Mjg3NDc1MToyNUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NjcwNjYwODEzMToyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDY1MzE3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQWd3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBZzEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkZjhlbU5SRmYvVlVRd25JamYvT0VJVzhSY05ySzk3ekh1ZW5DUE5pVjVZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjc3OTkwNzUsXCJjdXJyZW50SW5kZXhcIjo5LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsOV19LFwidGltZXN0YW1wXCI6XCIxNzIyMDY1MzE5NTcyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQWdyLmpzb24iOiAie1wia2V5RGF0YVwiOlwieWJYekUwRDQxTDVtVXM0VXdGN29ZYTVOQkNDMHg5dHJNWnM3aDV5dXVGdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDI3Nzk5MDc1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE5NTI0OTA1OTZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBZ3MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1OFpESDJyUWt0VENvakk5RFJENllBT3g4VEJFMllwMjNCaVdOaThNM0VvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjc3OTkwNzUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFndC5qc29uIjogIntcImtleURhdGFcIjpcIldwTUU3c1Z5MlorbDI1ckR6dGZWWG1HNzZHUUdrY1hmRzYwR0R6cjVQR3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAyNzc5OTA3NSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQWd1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiR0hMdEFvYlpqSEdxUC9UdklUdWVyQTU5WTBTa1g3dFRTT0VNelZBTnRaVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDI3Nzk5MDc1LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBZ3YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4NGk4L2hjbkdydXpJb01tWVhvb29vUTk0OWhMUm9TUnQ2L0xQeUMzenI4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjc3OTkwNzUsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFndy5qc29uIjogIntcImtleURhdGFcIjpcImk5dXloMkV3aWlKUXczZGxXcENrNXZoaW1LZEpTbG5NdDlkS1RxNjJ4YWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAyNzc5OTA3NSxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQWd4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiY0xCcVdaTVFvSjdKUFB4UlpxV2oxU1R4b3B2aXorWjJRSEVLNjVCaDRTZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDI3Nzk5MDc1LFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUJFQUFBZ3ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOa2kwWlI0OTdkOFJEUWwwUDZIRlFJWTYzUHdsZ0UvU0JkeEg2N2tweERBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjc3OTkwNzUsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjA2NDQyMjk3M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 POWERED BY ROY ²²¹ MD』"),
 
  author : process.env.PACK_AUTHER|| "ROYYY",
  packname: process.env.PACK_NAME || "ROYYYY",
  botname : process.env.BOT_NAME  || "ROY-BOT",
  ownername:process.env.OWNER_NAME|| "ROY-THE-BOYYY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ROY"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
