/**
 * Contact Form Handler
 * Manages form validation and submission
 */

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof FormData, string>>;
}

export class ContactFormHandler {
  private form: HTMLFormElement | null;
  private submitButton: HTMLButtonElement | null;
  private onSuccess?: (data: FormData) => void;
  private onError?: (error: Error) => void;

  constructor() {
    this.form = document.querySelector('form');
    this.submitButton = this.form?.querySelector('button[type="submit"]') as HTMLButtonElement | null;
  }

  /**
   * Initialize form handler
   */
  init(onSuccess?: (data: FormData) => void, onError?: (error: Error) => void): void {
    this.onSuccess = onSuccess;
    this.onError = onError;

    if (!this.form) return;

    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    
    // Add real-time validation
    this.addRealTimeValidation();
  }

  /**
   * Handle form submission
   */
  private async handleSubmit(e: Event): Promise<void> {
    e.preventDefault();

    if (!this.form) return;

    const formData = new FormData(this.form);
    const data: FormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    // Validate form
    const validation = this.validate(data);

    if (!validation.isValid) {
      this.displayErrors(validation.errors);
      return;
    }

    // Clear previous errors
    this.clearErrors();

    // Show loading state
    this.setLoadingState(true);

    try {
      // Simulate API call (replace with actual endpoint)
      await this.submitForm(data);
      
      // Success
      this.showSuccessMessage();
      this.form.reset();
      
      if (this.onSuccess) {
        this.onSuccess(data);
      }
    } catch (error) {
      // Error
      this.showErrorMessage();
      
      if (this.onError && error instanceof Error) {
        this.onError(error);
      }
    } finally {
      this.setLoadingState(false);
    }
  }

  /**
   * Validate form data
   */
  private validate(data: FormData): FormValidationResult {
    const errors: Partial<Record<keyof FormData, string>> = {};

    // Name validation
    if (!data.name || data.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters long';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!data.message || data.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  }

  /**
   * Display validation errors
   */
  private displayErrors(errors: Partial<Record<keyof FormData, string>>): void {
    // Clear previous errors
    this.clearErrors();

    // Display each error
    Object.entries(errors).forEach(([field, message]) => {
      const input = this.form?.querySelector(`[name="${field}"]`);
      if (input) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'text-red-400 text-sm mt-1';
        errorDiv.textContent = message;
        input.parentNode?.appendChild(errorDiv);
        
        // Add error styling to input
        input.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');
      }
    });
  }

  /**
   * Clear all validation errors
   */
  private clearErrors(): void {
    // Remove error messages
    this.form?.querySelectorAll('.text-red-400').forEach((el) => el.remove());

    // Remove error styling from inputs
    this.form?.querySelectorAll('input, textarea').forEach((input) => {
      input.classList.remove('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');
    });
  }

  /**
   * Set loading state on form
   */
  private setLoadingState(isLoading: boolean): void {
    if (!this.submitButton) return;

    if (isLoading) {
      this.submitButton.disabled = true;
      this.submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
    } else {
      this.submitButton.disabled = false;
      this.submitButton.innerHTML = 'Send Message';
    }
  }

  /**
   * Show success message
   */
  private showSuccessMessage(): void {
    this.showMessage('Thank you for your message! I will get back to you soon.', 'success');
  }

  /**
   * Show error message
   */
  private showErrorMessage(): void {
    this.showMessage(
      'An error occurred while sending your message. Please check your connection and try again.',
      'error'
    );
  }

  /**
   * Show a message to the user
   */
  private showMessage(text: string, type: 'success' | 'error'): void {
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `p-4 rounded-md mb-4 ${
      type === 'success'
        ? 'bg-green-900/50 border border-green-500 text-green-200'
        : 'bg-red-900/50 border border-red-500 text-red-200'
    }`;
    messageDiv.textContent = text;

    // Insert at the beginning of the form
    this.form?.prepend(messageDiv);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      messageDiv.style.opacity = '0';
      messageDiv.style.transition = 'opacity 0.3s ease';
      setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
  }

  /**
   * Add real-time validation on input blur
   */
  private addRealTimeValidation(): void {
    if (!this.form) return;

    const inputs = this.form.querySelectorAll('input, textarea');
    
    inputs.forEach((input) => {
      input.addEventListener('blur', () => {
        const formData = new FormData(this.form!);
        const data: FormData = {
          name: formData.get('name') as string,
          email: formData.get('email') as string,
          message: formData.get('message') as string,
        };

        const validation = this.validate(data);
        
        // Only show errors for fields that have been touched
        const fieldName = input.getAttribute('name') as keyof FormData;
        if (validation.errors[fieldName]) {
          // Remove existing error for this field
          input.parentNode?.querySelector('.text-red-400')?.remove();
          
          // Add new error
          const errorDiv = document.createElement('div');
          errorDiv.className = 'text-red-400 text-sm mt-1';
          errorDiv.textContent = validation.errors[fieldName]!;
          input.parentNode?.appendChild(errorDiv);
          
          input.classList.add('border-red-500');
        } else {
          // Clear error for this field
          input.parentNode?.querySelector('.text-red-400')?.remove();
          input.classList.remove('border-red-500');
        }
      });
    });
  }

  /**
   * Submit form data (placeholder for actual API call)
   */
  private async submitForm(data: FormData): Promise<void> {
    // In a real application, you would send this to your backend
    console.log('Form submitted:', data);
    
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // You could replace this with an actual fetch call:
    // return fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });
  }

  /**
   * Reset form to initial state
   */
  reset(): void {
    if (!this.form) return;
    
    this.form.reset();
    this.clearErrors();
  }
}
