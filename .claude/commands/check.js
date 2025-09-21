/**
 * @name check
 * @description Check code quality, run tests, and verify compilation for both backend and frontend
 */

const { execSync } = require('child_process');
const path = require('path');

function runCommand(command, cwd) {
  try {
    console.log(`Running: ${command} in ${cwd}`);
    execSync(command, {
      cwd,
      stdio: 'inherit',
      shell: true
    });
    return true;
  } catch (error) {
    console.error(`Error running ${command}:`, error.message);
    return false;
  }
}

function main() {
  console.log('🔍 Checking code quality...');

  const projectRoot = process.cwd();
  let hasErrors = false;

  // Backend check
  console.log('📱 Checking backend (Laravel/PHP)...');
  const backendPath = path.join(projectRoot, 'backend', 'nonutforever-api');
  if (!runCommand('composer run check', backendPath)) {
    console.error('❌ Backend check failed!');
    hasErrors = true;
  } else {
    console.log('✅ Backend check passed!');
  }

  // Frontend check
  console.log('⚛️  Checking frontend (React Native/TypeScript)...');
  const frontendPath = path.join(projectRoot, 'frontend', 'nonutforever-reactnative');
  if (!runCommand('npm run check', frontendPath)) {
    console.error('❌ Frontend check failed!');
    hasErrors = true;
  } else {
    console.log('✅ Frontend check passed!');
  }

  if (hasErrors) {
    console.error('❌ Some checks failed. Please review the errors above.');
    process.exit(1);
  } else {
    console.log('🎉 All checks passed successfully!');
  }
}

main();