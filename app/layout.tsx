import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={
  title:"Calculadora de Amortização Consignado",
  description:"Calcule a antecipação de parcelas de contratos consignados nas tabelas Price e SAC.",
  openGraph:{title:"Calculadora de Amortização Consignado",description:"Simule parcelas Price e SAC"},
  icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
