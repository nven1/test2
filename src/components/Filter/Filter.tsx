import { useAppDispatch } from "../../app/hooks";
import { RangeType } from "../../types/types";
import { setRange } from "../../reducers/CalendarReducer";
import { Container, FilterText } from "./Filter.styled";
import { Button1 } from "../../styled/common";

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleRangeChange = (range: RangeType) => {
    dispatch(setRange(range));
  };

  return (
    <Container>
      <FilterText>Range </FilterText>
      <Button1 onClick={() => handleRangeChange(0)}>1 day</Button1>
      <Button1 onClick={() => handleRangeChange(7)}>1 week</Button1>
      <Button1 onClick={() => handleRangeChange(30)}>1 month</Button1>
    </Container>
  );
};

export default Filter;
