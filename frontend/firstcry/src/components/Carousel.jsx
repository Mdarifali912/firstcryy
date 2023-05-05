import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

function CarouselCard() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.fcglcdn.com/brainbees/banners/april_charlie_banana_flat45_dp_hp_994x3991682492526839.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>april charlie banana</h3>
          <p>april charlie banana flat45</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_mes_27thapr1683033181417.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Babies corner</h3>
          <p>Babies corner arena</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_bgn_4thmay1683115062029.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>First Baby Arena </h3>
          <p>
         Special First Baby Arena
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.fcglcdn.com/brainbees/banners/makhana_for_babies_desktop_20225251321216740345951041680673476227.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Makhana babies</h3>
          <p>
          Makhana for babies
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCard;