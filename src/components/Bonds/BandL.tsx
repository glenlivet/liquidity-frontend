import React from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import BondTitle from "./BondTitle";

const deals = [{
    id: 220221,
    bname: '22国债21',
    direction: '出',
    counterParty: '广发银行',
    tradeTime: '+0',
    duration: '隔夜',
    feeRate: '0.58',
    tradeTunnel: '意向',
    amount: '2000'
}, {
    id: 220222,
    bname: '22国债22',
    direction: '入',
    counterParty: '兴业银行',
    tradeTime: '+0',
    duration: '隔夜',
    feeRate: '0.52',
    tradeTunnel: '意向',
    amount: '1000'
}]

const BandL: React.FC<unknown> = () => {

    return <>
    <BondTitle/>
    <DataTable value={deals}>
        <Column field="id" header="ID"></Column>
        <Column field="bname" header="名称"></Column>
        <Column field="direction" header="方向"></Column>
        <Column field="counterParty" header="对手方"></Column>
        <Column field="tradeTime" header="交易日期"></Column>
        <Column field="duration" header="期限"></Column>
        <Column field="amount" header="金额"></Column>
        <Column field="feeRate" header="费率"></Column>
        <Column field="tradeTunnel" header="模式"></Column>
    </DataTable>
    </>;
};

export default BandL;
