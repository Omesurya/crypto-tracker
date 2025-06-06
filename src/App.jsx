import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoTable from './CryptoTable';
import SearchBar from './SearchBar';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 50,
          page: 1,
          sparkline: false,
        },
      })
      .then((res) => setCoins(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Crypto Price Tracker</h1>
      <SearchBar setSearch={setSearch} />
      <CryptoTable coins={filteredCoins} />
    </div>
  );
}

export default App;
