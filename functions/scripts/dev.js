/**
 * This scripts run tsc compiler in watch-mode and the firebase-emulator in 2 processes.
 * The emulator set "service-account.json" into the env variable GOOGLE_APPLICATION_CREDENTIALS
 * to allow localhost have permissions to call APIs such as push notifications.
 */

const { spawn } = require('child_process');
const { resolve } = require('path');
const GOOGLE_APPLICATION_CREDENTIALS = resolve(__dirname, '../service-account.json');

const env = { GOOGLE_APPLICATION_CREDENTIALS };
const compiler = spawn('tsc', ['--watch']);


let emulator;
compiler.stdout.on('data', data => {
	console.log('compiler: ', data.toString("utf8"));

	if (data.includes('Starting compilation in watch mode')) {
		emulator = spawn('firebase', 'emulators:start --only functions --inspect-functions'.split(' '),
			{ env: { ...process.env, ...env } });
		emulator.stdout.on('data', data => console.log('emulator: ', data.toString("utf8")));
		emulator.on('error', onError);
	}
});

compiler.on('error', onError);

function onError(data) {
	console.error(data.toString('utf8'));
	finish();
}


/**
 * Do stuff and exit the process
 * @param {NodeJS.SignalsListener} signal
 */
function finish() {
	console.log('🔴 Finishing firebase emulator + compiler');
	terminate(compiler);
	terminate(emulator);
	process.exit();
}

function terminate(process) {
	process.stdout.destroy();
	process.stderr.destroy();
	process.kill('SIGINT');
}

process.on('SIGINT', finish)
process.on('SIGTERM', finish)
process.on('SIGQUIT', finish)