const SUPABASE_URL =
  window.NEXT_PUBLIC_SUPABASE_URL ||
  window.__ENV__?.NEXT_PUBLIC_SUPABASE_URL ||
  "https://wxgcpopghopfyuaqbbfb.supabase.co";
const SUPABASE_ANON_KEY =
  window.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  window.__ENV__?.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_Sq0N68LRTlfMDXX1KNFABQ_kgO56I-_";

console.log("Supabase config check", {
  hasUrl: Boolean(SUPABASE_URL),
  hasAnonKey: Boolean(SUPABASE_ANON_KEY),
  urlStartsWithHttps: typeof SUPABASE_URL === "string" && SUPABASE_URL.startsWith("https://"),
  anonKeyLength: typeof SUPABASE_ANON_KEY === "string" ? SUPABASE_ANON_KEY.length : 0,
  fromWindowNextPublicUrl: Boolean(window.NEXT_PUBLIC_SUPABASE_URL),
  fromWindowEnvObjectUrl: Boolean(window.__ENV__?.NEXT_PUBLIC_SUPABASE_URL)
});
// #region agent log
fetch('http://127.0.0.1:7386/ingest/906f7911-d4a7-47af-abdd-10f049d51ba8',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d22060'},body:JSON.stringify({sessionId:'d22060',runId:'pre-fix',hypothesisId:'H6',location:'js/supabaseClient.js:1',message:'Supabase config evaluated',data:{hasUrl:!!SUPABASE_URL,hasAnonKey:!!SUPABASE_ANON_KEY,urlStartsWithHttps:typeof SUPABASE_URL==='string'&&SUPABASE_URL.startsWith('https://'),anonKeyLength:typeof SUPABASE_ANON_KEY==='string'?SUPABASE_ANON_KEY.length:0},timestamp:Date.now()})}).catch(()=>{});
// #endregion

// Initialize exactly once (hot reload / double script include safe)
if (!window.supabaseClient) {
  try {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !SUPABASE_URL.startsWith("http")) {
      throw new Error("Supabase ENV missing/invalid at runtime.");
    }
    const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    window.supabaseClient = supabaseClient;
    // #region agent log
    fetch('http://127.0.0.1:7386/ingest/906f7911-d4a7-47af-abdd-10f049d51ba8',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d22060'},body:JSON.stringify({sessionId:'d22060',runId:'pre-fix',hypothesisId:'H7',location:'js/supabaseClient.js:~createClient',message:'Supabase client initialized',data:{hasWindowSupabaseClient:!!window.supabaseClient},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
  } catch (error) {
    console.error("Supabase init failed:", error?.message || error);
    // #region agent log
    fetch('http://127.0.0.1:7386/ingest/906f7911-d4a7-47af-abdd-10f049d51ba8',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d22060'},body:JSON.stringify({sessionId:'d22060',runId:'pre-fix',hypothesisId:'H7',location:'js/supabaseClient.js:~createClient',message:'Supabase client initialization failed',data:{errorMessage:(error&&error.message)?error.message:String(error)},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
  }
}

// Signal other scripts that the client is ready
window.dispatchEvent(new Event("supabase:ready"));