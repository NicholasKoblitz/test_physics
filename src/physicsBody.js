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
		this.force = new Vec2(0,0);
	}
	
	
	
	/**
	* Gets the bodys current position
	* @return {Vec2} - position
	*/
	getPos() {
		return this.pos;
	}
	
	/**
	* Sets the body's position
	* @param {Vec2} - position vector
	*/
	setPos(vec2) {
		this.pos.x = vec2.x;
		this.pos.y = vec2.y;
	}
	
	/**
	* Gets the bodys current velocity
	* @return {Vec2} - velocity
	*/
	getVel() {
		return this.vel;
	}
	
	/**
	* Sets the body's velocity
	* @param {Vec2} - velocity vector
	*/
	setVel(vec2) {
		this.vel.x = vec2.x;
		this.vel.y = vec2.y;
	}
	
	/**
	* Gets the bodys current acceleration
	* @return {Vec2} - acceleration
	*/
	getAcc() {
		return this.acc;
	}
	
	/**
	* Sets the body's acceleration
	* @param {Vec2} - acceleration vector
	*/
	setAcc(vec2) {
		this.acc.x = vec2.x;
		this.acc.y = vec2.y;
	}

	/**
	* Gets the bodys current force
	* @return {Vec2} - force Vector
	*/
	getForce() {
		return this.force;
	}
	
	/**
	* Sets the body's force
	* @param {Vec2} - vector
	* @param {number} - body's mass
	*/
	setForce(vec2, mass) {

		this.force.x += vec2.x * mass;
		this.force.y += vec2.y * mass;
	}
	
}