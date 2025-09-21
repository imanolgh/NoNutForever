# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a monorepo containing a "No Nut Forever" application with two main components:

- **Backend**: Laravel 12 API (`backend/nonutforever-api/`)
- **Frontend**: React Native/Expo mobile app (`frontend/nonutforever-reactnative/`)

## Development Commands

### Universal Developer Commands
Use these custom Claude commands that work with both frontend and backend:

**Custom Claude commands:**
```bash
/format    # Format all backend and frontend code
/check     # Check code quality and run tests
```

**Alternative batch scripts (from project root):**
```bash
scripts\format.bat    # Format all backend and frontend code
scripts\check.bat     # Check code quality and run tests
```

### Backend (Laravel API)
Navigate to `backend/nonutforever-api/` for all backend operations:

**Development server:**
```bash
composer run dev  # Runs Laravel server, queue, logs, and Vite concurrently
php artisan serve  # Laravel development server only
```

**Testing:**
```bash
composer run test          # Run all tests with config clear
php artisan test          # Run all PHPUnit tests
php artisan test tests/Feature/ExampleTest.php  # Run specific test file
php artisan test --filter=testName  # Run specific test method
```

**Code formatting:**
```bash
vendor/bin/pint --dirty   # Format changed files only
vendor/bin/pint          # Format all files
```

**Database:**
```bash
php artisan migrate        # Run migrations
php artisan migrate:fresh  # Fresh migration
php artisan db:seed       # Run seeders
```

**Other useful commands:**
```bash
php artisan tinker        # Interactive PHP shell
php artisan make:*        # Generate boilerplate (controllers, models, etc.)
php artisan optimize:clear # Clear all caches
```

### Frontend (React Native/Expo)
Navigate to `frontend/nonutforever-reactnative/` for all frontend operations:

**Development:**
```bash
npm start     # Start Expo development server
npm run android  # Start on Android
npm run ios      # Start on iOS
npm run web      # Start web version
```

## Architecture Notes

### Backend Architecture (Laravel 12)
- Uses Laravel 12's streamlined structure (no `app/Http/Middleware/` directory)
- Configuration in `bootstrap/app.php` for middleware, exceptions, and routing
- Auto-discovering commands in `app/Console/Commands/`
- Database migrations in `database/migrations/`
- Models use constructor property promotion and explicit return types
- Uses SQLite database (configured in `.env`)

### Frontend Architecture (React Native/Expo)
- Entry point: `index.ts` which registers `App.tsx`
- Built with Expo SDK 54.0.9
- Uses React 19.1.0 and React Native 0.81.4
- TypeScript configuration included

### Key Dependencies
**Backend:**
- Laravel Framework 12.0
- PHPUnit 11.5.3 for testing
- Laravel Pint for code formatting
- Laravel Boost with MCP integration

**Frontend:**
- Expo 54.0.9
- React Native 0.81.4
- TypeScript 5.9.2

## Development Workflow

1. **Documentation lookup**: ALWAYS use context7 MCP when generating code for any part of the tech stack (Laravel 12, React Native 0.81.4, Expo SDK 54.0.9, any imported packages, or any 3rd party libraries or APIs) to get current, version-specific documentation and examples
2. **Backend development**: Use Laravel Boost MCP tools when available, follow Laravel 12 conventions
3. **Code style**: Run `/format` after making any code changes to ensure consistent formatting
4. **Quality checks**: Run `/check` after making any code changes to verify compilation and run tests
5. **Testing**: Run specific tests after changes, then full suite if needed
6. **Database**: Use Eloquent models and relationships, avoid raw queries
7. **Environment**: Backend uses `.env` file, check `.env.example` for required variables

**IMPORTANT**: Claude will automatically run `/format` and `/check` after making any code changes to ensure quality.

## Important Notes

- Backend includes Laravel Boost guidelines in `backend/nonutforever-api/CLAUDE.md`
- Use `php artisan make:*` commands to generate new backend files
- Frontend is a basic Expo setup ready for development
- No shared build process between frontend and backend currently