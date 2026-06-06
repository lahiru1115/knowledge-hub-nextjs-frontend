"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { authService } from "@/services/auth.service";
import { useAuth } from "@/hooks/use-auth";

export default function DashboardPage() {
  const router = useRouter();

  const {
    data: user,
    isLoading,
  } = useAuth();

  async function handleLogout() {
    await authService.logout();

    router.push("/auth/login");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="p-8">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p>
            Welcome {user?.name}
          </p>
        </div>

        <Button
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </main>
  );
}