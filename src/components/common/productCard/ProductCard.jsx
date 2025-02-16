const productCard = ({price, title, stock}) => {

  return (
    <div>
        <h2>{title}</h2>
        <h3>{price}</h3>
        <h4>{stock}</h4>
    </div>
  )
}

export default productCard