# ☕ Buy Me a Coffee - Multiple Donation Options Setup

This guide will help you set up the "Buy me a coffee" button with multiple donation options in your Synerity UI demo app.

## 🚀 Quick Setup

### Step 1: Configure Your Donation Options

1. Open the file: `projects/demo-app/src/app/config/donation.config.ts`
2. Update your donation platform details:

```typescript
export const DONATION_CONFIG: DonationConfig = {
  // PayPal email (if eligible)
  paypalEmail: 'your-email@example.com', // ← Update this
  
  // Ko-fi username (recommended alternative)
  koFiUsername: 'your-username', // ← Update this
  
  // GitHub Sponsors URL
  githubSponsorsUrl: 'https://github.com/sponsors/your-username', // ← Update this
  
  defaultAmount: '5.00',
  currency: 'USD',
  message: 'Thanks for supporting Synerity UI! ☕'
};
```

### Step 2: Set Up Your Donation Platforms

#### **Ko-fi (Recommended)**
- **Why**: Most reliable, easy setup, low fees
- **Setup**: 
  1. Go to [ko-fi.com](https://ko-fi.com)
  2. Create account and get your username
  3. Update `koFiUsername` in config

#### **GitHub Sponsors**
- **Why**: Great for open source projects
- **Setup**:
  1. Go to [github.com/sponsors](https://github.com/sponsors)
  2. Set up your sponsor profile
  3. Update `githubSponsorsUrl` in config

#### **PayPal**
- **Why**: Traditional, widely recognized
- **Note**: Some accounts may be ineligible
- **Setup**: Update `paypalEmail` in config

### Step 3: Test the Integration

1. Start your development server: `ng serve`
2. Navigate to your demo app
3. Click the "Buy me a coffee" button in the navbar
4. Choose your preferred donation method from the modal
5. Verify it opens the correct donation page

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
