import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { LANG_KEY, THEME_KEY } from "@/lib/preference-keys";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Lee las preferencias guardadas y las aplica antes del primer pintado.
// Sin valor guardado o con un valor inválido se queda en claro y español.
const THEME_SCRIPT = `(function(){try{var d=document.documentElement;var t=localStorage.getItem("${THEME_KEY}");var l=localStorage.getItem("${LANG_KEY}");if(t==="light"||t==="dark")d.dataset.theme=t;if(l==="es"||l==="en")d.lang=l;}catch(e){}})();`;

export const metadata: Metadata = {
  title: "Portafolio de Alejandro",
  description: "Portafolio personal de Alejandro",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: el script de <head> cambia data-theme y lang
    // antes de que React hidrate (solo afecta a los atributos de <html>).
    <html
      lang="es"
      data-theme="light"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
