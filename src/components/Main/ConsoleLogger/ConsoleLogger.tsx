import React, { useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom';
import styles from './ConsoleLogger.module.css'


const ConsoleLogger = () => {
const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
const location = useLocation();
  useEffect(() => {
    // Save the original console.log function
    const originalConsoleLog: (...args: any[]) => void = console.log;
    // Override console.log to capture logs
    console.log = (...args) => {
      // Call the original console.log
      originalConsoleLog(...args);
      // Update the state with the new log
      setConsoleLogs((prevLogs) => [...prevLogs, args.join(' ')]);
    };
    // Cleanup on component unmount
    return () => {
      // Restore the original console.log function
      console.log = originalConsoleLog;
    };
  }, []); // Only run this effect once during component mount

  useEffect(() =>{
    // console.log("location change")
    setConsoleLogs((prevLogs) => []);
  }, [location]);

  return (
    <div className={styles.consoleLogWrapper}>
      <h2>Console Logs:</h2>
      <ul>
        {consoleLogs.map((log, index) => (
          <li key={index} className={styles.logStyle}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConsoleLogger;
