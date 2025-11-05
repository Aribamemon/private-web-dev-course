//template id = "template_x6crgx7"
//public key = " eE77jpwJwymSL6YDy"
// service id ="service_z20u8pv"
//number variable
import Googlereview from "../assets/images/Googlereview.jpg"
import businesscenter from "../assets/images/shams-hero-image.webp"
const Hero = () => {
  return (
   <section>
    <div className="items-center m-10">
      <img src={Googlereview} width={300} height={350}  alt="Googlereview"/>
      <div>
        <h1>Start Strong, <br />Build Without Limits</h1>
        <h3>A Free Zone Built for the Future of Business</h3>
        <p>Shams Free Zone gives modern entrepreneurs everything they need to <br />
        launch and grow, from fast, digital business setup to flexible licensing
        <br />that adapts to your goals.</p>
      </div>
      <form >
        <input type="number"  placeholder="+971 xx xxx xxxx"/>
      </form>
      <p>Receive a callback in less than 60 seconds</p>
    </div>
    <div>
      <img src={businesscenter} width={600} height={750} alt="Businesscenter"/>
    </div>
   </section>
  )
}

export default Hero
