import { execSync } from 'child_process'
execSync('npm install framer-motion tailwindcss @tailwindcss/vite clsx tailwind-merge motion class-variance-authority', { cwd: 'C:/Users/IK/cv-digital', encoding: 'utf-8', stdio: ['ignore','pipe','pipe'], timeout: 300000 })
console.log('OK')