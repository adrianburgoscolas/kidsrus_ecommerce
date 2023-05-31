export default function PriceFormat({price}:{price: string}) {

  const options = { style: 'currency', currency: 'USD' };
  const numberFormat = new Intl.NumberFormat('en-US', options);
  return (
    <span>{numberFormat.format(Number(price))}</span>
  );
}
