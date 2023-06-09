import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://eehkrjkcvdbnlzmdegvn.supabase.co'
// const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlaGtyamtjdmRibmx6bWRlZ3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1OTQ5NjEsImV4cCI6MTk5NjE3MDk2MX0.VjvQ_1AmRIA7WrdkHJII72o167Z1fJYM1Avx6OR_ZWE'

const supabaseUrl = 'https://bcplblyhvznsyqmdcbrp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjcGxibHlodnpuc3lxbWRjYnJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU5NTkwOTksImV4cCI6MjAwMTUzNTA5OX0.9b-Im3ttSRaKXKUwIGX_98Wk94sJVvZMGh0Rqqd70Dw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)