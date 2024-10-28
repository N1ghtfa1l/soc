import { useState } from 'react'
import { getIntro } from './http/introAPI/introAPI/introFunc'
import { GetIntroResp } from './http/introAPI/introAPI/introInter'

function App() {

  const [logs, setLogs] = useState<GetIntroResp[]>([])


  const fetchData = async () => {
    const result = await getIntro()
    if (result) {
      setLogs(result)
    }
  }
  return (
    <div className='w-[1200px] m-auto h-screen flex justify-between items-center'>
      <button onClick={fetchData}> получить данные</button>
      {logs.map((el) => <div key={el.id}>
        <div>{el.type}</div>
        <div>{el.figi}</div>
        <div>{el.instrument_type}</div>
        <div>{el.quantity}</div>
        <div>{el.date}</div>


      </div>

      )}
    </div>
  )
}

export default App
