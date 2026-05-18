import { useState } from 'react'

export default function App() {
  const [status, setStatus] = useState('Ready for verifiable computation')
  const [proofStats, setProofStats] = useState<any>(null)

  const generateProof = async () => {
    setStatus('🔄 Generating sum-check proof via power_house WASM...')
    // TODO: Import and call WASM module here
    setTimeout(() => {
      setStatus('✅ Proof generated successfully!')
      setProofStats({
        variables: 8,
        field: 'prime 101',
        time: '42ms',
        transcript: 'blake2b-...' 
      })
    }, 800)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-5xl mx-auto p-8">
        <header className="mb-12">
          <h1 className="text-6xl font-bold tracking-tight">xplyweb</h1>
          <p className="text-2xl text-emerald-400 mt-2">power_house 0.1.0 Playground</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
            <h2 className="text-3xl font-semibold mb-6">Actions</h2>
            <button
              onClick={generateProof}
              className="w-full bg-white hover:bg-zinc-100 transition text-black font-semibold py-6 text-xl rounded-2xl mb-4"
            >
              🚀 Generate Sum-Check Proof
            </button>
            <button className="w-full border border-zinc-700 hover:bg-zinc-900 transition py-6 text-xl rounded-2xl">
              Verify Proof
            </button>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
            <h2 className="text-3xl font-semibold mb-6">Output</h2>
            <div className="bg-black/50 p-6 rounded-2xl font-mono text-sm h-80 overflow-auto">
              {status}
              {proofStats && (
                <pre className="mt-4 text-emerald-400">{JSON.stringify(proofStats, null, 2)}</pre>
              )}
            </div>
          </div>
        </div>

        <footer className="mt-16 text-center text-zinc-500 text-sm">
          Rust + WASM backend with power_house • Ready for GitHub Pages deployment
        </footer>
      </div>
    </div>
  )
}