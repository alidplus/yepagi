import path from 'node:path';

/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleNameMapper: {
		'@repo/utils': path.resolve(process.cwd(), '../utils'),
	},
};
