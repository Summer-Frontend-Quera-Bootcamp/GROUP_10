import {
  Typography,
  OutlinedInput,
  Button,
  Checkbox,
  Link,
} from "@mui/material";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IInputFormProps } from "../../../models/interfaces";

// Create the InputForm component
export const InputForm: React.FC<IInputFormProps> = ({
  schema,
  fields,
  onSubmit,
  formTitle,
  submitLabel,
}) => {
  // Initialize useForm hook with Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
  });

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      {/* Form title */}
      {formTitle && (
        <Typography
          fontSize={30}
          variant="h3"
          fontWeight={800}
          color="text.primary"
          mb={6}>
          {formTitle}
        </Typography>
      )}

      {/* Render form fields */}
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col pt-3">
          {field.type === "checkbox" ? (
            <div className="flex flex-row">
              {/* Checkbox input field with error handling */}
              <Checkbox id="guidlines" {...register("guidelines")} />

              {/* Field label */}
              <label
                htmlFor={field.name}
                className="my-[3px] mt-2 font-bold cursor-pointer">
                <Typography fontSize={15} fontWeight={600} color="text.primary">
                  {field.label}
                </Typography>
              </label>
            </div>
          ) : (
            <>
              {/* Field label */}
              <label
                htmlFor={field.name}
                className="my-[3px] mt-2 font-bold cursor-pointer">
                <Typography fontSize={15} fontWeight={600} color="text.primary">
                  {field.label}
                </Typography>
              </label>

              {/* Other input field with error handling */}
              <OutlinedInput
                id={field.name}
                type={field.type}
                error={!!errors[field.name]}
                placeholder={field.placeholder}
                {...register(field.name)}
              />
            </>
          )}

          {/* Display link, if any */}
          {field.link && (
            <Link
              href={field.link.to}
              underline="hover"
              sx={{ fontWeight: 600 }}>
              {field.link.label}
            </Link>
          )}

          {/* Display error message, if any */}
          {errors[field.name]?.message && (
            <div className="text-error-main">
              {String(errors[field.name]!.message)}
            </div>
          )}
        </div>
      ))}

      {/* Submit button */}
      <Button
        variant="contained"
        type="submit"
        size="large"
        sx={{ mt: 6, fontWeight: 600, color: "background.default" }}>
        {submitLabel}
      </Button>
    </form>
  );
};
