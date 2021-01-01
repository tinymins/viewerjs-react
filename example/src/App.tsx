import React from 'react'

import RViewerJS from 'viewerjs-react'
import 'viewerjs-react/dist/index.css'

const App = () => {
  return <RViewerJS>
    <img
      style={{ width: '40px', height: '40px', margin: '10px', border: '1px solid #cccccc', cursor: 'pointer' }}
      src="https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      alt=""
    />
  </RViewerJS>
}

export default App
