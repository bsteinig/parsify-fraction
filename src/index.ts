import Fraction from 'fraction.js';

/**
 * This is the wrapper function.
 * It allows you to access certain utilities like the math parser's scope and HTTP fetcher, used internally by Parsify Desktop.
 * It should return another function which will handle the logic.
 */
const wrapper = () => {
	/**
   * This function receives the expression, which you need to validate and either do something with it, or return the original expression (so that other plugins can use it).
   */
	const plugin = async (expression: string): Promise<string> => {
		let match = /^(\d*\.\d+)\s+to\s+frac$/.exec(expression);

		if (!match) {
			match = /^(\d*\.\d+)\s+to\s+fraction$/.exec(expression);
		}

		if (match?.[1]) {
			const frac = new Fraction(Number.parseFloat(match[1]));
			return frac.toFraction(true);
		}

		// If the expression validation fails, just return the expression
		return expression;
	};

	return plugin;
};

export default wrapper;
