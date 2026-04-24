/**
 * Supabase Client Initialization
 */

// Replace these with your actual Supabase project details
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

/**
 * Data Service
 * Handles all DB operations
 */
export const DataService = {
  // Projects/Orders
  async getOrders() {
    if (!supabase) return this.getMockOrders();
    const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
    return data || [];
  },

  // Mock Data (Fallback if Supabase is not configured yet)
  getMockOrders() {
    return [
      { id: 1, name: 'Brand Identity Refactor', client: 'Solana Labs', status: 'active', deadline: '28. April' },
      { id: 2, name: 'Web Design Mockup', client: 'Evergrow Corp', status: 'pending', deadline: '02. Mai' },
      { id: 3, name: 'Annual Report 2024', client: 'Global Logistics', status: 'urgent', deadline: 'Morgen' }
    ];
  },

  // Upload Logic
  async uploadDesign(file, project_id) {
    if (!supabase) {
      console.log('Mock upload for:', file.name);
      return { success: true };
    }
    // Real upload logic to Supabase Storage
    const fileName = `${project_id}/${Date.now()}_${file.name}`;
    const { data, error } = await supabase.storage.from('designs').upload(fileName, file);
    return { data, error };
  }
};
