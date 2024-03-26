const supabase = require("@supabase/supabase-js");
require("dotenv").config("../.env");

const client = supabase.createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

module.exports = client;
