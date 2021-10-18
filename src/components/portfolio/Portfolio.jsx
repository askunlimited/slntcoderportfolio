import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import {useState, useEffect} from "react"
import {
  featuredPortfolio,
  htmlPortfolio,
  vuePortfolio,
  reactPortfolio,
  djangoPortfolio,
} from "../../data";




export default function Portfolio() {
 const [selected, setSelected] = useState("featured")
 const [data, setData] = useState([])
 const list = [
  {
   id: "featured",
   title: "Featured"
  },
  {
   id: "html",
   title: "HTML/CSS"
  },
  {
   id: "vue",
   title: "Vue"
  },
  {
   id: "react",
   title: "React"
  },
  {
   id: "django",
   title: "Django"
  },
 ]

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "html":
        setData(htmlPortfolio);
        break;
      case "vue":
        setData(vuePortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      case "django":
        setData(djangoPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);


 return (
  <div className="portfolio" id="portfolio">
   <h1>Portfolio</h1>
   <ul>
    {list.map((item)=> (
     <PortfolioList title={item.title} 
     active={selected === item.id}
     setSelected={setSelected}
     id={item.id}
      />
    ))}
   </ul>

   <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
   </div>
   
  </div>
 )
}
