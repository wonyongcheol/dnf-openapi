const axios = require('axios');

exports.getServers = async (req, res) => {
  try {
    const url = `https://api.neople.co.kr/df/servers?apikey=${process.env.NEOPLE_API_KEY}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: '서버 정보 조회 실패', detail: error.message });
  }
}; 