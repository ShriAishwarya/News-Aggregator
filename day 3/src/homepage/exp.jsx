import './stylehome.css';
function Kai() {
    return (

      <div className="container">
        <div className="headerImg" />
        <div className="header"><h1 className="header">World Wide News</h1>
        </div>
        <div className="left"><p>
            <img src="http://zeuswolf.com/images/drizz.jpg" width="160px" />
          </p><ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul><br /><br />
          <p>
            "Isn’t it ironic that the girl I wanna marry is a wedding planner
            that tells me my life is too much and then moves to Atlanta"
            <br />- 6 God 
          </p></div>
        <div className="content">
          <h2>About Me</h2>
          <p>Aubrey Drake Graham, known simply as Drake, is a Canadian rapper, singer, songwriter, record producer, and actor. Drake initially gained recognition as an actor on the teen drama television series Degrassi: The Next Generation in the early 2000s..</p>
          <p>Drake has catapulted into stardom not only as an artist, but as a cultural maven with October’s Very Own. Sharing the story of the thriving music scene in Toronto, Drake has built out OVO from a small-scale blog about his crew to an all-encompassing lifestyle brand, including his clothing company, his record label OVOSOUND and his annual OVOFEST.</p>
          <hr /><br />
          <h2>Top News</h2>
          <table>
            <tbody><tr>
                <th>Breakfast with Chad: When an AI Believes It’s One of Us</th>
                <th>Northwest India is receivig high rainfall this year</th>
                <th>Song 3</th>
              </tr>
              <tr>
                <td><img src="https://imageio.forbes.com/specials-images/imageserve/64213c10fc7ed6f0a3eb47ae/The-Intersection-Of-AI-And-Human-Creativity--Can-Machines-Really-Be-Creative-/960x0.jpg?format=jpg&width=960" />
                </td>
                <td><img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202306/2023_6img28_jun_2023_pti06_28_2023_000080a-sixteen_nine.jpeg?size=948:533" />
                </td>
                <td><img src="https://s-media-cache-ak0.pinimg.com/originals/3f/ec/4b/3fec4b0b3d88df2df6115731d668271a.jpg" />
                </td>
              </tr><tr>
                <td>One Dance
                  Drake Featuring WizKid &amp; Kyla 
                  Views</td>
                <td>40% of India has a rain deficit, but northwest has 64% surpl </td>
                <td>Take Care
                  Drake Featuring Rihanna 
                  Def Jam Recordings France: Skyrock</td>
              </tr>
              <tr>
              </tr></tbody></table>
          <fieldset> 
            <label>Email:<br />
              <input type="text" name="email" /></label><br />
            <label> Mobile:<br /> 
              <input type="text" name="mobile" /> </label><br />
            <textarea name="Comments" rows={4} defaultValue={"Enter Your Message"} /><br />
            <input type="submit" defaultValue="Submit" />
          </fieldset>
        </div>
        <div className="footer">© Copyright Marzuwq Bholai</div>
      </div>
    );
  }
export default Kai;