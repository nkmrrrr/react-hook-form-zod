import { z } from "zod";

const castToValOrNull = <T extends Parameters<typeof z.preprocess>[1]>(
  schema: T
) => {
  return z.preprocess((val) => {
    if (typeof val === "string") {
      const trimmedVal = val.trim();
      return trimmedVal.length > 0 ? trimmedVal : null;
    }
  }, schema);
};

export const sampleFormSchema = z.object({
  name: castToValOrNull(z.string()),
  nullableName: castToValOrNull(z.string().nullable()),
  selectedValue: castToValOrNull(z.string()),
  nullableSelectedValue: castToValOrNull(z.string().nullable()),
});
