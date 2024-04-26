export class Vec2 {
	/**
	* Create a 2 dimentional Vector
	* @param {number} x component
	* @param {number} y component
	*/
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	/**
	* Adds a Vec2 to the current Vec2
	* @param {Vec2}
	*/
	add(vec2) {
		this.x = this.x + vec2.x;
		this.y = this.y + vec2.y; 
	}
	/**
	* Subtracts a Vec2 from the current Vec2
	* @param {Vec2}
	*/
	sub(vec2) {
		this.x = this.x - vec2.x;
		this.y = this.y - vec2.y; 
	}
	/**
	* Scales the Vec2 up by the given scalar value
	* @param {number}
	*/
	scaleUp(scalar) {
		this.x = this.x * scalar;
		this.y = this.y * scalar;
	}
	/**
	* Scales the Vec2 down by the given scalar value
	* @param {number}
	*/
	scaleDown(scalar) {
		this.x = this.x / scalar;
		this.y = this.y / scalar;
	}
	/**
	* Gets the magnatude (length) of the Vec2
	* @return {number} The Magnatude
	*/
	getLen() {
		let len = Math.sqrt((Math.pow(this.x, 2)) + Math.pow(this.y, 2));
		return len;
	}
	/**
	* Sets the Vec2 to be a unit vector
	*/
	normalize() {
		let mag = this.getLen();
		this.x = this.x / mag;
		this.y = this.y / mag;
	}
}