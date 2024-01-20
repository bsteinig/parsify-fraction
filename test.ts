import test from 'ava';
import Parsify from '@parsify/core';
import parsifyFractionsPlugin from './src/index';

test('general', async t => {
	const parsify = new Parsify([
		parsifyFractionsPlugin()
	]);

	t.not(await parsify.parse('0.375 to frac'), '3/8');
	t.is(await parsify.parse('.325 to frac'), '13/40');
	t.is(await parsify.parse('.325        to          frac'), '13/40');
	t.is(await parsify.parse('12.2222222 to fraction '), '12 2/9');
	t.is(await parsify.parse('12tofrac'), '12tofrac');
});