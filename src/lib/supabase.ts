import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://glpnhhvpnturzhatfxmo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdscG5oaHZwbnR1cnpoYXRmeG1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1NDc1NDYsImV4cCI6MjA4MTEyMzU0Nn0.xuo7auNVuBJeoyeOf1P3fntYG5wNq_lURSeX1Z29lwY'

export const supabase = createClient(supabaseUrl, supabaseKey)