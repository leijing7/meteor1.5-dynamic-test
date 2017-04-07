import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';
import fakeDelay from './fakeDelay';
import path from 'path';

let LoadableExample = Loadable({
  loader: () => fakeDelay(2000).then(() => import('./Example')),
  LoadingComponent: Loading,
  serverSideRequirePath: path.resolve(__dirname, './Example')
});

export default function App() {
  return (
    <div>
      <h1>React loadable is going to work</h1>
      <LoadableExample/>
    </div>
  );
}