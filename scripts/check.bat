@echo off
echo 🔍 Checking code quality...

REM Backend check
echo 📱 Checking backend (Laravel/PHP)...
cd "backend\nonutforever-api"
composer run check
if %errorlevel% neq 0 (
    echo ❌ Backend check failed!
    exit /b 1
)
echo ✅ Backend check passed!
cd "..\..\"

REM Frontend check
echo ⚛️  Checking frontend (React Native/TypeScript)...
cd "frontend\nonutforever-reactnative"
npm run check
if %errorlevel% neq 0 (
    echo ❌ Frontend check failed!
    exit /b 1
)
echo ✅ Frontend check passed!
cd "..\..\"

echo 🎉 All checks passed successfully!