import { LayersIcon } from 'lucide-react'

export default function App () {
  return (
    <div className='flex flex-col gap-10 p-5 min-h-dvh'>
      <header className='flex items-center gap-2'>
        <LayersIcon className='w-6 h-6' />
        <span>DALPOS</span>
      </header>

      <main className='flex flex-col items-center justify-center grow'>
        <h1 className='text-6xl font-black sm:text-7xl md:text-8xl lg:text-9xl text-balance'>
          COMING SOON...
        </h1>
      </main>
    </div>
  )
}
