import { useState, useEffect } from 'react';
import { searchCharacter, fetchServers } from '../api/character';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function CharacterSearch() {
  const [serverId, setServerId] = useState('all');
  const [characterName, setCharacterName] = useState('');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [servers, setServers] = useState<Array<{ serverId: string; serverName: string }>>([]);

  useEffect(() => {
    fetchServers()
      .then(data => setServers(data.rows || data))
      .catch(() => setServers([]));
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const data = await searchCharacter(serverId, characterName);
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Card className="w-1/2 p-[20px] max-w-sm mx-2">
        <CardHeader className="flex flex-col items-center gap-2 pb-2">
          <span className="text-3xl">🔍</span>
          <CardTitle className="text-xl font-bold">던파 캐릭터 검색</CardTitle>
          <p className="text-xs text-gray-400">서버와 캐릭터명을 입력하세요</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-500">서버</label>
              <select
                className="w-full px-4 py-3 rounded-lg bg-gray-100 outline-none text-base border-0 shadow-none focus:ring-2 focus:ring-orange-400"
                value={serverId}
                onChange={e => setServerId(e.target.value)}
                required
              >
                <option value="all">전체</option>
                {servers.map((s) => (
                  <option key={s.serverId} value={s.serverId}>{s.serverName}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-500">캐릭터명</label>
              <Input
                value={characterName}
                onChange={e => setCharacterName(e.target.value)}
                required
                placeholder="예: 던파유저"
                autoComplete="off"
                type="text"
              />
            </div>
            <Button type="submit" className="w-full text-base font-bold py-6 mt-2" disabled={loading}>
              {loading ? '검색 중...' : '검색'}
            </Button>
          </form>
          {error && <div className="text-red-500 text-sm text-center mt-2">{error}</div>}
          {result && (
            <div className="mt-4 rounded-lg p-3 text-sm bg-gray-50 text-gray-800 max-h-64 overflow-x-auto">
              <div className="font-bold mb-2 text-orange-600">검색 결과</div>
              <pre className="whitespace-pre-wrap break-all">{JSON.stringify(result, null, 2)}</pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 