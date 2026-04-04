/**
 * Cursor Effects Manager
 * Handles custom cursor trail and interactive effects
 */

export class CursorManager {
  private cursor: HTMLElement | null;
  private cursorFollower: HTMLElement | null;
  private mouseX: number;
  private mouseY: number;
  private followerX: number;
  private followerY: number;
  private animationFrameId: number | null;

  constructor() {
    this.cursor = document.querySelector('.cursor-trail');
    this.cursorFollower = document.querySelector('.cursor-trail-follower');
    this.mouseX = 0;
    this.mouseY = 0;
    this.followerX = 0;
    this.followerY = 0;
    this.animationFrameId = null;
  }

  /**
   * Initialize cursor effects
   */
  init(): void {
    if (!this.cursor || !this.cursorFollower) return;

    // Track mouse movement
    document.addEventListener('mousemove', (e) => this.handleMouseMove(e));

    // Add interactive effects to clickable elements
    this.addInteractiveEffects();
  }

  /**
   * Handle mouse movement
   */
  private handleMouseMove(e: MouseEvent): void {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;

    if (!this.animationFrameId) {
      this.animationFrameId = requestAnimationFrame(() => this.updateCursor());
    }
  }

  /**
   * Update cursor position using requestAnimationFrame for smooth animation
   */
  private updateCursor(): void {
    if (this.cursor) {
      this.cursor.style.left = `${this.mouseX}px`;
      this.cursor.style.top = `${this.mouseY}px`;
    }

    // Smooth follower effect with lerp (linear interpolation)
    this.followerX += (this.mouseX - this.followerX) * 0.15;
    this.followerY += (this.mouseY - this.followerY) * 0.15;

    if (this.cursorFollower) {
      this.cursorFollower.style.left = `${this.followerX}px`;
      this.cursorFollower.style.top = `${this.followerY}px`;
    }

    this.animationFrameId = null;
  }

  /**
   * Add interactive effects to clickable elements
   */
  private addInteractiveEffects(): void {
    const interactiveElements = document.querySelectorAll(
      'a, button, .project-card, .nav-link, .skill-tag, .home-link'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => this.onElementHover(true));
      el.addEventListener('mouseleave', () => this.onElementHover(false));
    });
  }

  /**
   * Handle hover state on interactive elements
   */
  private onElementHover(isHovering: boolean): void {
    if (!this.cursor) return;

    if (isHovering) {
      this.cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      this.cursor.style.backgroundColor = 'rgba(59, 130, 246, 0.5)';
    } else {
      this.cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      this.cursor.style.backgroundColor = 'rgba(59, 130, 246, 0.3)';
    }
  }

  /**
   * Destroy cursor effects and cleanup
   */
  destroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
