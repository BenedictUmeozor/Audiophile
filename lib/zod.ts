import z from "zod";

export const formSchema = z
  .object({
    name: z.string().min(1, "Required"),
    email: z.email("Invalid format").min(1, "Required"),
    phone: z.string().min(1, "Required"),
    address: z.string().min(1, "Required"),
    zipCode: z.string().min(1, "Required"),
    city: z.string().min(1, "Required"),
    country: z.string().min(1, "Required"),
    method: z.enum(["e-Money", "Cash on Delivery"], "Required"),
    eMoneyNumber: z.string().optional(),
    eMoneyPin: z.string().optional(),
  })
  .refine(
    (data) => {
      // If method is e-Money, both eMoneyNumber and eMoneyPin are required
      if (data.method === "e-Money") {
        return data.eMoneyNumber && data.eMoneyPin;
      }
      // For other methods, these fields are not required
      return true;
    },
    {
      message: "Required",
      path: ["eMoneyNumber"],
    },
  )
  .refine(
    (data) => {
      // If method is e-Money, both eMoneyNumber and eMoneyPin are required
      if (data.method === "e-Money") {
        return data.eMoneyNumber && data.eMoneyPin;
      }
      // For other methods, these fields are not required
      return true;
    },
    {
      message: "Required",
      path: ["eMoneyPin"],
    },
  );
