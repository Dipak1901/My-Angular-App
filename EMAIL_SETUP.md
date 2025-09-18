# Email Integration Instructions

To set up the contact form email integration:

1. First, create a free account at Formspree (https://formspree.io/)

2. Create a new form in Formspree:
   - Go to your Formspree dashboard
   - Click "New Form"
   - Choose "Blank form"
   - Copy your form's unique endpoint URL

3. Update the EmailService:
   - Open `src/app/services/email.service.ts`
   - Replace 'YOUR_FORMSPREE_ID' with your form's ID
   - The ID is the last part of your form's endpoint URL
   Example: If your URL is "https://formspree.io/f/xrgwkppj",
   your ID would be "xrgwkppj"

4. Add necessary dependencies to app.module.ts:
```typescript
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  // ...
  imports: [
    // ...
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  // ...
})
```

5. Testing the Form:
   - Fill out the contact form on your website
   - Submit the form
   - You should receive the message in your email
   - The sender will receive a copy if you've enabled that in Formspree

Features included:
- Form validation
- Loading states
- Success/error notifications
- Spam protection (via Formspree)
- Email notifications
- Response messages
- Mobile responsiveness

Notes:
- Messages will be sent to the email you verified with Formspree
- Free tier limits: 50 submissions per month
- You can upgrade for more submissions and features
- CORS and security are handled by Formspree