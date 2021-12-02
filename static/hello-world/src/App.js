import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    invoke('getText', { example: 'my-invoke-variable' }).then(setData);
  }, []);

  return (
    <Tabs
      onChange={(index) => console.log('Selected Tab', index + 1)}
      id="default"
    >
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanel>
        <h1>One</h1>
      </TabPanel>
      <TabPanel>
        <h1>Two</h1>
      </TabPanel>
      <TabPanel>
        <h1>Three</h1>
      </TabPanel>
    </Tabs>
  );
}

export default App;
