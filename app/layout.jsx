import {headers} from "next/headers";
import "./globals.css";
export async function generateMetadata(){const h=await headers();const host=h.get("host")||"localhost:3000";const protocol=host.includes("localhost")?"http":"https";const image=`${protocol}://${host}/og.png`;const title="Hisaab — Personal finance, brought together";const description="A practical finance workspace for spending, budgets, savings and investments.";return {title,description,openGraph:{title,description,images:[image]},twitter:{card:"summary_large_image",title,description,images:[image]},icons:{icon:"/favicon.svg"}}}
export default function RootLayout({children}){return <html lang="en"><body>{children}</body></html>}
