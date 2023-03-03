import React from "react";
import { Card } from 'primereact/card';
import { numberWithCommas } from "../../../utils/FinancialUtils";

import './BondHead.scss';

const bondHead1 = {
    bondid: '202212',
    bondName: '20国债12',
    position: '多',
    number: 20000 
}


const BondHead: React.FC<unknown> = () =>{
    return (
        <>
            <div className='l-bandlhead card flex-grow-1'>
            <div className='card-container flex justify-content-center blue-container p-1 border-round'>
                <div className='text-primary font-bold flex align-items-center justify-content-center pl-1 pr-1 border-round mr-3'>{bondHead1.bondid}</div>
                <div className='bg-blue-500 text-white font-bold flex align-items-center justify-content-center pl-1 pr-1 border-round mr-3'>{bondHead1.bondName}</div>
                <div className='bg-blue-500 text-white font-bold flex align-items-center justify-content-center pl-1 pr-1 border-round mr-3'>{bondHead1.position}</div>
                <div className='text-primary font-bold flex align-items-center justify-content-center pl-1 pr-1 border-round mr-3'>{numberWithCommas(bondHead1.number)}</div>
            </div>
            </div>
        </>
    )
}


export default BondHead