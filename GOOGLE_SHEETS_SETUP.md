# Google Sheets Setup Guide

This guide will help you set up Google Sheets integration for storing contact form submissions.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "Portfolio Contact Form"
4. In the first row, add these headers (one per column):
   - **Timestamp**
   - **Name**
   - **Email**
   - **Subject**
   - **Message**

Your sheet should look like this:

| Timestamp | Name | Email | Subject | Message |
|-----------|------|-------|---------|---------|

## Step 2: Create Google Apps Script

1. In your Google Sheet, click on **Extensions** → **Apps Script**
2. Delete any default code that appears
3. Copy and paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the JSON data from the POST request
    const data = JSON.parse(e.postData.contents);
    
    // Get the current timestamp
    const timestamp = data.timestamp || new Date().toLocaleString();
    
    // Append the data as a new row
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.subject || '',
      data.message || ''
    ]);
    
    // Return success response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Data saved successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle OPTIONS request for CORS preflight
function doOptions() {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.JSON);
}

// Optional: Test function (you can run this to test)
function test() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    subject: 'Test Subject',
    message: 'This is a test message',
    timestamp: new Date().toISOString()
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  doPost(mockEvent);
}
```

4. Click **Save** (💾 icon) or press `Ctrl+S` / `Cmd+S`
5. Give your project a name (e.g., "Contact Form Handler")

## Step 3: Deploy as Web App

1. Click on **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Fill in the deployment settings:
   - **Description**: "Contact Form Handler" (optional)
   - **Execute as**: "Me" (your email)
   - **Who has access**: "Anyone" (this allows your website to submit data)
5. Click **Deploy**
6. You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Project Name] (unsafe)**
   - Click **Allow**
7. Copy the **Web App URL** - it will look like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```
   **IMPORTANT**: Save this URL - you'll need it for the next step!

## Step 4: Configure Environment Variable

1. Create a file named `.env.local` in the root of your project (same level as `package.json`)
2. Add this line:

```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the actual Web App URL you copied in Step 3.

**Important**: Make sure the URL ends with `/exec` (not `/dev`)

## Step 5: Restart Your Development Server

After creating or updating `.env.local`:

1. Stop your development server (Ctrl+C)
2. Start it again:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Step 6: Test the Form

1. Fill out the contact form on your website
2. Submit it
3. Check your Google Sheet - you should see a new row with the submission data
4. Check the browser console (F12) for any error messages

## Troubleshooting

### Form submissions not appearing in Google Sheet

1. **Check the Web App URL**: Make sure it's correct and ends with `/exec`
2. **Check permissions**: Make sure the Web App is deployed with "Anyone" access
3. **Check browser console**: Look for error messages (F12 → Console tab)
4. **Test the script**: In Apps Script, you can run the `test()` function to verify it works
5. **Check Apps Script execution log**: In Apps Script, go to **Executions** to see if there are any errors

### CORS Errors / NetworkError

If you see CORS errors or "NetworkError when attempting to fetch resource":
- The form uses `no-cors` mode to avoid CORS issues with Google Apps Script
- This is normal and expected - the data will still be saved to your sheet
- Make sure the Web App is deployed (not just saved)
- Make sure "Who has access" is set to "Anyone"
- Try redeploying the script
- Check your Google Sheet to verify submissions are being received (even if you see errors in console)

### 403 Forbidden Error

- Make sure you've authorized the script
- Make sure "Who has access" is set to "Anyone"
- Try redeploying with a new version

### Data not saving

- Check the Apps Script execution log for errors
- Make sure your sheet has the correct column headers
- Verify the script is saved and deployed

## Security Note

The Web App URL will be visible in your website's code (since it's a `NEXT_PUBLIC_` variable). This is fine for a contact form, but be aware that:
- Anyone can see the URL in your website's source code
- Anyone with the URL can submit data to your sheet
- Consider adding basic validation or rate limiting in the Apps Script if needed

## Optional: Add Email Notifications

You can modify the Apps Script to send you an email when a new submission is received:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    const timestamp = data.timestamp || new Date().toLocaleString();
    
    // Save to sheet
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.subject || '',
      data.message || ''
    ]);
    
    // Send email notification
    const emailBody = `
      New contact form submission:
      
      Name: ${data.name}
      Email: ${data.email}
      Subject: ${data.subject}
      Message: ${data.message}
      Timestamp: ${timestamp}
    `;
    
    MailApp.sendEmail({
      to: 'your-email@gmail.com', // Change this to your email
      subject: `New Contact Form: ${data.subject}`,
      body: emailBody
    });
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Example .env.local

```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycby1234567890abcdefghijklmnopqrstuvwxyz/exec
```

## Note

- The `.env.local` file should NOT be committed to Git (it's already in `.gitignore`)
- For production deployment, add this environment variable in your hosting platform's settings (Vercel, Netlify, etc.)
- The Web App URL is public, but only you can see the Google Sheet data

