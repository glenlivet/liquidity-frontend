function numberWithCommas(x: number): string {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}


function numberDays(x: number): string {
    return "" + x + "D";
}

export { numberWithCommas, numberDays }