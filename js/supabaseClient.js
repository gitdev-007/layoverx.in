console.log("Supabase file loaded");

const supabaseClient = window.supabase.createClient(
"https://wxgcpopghopfyuaqbbfb.supabase.co",
"sb_publishable_Sq0N68LRTlfMDXX1KNFABQ_kgO56I-_"
);

window.supabaseClient = supabaseClient;