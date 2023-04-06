import React from "react";
import classes from "./BookingSite.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Button from '@mui/material/Button';

function BookingSite() {
  return (
    <div className={classes.maindiv}>
      <div className={classes.row}>
        <div>
          <AiOutlineHeart />
        </div>
        <div className={classes.description}>
          City Gold: Ashram Road
          <span>2nd Floor, Above Mcd. Food Court, Ashram Road</span>
        </div>
        <div>
          <AiOutlineQuestionCircle />
        </div>
        <div className="btns">
          <div>
          <Button variant="outlined" href="#outlined-buttons">
       12:05
      </Button>
          </div>
          <div>. cancelation available</div>
        </div>
      </div>
      <div className={classes.row}>
        <div>
          <AiOutlineHeart />
        </div>
        <div className={classes.description}>
          City Gold: Ashram Road
          <span>2nd Floor, Above Mcd. Food Court, Ashram Road</span>
        </div>
        <div>
          <AiOutlineQuestionCircle />
        </div>
        <div className="btns">
          <div>
          <Button variant="outlined" href="#outlined-buttons">
        1:00
      </Button>
          </div>
          <div>. cancelation available</div>
        </div>
      </div>
      <div className={classes.row}>
        <div>
          <AiOutlineHeart />
        </div>
        <div className={classes.description}>
          City Gold: Ashram Road
          <span>2nd Floor, Above Mcd. Food Court, Ashram Road</span>
        </div>
        <div>
          <AiOutlineQuestionCircle />
        </div>
        <div className="btns">
          <div>
          <Button variant="outlined" href="#outlined-buttons">
       2:00
      </Button>
          </div>
          <div>. cancelation available</div>
        </div>
      </div>
    </div>
  );
}

export default BookingSite;
