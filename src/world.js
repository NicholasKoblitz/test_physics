import {Vec2} from'./vec2.js'

export class World {
	constructor(gravity=new Vec2(0,-9.81), dt=1/60) {
		this.gravity = gravity;
		this.dt = dt
		this.bodies = [];
	}
	
	
	addBody(body) {
		this.bodies.push(body);
	}
	
	
	fixedStep() {
		for(let i = 0; i < this.bodies.length; i++) {
			let body = this.bodies[i];
			
			let mass = body.mass;
			body.setForce(this.gravity, mass);

			
		}
	}
}