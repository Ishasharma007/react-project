import {Link} from "react-router-dom"
import "./AboutUsBox.css"
 const AboutUsBox=()=>{
    <section className="about-us">
      <div className="row">

         <div className="about-col">
             <h1>Welcome to Everbright University – A World-Class Institution</h1>
             <p>
                Nestled in the heart of innovation and research, Everbright University is a
                hub for aspiring leaders, creative thinkers, and changemakers. With over
                three decades of academic excellence, we have built a legacy of nurturing
                talent and transforming potential into performance.
             </p>
             <p>
                Our university offers a diverse range of programs in technology, business,
                arts, and sciences — all designed to meet the needs of today’s fast-paced
                world. With a blend of world-class faculty, modern infrastructure, and
                global partnerships, we ensure that our students are prepared to take on
                real-world challenges with confidence.
             </p>
             <p>
                Join a vibrant campus life, discover your true potential, and be a part of
                a community that believes in shaping futures, one student at a time.
             </p>
             <Link to="#" className="hero-btn red-btn">
                Discover More
             </Link>

         </div>
         <div>
            <img src="/images/banner.jpg" alt="about"/>
         </div>
      </div>
        
    </section>
 }
export default AboutUsBox;