// app/root.tsx
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useParams,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { DICTIONARY, DEFAULT_LANG } from "./constants/i18n";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  // 파비콘 설정 영역
  { rel: "icon", href: "/favicon.ico" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const params = useParams();
  
  // 주소창에서 언어 코드를 확인하고, 없으면 기본값(en)을 사용하는 영역
  const lang = params.lang;
  const currentLang = (lang && DICTIONARY[lang]) ? lang : DEFAULT_LANG;

  return (
    // 검색 로봇(SEO)을 위해 html 태그에 언어 설정을 주입하는 영역
    <html lang={currentLang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased transition-colors">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

// 디자인이 강화된 에러 경계 영역
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
      <div className="max-w-md space-y-6">
        <h1 className="text-9xl font-black text-slate-100 dark:text-slate-900 select-none">{message}</h1>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Something went wrong</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">{details}</p>
        </div>
        {stack && (
          <pre className="w-full p-4 overflow-x-auto bg-slate-50 dark:bg-slate-900 rounded-2xl text-left text-xs font-mono border border-slate-100 dark:border-slate-800">
            <code>{stack}</code>
          </pre>
        )}
        <a 
          href="/" 
          className="inline-block py-4 px-8 bg-blue-600 text-white rounded-2xl font-black shadow-xl shadow-blue-500/20 hover:scale-105 transition-all"
        >
          Go Back Home
        </a>
      </div>
    </main>
  );
}