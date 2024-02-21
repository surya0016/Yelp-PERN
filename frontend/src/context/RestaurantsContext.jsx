import React,{useState, createContext} from "react";
import Restaurant from "../components/Restaurant";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = props => {
    const [restaurant, setRestaurant] = useState("something");
    
    return(
        <RestaurantsContext.Provider value={{restaurant, setRestaurant}}>
            {props.children}
        </RestaurantsContext.Provider>
    )
}


