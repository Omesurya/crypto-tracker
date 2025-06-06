import React from 'react';

function CryptoTable({ coins }) {
  return (
    <table width="100%" border="1" cellPadding="10" style={{ textAlign: 'left' }}>
      <thead>
        <tr>
          <th>Coin</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>24h Change</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin) => (
          <tr key={coin.id}>
            <td>
              <img src={coin.image} alt={coin.name} width="20" /> {coin.name}
            </td>
            <td>{coin.symbol.toUpperCase()}</td>
            <td>${coin.current_price.toLocaleString()}</td>
            <td style={{ color: coin.price_change_percentage_24h >= 0 ? 'green' : 'red' }}>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </td>
            <td>${coin.market_cap.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CryptoTable;
