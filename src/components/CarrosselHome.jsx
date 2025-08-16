import './CarrosselHome.css';

function CarrosselHome({ imagem, slidesRef, index }) {
  return (
    <li
      className="carousel-slide"
      ref={el => (slidesRef.current[index] = el)}
    >
      <img src={imagem} alt="" />
    </li>
  );
}

export default CarrosselHome;
