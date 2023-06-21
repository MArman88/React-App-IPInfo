import './App.css';
import { get } from './Helpers/http'
import { Endpoint } from './Models/Endpoint';
import { useState } from 'react';
import IPView from './IPInfo/IPView';
import IPInput from './input/IPInput';



function App() {
  const [data, setData] = useState({
    error: null,
    ipData: null,
    isLoading: false
  })


  if (!data.isLoading && !data.error && !data.ipData) {
    return (
      <div style={{ width: 400, margin: '0 auto' }}>
        <IPInput key={'input'} onSubmit={value => {
          onSubmitValue(value, setData)
        }
        } />
      </div>

    )
  } else if (!data.isLoading && data.error && !data.ipData) {
    return (
      <div style={{ width: 400, margin: '0 auto' }}>
        <IPInput key={'input'} onSubmit={value => {
          onSubmitValue(value, setData)
        }
        } />
        <h3>{data.error.message}</h3>
      </div>
    )
  } else if (!data.isLoading && !data.error && data.ipData) {
    return (
      <div style={{ width: 400, margin: '0 auto' }}>
        <IPInput key={'input'} onSubmit={value => {
          onSubmitValue(value, setData)
        }
        } /> <br />
        <h3>IP Information</h3>
        <IPView key={'ipData'} ipInfo={data.ipData} />
      </div>
    )
  } else {
    return (
      <div style={{ width: 400, margin: '0 auto' }}>
        <IPInput key={'input'} onSubmit={value => {
          onSubmitValue(value, setData)
        }
        } /> <br />
        <h3>LOADING IP Information...</h3>
      </div>
    )
  }

}

function onSubmitValue(value, setData) {
  setData({
    isLoading: true,
    error: null,
    ipData: null
  })
  get(new Endpoint(`/${value}?token=8688fd3d9a66c2`).getUrl('https://ipinfo.io/'), (ipInfo) => {
    setData({
      ipData: ipInfo,
      error: null,
      isLoading: false
    })
  }, (error) => {
    setData({
      ipData: null,
      error: error,
      isLoading: false
    })
  });
}

export default App;
