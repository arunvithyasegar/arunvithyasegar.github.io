/**
 * Particle Background Manager
 * Creates and manages floating particle effects
 */

export class ParticleManager {
  private container: HTMLElement | null;
  private particles: HTMLElement[];

  constructor() {
    this.container = document.getElementById('particles');
    this.particles = [];
  }

  /**
   * Create floating particles in the background
   */
  createParticles(): void {
    if (!this.container) return;

    // Clear existing particles
    this.container.innerHTML = '';
    this.particles = [];

    const particleCount = Math.floor(window.innerWidth / 10);

    for (let i = 0; i < particleCount; i++) {
      const particle = this.createParticle();
      this.container.appendChild(particle);
      this.particles.push(particle);
    }
  }

  /**
   * Create a single particle element
   */
  private createParticle(): HTMLElement {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 5 + 1;
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}px`;
    particle.style.top = `${posY}px`;
    particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

    return particle;
  }

  /**
   * Clear all particles
   */
  clear(): void {
    if (this.container) {
      this.container.innerHTML = '';
      this.particles = [];
    }
  }

  /**
   * Recreate particles on window resize
   */
  onResize(): void {
    this.createParticles();
  }
}
