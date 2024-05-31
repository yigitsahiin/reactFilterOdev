import React, { useState } from "react";
import { Typography, Checkbox } from "@mui/material";
import { TableWrapperProps, FruitsOrVeggies } from "./types";

export const VegetablesTable = ({
  inputValue,
  isProductInStock,
}: TableWrapperProps) => {
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const veggies: FruitsOrVeggies = [
    { id: 0, name: "Lettuce", price: "1$", inStock: true },
    { id: 1, name: "Tomatoes", price: "2$", inStock: true },
    { id: 2, name: "Pickles", price: "3$", inStock: false },
  ];

  const filteredVeggies = veggies.filter((veggy) => {
    if (showInStockOnly && !veggy.inStock) return false;
    if (
      inputValue &&
      !veggy.name.toLowerCase().includes(inputValue.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <>
      <Typography variant="h6">Vegetables</Typography>
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
            <th>Vegetable</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredVeggies.map((veggy) => (
            <tr key={veggy.id}>
              <td>{veggy.name}</td>
              <td>{veggy.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
