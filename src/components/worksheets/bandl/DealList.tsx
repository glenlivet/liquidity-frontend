import React from "react";

import DealRow from './DealRow';

import "./DealList.scss";


interface TempProp {
    addons: boolean;
}

function DealList({addons}: TempProp){

    return <>
        <ul className='l-deallist dl-ul flex-grow-1 m-0'>
            <li><DealRow hasAddons={addons}/></li>
            <li><DealRow hasAddons={false}/></li>
            <li><DealRow hasAddons={true}/></li>
        </ul>
    </>;
}

export default DealList;