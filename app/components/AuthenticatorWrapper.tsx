// This new file is marked as a client component, which is required for components
// that use React hooks, context, or browser APIs
"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

// Separate wrapper component to handle client-side authentication logic
// This isolates the client-side functionality from the server-side layout
export default function AuthenticatorWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Authenticator>{children}</Authenticator>;
} 