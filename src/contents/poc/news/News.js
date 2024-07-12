import React, { useState } from 'react';
import axios from 'axios';

function News() {
  const [data, setData] = useState();
  const onClick = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        setData(response.data);
      });
  };

  return (
    <div>
      <div>
        <button type="button" onClick={onClick}>
          call
        </button>
      </div>
      {data && (
        <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly />
      )}
    </div>
  );
}

export default News;
