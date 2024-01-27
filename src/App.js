import "../src/style.css";
import logo from "./imgs/logo.svg";
import overview from "./imgs/overview.svg";
import tickets from "./imgs/tickets.svg";
import ideas from "./imgs/ideas.svg";
import contacts from "./imgs/contacts.svg";
import agents from "./imgs/agents.svg";
import articles from "./imgs/articles.svg";
import settings from "./imgs/settings.svg";
import subscription from "./imgs/subscription.svg";
import search from "./imgs/search.svg";
import notification from "./imgs/notification.svg";
import headerImg from "./imgs/headerImg.svg";
import sortIcon from "./imgs/sortIcon.svg";
import filterIcon from "./imgs/filterIcon.svg";
import menu from "./imgs/verticalIcon.svg";



function App() {
  return (
    <main>
      <div className="main">
        <div className="main__left">
          <header>
            <a href="#">
              <img src={logo} alt="logo" width={32} height={32} />
              <p>Dashboard Kit</p>
            </a>
          </header>
          <div className="left">
            <a href="#">
              <img src={overview} alt="overview" width={16} height={16} />
              <p>Overview</p>
            </a>
            <a href="#">
              <img src={tickets} alt="tickets" width={16} height={16} />
              <p>Tickets</p>
            </a>
            <a href="#">
              <img src={ideas} alt="ideas" width={16} height={16} />
              <p>Ideas</p>
            </a>
            <a href="#">
              <img src={contacts} alt="contacts" width={16} height={16} />
              <p>Contacts</p>
            </a>
            <a href="#">
              <img src={agents} alt="overview" width={16} height={16} />
              <p>Agents</p>
            </a>
            <a href="#">
              <img src={articles} alt="agents" width={16} height={16} />
              <p>Articles</p>
            </a>
            <a href="#">
              <img src={settings} alt="settings" width={16} height={16} />
              <p>Settings</p>
            </a>
            <a href="#">
              <img src={subscription} alt="subscription" width={16} height={16} />
              <p>Subscription</p>
            </a>
          </div>
        </div>
        <div className="main__right">
          <header>
            <h2>Overview</h2>
            <div className="header__right">
              <a href="#" className="search">
                <img src={search} alt="searchIcon" width={16} height={16} />
              </a>
              <a href="#" className="notificationIcon">
                <img
                  src={notification}
                  alt="notifacitionIcon"
                  width={16}
                  height={16}
                />
              </a>
              <p>Jones Ferdinand</p>
              <img src={headerImg} alt="headerImg" width={63} height={43} />
            </div>
          </header>

         <div className="card">
          <div className="cards">
            <h2 className="title">Unresolved</h2>
            <span className="subtitle">60</span>
          </div>
          <div className="cards">
            <h2 className="title">Overdue</h2>
            <span className="subtitle">16</span>
          </div>
          <div className="cards">
            <h2 className="title">Open</h2>
            <span className="subtitle">43</span>
          </div>
          <div className="cards">
            <h2 className="title">On hold</h2>
            <span className="subtitle">64</span>
          </div>
         </div>
     <div className="section">
      <div className="section_item">
        <div className="section__left">
          <h2 className="section__title">Today’s trends</h2>
          <div className="section__left__item">
            <span className="section__imgs">as of 25 May 2019, 09:41 PM</span>
            <div className="sevtion__left__imgs">
            <div className="section__left--item">
            
             <h3 className="section__name">Today</h3>
              </div>
              <div className="section__left--imgs">
          
                <h3 className="section__name">Yesterday</h3>
              </div>
            </div>
          </div>
        </div>
        <hr className="section--child" />
        <div className="section__right">
          <h2 className="section__right__title">Resolved</h2>
    
          <span className="section__right__subtitle">449</span>
          <hr className="section__right__leb"/>
          <h2 className="section__right__title">Received</h2>
         
          <span className="section__right__subtitle">426</span>
          <hr className="section__right__leb" />
          <h2 className="section__right__title">Average first response time</h2>
  
          <span className="section__right__subtitle">33m</span>
          <hr className="section__right__leb"/>
          <h2 className="section__right__title">Average response time</h2>
      
          <span className="section__right__subtitle">3h 8m</span>
          <hr className="section__right__leb"/>
          <h2 className="section__right__title">Resolution within SLA</h2>
 
          <span className="section__right__subtitle">94%</span>
         
        </div>
      </div>
     </div>
     <div className="aside">
      <div className="aside__top">
       
         <div className="aside__left__card">
         <div className="aside__right__child">
           <div className="aside__right__childs">
           <h2>Tasks</h2>
           <h3 className="aside__left__subtitle">View all</h3>
           </div>
           <p className="aside__left_title">Group: <span>Support</span></p>
           <div className="aside__right__childs">
           <div className="aside__left_cardl">
           <h2 className="aside__left__item">Waiting on Feature Request</h2>
            <span className="aside__left__mgesi">4238</span>
          </div>
           </div>
          </div>
          <hr  className=" aside__game"/>
          <div className="aside__left_cardlar">
          <h5  className="aside__left__item">Awaiting Customer Response</h5>
            <span className="aside__left__mges">1005</span>
          </div>
          <hr className=" aside__game" />
          <div className="aside__left_cardlar">
          <h5  className="aside__left__item">Awaiting Developer Fix</h5>
            <span className="aside__left__mgas">914</span>
          </div>
          <hr  className=" aside__game"/>
          <div className="aside__left_cardlar">
          <h5  className="aside__left__item">Pending</h5>
            <span className="aside__left__mgs">281</span>
          </div>
        

        </div>
       
        <div className="aside__right__cards" >
          <div className="aside__right__child">
           <div className="aside__right__childs">
           <h2>Tasks</h2>
           <h3 className="aside__right__subtitle">View all</h3>
           </div>
           <p className="aside__right_title">Today</p>
           <div className="aside__right__childs">
           <h2 className="aside__right__item">Create new task</h2>
          
           </div>
          </div>
           <hr className=" aside__game" />
          <div className="aside__right__cardlar">
          <span class="aside__right__cheldren"><input type="checkbox" />  <h5>Finish ticket update</h5></span>
            <button className="aside__right__bttn">Urgent</button>
          </div>
          <hr className=" aside__game" />
          <div className="aside__right__cardlar">
          <span class="aside__right__cheldren"><input type="checkbox" />  <h5>Create new ticket example</h5></span>
          <button className="aside__right__btnn">New</button>
          </div>
          <hr className=" aside__game" />
          <div className="aside__right__cardlar">
         <span class="aside__right__cheldren" > <input type="checkbox" />  <h5>Update ticket report</h5></span>
          <button className="aside__right__btn">Default</button>
          </div>
          </div>
        </div>
    
     </div>
        </div>
      </div>
    </main>
  );
}

export default App;
