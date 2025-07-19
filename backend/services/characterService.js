const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const NEOPLE_API_KEY = process.env.NEOPLE_API_KEY;

exports.searchCharacter = async (serverId, characterName) => {
  const url = `https://api.neople.co.kr/df/servers/${serverId}/characters?characterName=${encodeURIComponent(characterName)}&apikey=${NEOPLE_API_KEY}`;
  const response = await axios.get(url);
  return response.data;
}; 