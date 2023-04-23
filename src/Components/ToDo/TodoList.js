import react, { useState, useEffect } from "react";
import "../ToDo/TodoList.css";
import PushPinTwoToneIcon from "@mui/icons-material/PushPinTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { Button, TextField } from "@mui/material";

export default function TodoList() {
  const [list, setList] = useState([
    "Pay Electricity bills",
    "Get Groceries",
    "Get Dentist Appointment",
  ]);
  const [refresh, setRefresh] = useState(false);
  // let newItem = "";
  const [newItem, setNewItem] = useState("");

  const handleClick = () => {
    console.log("click");
    list.push(newItem);
    console.log("list", list);
    setRefresh(true);
    console.log(refresh);
    setNewItem("");
  };

  const handleChange = (e) => {
    setNewItem(e.target.value);
    setRefresh(false);
  };

  const handleRemove = (index) => {
    const value = [...list];
    const updatedList = value.filter((each, i) => i !== index);
    setList(updatedList);
    setRefresh(false);
  };

  return (
    <>
      <div className="outer">
        <h1>ToDo List</h1>
      </div>
      <div
        style={{
          border: "1px solid white",
          backgroundColor: "rgb(226 212 193)",
          padding: "30px",
        }}
      >
        <div>
          <PushPinTwoToneIcon />
        </div>

        <label>Stike throght all completed items</label>
        <div style={{ paddingTop: "50px" }}>
          <div>
            {refresh || list.length !== 0
              ? list.map((each, index) => {
                  console.log(index);
                  return (
                    <>
                      <ul>
                        <div style={{ textAlign: "initial" }} key={index}>
                          <input
                            type="checkbox"
                            name="packersOff"
                            id="packers"
                            value="1"
                          />{" "}
                          <label for="packers" class="strikethrough">
                            {each}
                          </label>{" "}
                          <Button onClick={() => handleRemove(index)}>
                            <DeleteTwoToneIcon fontSize="small" />
                          </Button>
                        </div>
                      </ul>
                    </>
                  );
                })
              : null}
          </div>
          <div style={{ display: "initial" }}>
            <TextField
              variant="standard"
              value={newItem}
              placeholder="add new item"
              onChange={(e) => handleChange(e)}
            />{" "}
            <Button variant="contained" onClick={() => handleClick()}>
              Add
            </Button>
          </div>
          <div style={{ paddingTop: "90px" }}>
            {list.length !== 0 ? (
              <Button variant="contained" onClick={() => setList([])}>
                Refresh
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
