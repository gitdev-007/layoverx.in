/**
 * STEP 2: OPTIONS
 * Dynamic rendering of REAL bookable services with skeleton loading.
 */

const REAL_SERVICES_DATA = {
    "Hotels": [
        { id: "h1", category: "Hotels", title: "The Orchid Hotel", duration: "120 MIN", price: "Rs 1200", rating: "4.8", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhE4jd4gvASnkYpCad8ZkFGP8EjYRtDrOIM4gv5zqgo82jn_Lg4ySHLH2q1_65Q9n1ibN5xpEt-HqW--014gjYePmi7m3V3vNi2YSNlu6dyvv3YYV41fcG2tOhe2mcy-wJCtFNHizmh2a4SN8PCYdWCkajrZf4CDWy_iewrpGFSxXzld8PY2BGj6HqgzGF_1-zdjwbrXlkvQkzlytVTwsV7n96K_gc0T_1BCS7i8GDr19aStt2ifH6mQnxdAAouMKyAazs-_RXluE", desc: "0.8 km from BOM • Eco-friendly luxury" },
        { id: "h2", category: "Hotels", title: "Hotel Sahara Star", duration: "120 MIN", price: "Rs 1400", rating: "4.7", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATVkR2KXkjynUzwChDVcZkDkKNFrDNseyf3wI6FNpzzIi9WSZIBh4fp5UEP4hylQCsTVoKcSOAVBzDSDkZOEzSqhWiGuwQVHP3Cote2EL6fvUHv6r6gjsDfoPSu0SBnPJ3SLxLuXLpeuyhYPaSOEgM5qaDyyq9CxdQuJLa7ZGavDOQjSFOuu8bEkLLp8-dE-p_Uq9a8kSpnMSGRLrtDVaiOMkEFxVvev0JD6S1hV7lDpM9_jf6AQ9U2715D53S3HRGxsyaYwvkSPY", desc: "1.2 km from BOM • Iconic glass dome" },
        { id: "h3", category: "Hotels", title: "Taj Santacruz", duration: "120 MIN", price: "Rs 1800", rating: "4.9", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7bVECyHwsD_FPkeHUiZk7Pxa0MuWKHsQq2Tz3RNAiCZzR63Goe_Uo1ipzHHjXCUpuCaTamyDWnV012gRmq-a_PtAMr4DL1i-Rr4wuTfjjuFGYUbJ_GK-UTYndpd7mC-9lHr1SaNBZDcr-4NRpjQaFJZcAzpEVClg19suEHsTqrKKoyxreJIdAaqVlV7EaVCOzpt6Bq11vGY9FlTU9MU7tWMaWrh7eXirWCxKSBuDoPKaeHfq006amnrEANkph3CX4cGBQA6c9K4", desc: "2.4 km from BOM • Signature Taj luxury" }
    ],
    "Food & Dining": [
        { id: "f1", category: "Food & Dining", title: "Thai Naam", duration: "60 MIN", price: "Rs 1199", rating: "4.6", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnlb-Uvm7dEPU6AWkMlCbloKh5IxUB3ljic1wAbqqQVrj0nkruSrqdAijamQH-s0-pnlTMd2YkbYfj6C693uWJfQz8AC4bQhnooO9w5gdQFdY5jE8WqPZbOvB2mJL4KUYgVG-JvCNyE4io4tOOdtB67fBhfyh0DA1MvQOu55h8BFPwN3JQ47jNyZx6z7Jjq3JskhVon26IPZhPyfkjAu37X1btu-1mREcuiDKKbSFbRvHw88E60f6qP19Y6cbTz6-x_M1q3c0ek0Q", desc: "2.1 km from BOM • Authentic Thai cuisine" },
        { id: "f2", category: "Food & Dining", title: "JW Cafe", duration: "90 MIN", price: "Rs 1499", rating: "4.7", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChGy6LO-M3DdRHAZT1IKF0qWh4DqKAaQLDrffN4ndWvXBnuSS4ifNtkZmx4lvAdO6bL26WcxoJ2-CTJxCX0rXlfbI1FKtaAc634i3zmfS5X1fH62JyXPXoi3b2KqzLJ14PTMkh_em0t-ZKolV0Biji45shGHvLCk-Tt4mJ-NV0Bec5zaIA_upfRlog23PfNFyWHR6F23tS7GojOr8-wH7QNKQDMfD1XESxB75ZlppDUoIwTeEGrxuVYmKnxiQEIiUvrRpi0Js2RRc", desc: "1.8 km from BOM • Large global buffet" },
        { id: "f3", category: "Food & Dining", title: "Peshawri", duration: "90 MIN", price: "Rs 1599", rating: "4.8", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuRVO62zdv0fT7mYOWLqFAENE0C3MeiqWMzwxY8fvHyto_KpdrEHmKlTb3yj1AjwAyV-I0kFUXT1fE1sirgoM1OlTbrXAu611jENnrLd65-OQO_6NjkW9-X73Cy1n8a8PexPq9b46B2GYXDDPLM717YkZrqhb3R4DXpiPuhVulJmgU4WxGHuhAiJ6ppbKn9bfwMo_klweNRbwVxCPK_Thnnns4FVYXljJQBJP9sZnUdT6rrPEoWLRggCQhyECrW2vTQeqxBcKCD_8", desc: "2.4 km from BOM • Luxury kebab dining" }
    ],
    "Services": [
        { id: "s1", category: "Services", title: "Jiva Spa", duration: "60 MIN", price: "Rs 3960", rating: "4.8", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuBeISMzXQPmWmOmB0ft4zxGshz-gTXvzupRjlzTpxD0wsTviCiyUtRzn3emtm-4mFRNk1sshFtHHN9FZyFc9FDWyaeXk8ad4U6Y7UyLtvGZT44QPc8dYNFY5c6OXVhfZLSdC3IU4_UP8n0rqYmETKgd07B-ktbHUz7ty3qLWIl7TiyTUv8bovx2eJRJljeeXdMkeE2PHMnSIILL3EIFW2YYbK7lP6iYBfTpoF5c4mtXEICObvxAQEi9TN9RhLPY1HqUBaE-dfU3o", desc: "1.6 km from BOM • Ayurvedic luxury spa" },
        { id: "s2", category: "Services", title: "Quan Spa", duration: "60 MIN", price: "Rs 4840", rating: "4.7", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATVkR2KXkjynUzwChDVcZkDkKNFrDNseyf3wI6FNpzzIi9WSZIBh4fp5UEP4hylQCsTVoKcSOAVBzDSDkZOEzSqhWiGuwQVHP3Cote2EL6fvUHv6r6gjsDfoPSu0SBnPJ3SLxLuXLpeuyhYPaSOEgM5qaDyyq9CxdQuJLa7ZGavDOQjSFOuu8bEkLLp8-dE-p_Uq9a8kSpnMSGRLrtDVaiOMkEFxVvev0JD6S1hV7lDpM9_jf6AQ9U2715D53S3HRGxsyaYwvkSPY", desc: "1.8 km from BOM • Luxury hydrotherapy" }
    ],
    "Experiences": [
        { id: "e1", category: "Experiences", title: "KidZania Mumbai", duration: "120 MIN", price: "Rs 1180", rating: "4.7", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeuOcp48bW0hOY4l8pEuj6z5sWn30Mv5P4Av858FhP6Aa2LtthA85vYicS7BpPAsl0Yq--QwUBB5AEwKLBYSZK_wcWjf3LOMYYW4lHtyN8bM5mTCt0dmNm1ou6uR4nMoyA7TinsYas2aKSI-N3O4BPLSUt_lBIjUvm9j2LSLoK_PzaTxh9uPrF8Al8gh9WCdud3wx2Qm0Ft2Z4EiEmvCS650vh5cgfDw58zTGl8XjeXsKNB8Rkm_8Ns2TKIWh7_5ppRliaUpBOgSk", desc: "7.9 km from BOM • Edutainment roleplay" },
        { id: "e2", category: "Experiences", title: "Clue Hunt", duration: "60 MIN", price: "Rs 1656", rating: "4.6", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnlb-Uvm7dEPU6AWkMlCbloKh5IxUB3ljic1wAbqqQVrj0nkruSrqdAijamQH-s0-pnlTMd2YkbYfj6C693uWJfQz8AC4bQhnooO9w5gdQFdY5jE8WqPZbOvB2mJL4KUYgVG-JvCNyE4io4tOOdtB67fBhfyh0DA1MvQOu55h8BFPwN3JQ47jNyZx6z7Jjq3JskhVon26IPZhPyfkjAu37X1btu-1mREcuiDKKbSFbRvHw88E60f6qP19Y6cbTz6-x_M1q3c0ek0Q", desc: "5.4 km from BOM • Escape room challenge" }
    ],
    "Transport": [
        { id: "t1", category: "Transport", title: "BMW 7 Series", duration: "30 MIN", price: "Rs 4500", rating: "5.0", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhE4jd4gvASnkYpCad8ZkFGP8EjYRtDrOIM4gv5zqgo82jn_Lg4ySHLH2q1_65Q9n1ibN5xpEt-HqW--014gjYePmi7m3V3vNi2YSNlu6dyvv3YYV41fcG2tOhe2mcy-wJCtFNHizmh2a4SN8PCYdWCkajrZf4CDWy_iewrpGFSxXzld8PY2BGj6HqgzGF_1-zdjwbrXlkvQkzlytVTwsV7n96K_gc0T_1BCS7i8GDr19aStt2ifH6mQnxdAAouMKyAazs-_RXluE", desc: "Premium airport transfer" }
    ],
    "Shopping": [
        { id: "sh1", category: "Shopping", title: "Luxury Retail", duration: "45 MIN", price: "Free", rating: "4.5", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuRVO62zdv0fT7mYOWLqFAENE0C3MeiqWMzwxY8fvHyto_KpdrEHmKlTb3yj1AjwAyV-I0kFUXT1fE1sirgoM1OlTbrXAu611jENnrLd65-OQO_6NjkW9-X73Cy1n8a8PexPq9b46B2GYXDDPLM717YkZrqhb3R4DXpiPuhVulJmgU4WxGHuhAiJ6ppbKn9bfwMo_klweNRbwVxCPK_Thnnns4FVYXljJQBJP9sZnUdT6rrPEoWLRggCQhyECrW2vTQeqxBcKCD_8", desc: "Duty Free • Personal Shopper" }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("optionsContainer");
    const ctaContainer = document.getElementById("ctaContainer");
    const continueBtn = document.getElementById("continueToPriorityBtn");

    const selectedServices = JSON.parse(localStorage.getItem('selectedServices') || '[]');
    const savedOptions = JSON.parse(localStorage.getItem('selectedOptions') || '[]');
    const selectedOptionsSet = new Set(savedOptions.map(o => o.id));

    // 1. Initialize shared navigation
    if (window.initStepNavigation) window.initStepNavigation(2);

    // 2. Initial Render
    renderAllSections();
    updateCTA();

    async function renderAllSections() {
        container.innerHTML = "";
        
        for (const service of selectedServices) {
            const section = createSection(service);
            container.appendChild(section);
            
            // Show skeleton while "loading"
            const grid = section.querySelector('.grid');
            grid.innerHTML = createSkeletons(3);
            
            // Simulate network delay for premium feel
            await new Promise(r => setTimeout(r, 400));
            
            // Render real cards
            renderItems(service, grid);
        }
    }

    function createSection(title) {
        const div = document.createElement("section");
        div.className = "mb-16 opacity-0 translate-y-4 transition-all duration-700 ease-out";
        div.innerHTML = `
            <div class="flex justify-between items-end mb-8">
                <div>
                    <h2 class="font-headline-lg text-headline-lg text-white">${title} Options</h2>
                    <p class="text-white/40 italic">Handpicked for your layover window</p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
        `;
        // Trigger fade-in
        requestAnimationFrame(() => {
            div.classList.remove('opacity-0', 'translate-y-4');
        });
        return div;
    }

    function createSkeletons(count) {
        return Array(count).fill(0).map(() => `
            <div class="glass-card rounded-2xl overflow-hidden h-[400px] animate-pulse">
                <div class="h-48 bg-white/5"></div>
                <div class="p-6 space-y-4">
                    <div class="h-6 w-3/4 bg-white/5 rounded"></div>
                    <div class="h-4 w-full bg-white/5 rounded"></div>
                    <div class="h-10 w-full bg-white/10 rounded-xl mt-4"></div>
                </div>
            </div>
        `).join('');
    }

    function renderItems(service, grid) {
        const options = REAL_SERVICES_DATA[service] || [];
        grid.innerHTML = options.map(opt => {
            const isSelected = selectedOptionsSet.has(opt.id);
            return `
            <div class="glass-card rounded-2xl overflow-hidden group border ${isSelected ? 'border-[#FF6B00] ring-1 ring-[#FF6B00]/20' : 'border-transparent'} transition-all duration-300" data-option-id="${opt.id}">
                <div class="h-48 relative">
                    <img src="${opt.image}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    <div class="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#FF6B00] border border-white/10">
                        ${opt.duration}
                    </div>
                </div>
                <div class="p-6">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-headline-md text-lg text-white">${opt.title}</h3>
                        <div class="flex items-center gap-1 text-[#FF6B00]">
                            <span class="material-symbols-outlined text-sm">star</span>
                            <span class="text-xs font-bold">${opt.rating}</span>
                        </div>
                    </div>
                    <p class="text-sm text-white/40 mb-2">${opt.desc}</p>
                    <p class="text-[#FF6B00] font-bold mb-6">${opt.price}</p>
                    <button class="w-full py-3 rounded-xl ${isSelected ? 'bg-[#FF6B00] text-black' : 'bg-white/5 border border-white/10 text-white'} font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all select-opt-btn" data-id="${opt.id}">
                        ${isSelected ? 'Added to Plan' : 'Add to Plan'}
                    </button>
                </div>
            </div>
            `;
        }).join('');
    }

    container.addEventListener("click", (e) => {
        const btn = e.target.closest(".select-opt-btn");
        if (!btn) return;

        const id = btn.getAttribute("data-id");
        const card = btn.closest("[data-option-id]");
        
        if (selectedOptionsSet.has(id)) {
            selectedOptionsSet.delete(id);
            btn.textContent = "Add to Plan";
            btn.className = "w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all select-opt-btn";
            card.classList.replace('border-[#FF6B00]', 'border-transparent');
            card.classList.remove('ring-1', 'ring-[#FF6B00]/20');
        } else {
            selectedOptionsSet.add(id);
            btn.textContent = "Added to Plan";
            btn.className = "w-full py-3 rounded-xl bg-[#FF6B00] text-black font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all select-opt-btn";
            card.classList.replace('border-transparent', 'border-[#FF6B00]');
            card.classList.add('ring-1', 'ring-[#FF6B00]/20');
        }
        
        saveState();
        updateCTA();
    });

    function saveState() {
        const selectedArray = [];
        selectedOptionsSet.forEach(id => {
            Object.values(REAL_SERVICES_DATA).forEach(opts => {
                const found = opts.find(o => o.id === id);
                if (found) selectedArray.push(found);
            });
        });
        localStorage.setItem("selectedOptions", JSON.stringify(selectedArray));
        // Refresh lock state for Priority
        if (window.initStepNavigation) window.initStepNavigation(2);
    }

    function updateCTA() {
        if (selectedOptionsSet.size > 0) ctaContainer.classList.remove("hidden");
        else ctaContainer.classList.add("hidden");
    }

    continueBtn.addEventListener("click", () => {
        window.handleStepNavigation("priority.html");
    });
});
