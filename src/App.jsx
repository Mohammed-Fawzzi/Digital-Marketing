import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes/routes";
import Loading from "@/components/common/ui/Loading";

export default function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
}
