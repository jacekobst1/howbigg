# Suggested Commands

## Development Commands

### Start Development Server
```bash
npm run dev
```
Opens development server on http://localhost:3000 with hot reload

### Build for Production
```bash
npm run build
```
Creates optimized production build in `.next/` directory

### Start Production Server
```bash
npm start
```
Runs production server (requires `npm run build` first)

### Lint Code
```bash
npm run lint
```
Runs ESLint with Next.js configuration

## Common Git Commands (macOS/Darwin)
```bash
# Check status and current branch
git status && git branch

# Create feature branch
git checkout -b feature/your-feature-name

# Stage changes
git add .

# Commit with message
git commit -m "Your commit message"

# Push to remote
git push origin feature/your-feature-name
```

## File Operations (macOS/Darwin)
```bash
# List files
ls -la

# Find files by name
find . -name "*.tsx" -type f

# Search in files (prefer Grep tool in Claude)
grep -r "pattern" src/

# View file content (prefer Read tool in Claude)
cat filename.ts
```

## Package Management
```bash
# Install dependencies
npm install

# Install specific package
npm install package-name

# Remove package
npm uninstall package-name

# Update packages
npm update
```

## Vercel Deployment (if configured)
```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Debugging Tips
```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules && npm install

# Check Node/npm versions
node -v && npm -v
```