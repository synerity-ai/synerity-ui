export interface DonationConfig {
  paypalEmail: string;
  defaultAmount: string;
  currency: string;
  message: string;
}

export const DONATION_CONFIG: DonationConfig = {
  // Replace with your actual PayPal email
  paypalEmail: 'YOUR_PAYPAL_EMAIL@example.com',
  
  // Default donation amount
  defaultAmount: '5.00',
  
  // Currency code (USD, EUR, GBP, etc.)
  currency: 'USD',
  
  // Thank you message
  message: 'Thanks for supporting Synerity UI! ☕'
};
