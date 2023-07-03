import { Button, Grid } from "@mui/material";

interface OperationButtonProps {

  operation: string;
  selectOperation: (digit: string) => void;
  widthSize?: number
  backgroundColor?: string
  textColor?: string
}

export const OperationButton: React.FC<OperationButtonProps> = ({
  operation,
  selectOperation,
  widthSize,
  backgroundColor,
  textColor
}) => {
  return (
    <Grid item xs={10}>
      <Button
        size="large"
        variant="contained"
        sx={{width: widthSize, backgroundColor: backgroundColor, color: textColor}}
        onClick={() => selectOperation(operation)}
      >
        {operation}
      </Button>
    </Grid>
  );
};
