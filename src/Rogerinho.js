import React, { useContext } from 'react';
import { Context } from './Store';

export const Rogerinho = () => {
  const [state, setState] = useContext(Context);
  const onClickHandler = async () => {
    const person = await (
      await fetch(
        'https://randomuser.me/api/?inc=email,name&noinfo&results=1&seed=br',
      )
    ).json();
    console.log(person);
    setState({
      name: person.results[0].name.title,
      email: person.results[0].email,
    });
  };
  return (
    <div>
      <h2>oi, {state.name}</h2>
      <p>email: {state.email}</p>
      <button onClick={() => onClickHandler()}>change context</button>
    </div>
  );
};
