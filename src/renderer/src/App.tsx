import Versions from './components/Versions'
import { Button } from "@renderer/components/ui/button"

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className='min-h-screen bg-zinc-900 text-white flex flex-column '>
      <div className='flex-1'>
        <h2 className="text-green-200">
          Press <code>F12</code> to open the devTool
        </h2>
        <Button className='bg-green-200 text-zinc-900' onClick={ipcHandle}>Send IPC</Button>
      </div>
      <Versions></Versions>
    </ div>
  )
}

export default App
