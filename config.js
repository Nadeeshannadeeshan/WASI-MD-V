//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUFBREY0VmY3d3hHSWcyMTFCcWJyblpsVG41NE0yNDZTZUMrc1laS25sTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWW5xTU1oTmxpUUk4b0Y2MmNIcGdQa3NsOUVkNXl1dVRHV21ER2cxT3FqMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSXFWN2lsbmZQMjdXVkhIbkxkQVdPYVZIYXlPTkdxTjRVcU5sVEljM1dFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRUZVT29aVW5qYlNmcnYxdGkyRGhhUTAyWUJpTHpZRkZBSXhaN1J3WmlvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitFbVBDN2lEdTdQQ3F4NnpqdkZEeUp1N1k1Z1BXUVdiT0ZGNlFOdEVla3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVwdnhnY2tHVHkzQU1sODE2dGlsbXJQTFRIUGR6dWxhZWhuaklRRmdhalU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV083d2ptQnppd0xrYmIvOEp6WU1WNnM3R3dHSVBsMGE3dEl5NlByMXVVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2gwZjM2byswd0xYT2gzMEVjYXh1ZFVsdzVUVllmQUFaRnBOc1drYSt5bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjcwVjN4di9GUmk0bEpEbk5YS3NiS21SQXJwU3k1NTBMR0JJMGVwRzZQazhoTkNGUXZjN3FMNnlsZFd4d0pGWHZoaTdYZkhQcGNlMkpVUEtlZW1RZGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMxLCJhZHZTZWNyZXRLZXkiOiJ3cXdEVjFhY1NkVThmSU5pNGNtNFBkNUVZQk45cU5CMVFTaW1GWVZyWlVvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc2NTMyOTQyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVCMzAxNDE2QTlBQTFFMjU3ODRDNUMyQjE4NjJDQkJDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY4MDM2NzN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc2NTMyOTQyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ5NTA0QURFOUE3QUEyMEQyRDk0MkNGMTcxMDY5MzEzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY4MDM2NzN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc2NTMyOTQyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjkzODhBMDk1NDk3QTMwMDJFRjgzNjZDNDg5QUZDODM0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY4MDM2NzR9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc2NTMyOTQyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE2RjM5NjM4MDNEN0M4ODlFNTAyMjUxQjU0NzlCOUM0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY4MDM2NzR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InktNWJ0TVlIUXJ5RlZBZHJ5M0VaN2ciLCJwaG9uZUlkIjoiYzZiYTRjNWUtYTlmMS00YWU0LTg2OTgtZTA2NmZhNjg2YmQ5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVONDBBWFhRaS9sb01kMFNBeE1ITkltSGRpVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUZWtuMFVLemh4SHR2bGxTamJwc1UrUXpNZms9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN0xZSkxOVzgiLCJtZSI6eyJpZCI6Ijk0Nzc2NTMyOTQyOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoia3drZXd3In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPMnYxcVVFRU1yZHM3Y0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJSUFlPK3NXcDhydW9sek1KeVJjSHZSMkVtYkNsbnJybEt5S1FockY5L3lnPSIsImFjY291bnRTaWduYXR1cmUiOiJxTE9aV2hVRy9kL1U5bnRKZlFSNzJkd25kaFI2N3BVODhWV1V5SHNlU3FTREpHT2kxZ3ZzZlRxNVdXbVdRNTRPNkpWUGdTYm1sQ25yRVFwcitzOW9BZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQUZyb0ZJYTNJM09Ea0k5OGdHaGg1aXpjOHk0TmJLM0FrcFVVMzVudzFZdUtrcmpyWEQ4bHVUeVZkdGJQeWduSHM2TGFaa2pNQ3BWbGs0SVFHWTk2Z2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3NjUzMjk0MjoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVUMkR2ckZxZks3cUpjekNja1hCNzBkaEptd3BaNjY1U3Npa0lheGZmOG8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY4MDM2NzEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQUg2In0= ";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
