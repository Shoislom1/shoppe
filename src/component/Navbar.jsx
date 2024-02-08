import React, { useState } from "react";
import "./navbar.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const [age, setAge] = React.useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="navbar" id="navbar">
      <div className={open ? "logo logo-res" : "logo"}>
        <div
          className={open ? "start-logo start-logo-res" : "start-logo"}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a href="">
            <h1>
              <img src="/Frame 1.png" alt="" /> <span>Shop</span>
            </h1>
          </a>
          <FormControl
            sx={{ m: 1, minWidth: 150 }}
            className="form"
            size="small"
          >
            <InputLabel id="demo-select-small-label">Manzil</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Andijon</MenuItem>
              <MenuItem value={20}>Toshkent</MenuItem>
              <MenuItem value={30}>Fargona</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={open ? "div-input div-input-res" : "div-input"}>
          <input
            type="text"
            placeholder="Maxsulot va Turkumni izlash"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button
            style={{ outline: "none", height: "34px" }}
            onClick={() => setInputValue("")}
          >
            {" "}
            <img src="/Vector.png" alt="" />
          </button>
        </div>
        <div className={open ? "buttons-div buttons-div-res" : "buttons-div"}>
          <button className="button">
            <span>
              <img src="/Group.png" alt="" />
            </span>{" "}
            Kirish
          </button>
          <button className="button">
            <span>
              <img src="/Frame.png" alt="" />
            </span>{" "}
            Saralangan
          </button>
          <button className="button">
            <span>
              <img src="/Frame2.png" alt="" />
            </span>{" "}
            Savat
          </button>
        </div>
        <i
          onClick={() => setOpen((prev) => !prev)}
          className={open ? "bx bx-x" : "bx bx-menu-alt-right"}
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
