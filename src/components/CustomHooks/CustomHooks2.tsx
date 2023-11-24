import React from 'react'
import LocalStorageHook from './LocalStorageHook';

export default function CustomHooks2() {
    const [hookBoxVal, setHookBoxVal] = LocalStorageHook("wordKey","");
    return (
    <input 
        type = "text"
        value={hookBoxVal as string}
        onChange={(e => setHookBoxVal(e.target.value))}
        />
  )
}
