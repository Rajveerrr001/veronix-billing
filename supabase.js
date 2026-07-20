const SUPABASE_URL = "YOUR_PROJECT_URL" NEXT_PUBLIC_SUPABASE_URL=https://yjpfijmhrowaqynavyox.supabase.co
const SUPABASE_KEY = "YOUR_ANON_KEY"; NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_WgVZaVJM9izli03YIDlVXQ_ku9Uw1eO

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
