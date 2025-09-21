@echo off
echo 🎨 Formatting code...

REM Backend formatting
echo 📱 Formatting backend (Laravel/PHP)...
cd "backend\nonutforever-api"
composer run format
cd "..\..\"

REM Frontend formatting
echo ⚛️  Formatting frontend (React Native/TypeScript)...
cd "frontend\nonutforever-reactnative"
npm run format
cd "..\..\"

echo ✅ All code formatted successfully!