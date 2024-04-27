import {Vec2} from'./vec2.js'

export class World {
	constructor(gravity=new Vec2(0,0), dt=1/60) {
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
			
			let force = body.force;
			let mass = body.mass;
			console.log(body)
			force.x += mass * this.gravity.x;
			force.y += mass * this.gravity.y;
			
		}
	}
}