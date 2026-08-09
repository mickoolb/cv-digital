import { execSync } from 'child_process'
execSync('npx --yes shadcn@latest init --yes -b radix -p nova', { cwd: 'C:/Users/IK/cv-digital', encoding: 'utf-8', stdio: ['ignore','pipe','pipe'], timeout: 300000 })
console.log('OK')