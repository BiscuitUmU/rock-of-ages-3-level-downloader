const { saveLevelData, fetchData } = require("./utils/dataHelper");
const {
  API_DOMAIN,
  API_ENDPOINTS,
  API_CID,
  API_SID
} = require("./utils/consts");

async function DoStuff() {
  var levels = await fetchData(API_DOMAIN + API_ENDPOINTS.LEVELS);
  for (let index = 0; index < levels.length; index++) {
    const ele = levels[index];
    if (ele.url) saveLevelData(ele);
    console.log("got: ", ele.name);
  }
}

if (API_CID === undefined && API_SID === undefined)
  console.error("Please pass in API_CID and API_SID in the env vars!");
else DoStuff();
