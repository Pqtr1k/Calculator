import { FC } from 'react';
import React, { useState } from 'react';

import './style.css';

function Math_Symbols(fnumber, snumber, sign) {
  switch (sign) {
    case '+':
      return fnumber + snumber;
    case '-':
      return fnumber - snumber;
    case 'x':
      return fnumber * snumber;
    case '/':
      return fnumber / snumber;
    default:
      return;
  }
}

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
      <fieldset>
        <div className="row">
          <input name="fnumber" className="placeholder" type="number" />
          <select className="sign">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="x">x</option>
            <option value="/">:</option>
          </select>
          <input name="snumber" className="placeholder" type="number" />
          <button onClick={Math_Symbols} className="oblicz" type="submit">
            =
          </button>
        </div>
        <fieldset className="Result"></fieldset>
      </fieldset>
    </div>
  );
};
