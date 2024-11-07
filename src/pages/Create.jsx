import React from "react";
import Navbar from "../Components/Navbar";
import { supabase } from '../client'
import { useState } from "react";


const Create = () => {
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
    const createPost = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('candies')
          .insert({name: candy.name, sweetness: candy.sweetness, color: candy.color})
          .select();
      
        window.location = "/";
    }

    return (
        <div className="create">
            <Navbar />
            <h2>Create a new candy!</h2>
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
                <button type='submit' onClick={createPost}>Create Candy!</button>
            </form>
        </div>
    )
}

export default Create