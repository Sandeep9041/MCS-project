import { useParams } from "react-router-dom";
import React, { useState,useEffect } from 'react';
import Navbar from "../Navbar/navbar";
import Footer from "../Footers/footer";
import "./cadetails.css";
import {AiFillStar} from "react-icons/ai";
import {FaCalendarAlt} from "react-icons/fa";
import {ThreeDots} from 'react-loader-spinner'

// const data = [
//     {
//       "id": 1,
//       "name": "Michael Jackson",
//       "image": "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80",
//       "intro": "Expertise in accounting and finance, specializing in financial statements and auditing.",
//       "rating": 4.8,
//       "reviewCount": 89,
//       "taskComplexity": "Basic to complex tasks",
//       "price": "€4,370",
//       "deliveryTime": "Delivers within 2 days",
//       "testimonial": {
//         "text": "Exceptional service in managing personal finances and deep understanding of financial markets.",
//         "author": "John Doe"
//       },
//       "about": {
//         "from": "INDIA",
//         "partnerSince": 2011,
//         "averageResponseTime": "30 minutes",
//         "description": "Professional Chartered Accountant offering diverse accounting and financial services.",
//         "services": ["Financial accounting", "Bookkeeping", "Balance Sheets"],
//         "benefits": ["One-time delivery", "24/7 support"]
//       }
//     },
//     {
//       "id": 2,
//       "name": "Lucy Brown",
//       "image": "https://images.unsplash.com/photo-1556746818-17b142980bb2?fit=crop&w=800&q=80",
//       "intro": "Dedicated accountant with expertise in taxation and corporate finance.",
//       "rating": 4.5,
//       "reviewCount": 75,
//       "taskComplexity": "Intermediate to advanced tasks",
//       "price": "€3,900",
//       "deliveryTime": "Delivers within 3 days",
//       "testimonial": {
//         "text": "Lucy has been an invaluable asset to our company's financial planning.",
//         "author": "Alice Martin"
//       },
//       "about": {
//         "from": "USA",
//         "partnerSince": 2013,
//         "averageResponseTime": "45 minutes",
//         "description": "Committed to delivering top-notch accounting services to businesses and individuals.",
//         "services": ["Taxation", "Corporate Finance", "Auditing"],
//         "benefits": ["Error-free documentation", "Expert consultations"]
//       }
//     },
//     {
//       "id": 3,
//       "name": "Robert Smith",
//       "image": "https://images.unsplash.com/photo-1517433456452-f9633a875fbc?fit=crop&w=800&q=80",
//       "intro": "Experienced in overseeing financial management of medium to large enterprises.",
//       "rating": 4.6,
//       "reviewCount": 65,
//       "taskComplexity": "Advanced financial tasks",
//       "price": "€4,500",
//       "deliveryTime": "Delivers within 4 days",
//       "testimonial": {
//         "text": "Robert's strategic approach to financial management has been pivotal to our company's success.",
//         "author": "James Walker"
//       },
//       "about": {
//         "from": "UK",
//         "partnerSince": 2010,
//         "averageResponseTime": "25 minutes",
//         "description": "Specialized in strategic financial planning and corporate finance.",
//         "services": [
//           "Corporate finance",
//           "Strategic planning",
//           "Asset management"
//         ],
//         "benefits": [
//           "Comprehensive financial review",
//           "Customized financial solutions"
//         ]
//       }
//     },
//     {
//       "id": 4,
//       "name": "Anita Patel",
//       "image": "https://images.unsplash.com/photo-1563990112129-a9a72c04f5d7?fit=crop&w=800&q=80",
//       "intro": "Passionate about helping startups navigate the complexities of financial compliance.",
//       "rating": 4.9,
//       "reviewCount": 95,
//       "taskComplexity": "Basic to intermediate tasks",
//       "price": "€3,900",
//       "deliveryTime": "Delivers within 2 days",
//       "testimonial": {
//         "text": "Anita's insights have been invaluable to our startup. Her expertise in financial compliance is unmatched.",
//         "author": "Raj Mehta"
//       },
//       "about": {
//         "from": "INDIA",
//         "partnerSince": 2018,
//         "averageResponseTime": "20 minutes",
//         "description": "Focuses on financial compliance and advisory services for startups.",
//         "services": ["Financial compliance", "Advisory services", "Tax planning"],
//         "benefits": ["Startup-friendly", "Tailored financial strategies"]
//       }
//     },
//     {
//       "id": 5,
//       "name": "Johnathan Lee",
//       "image": "https://images.unsplash.com/photo-1556157382-97eda2d62296?fit=crop&w=800&q=80",
//       "intro": "Expert in streamlining business operations with financial acumen.",
//       "rating": 4.5,
//       "reviewCount": 72,
//       "taskComplexity": "Intermediate tasks",
//       "price": "€4,200",
//       "deliveryTime": "Delivers within 3 days",
//       "testimonial": {
//         "text": "Johnathan's ability to marry financial expertise with operational efficiency has transformed our business.",
//         "author": "Linda Kim"
//       },
//       "about": {
//         "from": "CANADA",
//         "partnerSince": 2012,
//         "averageResponseTime": "35 minutes",
//         "description": "Specializing in operational finance and business transformation.",
//         "services": [
//           "Operational finance",
//           "Business strategy",
//           "Risk assessment"
//         ],
//         "benefits": ["Business transformation", "Operational efficiency"]
//       }
//     },
//     {
//       "id": 6,
//       "name": "Sophia Fernandez",
//       "image": "https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?fit=crop&w=800&q=80",
//       "intro": "Champion in guiding SMEs through their financial journeys with transparency and integrity.",
//       "rating": 4.8,
//       "reviewCount": 88,
//       "taskComplexity": "Basic to advanced tasks",
//       "price": "€4,250",
//       "deliveryTime": "Delivers within 2 days",
//       "testimonial": {
//         "text": "Sophia's consultative approach and deep knowledge have helped our business thrive financially.",
//         "author": "Carlos Rodriguez"
//       },
//       "about": {
//         "from": "SPAIN",
//         "partnerSince": 2016,
//         "averageResponseTime": "28 minutes",
//         "description": "Dedicated to offering top-tier financial consulting for small to medium enterprises.",
//         "services": ["Financial consulting", "SME advisory", "Growth strategies"],
//         "benefits": ["Transparent communication", "Integrity-driven solutions"]
//       }
//     },
//     {
//       "id": 7,
//       "name": "William O'Connell",
//       "image": "https://images.unsplash.com/photo-1542751371-6533d14d705f?fit=crop&w=800&q=80",
//       "intro": "Master of tax strategy and international finance regulations.",
//       "rating": 4.6,
//       "reviewCount": 78,
//       "taskComplexity": "Advanced tasks",
//       "price": "€5,000",
//       "deliveryTime": "Delivers within 4 days",
//       "testimonial": {
//         "text": "William's strategies saved us from major tax implications during our international expansion.",
//         "author": "Fiona Gallagher"
//       },
//       "about": {
//         "from": "IRELAND",
//         "partnerSince": 2009,
//         "averageResponseTime": "32 minutes",
//         "description": "Expertise in handling complex international finance and tax scenarios.",
//         "services": [
//           "Tax strategy",
//           "International finance",
//           "Regulatory compliance"
//         ],
//         "benefits": ["Global finance solutions", "Tax efficiency"]
//       }
//     },
//     {
//       "id": 8,
//       "name": "Nina Johansson",
//       "image": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?fit=crop&w=800&q=80",
//       "intro": "Specializes in financial forensics and fraud examination.",
//       "rating": 4.9,
//       "reviewCount": 92,
//       "taskComplexity": "Advanced forensic tasks",
//       "price": "€5,150",
//       "deliveryTime": "Delivers within 5 days",
//       "testimonial": {
//         "text": "Nina's forensic skills have been instrumental in protecting our firm from potential financial frauds.",
//         "author": "Marcus Blom"
//       },
//       "about": {
//         "from": "SWEDEN",
//         "partnerSince": 2013,
//         "averageResponseTime": "26 minutes",
//         "description": "Focused on protecting businesses through financial forensics and fraud examination.",
//         "services": [
//           "Financial forensics",
//           "Fraud examination",
//           "Risk management"
//         ],
//         "benefits": ["Financial protection", "Fraud prevention"]
//       }
//     },
//     {
//       "id": 9,
//       "name": "Oliver Bernard",
//       "image": "https://images.unsplash.com/photo-1579637305941-57a5d3807b1d?fit=crop&w=800&q=80",
//       "intro": "Dedicated to empowering non-profits with financial strategies and sustainability.",
//       "rating": 4.7,
//       "reviewCount": 85,
//       "taskComplexity": "Intermediate to advanced tasks",
//       "price": "€4,800",
//       "deliveryTime": "Delivers within 3 days",
//       "testimonial": {
//         "text": "Oliver's insights have optimized our non-profit's financial health and long-term sustainability.",
//         "author": "Clara Mathews"
//       },
//       "about": {
//         "from": "AUSTRALIA",
//         "partnerSince": 2017,
//         "averageResponseTime": "30 minutes",
//         "description": "Passionate about bolstering the financial backbone of non-profit organizations.",
//         "services": [
//           "Non-profit finance",
//           "Sustainability planning",
//           "Grants management"
//         ],
//         "benefits": ["Enhanced sustainability", "Optimized financial health"]
//       }
//     },
//     {
//       "id": 10,
//       "name": "Isabella Martinez",
//       "image": "https://images.unsplash.com/photo-1588392382834-a891154bca4d?fit=crop&w=800&q=80",
//       "intro": "Expert in mergers, acquisitions, and corporate restructuring with a decade of experience.",
//       "rating": 4.8,
//       "reviewCount": 90,
//       "taskComplexity": "Complex corporate tasks",
//       "price": "€6,000",
//       "deliveryTime": "Delivers within 6 days",
//       "testimonial": {
//         "text": "Isabella played a pivotal role in our successful merger, showcasing exemplary financial acumen.",
//         "author": "Rafael Vega"
//       },
//       "about": {
//         "from": "MEXICO",
//         "partnerSince": 2014,
//         "averageResponseTime": "28 minutes",
//         "description": "Specializes in navigating the financial complexities of mergers and acquisitions.",
//         "services": [
//           "Mergers and acquisitions",
//           "Corporate restructuring",
//           "Financial strategy"
//         ],
//         "benefits": ["Strategic financial guidance", "Efficient restructuring"]
//       }
//     }
//   ]
const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const CaDetail = () => {
    const [caDetail,setCaDetails] = useState({});
    const [newAbout,setAbout] = useState({});
    const [img,setImg] = useState("");
    const [newTestimonial,setTestimonial] = useState({});
    const [newServices,setServices] = useState([]);
    const [newBenefits,setBenefits] = useState([]);
    const [error,setError] = useState("")
    const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)


    const params = useParams();
    const getData = async() => {
      setApiStatus(apiStatusConstants.inProgress)
      const {id} = params;
      // console.log(params);
      const url = `http://localhost:5000/ca/${id}`;
      const options = {
          method : "GET",
      }
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        const imageUrl = await fetch(data[0].image)
        if (imageUrl.ok===false){
          setImg("https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-40450.jpg?w=900&t=st=1697389693~exp=1697390293~hmac=592a3f4e046756d6e8e4ea83cd1ea87368ccd971f0733634b82e9c89375dd8f7")
        }
        else{
          setImg(data[0].image);
        }
        console.log();
        setCaDetails(data[0]|| {});
        setAbout(data[0].about || {});
        setTestimonial(data[0].testimonial || {});
        setBenefits(data[0].about.benefits || []);
        setServices(data[0].about.services || []);
        setApiStatus(apiStatusConstants.success)
      }
      catch (err) {
        setError(err);
        setApiStatus(apiStatusConstants.failure)
      }
  }

  const renderLoadingView = () => (
    <div  data-testid="loader" className="loader">
      <div style={{height:"100vh",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <ThreeDots
        type="ThreeDots"
        color="#64748b"
        height="50"
        width="50"
        marginTop="25px"
      />
      </div>
    </div>
  )

  const renderFailureView = () => (
    <div className="failure-card">
      <h1 className="failure-heading">
        Sorry !!
      </h1>
      <p >
        We are having some trouble to complete your request. Please try again
        with other name.
      </p>
      <p className="failure-text">Please try again.</p>
    </div>
  )

  const renderView = () => {
    switch (apiStatus) {
      case 'SUCCESS':
        return renderSuccessView()
      case 'IN_PROGRESS':
        return renderLoadingView()
      case 'FAILURE':
        return renderFailureView()
      default:
        return null
    }
}

const renderSuccessView = () => (
  <div className="ca-details-bg">
          <div className="ca-details-left">
            <h4 className="name">{caDetail.name|| ""}</h4>
            <img src= {img|| ""} alt="" className="sm"/>
            <p className="intro">
              {caDetail.intro||""}
            </p>
            <div className="review-card">
              <AiFillStar className="rating-star"/>
              <p className="rating">{caDetail.rating||""}</p>
              <p>({caDetail.reviewCount||""})</p>
            </div>
            <div className="task-complexity-card">
              <div>
                <div className="task-price">
                <p className="complexity">{caDetail.taskComplexity || ""}</p>
                <p className="price">{caDetail.price || ""}</p>
                </div>  
                <p className="time"><FaCalendarAlt/>{caDetail.deliveryTime||""}</p>
                <div className="task-btns">
                <button type="button">
                  Request Proposal
                </button>
                <button type="button">
                  Chat with me
                </button>
                </div>
              </div>
            </div>
          </div>
          <div className="ca-details-right">
            <img src= {img|| ""} alt="" className="lg"/>
            <h1 className="name">About {caDetail.name||""}</h1>
            <div className="about-ca">
              <div>
                <p className="about-ca-heading">
                  FROM
                </p>
                <p className="about-ca-heading-response">{newAbout.from || "" }</p>
                </div>
              <div>
                <p className="about-ca-heading">PARTNER SINCE</p>
                <p  className="about-ca-heading-response">{newAbout.partnerSince||""}</p>
              </div>
              <div>
                <p className="about-ca-heading">AVERAGE RESPONSE TIME</p>
                <p className="about-ca-heading-response">{newAbout.averageResponseTime||""}</p>
              </div>
            </div>
          <div>
            <p className="about-ca-heading">ABOUT</p>
            <p className="about-ca-heading-response">{caDetail.intro|| ""}</p>
          </div>
          <div>
            <p className="about-ca-heading">Testimonial</p>
            <p className="about-ca-heading-response"  style={{marginBottom:'0px'}}>{newTestimonial.author|| ""}</p>
            <p className="about-ca-heading-response"  style={{width:"75%"}}>{newTestimonial.text|| ""}</p>
          </div>
          <div className="services-benefits">
            <div>
              <p className="about-ca-heading">SERVICES I OFFER</p>
              <ul>{newServices.map(each=>
                <li className="about-ca-heading-response" key={each}>{each}</li>)||""}</ul>
            </div>
            <div>
              <p className="about-ca-heading">WHY ME</p>
              <ul>{newBenefits.map(each=>
                <li className="about-ca-heading-response" key={each}>{each}</li>)||""}</ul>
            </div>
          </div>

          </div>

       </div>
)
    
  
  useEffect(()=>{
        getData();

    },[])
       return(
    <>
       <Navbar />
       {renderView()}
       <Footer /> 
    </>
)}
export default CaDetail;