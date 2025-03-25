const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library')

async function addEmailToSheet(email) {
  try {
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({ email: email});
    console.log(`successfully added ${email} to Google Sheets.`);
  } catch (error) {
    console.error('Error adding email to Google Sheets:', error);
  }
}

module.exports = { addEmailToSheet };