import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";

function ItemList(props) {
  let emptyArray = props.productsList.lenght === 0;

  return (
    <FlexWrapper>
      {emptyArray ?
        props.feedbackMsg ?
          <span style={{backgroundColor: "pink"}}>{props.feedbackMsg}</span>
          :
          <Loader color="grey" size={90} />
        :
        props.productsList.map( (product) => (
          <Item key={product.id} product={product} />
        ))}
      {props.productsList.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </FlexWrapper>
  );
}

export default ItemList;