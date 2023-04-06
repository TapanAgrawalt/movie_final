import React, { Fragment, useState, useEffect } from "react";
import classes from "./TicketBookingPage.module.css";

function TicketButton(props: any) {
  const [active, setActive] = useState(false);
  const { btn, btncolor } = classes;
const[state,setState]=useState<any>(true)
  const Togglebutton = () => {
    setActive(!active);
    //  console.log("selected seats are",props.seat+props.id);
    props.onUpdate(props.seat + props.id, props.seat);
  };
  useEffect(() => {
    if (props.no==(props.seat + props.id)) {
      setState(!state);
    }
    // alert("hello")
  }, []);
  return (
    <Fragment>
    {state ? (
      <button
        onClick={Togglebutton}
        className={`${classes.btn} ${active ? classes.btncolor : ""}`}
      >
        {props.seat}
        {props.id}
      </button>
    ) : (
      <button className={classes.btninactive}>
        {props.seat}
        {props.id}
      </button>
    )}

  </Fragment>
  );
}

export default TicketButton;
