let canvas = document.querySelector('canvas'),
	width = 300,
	height = 300,
	ctx = canvas.getContext('2d'),
	pSystemSize = 30,
	deform = {a:4, s:0.4, min:-200, max:200, dir:1},
	repaint = 'rgba(255,255,255,.1)';

const mcos = Math.cos,
	  msin = Math.sin,
	  mpow = Math.pow,
	  mrandom = Math.random,
	  PI180=Math.PI / 180,
	  tau = Math.PI * 2;

canvas.width = width;
canvas.height = height;
ctx.lineWidth = 1;

const ParticleSystem = function(num){
	this.colour = '#f00';
	this.numParticles = num;
	this.allParticles = [];
	this.x = width * .5;
	this.y = height * .5;
	this.generate();
}
ParticleSystem.prototype.generate = function(){
	for(let i=0; i<this.numParticles; i++){
		let vo = {};
		vo.degrees = (360 / this.numParticles) * i * PI180;
		vo.parent = this;
		vo.scalar = 2 + (6 / this.numParticles) * i;
		vo.size = 2 + (3.5 / this.numParticles) * i;
		vo.speed = .01 + (.05 / this.numParticles) * (i * .5);
		vo.x = width / 2;
		vo.y = height / 2;
		vo.vx = 0;
		vo.vy = 0;
		this.allParticles.push(new Particle(vo));
	}
}
ParticleSystem.prototype.update = function(){
	for(let i=0; i<this.allParticles.length; i++){
		this.allParticles[i].update();
	}
}

const Particle = function(vo){
	this.degrees = vo.degrees;
	this.parent = vo.parent;
	this.scalar = vo.scalar;
	this.size = vo.size;
	this.speed = vo.speed;
	this.x = vo.x;
	this.y = vo.y;
	this.vx = 0;
	this.vy = 0;
}
Particle.prototype.update = function(){
	this.degrees += this.speed;
	this.vx = 16 * mpow(msin(this.degrees), 3) * deform.dir;
	this.vy = ((13 * mcos(this.degrees)) - 
			   (6 * mcos(2 * this.degrees)) - // 5
			   (2 * mcos(3 * this.degrees)) -
			   (mcos(4 * this.degrees))) * -1;
	
	// update position
	this.x = this.vx * this.scalar + this.parent.x;
	this.y = this.vy * this.scalar + this.parent.y;
}

function update(){
	system.update();
}

function draw(){
	ctx.fillStyle = repaint;
	ctx.fillRect(0, 0, width, height);
	ctx.fillStyle = system.colour;
	for(let i=0; i<system.numParticles; i++){
		let p = system.allParticles[i];
		ctx.beginPath();
		ctx.arc(p.x, p.y, p.size, 0, tau, false);
		ctx.fill();
	}
}
function animate(){
	update();
	draw();
	requestAnimationFrame(animate);
}
let system = new ParticleSystem(pSystemSize);
ctx.fillStyle = system.colour;
animate();