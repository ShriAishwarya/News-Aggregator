import './stylehome.css';
function Homepage() {
    return (
<div>
  {/* navbar */}
  <div className="navbar-navbar-default-navbar-fixed-top" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="#">WORLD WIDE NEWS</a>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#about">LATEST NEWS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
    </div>
  </div>{/* /navbar */}
  <footer>GET LATEST NEWS HERE!!!!</footer>
</div>
    );
}
export default Homepage;