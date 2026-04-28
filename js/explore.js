/**
 * STEP 1: EXPLORE
 * Logic for selecting experience categories.
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize shared navigation (if exists in main.js)
    if (typeof window.initStepNavigation === 'function') {
        window.initStepNavigation(1);
    }

    // 2. State Management (Key: selectedServices to maintain flow consistency)
    const STORAGE_KEY = 'selectedServices';
    const saved = localStorage.getItem(STORAGE_KEY);
    const selectedServices = new Set(saved ? JSON.parse(saved) : []);
    
    const ctaContainer = document.getElementById("ctaContainer");
    const continueBtn = document.getElementById("continueToOptionsBtn");

    // 3. UI Restoration: Re-apply selected state on load
    document.querySelectorAll("[data-service-card]").forEach(card => {
        const type = card.getAttribute("data-service-card");
        if (selectedServices.has(type)) {
            setSelectedVisuals(card, true);
        }
    });
    updateCTA();

    // 4. Click Handler for Experience Cards
    document.querySelectorAll("[data-service-card]").forEach((card) => {
        card.addEventListener("click", () => {
            const type = card.getAttribute("data-service-card");
            const isCurrentlySelected = selectedServices.has(type);
            
            if (isCurrentlySelected) {
                selectedServices.delete(type);
                setSelectedVisuals(card, false);
            } else {
                selectedServices.add(type);
                setSelectedVisuals(card, true);
            }
            
            saveState();
            updateCTA();
            
            // Refresh navigation visuals to potentially unlock 'Options' step
            if (typeof window.initStepNavigation === 'function') {
                window.initStepNavigation(1);
            }
        });
    });

    // 5. Continue Button Logic
    continueBtn?.addEventListener("click", () => {
        if (selectedServices.size > 0) {
            // Also store as 'selectedExperiences' if specifically requested by some legacy logic
            localStorage.setItem("selectedExperiences", JSON.stringify(Array.from(selectedServices)));
            
            if (typeof window.handleStepNavigation === 'function') {
                window.handleStepNavigation("options.html");
            } else {
                window.location.href = "options.html";
            }
        }
    });

    // --- HELPER FUNCTIONS ---

    /**
     * Toggles the visual state of a card
     */
    function setSelectedVisuals(card, isSelected) {
        const icon = card.querySelector('.material-symbols-outlined');
        
        if (isSelected) {
            card.classList.add("selected", "border-orange-500/50", "ring-1", "ring-orange-500/30", "bg-orange-500/5");
            card.classList.remove("border-transparent");
            if (icon) {
                icon.classList.add("text-orange-500");
                icon.classList.remove("text-white/60");
            }
        } else {
            card.classList.remove("selected", "border-orange-500/50", "ring-1", "ring-orange-500/30", "bg-orange-500/5");
            card.classList.add("border-transparent");
            if (icon) {
                icon.classList.remove("text-orange-500");
                icon.classList.add("text-white/60");
            }
        }
    }

    /**
     * Persists the set to localStorage
     */
    function saveState() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(selectedServices)));
    }

    /**
     * Shows/Hides the Continue CTA
     */
    function updateCTA() {
        if (selectedServices.size > 0) {
            ctaContainer.classList.remove("hidden");
        } else {
            ctaContainer.classList.add("hidden");
        }
    }
});
