import React from 'react';
import { FileManager, FileNavigator } from '@opuscapita/react-filemanager';
import connectorNodeV1 from '@opuscapita/react-filemanager-connector-node-v1';

const apiOptions = {
  ...connectorNodeV1.apiOptions,
  apiRoot: `http://localhost:3020/api` // Or you local Server Node V1 installation.
}

const OpusCapitaBrowser = () => (
  <div className="container">
    <div style={{ height: '480px' }}>
      <FileManager>
        <FileNavigator
          id="filemanager-1"
          api={connectorNodeV1.api}
          apiOptions={apiOptions}
          capabilities={connectorNodeV1.capabilities}
          initialResourceId={''}
          listViewLayout={connectorNodeV1.listViewLayout}
          viewLayoutOptions={connectorNodeV1.viewLayoutOptions}
        />
      </FileManager>
    </div>
   </div>
 );

export default OpusCapitaBrowser;

