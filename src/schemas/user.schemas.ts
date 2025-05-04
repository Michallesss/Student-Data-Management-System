import { z } from "zod";

const addUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  averageGrade: z.string().min(1, "Average grade must be at least 1.00").max(6, "Average grade must be at most 6").refine((val) => !Number.isNaN(parseInt(val, 10))),
  className: z.string().min(1, "Class name is required"),
});

type addUserType = z.infer<typeof addUserSchema>;

export { addUserSchema, type addUserType };