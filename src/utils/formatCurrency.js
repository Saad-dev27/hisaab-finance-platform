export const formatCurrency=(value,compact=false)=>compact?new Intl.NumberFormat("en-PK",{notation:"compact",maximumFractionDigits:1}).format(value):`Rs. ${Math.abs(value).toLocaleString("en-PK")}`;
export const percent=(part,total)=>Math.round((part/total)*100);
