import { Button, Grid, styled } from "@mui/material";

interface DigitButtonProps {
  digit: string;
  enterDigit: (digit: string) => void;
  widthSize?: number | string;
  backgroundColor?: string;
}

export const DigitButton: React.FC<DigitButtonProps> = ({
  digit,
  widthSize,
  enterDigit,
  backgroundColor
}) => {
  return (
      <Button
        size="large"
        variant="contained"
        sx={{width: widthSize, backgroundColor: backgroundColor}}
        onClick={() => enterDigit(digit)}
      >
        {digit}
      </Button>
  );
};
