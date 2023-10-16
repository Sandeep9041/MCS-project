import "./home-sec.css";

const HomeSec=()=>{
    return (
        <div className="home-sec-bg">
            <h1 className="home-sec-heading">
                Want to <span>Join</span> Us?
            </h1>
            <p className="home-sec-text">To remain with us, it is essential that you diligently follow the steps provided</p>
        <div className="home-sec-cards">
            <div className="home-sec-card">
                <p  className="home-sec-card-tag">1<sup>st</sup></p>
                <div className="home-sec-card-content">
                <h3>Commencement of business</h3>
                <p>Invested shareholders must confirm payment and office address </p>
                <div className="home-sec-card-dates">
                    <div className="home-sec-card-dates-due-date">
                        <h4>Due date</h4>
                        <p>Within 180 days</p>
                    </div>
                    <div className="home-sec-cards-dates-penalty">
                        <h4>Penalty fees</h4>
                        <p style={{marginBottom:"3px"}}>$50,000 for the company</p>
                        <p><span>₹1,000</span>/day for directors</p>
                        </div>
                    </div>
            </div>
            </div>
            <div className="home-sec-card">
                <p className="home-sec-card-tag">2<sup>nd</sup></p>
                <div className="home-sec-card-content">
                <h3>Auditor Appointment</h3>
                <p>Company informs new auditor and submits ADT.1 form to ROC.</p>
                <div className="home-sec-card-dates">
                    <div className="home-sec-card-dates-due-date">
                        <h4>Due date</h4>
                        <p>Within 30 days</p>
                    </div>
                    <div className="home-sec-cards-dates-penalty">
                        <h4>Penalty fees</h4>
                        <p><span>₹300</span> per month</p>
                        </div>
                    </div>
            </div>
            </div>
            <div  className="home-sec-card">
                <p className="home-sec-card-tag">3<sup>rd</sup></p>
                <div className="home-sec-card-content">
                <h3>DIN eKYC</h3>
                <p>Directors share personal information for identification & verification</p>
                <div className="home-sec-card-dates">
                    <div className="home-sec-card-dates-due-date">
                        <h4>Due date</h4>
                        <p>Every Year</p>
                    </div>
                    <div  className="home-sec-cards-dates-penalty">
                        <h4>Penalty fees</h4>
                        <p><span>₹500</span> per month.</p>
                        </div>
                    </div>
            </div>
            </div>
            <div className="home-sec-card">
                <p className="home-sec-card-tag">4<sup>th</sup></p>
                <div className="home-sec-card-content">
                <h3>DPT-3</h3>
                <p>Companies report money taken from people to ROC; auditors confirm details.</p>
                <div className="home-sec-card-dates">
                    <div className="home-sec-card-dates-due-date">
                        <h4>Due date</h4>
                        <p>Within 30 days</p>
                    </div>
                    <div  className="home-sec-cards-dates-penalty">
                        <h4>Penalty fees</h4>
                        <p><span>₹300</span> per month</p>
                        </div>
                    </div>
            </div>
            </div>
            <div className="home-sec-card">
                <p className="home-sec-card-tag">5<sup>th</sup></p>
                <div className="home-sec-card-content">
                <h3>MCA Form AOC-4</h3>
                <p>It's like an official report card for a company's documents</p>
                <div className="home-sec-card-dates">
                    <div className="home-sec-card-dates-due-date">
                        <h4>Due date</h4>
                        <p>On or Before 30th November</p>
                    </div>
                    <div  className="home-sec-cards-dates-penalty">
                        <h4>Penalty fees</h4>
                        <p><span>₹200</span> per day(No upper limit)*</p>
                        </div>
                    </div>
            </div>
            </div>
            <div className="home-sec-card">
                <p className="home-sec-card-tag">6<sup>th</sup></p>
                <div className="home-sec-card-content">
                <h3>MCA Form MGT-7</h3>
                <p>Companies must annually report activities and finances to the registrar.</p>
                <div className="home-sec-card-dates">
                    <div className="home-sec-card-dates-due-date">
                        <h4>Due date</h4>
                        <p>On or Before 31st December</p>
                    </div>
                    <div className="home-sec-cards-dates-penalty">
                        <h4>Penalty fees</h4>
                        <p><span>₹200</span> per day(No upper limit)*</p>
                        </div>
                    </div>
            </div>
            </div>
        </div>
        <p className="home-sec-card-note">
        * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <span>every day</span>   until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form
        </p>
        </div>
    )
}
export default HomeSec;