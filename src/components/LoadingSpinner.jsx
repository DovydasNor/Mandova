import { useEffect } from 'react'
import mandovaLogo from '../assets/mandova_logo_trans.webp'

const LoadingSpinner = ({ onLoadingComplete }) => {

  useEffect(() => {
    // Set a timer to hide loading after 2 seconds
    const timer = setTimeout(() => {
      onLoadingComplete?.()
    }, 2000)

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <img 
            src={mandovaLogo} 
            alt="Mandova Logo" 
            className="w-48 mx-auto animate-pulse"
          />
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner