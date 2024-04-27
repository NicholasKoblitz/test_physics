
import {PhysicsBody} from "./physicsBody.js"
import {Vec2} from './vec2.js'

export class Box extends PhysicsBody {
	
	
	constructor(pos, mass=1) {
		super(pos)
		this.mass = mass;
		this.vertexs = [];
		this.updateVertexes();
	}
	
	updateVertexes() {
		let x = this.pos.x;
		let y = this.pos.y;
		
		let vex = [
			new Vec2(x, y), // Top Right
			new Vec2(-x, y), // Bottom Right
			new Vec2(-x, -y), // Bottom Left
			new Vec2(-x, y) // Top Left
		];
		this.vertexs = vex;
	}
}