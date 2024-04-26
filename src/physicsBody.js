import {Vec2} from "./vec2.js"

export class PhysicsBody {
	/**
	* The parent class for all physics shapes
	* @param {Vec2} the position of the body in the world
	*/
	constructor(pos= new Vec2(0,0)) {
		this.pos = pos;
		this.vel = new Vec2(0,0);
		this.acc = new Vec2(0,0);
	}
	
	
	
	/**
	* Gets the bodys current position
	* @return {Vec2} - position
	*/
	get position() {
		return this.pos;
	}
	
	/**
	* Sets the body's position
	* @param {Vec2} - position vector
	*/
	set position(vec2) {
		this.pos.x = vec2.x;
		this.pos.y = vec2.y;
	}
	
	/**
	* Gets the bodys current velocity
	* @return {Vec2} - velocity
	*/
	get velocity() {
		return this.vel;
	}
	
	/**
	* Sets the body's velocity
	* @param {Vec2} - velocity vector
	*/
	set velocity(vec2) {
		this.vel.x = vec2.x;
		this.vel.y = vec2.y;
	}
	
	/**
	* Gets the bodys current acceleration
	* @return {Vec2} - acceleration
	*/
	get acceleration() {
		return this.acc;
	}
	
	/**
	* Sets the body's acceleration
	* @param {Vec2} - acceleration vector
	*/
	set acceleration(vec2) {
		this.acc.x = vec2.x;
		this.acc.y = vec2.y;
	}
	
}