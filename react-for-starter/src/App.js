import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUSD] = useState([]);
  const [selCoin, setSelCoin] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const select = (event) => setSelCoin(event.target.value);
  const onChange = (event) => setUSD(event.target.value);
  return (
    // <div>
    //   <h1>The Coins! ({loading ? "" : `(${coins.length})`})</h1>
    //   <h3>USD to Coins</h3>
    //   {loading ? <strong>Loading...</strong> : (
    //     <select>
    //       {coins.map((coin) =>
    //         <option>
    //           {coin.name}({coin.symbol}) : {coin.quotes.USD.price} USD
    //         </option>
    //       )}
    //     </select>
    //   )}
    // </div>
    <div>
      <h1>USD to Coin</h1>
      {loading ? <strong>Loading...</strong> : (
        <select onChange={select}>
          <option onChange={setSelCoin}>
            select coin
          </option>
          {coins.map((coin, index) =>
            <option key={index} value={coin.quotes.USD.price}>
              {coin.name}({coin.symbol})
            </option>
          )
          }
        </select>
      )}
      <h3>USD</h3>
      <input type="number" placeholder="Enter your USD..." value={usd} onChange={onChange} />
      <h3>Coin</h3>
      <input type="number" value={usd * selCoin} />
    </div>
  )
}

export default App;