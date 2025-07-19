const characterService = require('../services/characterService');

exports.searchCharacter = async (req, res) => {
  const { serverId, characterName } = req.query;
  if (!serverId || !characterName) {
    return res.status(400).json({ error: 'serverId와 characterName을 입력하세요.' });
  }
  try {
    const data = await characterService.searchCharacter(serverId, characterName);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: '네오플 API 호출 실패', detail: error.message });
  }
}; 