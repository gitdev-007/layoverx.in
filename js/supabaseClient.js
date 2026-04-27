const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

// Initialize exactly once (hot reload / double script include safe)
if (!window.supabaseClient) {
  const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  window.supabaseClient = supabaseClient;
}

// Signal other scripts that the client is ready
window.dispatchEvent(new Event("supabase:ready"));