import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

export const useFormSchema = () => {
  const stringOrNumber = z.union([z.string(), z.number()]);

  const createRideFormSchema = z.object({
    FullName: z.string().trim().min(6).includes(" "),

    Email: z.string().min(1).email(),

    ReferralCode: z.string().or(z.number()).min(7).max(7).includes("-"),

    MyOwnCar: z.boolean(),
  });

  type CreateUserFormData = z.infer<typeof createRideFormSchema>;

  const createRideForm = useForm<CreateUserFormData>({
    resolver: zodResolver(createRideFormSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = createRideForm;

  return {
    register,
    handleSubmit,
    errors,
  };
};
