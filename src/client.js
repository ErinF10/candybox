import { createClient } from '@supabase/supabase-js'

const URL = 'https://rhbdazbmmzmesvyzurwa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoYmRhemJtbXptZXN2eXp1cndhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3NjIyNTksImV4cCI6MjA0NjMzODI1OX0.FzyUvns3SjLF4RG1SOlX_5ilDf29UIj6IvhpmU9abKw';

// if (!supabaseKey) {
//     console.error('VITE_SUPABASE_KEY is not defined in environment variables');
//     throw new Error('Supabase key is missing');
//   }
  
//   console.log('Supabase Key:', supabaseKey); // This will log your key, remove in production!

export const supabase = createClient(URL, supabaseKey);

