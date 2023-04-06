import { color } from "@mui/system";
import React, { useEffect, useState } from "react";
import classes from "./TicketBookingPage.module.css";
import Button from "@mui/material/Button";
import TicketButton from "./TicketButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useLocation } from "react-router-dom";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function TicketBookingPage() {
  const location = useLocation();
  const [moviename, setMovieName] = useState<any>("tapan");
  const [bookedSeat, setbookedSeat] = useState<any>();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const message = searchParams.get("message");
    setMovieName(message);
  }, [location]);

  const [loginPerson, setLoginPerson] = useState<any>();

  useEffect(() => {
    let name = localStorage.getItem("loginname");
    if (name !== null) {
      const username = name.slice(0, name.indexOf("@"));
      setLoginPerson(username);
    }

    movieGet();
  }, []);

  const movieGet = async () => {
    let c = localStorage.getItem("movieName");
    // console.log("storage",c)
    let response = await fetch("http://localhost:3002/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        movieName: c,
      }),
    });

    const res = await response.json();
    // console.log("api booked seat : ",res.data.bookedSeat);
    setbookedSeat(res.data.bookedSeat);
  };
  console.log("booked seats arethere:", bookedSeat);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const arr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
  ];
  const [final, setFinal] = useState<any>(0);
  const { btn, btncolor } = classes;
  const Togglebutton = () => {
    setActive(!active);
  };
  const [myArray, setMyArray] = useState<any>([]);

  const updateArray = (newValue: any, seat: any) => {
    if (myArray.includes(newValue)) {
      // If the new value already exists in the array, remove it using filter
      if (seat == "X") {
        setCount(count - 1);
      }
      const newArray = myArray.filter((x: any) => {
        return x !== newValue;
      });
      setMyArray(newArray);
    } else {
      // Otherwise, add the new value to the array
      if (seat == "X") {
        setCount(count + 1);
      }
      setMyArray([...myArray, newValue]);
    }
    // console.log(seat);
  };
  // console.log(count);
  const book = () => {
    const price = (myArray.length - count) * 180;
    const price2 = count * 250;
    const finals = price + price2;
    setFinal(finals);
    handleOpen();
    movieSend();
  };

  const movieSend = async () => {
    let response = await fetch("http://localhost:3002/seatBooking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        movieName: moviename,
        seatNumber: myArray,
      }),
    });

    const res = await response.json();
    // console.log(res);
  };

  // console.log(myArray);
  // console.log(moviename);

  // let a = ["A15", "A16", "A25", "A5", "A2"];
let a="A22"
  return (
    <div className={classes.maindiv}>
      <div className={classes.imgcontainer}>
        <img
          height="188px"
          width="1164px"
          src="https://www.figma.com/file/ufAJgNV1SNSf3HM9Yy6Uo2/image/a4ded4c5ba58d04080fdfa8525c56bb5eb3b6203?fuid=1217755106454056053"
        />
      </div>
      <div className={classes.status}>
        <div className={classes.align}>
          <div className={classes.spanbox1}></div> Available
        </div>
        <div className={classes.align}>
          <div className={classes.spanbox2}></div> unAvailable
        </div>
        <div className={classes.align}>
          <div className={classes.spanbox3}></div> Selected
        </div>
      </div>
      <div className={classes.seats}>
        <div>Classic(180.00)</div>
        <div className={classes.individualseats}>
          <div className={classes.left}>
            <div>
              {arr.map((id) => (
                <TicketButton
                  key={id}
                  id={id}
                  seat="A"
                  onUpdate={updateArray}
                  no={a}
                />
              ))}
            </div>
          </div>

          <div className={classes.right}>
            <div>
              {arr.map((id) => (
                <TicketButton
                  key={id}
                  id={id}
                  seat="B"
                  onUpdate={updateArray}
                />
              ))}
            </div>
          </div>
        </div>
        <div>Prime(250.00)</div>
        <div className={classes.downdiv}>
          <div>
            {arr.map((id) => (
              <TicketButton key={id} id={id} seat="X" onUpdate={updateArray} />
            ))}
          </div>
        </div>
        <button onClick={book} className={classes.bookbtn}>
          Book Tickets
        </button>
        {/* <h3>Total Price:{final}$</h3> */}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ticket Detail
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            PersonName:{loginPerson}
            <br />
            Seats: {myArray.join(",")}
            <br />
            MovieName: {moviename}
            <br />
            Price: {final} ₹
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default TicketBookingPage;
