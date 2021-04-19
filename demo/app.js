import React from 'react';
import { Alert } from '../src/alert';

const App = () =>
  <div>
    <h1>React Alert Example</h1>
    <Alert type="danger" title="Alert" message="message here" />
  </div>;

export default App;