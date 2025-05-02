import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";  
import resList from "../../utils/mockData";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
  
  const Body = () => {

    const [listOfRest , setlistOfRest] = useState([] );

    const [filterlistOfRest , setfilterlistOfRest] = useState([] );

    const [searchText, setsearchText] = useState("");

    useEffect(() =>{
     fetchData()}, [])

     const fetchData = async () => {
      const data = await fetch
      // ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9083215&lng=77.6050777&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6559714&lng=88.4355461&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    
    
      const json = await data.json();

      console.log(json);
//       setlistOfRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
// setfilterlistOfRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

setlistOfRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setfilterlistOfRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

// setlistOfRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

// setfilterlistOfRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

// setlistOfRest(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
// setfilterlistOfRest(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // Rendering on the basis of condition is known as conditional rendering
    //  if(listOfRest.length === 0 ){
    //   return <Shimmer></Shimmer>
    //  }
    console.log("body rendered")
    // let listOfRest2 =[
    //   {
    //     type: "restaurant",
    //     info: {
    //       type: "F",
    //       id: "5934",
    //       name: "Burger King",
    //       uuid: "ac56f2ac-71d3-4978-9513-b3aa68e25463",
    //       city: "1",
    //       area: "Koramangala",
    //       totalRatingsString: "1000+ ratings",
    //       cloudinaryImageId: "jpohkfkofao0hxez7vdh",
    //       cuisines: ["Burgers", "American"],
    //       tags: [],
    //       costForTwo: 35000,
    //       costForTwoString: "₹350 FOR TWO",
    //       deliveryTime: 31,
    //       minDeliveryTime: 31,
    //       maxDeliveryTime: 31,
    //       slaString: "31 MINS",
    //       lastMileTravel: 1.399999976158142,
    //       slugs: {
    //         restaurant: "burger-king-koramangala",
    //         city: "bangalore",
    //       },
    //       cityState: "1",
    //       address:
    //         "Unit No. 1, Davar Atrium, Corporation No. 118, Koramangala Industrial Area 7th Block, Bangalore 560095",
    //       locality: "7th Block",
    //       parentId: 166,
    //       unserviceable: false,
    //       veg: false,
    //       select: false,
    //       favorite: false,
    //       tradeCampaignHeaders: [],
    //       aggregatedDiscountInfo: {
    //         header: "Get every item under 129",
    //         shortDescriptionList: [
    //           {
    //             meta: "Get every item under 129",
    //             discountType: "FinalPrice",
    //             operationType: "RESTAURANT",
    //           },
    //           {
    //             meta: "FREE DELIVERY",
    //             discountType: "FREE_DELIVERY",
    //             operationType: "RESTAURANT",
    //           },
    //         ],
    //         descriptionList: [
    //           {
    //             meta: "Get every item under 129",
    //             discountType: "FinalPrice",
    //             operationType: "RESTAURANT",
    //           },
    //           {
    //             meta: "FREE DELIVERY",
    //             discountType: "FREE_DELIVERY",
    //             operationType: "RESTAURANT",
    //           },
    //         ],
    //         subHeader: "",
    //         headerType: 0,
    //         superFreedel: "",
    //       },
    //       aggregatedDiscountInfoV2: {
    //         header: "",
    //         shortDescriptionList: [
    //           {
    //             meta: "",
    //             discountType: "FinalPrice",
    //             operationType: "RESTAURANT",
    //           },
    //         ],
    //         descriptionList: [
    //           {
    //             meta: "Get every item under 129",
    //             discountType: "FinalPrice",
    //             operationType: "RESTAURANT",
    //           },
    //           {
    //             meta: "FREE DELIVERY",
    //             discountType: "FREE_DELIVERY",
    //             operationType: "RESTAURANT",
    //           },
    //         ],
    //         subHeader: "",
    //         headerType: 0,
    //         superFreedel: "",
    //       },
    //       chain: [],
    //       feeDetails: {
    //         fees: [],
    //         totalFees: 0,
    //         message: "",
    //         title: "",
    //         amount: "",
    //         icon: "",
    //       },
    //       availability: {
    //         opened: true,
    //         nextOpenMessage: "",
    //         nextCloseMessage: "",
    //       },
    //       longDistanceEnabled: 0,
    //       rainMode: "NONE",
    //       thirdPartyAddress: false,
    //       thirdPartyVendor: "",
    //       adTrackingID: "",
    //       badges: {
    //         imageBased: [],
    //         textBased: [],
    //         textExtendedBadges: [],
    //       },
    //       lastMileTravelString: "1.3 kms",
    //       hasSurge: false,
    //       sla: {
    //         restaurantId: "5934",
    //         deliveryTime: 31,
    //         minDeliveryTime: 31,
    //         maxDeliveryTime: 31,
    //         lastMileTravel: 1.399999976158142,
    //         lastMileDistance: 0,
    //         serviceability: "SERVICEABLE",
    //         rainMode: "NONE",
    //         longDistance: "NOT_LONG_DISTANCE",
    //         preferentialService: false,
    //         iconType: "EMPTY",
    //       },
    //       promoted: false,
    //       avgRating: "4.2",
    //       totalRatings: 1000,
    //       new: false,
    //     },
    //     subtype: "basic",
    //   },
    //   {
    //     type: "restaurant",
    //     info: {
    //       type: "F",
    //       id: "5935",
    //       name: "KFC",
    //       uuid: "ac56f2ac-71d3-4978-9513-b3aa68e25463",
    //       city: "1",
    //       area: "Koramangala",
    //       totalRatingsString: "1000+ ratings",
    //       cloudinaryImageId: "jpohkfkofao0hxez7vdh",
    //       cuisines: ["Burgers", "American"],
    //       tags: [],
    //       costForTwo: 35000,
    //       costForTwoString: "₹350 FOR TWO",
    //       deliveryTime: 31,
    //       minDeliveryTime: 31,
    //       maxDeliveryTime: 31,
    //       slaString: "31 MINS",
    //       lastMileTravel: 1.399999976158142,
    //       slugs: {
    //         restaurant: "burger-king-koramangala",
    //         city: "bangalore",
    //       },
    //       cityState: "1",
    //       address:
    //         "Unit No. 1, Davar Atrium, Corporation No. 118, Koramangala Industrial Area 7th Block, Bangalore 560095",
    //       locality: "7th Block",
    //       parentId: 166,
    //       unserviceable: false,
    //       veg: false,
    //       select: false,
    //       favorite: false,
    //       tradeCampaignHeaders: [],
    //       aggregatedDiscountInfo: {
    //         header: "Get every item under 129",
    //         shortDescriptionList: [
    //           {
    //             meta: "Get every item under 129",
    //             discountType: "FinalPrice",
    //             operationType: "RESTAURANT",
    //           },
    //           {
    //             meta: "FREE DELIVERY",
    //             discountType: "FREE_DELIVERY",
    //             operationType: "RESTAURANT",
    //           },
    //         ],
    //         descriptionList: [
    //           {
    //             meta: "Get every item under 129",
    //             discountType: "FinalPrice",
    //             operationType: "RESTAURANT",
    //           },
    //           {
    //             meta: "FREE DELIVERY",
    //             discountType: "FREE_DELIVERY",
    //             operationType: "RESTAURANT",
    //           },
    //         ],
    //         subHeader: "",
    //         headerType: 0,
    //         superFreedel: "",
    //       },
    //       aggregatedDiscountInfoV2: {
    //         header: "",
    //         shortDescriptionList: [
    //           {
    //             meta: "",
    //             discountType: "FinalPrice",
    //             operationType: "RESTAURANT",
    //           },
    //         ],
    //         descriptionList: [
    //           {
    //             meta: "Get every item under 129",
    //             discountType: "FinalPrice",
    //             operationType: "RESTAURANT",
    //           },
    //           {
    //             meta: "FREE DELIVERY",
    //             discountType: "FREE_DELIVERY",
    //             operationType: "RESTAURANT",
    //           },
    //         ],
    //         subHeader: "",
    //         headerType: 0,
    //         superFreedel: "",
    //       },
    //       chain: [],
    //       feeDetails: {
    //         fees: [],
    //         totalFees: 0,
    //         message: "",
    //         title: "",
    //         amount: "",
    //         icon: "",
    //       },
    //       availability: {
    //         opened: true,
    //         nextOpenMessage: "",
    //         nextCloseMessage: "",
    //       },
    //       longDistanceEnabled: 0,
    //       rainMode: "NONE",
    //       thirdPartyAddress: false,
    //       thirdPartyVendor: "",
    //       adTrackingID: "",
    //       badges: {
    //         imageBased: [],
    //         textBased: [],
    //         textExtendedBadges: [],
    //       },
    //       lastMileTravelString: "1.3 kms",
    //       hasSurge: false,
    //       sla: {
    //         restaurantId: "5934",
    //         deliveryTime: 31,
    //         minDeliveryTime: 31,
    //         maxDeliveryTime: 31,
    //         lastMileTravel: 1.399999976158142,
    //         lastMileDistance: 0,
    //         serviceability: "SERVICEABLE",
    //         rainMode: "NONE",
    //         longDistance: "NOT_LONG_DISTANCE",
    //         preferentialService: false,
    //         iconType: "EMPTY",
    //       },
    //       promoted: false,
    //       avgRating: "3.2",
    //       totalRatings: 1000,
    //       new: false,
    //     },
    //     subtype: "basic",
    //   },
    // ];

// ternary operator
    return listOfRest.length === 0 ? <Shimmer></Shimmer> : (
      <>
        <div className="searchDiv">
          <input placeholder="Search" className="searchBar" value= {searchText} onChange={(e) => setsearchText(e.target.value) } />

          <button className="searchbtn" onClick={ () =>{
            const filteredlistOfRestu = listOfRest.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
          setfilterlistOfRest(filteredlistOfRestu)}}>Search</button>
        </div>
        <div className="filter">
          <button className="filter-btn" onClick={() =>{
            const filteredlistOfRest = listOfRest?.filter((res)=>res.info.avgRating >4);
            setlistOfRest(filteredlistOfRest)}} >Top Rated Resturant</button>
        </div>
        <div className="res-container">
        {
    filterlistOfRest?.map((restaurant) =>  {
          console.log(restaurant);
          return (
            <RestaurantCard
              {...restaurant.info}
              key={restaurant.info.id}
            />
          );
        })}
        </div>
      </>
    );
  };

  export default Body;


