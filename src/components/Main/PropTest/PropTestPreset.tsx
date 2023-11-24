import React from 'react'
import LocalStorageHook from '../CustomHooks/LocalStorageHook';
import PropTest from './PropTest';

export default function PropTestPreset() {


    return (
        <>
            <PropTest firstString="Test" secondString="SecondString" firstInt={5}  />
            <PropTest firstString="String" secondString="Aaaaaaaaaaaaaaaaa" firstInt={99}  />
        </>
    )
}
