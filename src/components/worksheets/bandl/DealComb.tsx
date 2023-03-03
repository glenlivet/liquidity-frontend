import React from "react";

import DealList from "./DealList";
import BondHead from "./BondHead";

import "./DealComb.scss"

const DealComb: React.FC<unknown> = () =>{

    return <>
        <div className='l-dealcomb'>
            <BondHead />
            <div className='l-dealtable flex'>
            <div className='deal-in flex-grow-1 inline-flex'>
                <DealList addons={true} />
            </div>
            <div className='deal-out flex-grow-1 inline-flex'>
                <DealList addons={false} />
            </div></div>
        </div>
    </>;
}

export default DealComb;