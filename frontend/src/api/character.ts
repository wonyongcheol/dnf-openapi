export async function searchCharacter(serverId: string, characterName: string) {
  const res = await fetch(
    `/api/character?serverId=${encodeURIComponent(serverId)}&characterName=${encodeURIComponent(characterName)}`
  );
  if (!res.ok) throw new Error('캐릭터 검색 실패');
  return res.json();
}

export async function fetchServers() {
  const res = await fetch('/api/servers');
  if (!res.ok) throw new Error('서버 정보 조회 실패');
  return res.json();
} 