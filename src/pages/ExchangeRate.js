import React from 'react';
import axios from 'axios';

function ExchangeRate() {
  const accessKey = 'test';
  const onClick = () => {
    console.log('!!', process.env.CURRENCY_LAYER_API_KEY);
    axios
      .get(
        `http://apilayer.net/api/live?access_key=${accessKey}&currencies=KRW&source=JPY`,
      )
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <button type="button" onClick={onClick}>
      exchange rate
    </button>
  );
}

export default ExchangeRate;
