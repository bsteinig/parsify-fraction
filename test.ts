import test from 'ava';

import parsifyExamplePlugin from './src';

const mockedUtils = {
	scope: new Map(),
	fetcher: (a : any, b : any) => Promise.resolve(a + b),
}

test('general', async t => {
	t.is(await parsifyExamplePlugin(mockedUtils)('hello'), 'hello, world!');
});

test('custom function', async t => {
	await parsifyExamplePlugin(mockedUtils)('foo');
	t.truthy(mockedUtils.scope.get('toUpperCase'));
});

test('if an error occurs, just output the expression', async t => {
	t.is(await parsifyExamplePlugin(mockedUtils)('foo / bar'), 'foo / bar');
});
