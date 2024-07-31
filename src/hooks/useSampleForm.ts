import { useForm, useWatch } from "react-hook-form";
import {
  sampleFormSchema,
  SampleFormSchema,
} from "../schema/sample-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";

const useSampleForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SampleFormSchema>({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    defaultValues: undefined,
    resolver: zodResolver(sampleFormSchema),
  });

  const watchedInput = useWatch({ control });
  console.log("errors", errors); // フォームのエラー状況
  console.log("watchedInput", watchedInput); // フォームの入力値

  const onSubmit = (data: SampleFormSchema) => {
    console.log("data", data); // フォームの入力値
  };

  return {
    form: {
      control,
      handleSubmit,
      onSubmit,
    },
    options: {
      options,
      optionsWithColor,
    },
  };
};

export default useSampleForm;

const options = [
  {
    value: "候補1",
    label: "候補1",
  },
  {
    value: "候補2",
    label: "候補2",
  },
  {
    value: "候補3",
    label: "候補3",
  },
] as const satisfies SelectOptions;

const optionsWithColor = [
  {
    value: "赤",
    label: "あか",
    color: "red",
  },
  {
    value: "青",
    label: "あお",
    color: "blue",
  },
  {
    value: "緑",
    label: "みどり",
    color: "green",
  },
] as const;
