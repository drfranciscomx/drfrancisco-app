

const FormatedNumber = ({ amount } ) => {

  const formattedNum = new Number(amount).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  });

  return (
        <>{formattedNum}</>
    )
  
}

export default FormatedNumber