import { useState } from "react";
import { InputArea } from "./inputArea";
import { TableWrapper } from "./tableWrapper";

export const AppWrapper = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isProductInStock, setIsProductInStock] = useState(false);

  return (
    <>
      <InputArea
        inputValue={inputValue}
        setInputValue={setInputValue}
        isProductInStock={isProductInStock}
        setIsProductInStock={setIsProductInStock} // Burada verdiğimiz isimleri gidip input areada aynı isimle yakalayacaz
      />
      <TableWrapper
        inputValue={inputValue}
        isProductInStock={isProductInStock}
      />
    </>
  );
};
