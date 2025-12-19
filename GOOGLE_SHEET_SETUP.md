# Google Sheet Setup for Blogs

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Besta Blog Posts" (or any name you prefer)

## Step 2: Set Up Columns

Create the following columns in Row 1 (Header Row):

| Column A | Column B | Column C | Column D | Column E | Column F |
|----------|----------|----------|----------|----------|----------|
| **id** | **title** | **excerpt** | **content** | **imageUrl** | **source** |

### Column Descriptions:
- **id**: Unique number for each blog (1, 2, 3, 4...)
- **title**: Blog post title
- **excerpt**: Short description (shown on blog list page)
- **content**: Full blog content (shown on detail page)
- **imageUrl**: URL to the blog image (see image setup below)
- **source**: Source/publication name (e.g., "SpiceTales Weekly")

## Step 3: Publish Your Google Sheet

1. Click **File** → **Share** → **Publish to web**
2. Select the sheet tab (usually "Sheet1")
3. Choose **"Web page"** format
4. Click **"Publish"**
5. Copy the published link

## Step 4: Get Your Sheet ID

From your Google Sheet URL:
```
https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit#gid=0
```

Copy the part between `/d/` and `/edit` - that's your **Sheet ID**

Example:
- URL: `https://docs.google.com/spreadsheets/d/1ABC123xyz789/edit#gid=0`
- Sheet ID: `1ABC123xyz789`

## Step 5: Update the Code

Open `src/pages/Blogs.jsx` and replace:
```javascript
const GOOGLE_SHEET_ID = "YOUR_SHEET_ID_HERE";
```

With your actual Sheet ID:
```javascript
const GOOGLE_SHEET_ID = "1ABC123xyz789"; // Your actual Sheet ID
```

## Step 6: Adding Images

### Option 1: Google Drive
1. Upload image to Google Drive
2. Right-click image → **Get link**
3. Set permission to **"Anyone with the link"**
4. Copy the link
5. Replace `file/d/` with `uc?export=view&id=`
6. Example: 
   - Original: `https://drive.google.com/file/d/1ABC123/view`
   - Use: `https://drive.google.com/uc?export=view&id=1ABC123`

### Option 2: Imgur
1. Go to [Imgur.com](https://imgur.com)
2. Upload your image
3. Right-click image → **Copy image address**
4. Paste the URL in the imageUrl column

### Option 3: Any Image Hosting Service
- Use any image hosting service that provides direct image URLs
- Paste the full URL in the imageUrl column

## Step 7: Adding Your First Blog

Fill in the columns like this:

| id | title | excerpt | content | imageUrl | source |
|----|-------|---------|---------|----------|--------|
| 1 | My First Blog Post | This is a short description | This is the full blog content with all the details... | https://... | Besta Blog |

## Important Notes:

1. **Always keep Row 1 as headers** - Don't delete or modify it
2. **Start data from Row 2** - Your first blog should be in Row 2
3. **ID must be unique** - Use sequential numbers (1, 2, 3...)
4. **Image URLs must be direct links** - They should end in .jpg, .png, .webp, etc.
5. **Content can be multiple lines** - Use Shift+Enter for line breaks in Google Sheets
6. **Save is automatic** - Google Sheets auto-saves, so changes appear immediately

## Troubleshooting:

- **Blogs not showing?** Check that the Sheet ID is correct
- **Images not loading?** Verify the image URL is accessible and direct
- **Error message?** Make sure the sheet is published and accessible

## Daily Workflow:

1. Open your Google Sheet
2. Add a new row at the bottom
3. Fill in all columns
4. The blog will appear on the website automatically (may need to refresh)

