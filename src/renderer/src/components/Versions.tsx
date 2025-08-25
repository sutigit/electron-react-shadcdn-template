import { useState } from 'react'

function Versions(): React.JSX.Element {
  const [versions] = useState(window.electron.process.versions)

  return (
    <ul className="p-4 bg-orange-200 items-center">
      <li className="text-zinc-900 electron-version">Electron v{versions.electron}</li>
      <li className="text-zinc-900 chrome-version">Chromium v{versions.chrome}</li>
      <li className="text-zinc-900 node-version">Node v{versions.node}</li>
    </ul>
  )
}

export default Versions
