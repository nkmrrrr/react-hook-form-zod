import useSampleForm from "../hooks/useSampleForm";

const SampleForm = () => {
  const {
    form: { control, handleSubmit, onSubmit },
    options: { options, optionsWithColor },
  } = useSampleForm();
};

export default SampleForm;
