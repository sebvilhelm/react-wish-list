import { ReactNode } from "react";
import type { LinksFunction } from "remix";
import { Outlet, useCatch, Links } from "remix";

import resetCss from "~/styles/reset.css";
import globalCss from "~/styles/global.css";
import globalMobileCss from "~/styles/global-mobile.css";

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: resetCss },
    { rel: "stylesheet", href: globalCss },
    { rel: "stylesheet", href: globalMobileCss, media: "(max-width: 500px)" },
  ];
};

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
        <Links />
      </head>
      <body>{children}</body>
      {/* {process.env.NODE_ENV === "development" && <LiveReload />} */}
    </html>
  );
}
