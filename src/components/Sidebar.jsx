import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

const Sidebar = () => {
  let [searchParam, setSearchParam] = useSearchParams();
  let [checkBox, setCheckBox] = useState(searchParam.getAll("category") || []);
  let [radio, setRadio] = useState(searchParam.get("order"));

  useEffect(() => {
    let param = {
      category: checkBox,
    };

    radio && (param.order = radio);

    setSearchParam(param);
  }, [checkBox, radio]);

  let handleChange = (e) => {
    let data = [];
    if (checkBox.includes(e.target.value)) {
      data = checkBox.filter((ele) => ele !== e.target.value);
    } else {
      data = [...checkBox, e.target.value];
    }
    setCheckBox(data);
  };

  let handleClick = (e) => {
    setRadio(e.target.value);
  };

  return (
    <DIV>
      <p>FILTERS</p>
      <hr />
      <br />
      <b>Filter By Category</b>
      <br /> <br />
      <div className="cate">
        <div>
          <label>Mens</label>
          <input
            type="checkbox"
            value="men"
            onChange={handleChange}
            checked={checkBox.includes("men")}
          />
        </div>
        <div>
          <label>Women</label>
          <input
            type="checkbox"
            value="women"
            onChange={handleChange}
            checked={checkBox.includes("women")}
          />
        </div>
        <div>
          <label>Electronics</label>
          <input
            type="checkbox"
            value="electronics"
            onChange={handleChange}
            checked={checkBox.includes("electronics")}
          />
        </div>

        <div>
          <label>Jewelery</label>
          <input
            type="checkbox"
            value="jewelery"
            onChange={handleChange}
            checked={checkBox.includes("jewelery")}
          />
        </div>
        <br />
      </div>
      <hr />
      <b>Sort By Price</b>
      <br /> <br />
      <div>
        <div onClick={handleClick}>
          <label>Low to High</label>
          <input
            type="radio"
            name="order"
            value="asc"
            defaultChecked={radio == "asc"}
          />
        </div>
        <div onClick={handleClick}>
          <label>High to Low</label>
          <input
            type="radio"
            name="order"
            value="desc"
            defaultChecked={radio == "desc"}
          />
        </div>
      </div>
    </DIV>
  );
};

export default Sidebar;

let DIV = styled.div`
  padding: 10px;
  p {
    text-align: center;
    font-weight: 600;
  }
`;
