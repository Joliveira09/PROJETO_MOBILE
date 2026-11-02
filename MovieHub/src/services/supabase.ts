import { createClient } from '@supabase/supabase-js'
import 'react-native-url-polyfill/auto'

const supabaseUrl = 'https://etvnzmhcqvdsiwrbqozb.supabase.co'
const supabaseAnonKey = 'sb_publishable_D3MGUUBLFNdnfo8llP3B3A_gKQa4gtw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})