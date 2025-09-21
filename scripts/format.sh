#!/bin/bash

echo "🎨 Formatting code..."

# Backend formatting
echo "📱 Formatting backend (Laravel/PHP)..."
cd "backend/nonutforever-api"
composer run format
cd "../.."

# Frontend formatting
echo "⚛️  Formatting frontend (React Native/TypeScript)..."
cd "frontend/nonutforever-reactnative"
npm run format
cd "../.."

echo "✅ All code formatted successfully!"