import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [USD, setUSD] = useState("");
  const [coins, setCoins] = useState([])
  const onChange = (event) => setUSD(event.target.value);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const saveUSd = event => {
    setUSD(event.target.value);
  }
  return (
    <div>
      <h1>The Coins! ({loading ? "" : `(${coins.length})`})</h1>
      <h3>USD to Coins</h3>
      {loading ? <strong>Loading...</strong> : (
        // <select>
        //   {coins.map((coin) =>
        //     <option>
        //       {coin.name}({coin.symbol}) : {coin.quotes.USD.price} USD
        //     </option>
        //   )}
        // </select>
        <div>
          <select>
            Coin
            <option>
              {coins.name}
            </option>
          </select>
          <div>
            <div>
              USD
            </div>
            <input id="inputUSD" type="text" placeholder="Enter your USD" onChange={onChange} />.
            <div>
              Coin
            </div>
            <div type="text" value={setCoins(coins.quotes.USD.price) * setUSD.value} />
          </div>
          <div>

          </div>
        </div>
      )}

    </div>
  );
}

export default App;