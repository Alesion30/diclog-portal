import { useEffect } from 'react'

const useInterval = (callback: () => void, delay: number): void => {
  useEffect(() => {
    const interval = setInterval(() => callback(), delay)
    return () => clearInterval(interval)
  }, [callback, delay])
}

export default useInterval
