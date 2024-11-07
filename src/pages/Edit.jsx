import React from "react";
import Navbar from "../Components/Navbar";
import { supabase } from '../client';
import { useParams } from "react-router-dom";
import { useState } from "react";

const Edit = ({data}) => {
    const {id} = useParams();
    const [candy, setCandy] = useState({name: "", sweetness: "", color: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCandy( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updatePost = async (event) => {
        event.preventDefault();

        await supabase
          .from('candies')
          .update({name: candy.name, sweetness: candy.sweetness, color: candy.color})
          .eq('id', id);

          window.location = "/";
    }

    const deleteCandy = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('candies')
          .delete()
          .eq('id', id); 
      
        window.location = "/";
      }

    return (
        <div className="edit">
            <Navbar />
            <h2>Update your candy!</h2>
            {/* <h3> 
                Name: {candy.name}, Sweetness: {candy.sweetness}, Color: {candy.color}
            </h3>            */}
            <form class="form-container">
                <div className="customizations-container">
                    <div class="mini-container">
                        <label><h3>Name:</h3></label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Enter a candy name" 
                            value={candy.name} 
                            onChange={handleChange}
                        />
                    </div>
                    <div class="mini-container">
                        <label><h3>Sweet or Sour:</h3></label>
                        <li>
                            <input 
                                id="Sweet" 
                                name="sweetness" 
                                type="radio" 
                                value="Sweet" 
                                checked={candy.sweetness === "Sweet"}
                                onChange={handleChange}
                            />Sweet
                        </li>
                        <li>
                            <input 
                                id="Sour" 
                                name="sweetness" 
                                type="radio" 
                                value="Sour" 
                                checked={candy.sweetness === "Sour"}
                                onChange={handleChange}
                            />Sour
                        </li>
                    </div>
                    <div class="mini-container">
                        <label><h3>Color:</h3></label>
                        {["Red", "Purple", "Yellow", "Orange", "Pink", "Rainbow"].map((color) => (
                            <li key={color}>
                                <input 
                                    id={color} 
                                    name="color" 
                                    type="radio" 
                                    value={color}
                                    checked={candy.color === color}
                                    onChange={handleChange}
                                />{color}
                            </li>
                        ))}
                    </div>
                </div>
                <button type='submit' onClick={updatePost}>Update Candy</button>
            </form>
            <br></br>
            <button type="button" className="deleteButton" onClick={deleteCandy}>Delete Candy</button>

        </div>
    )
}

export default Edit