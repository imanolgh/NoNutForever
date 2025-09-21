#!/bin/bash

echo "🔍 Checking code quality..."

# Backend check
echo "📱 Checking backend (Laravel/PHP)..."
cd "backend/nonutforever-api"
if composer run check; then
    echo "✅ Backend check passed!"
else
    echo "❌ Backend check failed!"
    exit 1
fi
cd "../.."

# Frontend check
echo "⚛️  Checking frontend (React Native/TypeScript)..."
cd "frontend/nonutforever-reactnative"
if npm run check; then
    echo "✅ Frontend check passed!"
else
    echo "❌ Frontend check failed!"
    exit 1
fi
cd "../.."

echo "🎉 All checks passed successfully!"