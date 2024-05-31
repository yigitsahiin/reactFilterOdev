// // ComponentDidMount() ------ useEffect (()=>{},[]);

// // ComponentShouldUpdate() ------- useEffect (() => [inputValue];

// // ComponentWillUnmount() ------- useEffect (() => { return () => {} , []);

// import { Dispatch, SetStateAction, useEffect, useState } from "react";

// import { Checkbox, TextField, Typography, Stack } from "@mui/material";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };
// // type InputProps = 'standard' | 'outlined' | 'contained'; TYPESCRİPT İNCELEMESİ

// // export const InputArea = ({ inputValue, setInputValue }) => {
// //   const [inputValue, setInputValue] = useState<string>("");
// //   const [isProductInStock, setIsProductInStock] = useState(false);

// type InputAreaProps = {
//   isimler: string;
//   inputValue: string;
//   setInputValue: Dispatch<SetStateAction<string>>;
//   isProductInStock: boolean;
//   setIsProductInStock: Dispatch<SetStateAction<boolean>>;
// };

// export const InputArea = ({
//   isimler,
//   inputValue,
//   setInputValue,
//   isProductInStock,
//   setIsProductInStock,
// }: InputAreaProps) => {
//   console.log(isimler);

//   //   useEffect(() => {
//   //     console.log(isProductInStock);
//   //   }, [isProductInStock]);
//   // Yukarıda effectte yaptığımız ve ınput areanın içine yazdığımız false durumu checkbox tiklendiğinde false tiklenmediğinde true durumu

//   // const input : InputProps = 'contained'; TYPESCRİPT
//   return (
//     <Stack>
//       <TextField
//         label="Search Filter"
//         variant="standard"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <Stack
//         direction="row"
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//       >
//         <Checkbox
//           {...label}
//           checked={isProductInStock}
//           onChange={(e) => setIsProductInStock(e.target.checked)}
//         />
//         <Typography variant="body1" component="span">
//           Only show products in stock
//         </Typography>
//       </Stack>
//     </Stack>
//   );
// };

import { Checkbox, TextField, Typography, Stack } from "@mui/material";
import { InputAreaProps } from "./types";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const InputArea = ({
  inputValue,
  setInputValue,
  isProductInStock,
  setIsProductInStock,
}: InputAreaProps) => {
  return (
    <Stack>
      <TextField
        label="Search Filter"
        variant="standard"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Stack
        direction="row"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {/* <Checkbox
          {...label}
          checked={isProductInStock}
          onChange={(e) => setIsProductInStock(e.target.checked)}
        />
        <Typography variant="body1" component="span">
          Only show products in stock
        </Typography> */}
      </Stack>
    </Stack>
  );
};
