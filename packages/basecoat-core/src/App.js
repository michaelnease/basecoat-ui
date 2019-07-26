import React from 'react';
import { Global } from './Style/Global';
import Button from './Button';

class App extends React.Component {
  render() {
    return (
      <div>
        <Global />
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="secondary" disabled>
          Disabled
        </Button>
        <Button variant="outline">Default</Button>
        <Button variant="outline" color="primary">
          Primary
        </Button>
        <Button variant="outline" color="secondary">
          Secondary
        </Button>
        <Button variant="outline" color="secondary" disabled>
          Disabled
        </Button>
      </div>
    );
  }
}

export default App;
