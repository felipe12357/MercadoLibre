
export function currencyFormatter(currency:string, value:number,decimal:number) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      minimumFractionDigits: decimal,
      currency
    }) 
    return formatter.format(value)
}