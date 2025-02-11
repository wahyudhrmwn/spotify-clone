type Environment = 'development' | 'uat' | 'production';

const env = process.env.NODE_ENV as Environment;

const config: Record<Environment, { apiUrl: string; debug: boolean }> = {
  development: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
    debug: true,
  },
  uat: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || "https://uat-api.example.com",
    debug: false,
  },
  production: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com",
    debug: false,
  },
};

export default config[env];


// CONTOH PENGUNAAN PADA CODE
// import config from '../config'; 

// console.log(`API URL: ${config.apiUrl}`);

// if (config.debug) {
//   console.log("Debug mode is enabled");
// }