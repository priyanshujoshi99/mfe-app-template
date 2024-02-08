// refresh-build.mjs
import chokidar from 'chokidar';
import { exec } from 'child_process';

const sourceDir = 'src'; // Your source code directory

const watcher = chokidar.watch(sourceDir, {
  ignored: /node_modules/,
  persistent: true,
  ignoreInitial: true // Ignore initial directory creation events
});

watcher.on('all', (event, filePath) => {
  console.log(`File change detected: ${filePath}`);

  // Run the tsc command to compile TypeScript
  exec('npm run build', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error running tsc: ${error}`);
    } else {
      console.log(stdout);
      console.error(stderr);
      console.log('TypeScript compilation complete.');
    }
  });
});
