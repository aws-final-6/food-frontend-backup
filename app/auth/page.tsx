import React, { Suspense } from "react";
import CheckAuth from "@/components/auth/check-auth";
const AuthFallback = () => {
  return <>오 망함</>;
};

const AuthPage = () => {
  return (
    <Suspense fallback={<AuthFallback />}>
      <CheckAuth />
    </Suspense>
  );
};

export default AuthPage;
