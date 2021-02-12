
function Nav1() {
    return (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  
    <a className="navbar-brand" href="/">B1-TEXI</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          
          <a className="nav-link" href="/about.html">About</a>
        </li>
        <li className="nav-item">
          
          <a className="nav-link" href="/contact.html">FeedBack</a>
        </li> 

        <li className="nav-item">
          
          <a className="nav-link" href="/contact.html">Contact Us</a>
        </li>   
      </ul>
      
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><a href="login.html">Login</a></button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button class="btn btn-outline-info my-2 my-sm-0" type="submit"><a href="blog.html">Register</a></button>



    </div>
  </nav>

        
    );
}




export default Nav1;