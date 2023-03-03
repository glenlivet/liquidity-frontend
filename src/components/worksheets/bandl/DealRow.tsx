import React from "react";

import Deal from './Deal';

import "./DealRow.scss";

interface TempProp {
    hasAddons: boolean;
}

function DealRow(props: TempProp) {

    return <>
        <div className='inline-flex flex-grow-1 l-dealrow'>
            <Deal hasAddons={props.hasAddons} />
            <div className='amount-container flex flex-none align-items-center shadow-1 m-1'>
                <div className='amount flex-grow-1 p-2 font-bold'>
                    5,000,000
                </div>
            </div>

        </div>
    </>;
}

export default DealRow;