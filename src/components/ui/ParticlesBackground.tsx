import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions } from '@tsparticles/engine'

const ParticlesBackground = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setInit(true))
  }, [])

  const options: ISourceOptions = useMemo(() => ({
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
    color: { 
        value: ['#7c3aed', '#06b6d4'] 
    },
    links: {
        color: '#7c3aed',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
    },
    move: {
        enable: true,
        speed: 0.8,
        direction: 'none',
        random: true,
        outModes: { default: 'bounce' },
    },
    number: {
        value: 80,
        density: { enable: true },
    },
    opacity: { value: 0.5 },
    shape: { type: 'circle' },
    size: { value: { min: 2, max: 6 } },
    },
    detectRetina: true,
  }), [])

  if (!init) return null

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="fixed inset-0 -z-10"
    />
  )
}

export default ParticlesBackground