import { useEffect,useState } from "react";
              import Shimmer from "./shimmer";
              import { useParams } from "react-router-dom";
              import { MENU_API } from "../../utils/constant";
              
              const ResturantMenu = () =>{
              
                const [resInfo, setResInfo] = useState(null);
              
                const {resId} = useParams();
            
               
                useEffect ( () =>{
              fetchMenu();
                }, []
              
                );

              
              
                const fetchMenu = async () => {
              const data = await fetch(MENU_API
                +
                resId
                
              );
              
              const json = await data.json();
              
              console.log(json);
              setResInfo(json.data);
                };

                if(resInfo === null)  return  <Shimmer /> ;

                const {name} = resInfo?.cards[2]?.card?.card?.info;

                const {itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
                console.log(itemCards)
             
                return (
                  <div className="menu">
                     
                     <h3>{name}</h3>
                    
                     <h4><b>{resInfo?.cards[2]?.card?.card?.info?.costForTwo/100}</b></h4>
                    <h5>{resInfo?.cards[2]?.card?.card?.info?.avgRating}</h5>

                    <h3>Menu</h3>
                    <ul>
{itemCards.map((item) =>
<li  key={item.card.info.id}> {item.card.info.name } - {"Rs"} {item.card.info.price/100 } <div className="des-div">{item.card.info.description } </div>

</li>)}
                    {/* <li> {itemCards[0].card.info.name }</li>
                    <li> {itemCards[1].card.info.name }</li> */}
                     
                    </ul>
                  </div>
                );
              };
              
              
              export default ResturantMenu;