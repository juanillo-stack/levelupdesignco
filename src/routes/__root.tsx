import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "LevelUp Digital" },
      { name: "description", content: "Desarrollo web y optimización digital para negocios. Convierte tu presencia online en clientes reales. Asesoramiento sin coste." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "LevelUp Digital" },
      { property: "og:description", content: "Desarrollo web y optimización digital para negocios. Convierte tu presencia online en clientes reales. Asesoramiento sin coste." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "LevelUp Digital" },
      { name: "twitter:description", content: "Desarrollo web y optimización digital para negocios. Convierte tu presencia online en clientes reales. Asesoramiento sin coste." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/beed95c5-96ff-42fc-8603-0e0267940623/id-preview-aa8f6427--f301c39e-909a-4225-b2f4-680ab5fc9984.lovable.app-1777734455283.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/beed95c5-96ff-42fc-8603-0e0267940623/id-preview-aa8f6427--f301c39e-909a-4225-b2f4-680ab5fc9984.lovable.app-1777734455283.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
