import "./buttonComponent.css"

export default function ButtonComponent({ texto }) {
    const handleClick = () => {
        alert (`La página ${texto} está en construcción`);
    };
    return (
      <>
        <ul className="button-component"> 
            <li><a onClick = {handleClick} href="#">{texto}</a></li>
        </ul>
      </>
    );
  };
