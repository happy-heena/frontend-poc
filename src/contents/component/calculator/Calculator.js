import React, { useEffect, useState } from 'react';
import Buttons from './Buttons';
import Input from './Input';

function Calculator() {
  const [value, setValue] = useState('0');

  useEffect(() => {
    console.log(value);
  }, [value]);

  const handleClick = (e) => {
    setValue(e.target.innerText);
  };

  return (
    <div>
      <Input value={value} setValue={setValue} />
      <Buttons onClick={handleClick} />
    </div>
  );
}

export default Calculator;
