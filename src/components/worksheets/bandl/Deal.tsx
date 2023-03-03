import React from "react";
import { numberWithCommas,numberDays } from "../../../utils/FinancialUtils";

import './Deal.scss';

const deal = {
    bondid: '202212',
    rate: 0.85,
    duration: 1,
    amount: 5000,
    executionDate: '+0',
    counterParty: '苏州农',
    direction: '出',
    tradeMode: '意向'
}

interface TempProp {
    hasAddons: boolean;
}

function Deal(props: TempProp){
    return (
        <>
            <div className='l-deal flex-grow-1 shadow-1 m-1'>
                <ul className='separator'>
                    <li>
                <div className='main card'>
            <div className='card-container flex justify-content-start p-1 pl-3 m-1 border-round'>
                <div className='bg-blue-500 text-white font-bold flex align-items-center justify-content-start pl-1 pr-1 border-round mr-2'>{deal.direction}</div>
                <div className='bg-blue-500 text-white font-bold flex align-items-center justify-content-start pl-1 pr-1 border-round mr-2'>{deal.tradeMode}</div>
                <div className='bg-blue-500 text-white font-bold flex align-items-center justify-content-start pl-1 pr-1 border-round mr-2'>{deal.counterParty}</div>
                <div className='bg-blue-500 text-white font-bold flex align-items-center justify-content-start pl-1 pr-1 border-round mr-2'>{numberDays(deal.duration)}</div>
                <div className='bg-blue-500 text-white font-bold flex align-items-center justify-content-start pl-1 pr-1 border-round mr-2'>{numberWithCommas(deal.amount) + "KW"}</div>
                <div className='bg-blue-500 text-white font-bold flex align-items-center justify-content-start pl-1 pr-1 border-round mr-2'>{deal.executionDate}</div>
                <div className='bg-blue-500 text-white font-bold flex align-items-center justify-content-start pl-1 pr-1 border-round mr-2'>{deal.rate}</div>
            </div></div>
            </li>
            { props.hasAddons && 
            <li>
                <div className='accessory card mb-1'>
            <div className='card-container flex justify-content-start pb-1 pl-3 border-round'>
                <div className='bg-blue-500 text-white font-bold flex align-items-center justify-content-start pl-1 pr-1 border-round ml-5 mr-2'>压</div>
                <div className='bg-blue-500 text-white font-bold flex align-items-center justify-content-start pl-1 pr-1 border-round mr-2'>16 02 10</div>
                <div className='bg-blue-500 text-white font-bold flex align-items-center justify-content-start pl-1 pr-1 border-round mr-2'>0.52e</div>
                </div>
                </div>
            </li>

            }
            </ul>
            
            </div>
        </>
    )
}


export default Deal;