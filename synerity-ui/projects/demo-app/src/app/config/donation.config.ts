export interface DonationConfig {
  paypalEmail: string;
  koFiUsername: string;
  githubSponsorsUrl: string;
  defaultAmount: string;
  currency: string;
  message: string;
}

export const DONATION_CONFIG: DonationConfig = {
  // PayPal email (if eligible)
  paypalEmail: 'bhushangadekar01@gmail.com',
  
  // Ko-fi username (recommended alternative)
  koFiUsername: 'bhushangadekar', // Replace with your Ko-fi username
  
  // GitHub Sponsors URL
  githubSponsorsUrl: 'https://github.com/sponsors/bhushangadekar', // Replace with your GitHub username
  
  // Default donation amount
  defaultAmount: '5.00',
  
  // Currency code (USD, EUR, GBP, etc.)
  currency: 'USD',
  
  // Thank you message
  message: 'Thanks for supporting Synerity UI! ☕'
};
