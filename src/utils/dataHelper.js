const fs = require("fs");
const fetch = require("node-fetch");
const { API_CID, API_SID } = require("./consts");

async function fetchData(url = "") {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "X-UnrealEngine-Agent",
      Cookie: `connect.sid=${API_CID}`,
      "X-Session-ID": API_SID
    }
  });
  return await response.json();
}

async function saveLevelData(level) {
  const response = await fetch(level.url);
  var body = await response.text();
  var id = level.url.split("/")[4];

  //Create folders if none are there
  createFolderIfNone("./_levels");
  createFolderIfNone("./_levels/data");
  createFolderIfNone("./_levels/object");

  //Save data
  await fs.writeFileSync(
    `./_levels/data/${
      level.name
        ? `${id} - ${level.gameMode} - ${level.name}.json`
        : `${id}.json`
    }`,
    body
  );

  //Save object
  await fs.writeFileSync(
    `./_levels/object/${
      level.name
        ? `${id} - ${level.gameMode} - ${level.name}.json`
        : `${id}.json`
    }`,
    JSON.stringify(level)
  );

  console.log(
    "Downloaded: " + level.name
      ? `${id} - ${level.gameMode} - ${level.name}.json`
      : `${id}.json`
  );
}

function createFolderIfNone(folder) {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }
}

module.exports = {
  fetchData,
  saveLevelData
};
