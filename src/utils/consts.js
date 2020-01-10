
const API_DOMAIN = "https://csu0uyabj1.execute-api.us-east-1.amazonaws.com"
const API_ENDPOINTS = {
    AUTH: "/production/api/authenticate",
    LEVELS: "/production/api/levels",
}

const API_SID = process.env.API_SID
const API_CID = process.env.API_CID


module.exports = {
    API_DOMAIN,
    API_ENDPOINTS,
    API_CID,
    API_SID
}