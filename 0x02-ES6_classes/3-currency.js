export default class Currency {

	  constructor(code, name) {

		      if (typeof code !== 'string') {

			            throw new TypeError('Code must be a string');

			          } else if (typeof name !== 'string') {

					        throw new TypeError('Name must be a string');

					      }
