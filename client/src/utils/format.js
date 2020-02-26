export function numberWithCommas(amount){
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}