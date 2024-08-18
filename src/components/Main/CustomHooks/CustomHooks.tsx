import { useState, useEffect } from 'react';

export default function StatusBar() {
  const [isOnline, setIsOnline] = useState(true);

  
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => { //when unmounted remove eventlisteners
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div>
     <p>Custom Hooks</p>
     <p>Are you currently connected to a network?</p>
     <p>{isOnline ? '✅ Online' : '❌ Disconnected'}</p>
    </div>
  )
}

