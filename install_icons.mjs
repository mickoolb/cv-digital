import { execSync } from 'child_process'
execSync('npm install @radix-ui/react-icons', { cwd: 'C:/Users/IK/cv-digital', encoding: 'utf-8', stdio: ['ignore','pipe','pipe'], timeout: 120000 })
console.log('OK')