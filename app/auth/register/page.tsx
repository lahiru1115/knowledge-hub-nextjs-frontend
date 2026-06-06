"use client";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  registerSchema,
  RegisterFormValues,
} from "@/lib/validators/auth";

import { authService } from "@/services/auth.service";

export default function RegisterPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  async function onSubmit(
    values: RegisterFormValues
  ) {
    try {
      await authService.register(values);

      router.push("/auth/login");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold">
          Register
        </h1>

        <Input
          placeholder="Name"
          {...register("name")}
        />

        {errors.name && (
          <p>{errors.name.message}</p>
        )}

        <Input
          placeholder="Email"
          {...register("email")}
        />

        {errors.email && (
          <p>{errors.email.message}</p>
        )}

        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />

        {errors.password && (
          <p>{errors.password.message}</p>
        )}

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          Register
        </Button>
      </form>
    </main>
  );
}