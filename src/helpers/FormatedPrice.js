
const FormatedPrice = ({ amount } ) => {

  const formattedAmount = new Number(amount).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  });

  return (
        <>{formattedAmount}</>
    )
  
}

export default FormatedPrice