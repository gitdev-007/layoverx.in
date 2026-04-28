/**
 * Contact Form Handler for LayoverX
 * Handles form submission and email sending via API
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Contact form script loaded');
    
    // More specific selector for contact form
    const contactForm = document.querySelector('#contact form') || document.querySelector('form');
    const submitButton = contactForm?.querySelector('button[type="submit"]');
    
    console.log('Contact form found:', !!contactForm);
    console.log('Submit button found:', !!submitButton);
    
    if (!contactForm) {
        console.log('Contact form not found');
        return;
    }

    // Form submission handler
    contactForm.addEventListener('submit', async (e) => {
        console.log('Form submission triggered');
        e.preventDefault();
        
        // Get form fields
        const nameInput = document.getElementById('contact-name');
        const emailInput = document.getElementById('contact-email');
        const messageInput = document.getElementById('contact-message');
        
        console.log('Form inputs found:', !!nameInput, !!emailInput, !!messageInput);
        
        // Get values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        
        console.log('Form values:', { name, email, message: message.substring(0, 50) + '...' });
        
        // Basic validation
        if (!name || !email || !message) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Disable button and show loading state
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            submitButton.classList.add('opacity-75', 'cursor-not-allowed');
        }
        
        try {
            console.log('About to send API request to /api/contact');
            
            // Send data to API
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    message
                })
            });
            
            console.log('API response received:', response.status, response.statusText);
            
            const result = await response.json();
            console.log('API response data:', result);
            
            if (result.success) {
                // Success
                showMessage('Message sent successfully! We\'ll get back to you soon.', 'success');
                
                // Clear form
                contactForm.reset();
                
                // Scroll to top of contact section
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
                
            } else {
                // Error from API
                showMessage(result.error || 'Failed to send message. Please try again.', 'error');
            }
            
        } catch (error) {
            console.error('Contact form error:', error);
            showMessage('Network error. Please check your connection and try again.', 'error');
        } finally {
            // Re-enable button
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
                submitButton.classList.remove('opacity-75', 'cursor-not-allowed');
            }
        }
    });
    
    /**
     * Show message to user
     * @param {string} message - Message text
     * @param {string} type - 'success' or 'error'
     */
    function showMessage(message, type) {
        // Remove any existing messages
        const existingMessage = document.querySelector('.contact-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = `contact-message p-4 rounded-lg mb-4 ${
            type === 'success' 
                ? 'bg-green-100 border border-green-400 text-green-700' 
                : 'bg-red-100 border border-red-400 text-red-700'
        }`;
        messageEl.innerHTML = `
            <div class="flex items-center">
                <span class="material-symbols-outlined mr-2">
                    ${type === 'success' ? 'check_circle' : 'error'}
                </span>
                <span>${message}</span>
            </div>
        `;
        
        // Insert message before the form
        contactForm.parentNode.insertBefore(messageEl, contactForm);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.remove();
            }
        }, 5000);
        
        // Scroll to message
        messageEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // Add input validation feedback
    const inputs = [nameInput, emailInput, messageInput];
    inputs.forEach(input => {
        if (input) {
            input.addEventListener('blur', () => {
                validateField(input);
            });
            
            input.addEventListener('input', () => {
                // Remove error styling when user starts typing
                input.classList.remove('border-red-500');
                const errorMsg = input.parentNode.querySelector('.field-error');
                if (errorMsg) {
                    errorMsg.remove();
                }
            });
        }
    });
    
    /**
     * Validate individual field
     * @param {HTMLElement} field - Input field to validate
     */
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Remove existing error
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        field.classList.remove('border-red-500');
        
        if (!value) {
            isValid = false;
            errorMessage = 'This field is required';
        } else if (field.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }
        
        if (!isValid) {
            field.classList.add('border-red-500');
            
            // Create error message
            const errorEl = document.createElement('p');
            errorEl.className = 'field-error text-red-500 text-sm mt-1';
            errorEl.textContent = errorMessage;
            field.parentNode.appendChild(errorEl);
        }
        
        return isValid;
    }
});
