import React from "react";
import classes from "./Filter.module.css";
import { AiOutlineSearch } from "react-icons/ai";
function Filter() {
  return (
    <div className={classes.mar}>
      <div className={classes.row}>
       <div> <div>MON</div><span>1</span></div>
        <div><div>TUE</div><span>2</span></div>
       <div> <div>WED</div><span>3</span></div>
        <div><div>THR</div><span>4</span></div>
     <div>   <div>FRI</div><span>5</span></div>
  <div>      <div>SAT</div><span>6</span></div>
      </div>
      
      <div className={classes.disp}>
        <AiOutlineSearch className={classes.icon}/>
        <div>
          <input
            className={classes.input}
            type="text"
            placeholder="search"
          ></input>
        </div>
        <div className={classes.selectitem}>
          <select>
            <option value="option1">Select Price Range</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <select>
            <option value="option1">Select Show Timing</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <select>
            <option value="option1">Select Area</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
         
        </div>
      </div>
    </div>
  );
}

export default Filter;
