
import { BrowserRouter as Router, Route, Link, Switch, Users } from "react-router-dom";
import { useState } from "react";
import Nav1 from "./Nav1";

import { Carousel, CardDeck ,Card } from "react-bootstrap";
import { Form ,Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import s1 from "./31.png";
import s2 from "./1.png";
import s3 from "./3.jpg";
import g1 from "./12.png";
import c1 from "./c1.jpg";
import c2 from "./c2.jpg";
import g2 from "./33.png";
import c4 from "./c4.jpg";



//import "./Back.css"
//import "./App.css"


function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         
          <a className="navbar-brand" href="/">Rapido</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/"><Link to="/">Home</Link> <span class="sr-only">(current)</span></a>
              </li>

              <li className="nav-item">

                <a className="nav-link" href="/contact.html"><Link to="/FeedBack">FeedBack</Link></a>
              </li>


            </ul>


 

      &nbsp;&nbsp;&nbsp;&nbsp;


            
              <button type="button" class="btn btn-outline-light"><a href="http://127.0.0.1:5501/index.html">
                LogIn
                </a>
            </button>
            

      &nbsp;&nbsp;&nbsp;&nbsp;
      
              <button type="button" class="btn btn-outline-light"><a href="http://127.0.0.1:5501/index1.html">
                Register
                </a>
            </button>
          



          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/FeedBack">
            <FeedBack />
          </Route>
          <Route path="/SignIn">
            <Home />
          </Route>
         
         

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Page3() {
  return <div><h1>Login</h1></div>;
}

function Page4() {
  return <div><h1>Register</h1></div>;
}














function About() {

 const al = function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }



  return( 

    
    <div >

    
    <div class="container" >
      <br></br>
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label><h2>Find near by Place</h2></Form.Label>
    <Form.Control as="select">
    <option>Select near by Place</option>
    <option>Biyani Chowk</option>
    <option>Rajkamal</option>
    <option>Sai Nagar</option>
    <option>Gopal Nagar</option>
    <option>Rahatgao</option>
    <option>Gadge Nagar</option>
  </Form.Control>
  
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label><h2>Select Your destination </h2></Form.Label>
    <Form.Control as="select">
    <option>Select Your destination</option>
    <option>Biyani Chowk</option>
    <option>Rajkamal</option>
    <option>Sai Nagar</option>
    <option>Gopal Nagar</option>
    <option>Rahatgao</option>
    <option>Gadge Nagar</option>
  </Form.Control>
  
  </Form.Group>
  <Button variant="primary" type="submit" onclick="al">
    Submit
  </Button>
</Form>



		<img src= {g1} style={{
            paddingLeft:"25%",
          }}></img>


    

</div>  

</div>
  );
}



































function FeedBack() {
  const [inputTask, setInputTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const processInputTask = (e) => setInputTask(e.target.value);
  const processTask = (item) => {
    console.log("Process Task", item);

    item.complete = !item.complete;

    setTaskList([...taskList]);
  };

  const checkEnterKey = (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      addNewTask();
    }
  };

  const addNewTask = () => {
    if (inputTask === "") {
      // alert("Task Can not be empty");
      return;
    }

    // lets push hard coded new task
    const anewTask = {
      id: taskList.length + 1,
      task: inputTask,
      complete: false,
    };

    setTaskList([anewTask, ...taskList]);
    setInputTask("");
  };



  return (

    <div class="container">
    <div>
      <h3>Feedback Form</h3>



      {/** <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"           type="text"
          value={inputTask}
          onChange={processInputTask}
          onKeyUp={checkEnterKey}
          placeholder="Add your task here"></textarea>
</div> */}
      <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Comment</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"           
          type="text"
          value={inputTask}
          onChange={processInputTask}
          onKeyUp={checkEnterKey}
          placeholder="Add your Experence"></textarea>
          <br/>
        <button type="button" onClick={addNewTask} class="btn btn-outline-primary">Add Feedback</button>
      </div>

      {/**       {taskList
        .filter((item) => !item.complete)
        .map((item, index) => (
          <div key={index}>

            <span
              onClick={() => processTask(item)}
              style={{ marginLeft: "4px", cursor: "pointer" }}
            >
              {item.task}
            </span>

          </div>
        ))} */}
      <h5>
        FeedBack {taskList.filter((item) => !item.complete).length}{" "}
      </h5>

     

      <table  class="table table-striped" >      {taskList
        .filter((item) => !item.complete)
        .map((item, index) => (
          <div key={index}
          className="bg-secondary text-light mb-1 d-flex justify-content-center align-items-center"
          style={{
            height: "100px",
            fontSize: "1.25rem",
            textAlign: "center",
            textTransform: "capitalize",
          }}
          >

            <span
              onClick={() => processTask(item)}
              style={{ marginLeft: "4px", cursor: "pointer" }}
            >
              {item.task}
            </span>

          </div>
        ))}</table>

    
     
    </div>
    </div>
  );
}
























function Home() {
  return (


    <div class="container">
      <br></br>
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
            <h3></h3>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
<br>
</br>

<CardDeck>
  <Card>
    <Card.Img variant="top" src={c1} />
    <Card.Body>
      <Card.Title>Boost Business Productivity with these Tips</Card.Title>
      <Card.Text>
      A survey published by the Business Travel Show found that 58 percent of 
      business travel buyers agree that alternative transport providers such as Rapido
      A survey published by the Business Travel Show found that 58 percent of business travel buyers agree that alternative transport providers such as Rapido
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={c2} />
    <Card.Body>
      <Card.Title>Traveler first Business Travel Program</Card.Title>
      <Card.Text>
      When your employees travel for work, do they find your company’s travel program more of a help or a hindrance? If it’s the latter, 
      it’s time you considered some adjustments that can make a significant impact.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={c4} />
    <Card.Body>
      <Card.Title>Help your Business Grow and Travel Faster</Card.Title>
      <Card.Text>
      We built Rapido Corporateto help organisations perfect the way they move the people that matter to them. And while our initial focus was on driving business travel efficiency through features like monthly billing and reporting, it didn’t take long before we realised that organisations needed Rapido for a lot more.
      
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>



    </div>

 

  );
}




















export default App;