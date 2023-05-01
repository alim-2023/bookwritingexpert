// import {google} from "googleapis";



// export default async function handler(
//     req,
//     res
// ) {
   

//     const body = SheetForm = {
//         name: 'harrykennedy.cs@gmail.com',
//         email: 'harrykennedy.cs@gmail.com',
//         phone: 'harrykennedy.cs@gmail.com',
       
//     }

//     try {
//         const auth = new google.auth.GoogleAuth({
//             credentials: {
//                 client_email: process.env.GOOGLE_CLIENT_EMAIL,
//                 private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
//             },
//             scopes: [
//                 'https://www.googleapis.com/auth/drive',
//                 'https://www.googleapis.com/auth/drive.file',
//                 'https://www.googleapis.com/auth/spreadsheets'
//             ]
//         })

//         const sheets = google.sheets({
//             auth,
//             version: 'v4'
//         });

//         const response = await sheets.spreadsheets.values.append({
//             spreadsheetId: process.env.GOOGLE_SHEET_ID,
//             range: 'A1:C1',
//             valueInputOption: 'USER_ENTERED',
//             requestBody: {
//                 values: [
//                     [body.name, body.email, body.phone, body.message]
//                 ]
//             }
//         });
        
//         return response.data;
       
//     }catch (e) {
//         return e.message
       
//     }

// }