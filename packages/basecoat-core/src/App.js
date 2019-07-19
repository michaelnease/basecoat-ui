import React from 'react';
import {Global} from './Style/Global'
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
        <Button variant="contained" href="#contained-buttons">
          Link
        </Button>
        <input accept="image/*" id="contained-button-file" multiple type="file" />
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
      </div>
    );
  }
}

export default App;
