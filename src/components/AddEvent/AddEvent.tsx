import { useForm } from "react-hook-form";
import moment from "moment";
import { ErrorMessage } from "@hookform/error-message";
import CalendarDataAccess from "../../data_access/CalendarDataAccess";
import { useAppDispatch } from "../../app/hooks";
import { selectRange } from "../../reducers/CalendarReducer";
import { useSelector } from "react-redux";
import {
  Container,
  ErrorText,
  FormTitle,
  Input,
  SubmitButton,
} from "./AddEvent.styled";
import Endpoints from "../../app/endpoints";
import { useNavigate } from "react-router-dom";

interface IAddEvent {
  summary: string;
  start: string;
  end: string;
}

const AddEvent: React.FC = () => {
  const dispatch = useAppDispatch();
  const range = useSelector(selectRange);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    clearErrors,
    formState: { errors },
  } = useForm<IAddEvent>();

  const onSubmit = (data: IAddEvent) => {
    if (data.start > data.end) {
      setError("end", {
        message: "End date cannot be bigger than start date",
        type: "required",
      });
      return;
    }

    const start = moment(data.start).toISOString();
    const end = moment(data.end).toISOString();
    CalendarDataAccess.addEvent(data.summary, start, end, onSuccess);
  };

  const onSuccess = () => {
    CalendarDataAccess.getEventList(dispatch)(range);
    navigate(Endpoints.appEndpoints.home);
  };

  const onEndInputBlur = () => {
    const start = getValues("start");
    const end = getValues("end");
    if (start !== "") {
      if (start > end) {
        setError("end", {
          message: "End date cannot be bigger than start date",
          type: "required",
        });
      } else {
        clearErrors("end");
      }
    }
  };

  const onStartInputBlur = () => {
    const start = getValues("start");
    const end = getValues("end");
    if (end !== "") {
      if (start > end) {
        setError("end", {
          message: "End date cannot be bigger than start date",
          type: "required",
        });
      } else {
        clearErrors("end");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <FormTitle>Add event</FormTitle>
        <Input
          placeholder="Summary"
          {...register("summary", { required: "This is required." })}
        />
        <ErrorMessage
          name="summary"
          errors={errors}
          render={({ message }) => <ErrorText>{message}</ErrorText>}
        />
        <Input
          type="datetime-local"
          {...register("start", { required: "This is required." })}
          onBlur={onStartInputBlur}
        />
        <ErrorMessage
          name="start"
          errors={errors}
          render={({ message }) => <ErrorText>{message}</ErrorText>}
        />
        <Input
          type="datetime-local"
          {...register("end", { required: "This is required." })}
          onBlur={onEndInputBlur}
        />
        <ErrorMessage
          name="end"
          errors={errors}
          render={({ message }) => <ErrorText>{message}</ErrorText>}
        />
        <SubmitButton type="submit">submit</SubmitButton>
      </Container>
    </form>
  );
};

export default AddEvent;
