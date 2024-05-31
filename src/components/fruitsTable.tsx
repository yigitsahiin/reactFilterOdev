import React, { useState } from "react";
import { Typography, Checkbox } from "@mui/material";
import { TableWrapperProps, FruitsOrVeggies } from "./types";

export const FruitsTable = ({
  inputValue,
  isProductInStock,
}: TableWrapperProps) => {
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const fruits: FruitsOrVeggies = [
    { id: 0, name: "Apple", price: "1$", inStock: true },
    { id: 1, name: "Strawberry", price: "2$", inStock: true },
    { id: 2, name: "Cherry", price: "3$", inStock: false },
  ];

  const filteredFruits = fruits.filter((fruit) => {
    if (showInStockOnly && !fruit.inStock) return false;
    if (
      inputValue &&
      !fruit.name.toLowerCase().includes(inputValue.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <>
      <Typography variant="h6">Fruits</Typography>
      <Checkbox
        checked={showInStockOnly}
        onChange={() => setShowInStockOnly(!showInStockOnly)}
      />
      <Typography variant="body1" component="span">
        Only show products in stock
      </Typography>
      <table>
        <thead>
          <tr>
            <th>Fruit</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredFruits.map((fruit) => (
            <tr key={fruit.id}>
              <td>{fruit.name}</td>
              <td>{fruit.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
