// const heading =   React.createElement('h1',{id:'heading', class:'heading'}, 'Hello World from React');
//  const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(heading);
import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import RestaurantCard from "./src/components/RestaurantCard";
import resList from "./utils/mockData";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/contact";
import Error from "./src/components/Error";
import ResturantMenu from "./src/components/ResturantMenu";
import Login from "./src/components/Login";
// 2nd assingment

// const parent =   React.createElement('div',{id:'parent', class:'parent'},
//  [React.createElement('div',{id:'child'},
//  [React.createElement('h1',{id:'heading'},'i am new h1 heading'),
//  React.createElement('h2',{id:'heading2'}, 'i am h2 tag')]),
 
//  React.createElement('div',{id:'child2'},
//  [React.createElement('h1',{id:'heading'},'i am heading'),
//  React.createElement('h2',{id:'heading2'}, 'i am h2 tag')])]);

// 3rd assingment

// const Heading = () =>(
// <h1 id="heading" className="head"  tabIndex={1}>Heading using JSX</h1>);

// React Functional Component
// const num = 10;

// const elem = <span>span text</span>
// const title = () =>  (
//     <h1 className ="head" tabIndex="5">
        
//  heading    </h1>
// )
// const Headingfunctional = () =>(

//     <div id="container">  
//    {title()}
//     {/* <Heading /> */}
//      <h1 id="heading">hii</h1>
//     <h2>hiiiiiiiiiii</h2> </div>
  
// )

// 4th assingment

// const Header = () => {
//     return (
//         <div className="header">
//             <div>
//     <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" className="logo"></img>
//             </div>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact Us</li>
//                     <li>Cart</li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// resData ={
    
// }
// const RestroCard = (props) => {
//     const resData={props};
// return(
//     <div className="res-card" style={{backgroundColor:"#ccc"}}>
//     <img src="https://kitchenofdebjani.com/wp-content/uploads/2022/08/Kolkata-Mutton-Biryani-Recipe-debjanir-rannaghar.jpg" className="food-img"></img>
//         <h3>{props.restroname}</h3>
//         <h4>{props.cuisin}</h4>
//         <h4>4.4 Ratings</h4>
//         <h4>30 Minutes</h4>
//     </div>
// )
// }

// const Body = () =>{
//     return(
//         <div className="body">
//             <div className="search">Search </div>
//                 <div className="res-container">
//                     <RestroCard restroname="Biriyani Plaza" cuisin="bIriyani,Mughlai"/>
//                     <RestroCard restroname="Saffron" cuisin ="Burger,Chineese"/>
//                     <RestroCard />
//                     <RestroCard />
//                     <RestroCard />
//             </div>
//         </div>
//     )
// }
// const AppLayout = () => {
//     return (
//     <div className="app">
// <Header />
// <Body />
//     </div>
//     )
// }
//  const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(<AppLayout />);





 
  
 
  
  const RestaurantList = () => {
    return resList.map((restaurant) => <RestaurantCard resData={restaurant} />);
  };
  
  
  const AppLayout = () => {
    return (
      <div className="app">
        <Header />
        <Outlet />
      </div>
    );
  };
  
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element: <AppLayout></AppLayout>,
      children:[
        {
          path:'/',
          element: <Body />,},

        {
          path:'/about',
          element: <About></About>,
          errorElement: <Error></Error>
        },
        {
          path:'/contact',
          element: <Contact></Contact>,
          errorElement: <Error></Error>
        },
        {
          path: '/resturants/:resId',
          element:<ResturantMenu/>
        }
      ],

      errorElement: <Error></Error>
    },
    {
      path: "/login",
      element: <Login />,
    },
  ])
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<RouterProvider router={appRouter} ></RouterProvider>);