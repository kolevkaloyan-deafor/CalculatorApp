import { ReactNode, useState, createContext } from "react";

interface ICalcContext {
  currentValue: string;
  operation: string;
  prevValue: string;
  selectOperation: (operation: string) => void;
  setDigit: (digit: string) => void;
  clear: () => void;
  del: () => void;
  equals: () => void;
  percent: () => void;
}

interface CalcProviderProps {
  children: ReactNode;
}

export const CalculatorContext = createContext<ICalcContext>(
  {} as ICalcContext
);

const CalcProvider = ({ children }: CalcProviderProps) => {
  const [currentValue, setCurrentValue] = useState<string>("0");
  const [operation, setOperation] = useState<string>("");
  const [prevValue, setPrevValue] = useState<string>("");
  const [overwrite, setOverwrite] = useState<boolean>(true);

  const selectOperation = (oper: string) => {
    if (currentValue === "0") return;
    if (prevValue) {
      const val = calculate();
      setCurrentValue(`0`);
      setPrevValue(`${val}`);
    } else {
      setPrevValue(currentValue);
    }
    setOperation(oper);
    setOverwrite(true);
  };

  const setDigit = (digit: string) => {
    if (currentValue[0] === "0" && digit === "0") return;
    if (currentValue.includes(".") && digit === ".") return;

    if (overwrite && digit !== ".") {
      setCurrentValue(digit);
    } else {
      setCurrentValue(`${currentValue}${digit}`);
      if (currentValue[0] === "0") setCurrentValue(digit);
    }
    setOverwrite(false);
  };

  const clear = () => {
    setCurrentValue("0");
    setPrevValue("");
    setOverwrite(true);
    setOperation("");
  };

  const del = () => {
    if (currentValue.length > 1) {
      setCurrentValue(currentValue.slice(0, -1));
    } else if (prevValue) {
      setCurrentValue(prevValue);
      setPrevValue("");
    } else {
      setCurrentValue("0");
      setOperation("");
      setOverwrite(true);
    }
  };

  const percent = () => {
    const curr = parseFloat(currentValue);
    setCurrentValue((curr / 100).toString());
  };

  const calculate = () => {
    if (!prevValue && !currentValue) return currentValue;

    let previous = parseFloat(prevValue);
    let current = parseFloat(currentValue);

    let result;
    switch (operation) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "x":
        result = previous * current;
        break;
      case "÷":
        result = previous / current;
        break;
    }

    return result;
  };

  const equals = () => {
    if (!prevValue) return;
    const val = calculate();
    setCurrentValue(`${val}`);
    setPrevValue("");
    setOperation("");
    setOverwrite(true);
  };

  const value = {
    currentValue,
    operation,
    prevValue,
    selectOperation,
    setDigit,
    clear,
    del,
    equals,
    percent,
  };

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalcProvider;
