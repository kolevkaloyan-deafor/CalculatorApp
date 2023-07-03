import {
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { DigitButton } from "./components/DigitButton";
import OutputContainer from "./themes/OutputContainerStyle";
import CalculatorBase from "./themes/CalculatorBaseStyle";
import { OperationButton } from "./components/OperationButton";
import { CalculatorContext } from "./providers/CalculatorContext";

const App = () => {
     
  const useCalc = useContext(CalculatorContext);

  const {
    currentValue,
    operation,
    prevValue,
    selectOperation,
    setDigit,
    clear,
    del, 
    equals,
    percent
  } = useCalc

  return (
    <Container maxWidth="xs">
      <CalculatorBase sx={{width: 370}} elevation={5}>
        <Grid container spacing={1} alignContent={'center'}></Grid>
        <OutputContainer>
          <Typography textAlign={'right'}>
            {prevValue}
          </Typography>
          <Typography textAlign="right" variant="h3">{currentValue}</Typography>
        </OutputContainer>
        <Stack spacing={2}>
        <Stack columnGap={3} direction={"row"}>
      
          <OperationButton backgroundColor="#9e9e9e" textColor="black" operation={"C"} selectOperation={() => clear()} />
          <OperationButton backgroundColor="#9e9e9e" textColor="black" operation={"DEL"} selectOperation={() => del()} />
          <OperationButton backgroundColor="#9e9e9e" textColor="black" operation={"%"} selectOperation={() => percent()} />
          <OperationButton backgroundColor="#ff9800" operation={"÷"} selectOperation={() => selectOperation("÷")} />
        </Stack>
        <Stack columnGap={3} direction={"row"}>
         <DigitButton widthSize={10} digit={"7"} enterDigit={() => setDigit('7')}/>
         <DigitButton widthSize={10} digit={"8"} enterDigit={() => setDigit('8')}/>
         <DigitButton widthSize={10} digit={"9"} enterDigit={() => setDigit('9')}/>
          <OperationButton backgroundColor="#ff9800" operation={"x"} selectOperation={() => selectOperation("x")} />
        </Stack>
        <Stack columnGap={3} direction={"row"}>
         <DigitButton widthSize={10} digit={"4"} enterDigit={() => setDigit('4')}/>
         <DigitButton widthSize={10} digit={"5"} enterDigit={() => setDigit('5')}/>
         <DigitButton widthSize={10} digit={"6"} enterDigit={() => setDigit('6')}/>
          <OperationButton backgroundColor="#ff9800" operation={"-"} selectOperation={() => selectOperation("-")} />
        </Stack>
        <Stack columnGap={3} direction={"row"}>
         <DigitButton widthSize={10} digit={"1"} enterDigit={() => setDigit('1')}/>
         <DigitButton widthSize={10} digit={"2"} enterDigit={() => setDigit('2')}/>
         <DigitButton widthSize={10} digit={"3"} enterDigit={() => setDigit('3')}/>
          <OperationButton backgroundColor="#ff9800" operation={"+"} selectOperation={() => selectOperation("+")} />
        </Stack>
        <Stack columnGap={3} direction={"row"}>
        <DigitButton widthSize={150} digit={"0"} enterDigit={() => setDigit('0')}/>
          <DigitButton digit={"."} enterDigit={() => setDigit('.')} />
          <OperationButton backgroundColor="#ff9800" operation={"="} selectOperation={() => equals()} />
        </Stack>
        </Stack>
      </CalculatorBase>
    </Container>
  );
}

export default App;
