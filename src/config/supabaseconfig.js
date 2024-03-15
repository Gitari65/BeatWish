import { createClient } from '@supabase/supabase-js';

const supabaseUrl = `https://uncidnwsltcpprioqwwn.supabase.co`;
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuY2lkbndzbHRjcHByaW9xd3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2OTExNzksImV4cCI6MjAyMjI2NzE3OX0.EtrtSHAJgmiT0u3VtBvUJYixPoFwCG-ZuVOI3izAdn8`;

export const supabase = createClient(supabaseUrl, supabaseKey);
