import assert from "node:assert/strict";
import test from "node:test";

async function render(path="/") {
  const workerUrl=new URL("../dist/server/index.js",import.meta.url);
  workerUrl.searchParams.set("test",`${process.pid}-${Date.now()}`);
  const {default:worker}=await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`,{headers:{accept:"text/html"}}),{ASSETS:{fetch:async()=>new Response("Not found",{status:404})}},{waitUntil(){},passThroughOnException(){}});
}

test("server-renders the Hisaab homepage",async()=>{const response=await render();assert.equal(response.status,200);assert.match(response.headers.get("content-type")??"",/^text\/html\b/i);const html=await response.text();assert.match(html,/<title>Hisaab/);assert.match(html,/Know where your money stands/);assert.match(html,/Rs\. 1,284,650/);assert.doesNotMatch(html,/codex-preview|react-loading-skeleton/)});

test("serves the routed application shell",async()=>{const response=await render("/app");assert.equal(response.status,200);const html=await response.text();assert.match(html,/Preparing your workspace/);assert.match(html,/Hisaab/)});
