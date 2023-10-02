
import React, { useState } from "react";

export const TodoForm = (props) => {

    const [newItem, setnewItem] = useState("Enter your Value");

    const handleOnchange = (event) => {
        setnewItem(event.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if(newItem === "") return
    
       props.onSubmit(newItem)
      };

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={handleOnchange}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
  )
}
