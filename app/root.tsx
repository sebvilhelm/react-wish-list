import { ReactNode } from "react";
import { Outlet, useCatch } from "remix";

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function CatchBoundary() {
  let caught = useCatch();
  return (
    <Document>
      <h1>
        {caught.status} {caught.statusText}
      </h1>
    </Document>
  );
}

function Document({
  title = "Sebastian's ønskeseddel",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <html lang="da">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{title}</title>
      </head>
      <body>{children}</body>
      {/* {process.env.NODE_ENV === "development" && <LiveReload />} */}
    </html>
  );
}
