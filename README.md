# Rock of Ages 3 Level Downloader
A Rock of Ages 3 level downloader made in Javascript. It fetches all current levels and then downloads them!

## How to
 - Grab your connect.sid Cookie value and sessionId from your authenticate API request. (just capture this with fiddler or something)
 - Set `API_SID=INSERT_CONNECTSID_VALUE` and `API_CID=INSERT_SESSIONID_VALUE` in your environment variables.
 - `npm install`
 - `npm start`
 - Levels will then be downloaded to the `/_levels/data` folder and the API objects will be saved to `/_levels/object` folder.
