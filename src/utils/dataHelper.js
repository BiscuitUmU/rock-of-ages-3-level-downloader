const fsPath = require("fs-path");
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
  await fsPath.writeFileSync(
    `./_levels/${
      level.name ? `${id}-${level.gameMode}-${level.name}.json` : id
    }`,
    body
  );
  console.log("Downloaded: " + `${id}-${level.gameMode}-${level.name}.json`);
}

module.exports = {
  fetchData,
  saveLevelData
};
