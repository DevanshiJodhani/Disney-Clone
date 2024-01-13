const conf = {
    apikey: String(import.meta.env.VITE_APP_API_KEY),
    authdomain: String(import.meta.env.VITE_APP_AUTH_DOMAIN),
    projectid: String(import.meta.env.VITE_APP_PROJECT_ID),
    storagebucket: String(import.meta.env.VITE_APP_STORAGE_BUCKET),
    messagingsenderid: String(import.meta.env.VITE_APP_MESSAGING_SENDER_ID),
    appid: String(import.meta.env.VITE_APP_APP_ID),
    mesurmentid: String(import.meta.env.VITE_APP_MEASUREMENT_ID)
}


export default conf;