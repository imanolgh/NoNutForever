/**
 * @name format
 * @description Format all backend (Laravel/PHP) and frontend (React Native/TypeScript) code
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
  console.log('🎨 Formatting code...');

  const projectRoot = process.cwd();

  // Backend formatting
  console.log('📱 Formatting backend (Laravel/PHP)...');
  const backendPath = path.join(projectRoot, 'backend', 'nonutforever-api');
  if (!runCommand('composer run format', backendPath)) {
    process.exit(1);
  }

  // Frontend formatting
  console.log('⚛️  Formatting frontend (React Native/TypeScript)...');
  const frontendPath = path.join(projectRoot, 'frontend', 'nonutforever-reactnative');
  if (!runCommand('npm run format', frontendPath)) {
    process.exit(1);
  }

  console.log('✅ All code formatted successfully!');
}

main();