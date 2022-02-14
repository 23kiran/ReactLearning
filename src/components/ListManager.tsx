import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form } from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";

const listReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        list: state.list.concat({ name: action.name, id: action.id })
      };
    case "NEW_LIST":
      return {
        list: state.list = []
      };
    default:
      throw new Error();
  }
};

const ListManager = () => {
  const [listData, dispatchListData] = React.useReducer(listReducer, {
    list: [],
    isShowList: true
  });
  const [name, setName] = React.useState("");

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        dispatchListData({ type: "NEW_LIST", name: "", id: "" });
        res.data.data.map((item: any) =>
          dispatchListData({
            type: "ADD_ITEM",
            name: item.first_name,
            id: item.id
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    dispatchListData({ type: "ADD_ITEM", name, id: uuidv4() });
    //save to dataverse
    setName("");
  }

  return (
    <div>
      <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />

      <List list={listData.list} />
    </div>
  );
};

const AddItem = ({ name, onChange, onAdd }) => (
  <div>
    <input type="text" value={name} onChange={onChange} />
    <button type="button" onClick={onAdd}>
      Add
    </button>
  </div>
);

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);

export default ListManager;
