import { useEffect, useState } from 'react';

function getPreviousVal(key: string, initialVal: string) {
    const storedVal = JSON.parse(localStorage.getItem(key) || 'null') || initialVal;

    if (storedVal !== 'null') {
        return storedVal;
    }
    return initialVal;
}

export default function LocalStorageHook(key: string, initialVal: string) {
    const [hookBoxVal, setHookBoxVal] = useState(() => {
        return getPreviousVal(key, initialVal);
    });

    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(hookBoxVal))
    }, [hookBoxVal])

    return [hookBoxVal, setHookBoxVal] as const;
}
