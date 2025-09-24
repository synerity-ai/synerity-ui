# ☕ Buy Me a Coffee - PayPal Setup Guide

This guide will help you set up the "Buy me a coffee" button in your Synerity UI demo app.

## 🚀 Quick Setup

### Step 1: Update Your PayPal Email

1. Open the file: `projects/demo-app/src/app/config/donation.config.ts`
2. Replace `YOUR_PAYPAL_EMAIL@example.com` with your actual PayPal email address
3. Optionally customize the default amount, currency, and message

```typescript
export const DONATION_CONFIG: DonationConfig = {
  paypalEmail: 'your-email@example.com', // ← Update this
  defaultAmount: '5.00',
  currency: 'USD',
  message: 'Thanks for supporting Synerity UI! ☕'
};
```

### Step 2: Test the Integration

1. Start your development server: `ng serve`
2. Navigate to your demo app
3. Click the "Buy me a coffee" button in the navbar
4. Verify it opens PayPal with your email pre-filled

## 🎨 Customization Options

### Change Default Amount
```typescript
defaultAmount: '10.00', // Change to your preferred amount
```

### Change Currency
```typescript
currency: 'EUR', // USD, EUR, GBP, CAD, etc.
```

### Customize Message
```typescript
message: 'Support my open source work! 🚀',
```

## 🔧 Advanced Configuration

### Multiple Amount Options
You can modify the `buyMeCoffee()` method in `navbar.ts` to show multiple amount options:

```typescript
buyMeCoffee() {
  const config = DONATION_CONFIG;
  const amounts = ['3.00', '5.00', '10.00'];
  
  // Show amount selection dialog
  const selectedAmount = prompt('Choose amount:', config.defaultAmount);
  
  if (selectedAmount) {
    const paypalUrl = `https://www.paypal.com/donate/?business=${encodeURIComponent(config.paypalEmail)}&amount=${selectedAmount}&currency_code=${config.currency}&item_name=${encodeURIComponent(config.message)}`;
    window.open(paypalUrl, '_blank', 'noopener,noreferrer');
  }
}
```

### Add Ko-fi Integration
You can also add Ko-fi as an alternative:

```typescript
buyMeCoffee() {
  const config = DONATION_CONFIG;
  
  // Show options
  const choice = confirm('Choose donation method:\nOK = PayPal\nCancel = Ko-fi');
  
  if (choice) {
    // PayPal
    const paypalUrl = `https://www.paypal.com/donate/?business=${encodeURIComponent(config.paypalEmail)}&amount=${config.defaultAmount}&currency_code=${config.currency}&item_name=${encodeURIComponent(config.message)}`;
    window.open(paypalUrl, '_blank', 'noopener,noreferrer');
  } else {
    // Ko-fi
    window.open('https://ko-fi.com/your-username', '_blank', 'noopener,noreferrer');
  }
}
```

## 🎯 Features

- ✅ **Responsive Design**: Works on desktop and mobile
- ✅ **Animated Button**: Hover effects and smooth transitions
- ✅ **PayPal Integration**: Direct link to PayPal donation page
- ✅ **Customizable**: Easy to modify amounts, currency, and messages
- ✅ **Mobile Friendly**: Full-width button in mobile menu
- ✅ **Auto-close Menu**: Mobile menu closes after clicking

## 🔒 Security Notes

- The PayPal email is stored in your source code
- Consider using environment variables for production
- PayPal handles all payment processing securely
- No sensitive data is stored in your app

## 📱 Mobile Experience

The button automatically:
- Shows as full-width in mobile menu
- Closes the mobile menu after clicking
- Maintains the same styling and animations

## 🎨 Styling

The button uses:
- **Color**: Amber (coffee-themed)
- **Hover Effects**: Scale and rotate animations
- **Shimmer Effect**: Subtle light sweep on hover
- **Shadow**: Elevated appearance with hover shadow

## 🚀 Deployment

After setting up your PayPal email:
1. Build your app: `ng build demo-app`
2. Deploy to GitHub Pages
3. Your donation button will work on the live site

## 💡 Tips

- Test with small amounts first
- Consider adding a "Thank you" page after donation
- Monitor your PayPal account for donations
- Share your demo link to encourage donations

---

**Happy coding and thanks for supporting open source! ☕**
