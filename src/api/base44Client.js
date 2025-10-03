import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68918a7a934d5d8c78d55ae6", 
  requiresAuth: true // Ensure authentication is required for all operations
});
