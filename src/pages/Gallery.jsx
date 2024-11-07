import React from "react";
import Navbar from "../Components/Navbar";
import { supabase } from '../client'
import { useState , useEffect} from "react";
import Card from "../Components/Card";


const Gallery = (props) => {
    const [candies, setCandies] = useState([]);

    useEffect(() => {
        setCandies(props.data);
        
        const fetchCandies = async () => {
            const {data} = await supabase
              .from('candies')
              .select();
          
            // set state of candies
            setCandies(data)
          }
        fetchCandies();
    }, [props]);

    return (
        <div className="gallery">
            <Navbar />
            {
                candies && candies.length > 0 ?
                candies.map((candy,index) => 
                   <Card key={index} id={candy.id} name={candy.name} sweetness={candy.sweetness} color={candy.color}/>
                ) : <h2>{'No Candies Yet 😞'}</h2>
            }
        </div>
    )
}

export default Gallery