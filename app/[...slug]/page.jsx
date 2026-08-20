"use client";
import dynamic from "next/dynamic";
const FinanceApp=dynamic(()=>import("../../src/FinanceApp"),{ssr:false,loading:()=> <div className="route-loader"><span>h</span><p>Preparing your workspace…</p></div>});
export default function CatchAllPage(){return <FinanceApp/>}
