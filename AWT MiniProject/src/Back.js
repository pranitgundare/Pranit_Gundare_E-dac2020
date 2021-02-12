
import {Carousel} from "react-bootstrap";





function Back() {

    return (
     
     
      <div class="container">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={s1}
              alt="First slide"
            />
  
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={s2}
              alt="Third slide"
            />
  
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={s3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Ride as much or as little, as long or as short as you Feel.</h3>
  
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
  
    );
  }

export default Back;


