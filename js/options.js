/**
 * STEP 2: OPTIONS
 * Dynamic category switching and REAL bookable service integration.
 * Adapted for option_design.html UI.
 */

const REAL_SERVICES_DATA = {
    "Hotels": [
        { id: "h1", category: "Hotels", title: "The Orchid Hotel", duration: "120 MIN", price: "$120", rating: "4.8", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhE4jd4gvASnkYpCad8ZkFGP8EjYRtDrOIM4gv5zqgo82jn_Lg4ySHLH2q1_65Q9n1ibN5xpEt-HqW--014gjYePmi7m3V3vNi2YSNlu6dyvv3YYV41fcG2tOhe2mcy-wJCtFNHizmh2a4SN8PCYdWCkajrZf4CDWy_iewrpGFSxXzld8PY2BGj6HqgzGF_1-zdjwbrXlkvQkzlytVTwsV7n96K_gc0T_1BCS7i8GDr19aStt2ifH6mQnxdAAouMKyAazs-_RXluE", desc: "Eco-friendly luxury stay near terminal.", tags: ["Luxury", "Fast Check-in"] },
        { id: "h2", category: "Hotels", title: "The Meridian Grand", duration: "240 MIN", price: "$310", rating: "4.9", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj2PtB0HkiqXvkfLPwCCKNQ1BZHNT1e4Y2963yTZW3EadZupNLs6ZBY16TGx1yxNFCAnoKQmFR8uyfk-bnMt9fvkedMMMjMO7nMy28Q4v6XQVF6umkbtkxqf76Nck9XxtBRzYp5CWDVfNREEBgqq9oW9f4qzb06QiUvgTOUYdGL4j_CtfQ5A8UYKnJfhmId_FtcaBzi-Li7sZmkP8m-C0yntmJgetBTw9Ry8fBBp4lY0FqcMVSlxtyXH4e9IygAv-JOKD_Cm46Kio", desc: "Directly connected via private walkway.", tags: ["Exclusive", "Shower Access"] },
        { id: "h3", category: "Hotels", title: "Zenith Wellness Hub", duration: "180 MIN", price: "$240", rating: "4.8", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxzCk6BmsvQI21_lGos4G4hpXJGRHu5rmB24gW00grsxSvWTrV9_ZOxC2YTDLohsa3yb5P1oOMWhdRSETrurEYNRV86GpNULGYwUD8HM2u_sCdbVJMWfgj5UG0ANE22v1IMQ5t-BSMJrLpPWPhugEh1McrjwnrIpik_qMjY53WSCRyA8B3THSbN9uSlOJ42rHHEAyHg7xVBWMVeWxLyMS_brXSzn5CqKMAEhRYaj3HtbNz2pfarE6CZeprwtA0SSMtSqqL3gszKXw", desc: "Detox with saunas and cryotherapy.", tags: ["Spa", "Health"], featured: true },
        { id: "h4", category: "Hotels", title: "The Zenith Skyward Suite", duration: "360 MIN", price: "$450", rating: "4.9", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrmP1gev_MYGy6163kkEv9Q8tXJAb7KXA7iQ4l_sbBnsoyiSacJzMAUa98mOkaepC4etaA975UJoInjs-gytyBJD0HdO2XgbrCImCIAmOaEZ6sxN-f_t5qekIy8ozP5SXNDfUXBWrecXj58OUFCk6SLnIvi7A4nbZ75os9CoZgJQkUd6dMhffteZBpfN1xcfA0u5BiFA7gJLavOGGrCMQvUlsulycc0HaxqpmG2CPed52-uMO3PDFtHBSFonjdBiHAFPrgs4seMlE", desc: "Runway views and world-class oxygen bar.", tags: ["Premium", "Views"], featured: true }
    ],
    "Food & Dining": [
        { id: "f1", category: "Food & Dining", title: "Thai Naam", duration: "60 MIN", price: "$45", rating: "4.6", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnlb-Uvm7dEPU6AWkMlCbloKh5IxUB3ljic1wAbqqQVrj0nkruSrqdAijamQH-s0-pnlTMd2YkbYfj6C693uWJfQz8AC4bQhnooO9w5gdQFdY5jE8WqPZbOvB2mJL4KUYgVG-JvCNyE4io4tOOdtB67fBhfyh0DA1MvQOu55h8BFPwN3JQ47jNyZx6z7Jjq3JskhVon26IPZhPyfkjAu37X1btu-1mREcuiDKKbSFbRvHw88E60f6qP19Y6cbTz6-x_M1q3c0ek0Q", desc: "Authentic Thai flavors.", tags: ["Spicy", "Authentic"] },
        { id: "f2", category: "Food & Dining", title: "JW Cafe", duration: "90 MIN", price: "$65", rating: "4.7", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChGy6LO-M3DdRHAZT1IKF0qWh4DqKAaQLDrffN4ndWvXBnuSS4ifNtkZmx4lvAdO6bL26WcxoJ2-CTJxCX0rXlfbI1FKtaAc634i3zmfS5X1fH62JyXPXoi3b2KqzLJ14PTMkh_em0t-ZKolV0Biji45shGHvLCk-Tt4mJ-NV0Bec5zaIA_upfRlog23PfNFyWHR6F23tS7GojOr8-wH7QNKQDMfD1XESxB75ZlppDUoIwTeEGrxuVYmKnxiQEIiUvrRpi0Js2RRc", desc: "Global buffet at its finest.", tags: ["Buffet", "International"] }
    ],
    "Services": [
        { id: "s1", category: "Services", title: "Jiva Spa", duration: "60 MIN", price: "$85", rating: "4.8", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuBeISMzXQPmWmOmB0ft4zxGshz-gTXvzupRjlzTpxD0wsTviCiyUtRzn3emtm-4mFRNk1sshFtHHN9FZyFc9FDWyaeXk8ad4U6Y7UyLtvGZT44QPc8dYNFY5c6OXVhfZLSdC3IU4_UP8n0rqYmETKgd07B-ktbHUz7ty3qLWIl7TiyTUv8bovx2eJRJljeeXdMkeE2PHMnSIILL3EIFW2YYbK7lP6iYBfTpoF5c4mtXEICObvxAQEi9TN9RhLPY1HqUBaE-dfU3o", desc: "Ayurvedic wellness journey.", tags: ["Spa", "Relax"] }
    ],
    "Experiences": [
        { id: "e1", category: "Experiences", title: "KidZania", duration: "120 MIN", price: "$35", rating: "4.7", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeuOcp48bW0hOY4l8pEuj6z5sWn30Mv5P4Av858FhP6Aa2LtthA85vYicS7BpPAsl0Yq--QwUBB5AEwKLBYSZK_wcWjf3LOMYYW4lHtyN8bM5mTCt0dmNm1ou6uR4nMoyA7TinsYas2aKSI-N3O4BPLSUt_lBIjUvm9j2LSLoK_PzaTxh9uPrF8Al8gh9WCdud3wx2Qm0Ft2Z4EiEmvCS650vh5cgfDw58zTGl8XjeXsKNB8Rkm_8Ns2TKIWh7_5ppRliaUpBOgSk", desc: "Fun for the whole family.", tags: ["Family", "Games"] }
    ],
    "Transport": [
        { id: "t1", category: "Transport", title: "BMW 7 Series", duration: "30 MIN", price: "$75", rating: "5.0", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhE4jd4gvASnkYpCad8ZkFGP8EjYRtDrOIM4gv5zqgo82jn_Lg4ySHLH2q1_65Q9n1ibN5xpEt-HqW--014gjYePmi7m3V3vNi2YSNlu6dyvv3YYV41fcG2tOhe2mcy-wJCtFNHizmh2a4SN8PCYdWCkajrZf4CDWy_iewrpGFSxXzld8PY2BGj6HqgzGF_1-zdjwbrXlkvQkzlytVTwsV7n96K_gc0T_1BCS7i8GDr19aStt2ifH6mQnxdAAouMKyAazs-_RXluE", desc: "Chauffeur driven luxury.", tags: ["Private", "Fast"] }
    ],
    "Shopping": [
        { id: "sh1", category: "Shopping", title: "Luxury Retail", duration: "45 MIN", price: "Free", rating: "4.5", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuRVO62zdv0fT7mYOWLqFAENE0C3MeiqWMzwxY8fvHyto_KpdrEHmKlTb3yj1AjwAyV-I0kFUXT1fE1sirgoM1OlTbrXAu611jENnrLd65-OQO_6NjkW9-X73Cy1n8a8PexPq9b46B2GYXDDPLM717YkZrqhb3R4DXpiPuhVulJmgU4WxGHuhAiJ6ppbKn9bfwMo_klweNRbwVxCPK_Thnnns4FVYXljJQBJP9sZnUdT6rrPEoWLRggCQhyECrW2vTQeqxBcKCD_8", desc: "Tax-free premium shopping.", tags: ["Duty Free", "Luxury"] }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const categoryBar = document.getElementById("categoryBar");
    const featuredGrid = document.getElementById("featuredGrid");
    const optionsGrid = document.getElementById("optionsGrid");
    const recommendedSection = document.getElementById("recommendedSection");
    const selectionStatus = document.getElementById("selectionStatus");
    const nextToPriorityBtn = document.getElementById("nextToPriorityBtn");
    const resultCount = document.getElementById("resultCount");

    const selectedServices = JSON.parse(localStorage.getItem('selectedServices') || '[]');
    let currentCategory = selectedServices[0] || "";
    
    // Persistent state for ALL categories
    const savedOptions = JSON.parse(localStorage.getItem('selectedOptions') || '[]');
    const selectedOptionsMap = new Map(savedOptions.map(o => [o.id, o]));

    // 1. Initialize Step Navigation
    if (window.initStepNavigation) window.initStepNavigation(2);

    // 2. Render Categories
    renderCategoryBar();
    renderActiveCategory();
    updateFooterStatus();

    function renderCategoryBar() {
        categoryBar.innerHTML = selectedServices.map(service => `
            <button class="px-8 py-3 rounded-full transition-all font-headline-md text-sm ${service === currentCategory ? 'bg-orange-500 text-black font-bold shadow-[0_0_20px_rgba(255,140,0,0.4)]' : 'glass-dark text-zinc-300 font-medium hover:border-orange-500/50'}" 
                    data-category="${service}">
                ${service}
            </button>
        `).join('');

        categoryBar.addEventListener("click", (e) => {
            const btn = e.target.closest("[data-category]");
            if (!btn) return;
            currentCategory = btn.getAttribute("data-category");
            renderCategoryBar(); // Re-render for active state
            renderActiveCategory();
        });
    }

    function renderActiveCategory() {
        const options = REAL_SERVICES_DATA[currentCategory] || [];
        const featured = options.filter(o => o.featured);
        const regular = options.filter(o => !o.featured);

        // Featured Section
        if (featured.length > 0) {
            recommendedSection.classList.remove("hidden");
            featuredGrid.innerHTML = `
                <!-- Hero Featured -->
                <div class="md:col-span-8 group relative overflow-hidden rounded-xl h-[300px] md:h-full">
                    <img src="${featured[0].image}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-8 w-full">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-500 text-[10px] uppercase font-bold tracking-widest">Premium Selection</span>
                            <div class="flex items-center text-orange-400 text-xs font-bold">
                                <span class="material-symbols-outlined text-sm mr-1" style="font-variation-settings: 'FILL' 1;">star</span> ${featured[0].rating}
                            </div>
                        </div>
                        <h3 class="font-display-lg text-white mb-2 text-2xl md:text-3xl">${featured[0].title}</h3>
                        <p class="text-zinc-300 text-sm max-w-lg mb-4 line-clamp-2">${featured[0].desc}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-white font-bold text-xl">${featured[0].price} <span class="text-xs font-normal text-zinc-400">/ ${featured[0].duration}</span></span>
                            <button class="bg-white text-black px-6 py-2 rounded-lg font-bold hover:bg-orange-500 transition-colors select-opt-btn" data-id="${featured[0].id}">
                                ${selectedOptionsMap.has(featured[0].id) ? 'Deselect' : 'Select Now'}
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Secondary Featured -->
                ${featured[1] ? `
                <div class="md:col-span-4 group relative overflow-hidden rounded-xl h-[200px] md:h-full">
                    <img src="${featured[1].image}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-6">
                        <h3 class="font-headline-md text-white mb-2">${featured[1].title}</h3>
                        <div class="flex items-center text-zinc-400 text-xs mb-4">
                            <span class="material-symbols-outlined text-sm mr-1">location_on</span> Terminal 3
                        </div>
                        <div class="flex justify-between items-center gap-4">
                             <span class="text-white font-bold text-lg">${featured[1].price}</span>
                             <button class="bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-orange-500 hover:text-black transition-colors select-opt-btn" data-id="${featured[1].id}">
                                ${selectedOptionsMap.has(featured[1].id) ? 'Deselect' : 'Select'}
                             </button>
                        </div>
                    </div>
                </div>
                ` : ''}
            `;
        } else {
            recommendedSection.classList.add("hidden");
        }

        // Regular Grid
        optionsGrid.innerHTML = regular.map(opt => {
            const isSelected = selectedOptionsMap.has(opt.id);
            return `
            <div class="glass-dark rounded-xl overflow-hidden inner-glow transition-all duration-300 group border ${isSelected ? 'border-orange-500/50 ring-1 ring-orange-500/50' : 'border-transparent'}" data-option-id="${opt.id}">
                <div class="relative h-48">
                    <img src="${opt.image}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute top-4 right-4 px-2 py-1 ${isSelected ? 'bg-orange-500 text-black' : 'bg-black/60 text-white'} backdrop-blur-md rounded text-xs font-bold">
                        ${opt.price}
                    </div>
                    ${isSelected ? `
                    <div class="absolute inset-0 bg-orange-500/10 backdrop-blur-[1px]"></div>
                    <div class="absolute top-4 left-4">
                        <span class="material-symbols-outlined bg-orange-500 text-black rounded-full p-1 text-xs" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                    </div>` : ''}
                </div>
                <div class="p-6">
                    <div class="flex justify-between items-start mb-2">
                        <h4 class="font-headline-md text-lg text-white">${opt.title}</h4>
                        <div class="flex items-center text-orange-500 text-xs font-bold">
                            <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span> ${opt.rating}
                        </div>
                    </div>
                    <p class="text-zinc-500 text-sm mb-4 line-clamp-2">${opt.desc}</p>
                    <div class="flex flex-wrap gap-2 mb-6">
                        ${(opt.tags || []).map(tag => `<span class="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-bold uppercase tracking-tighter">${tag}</span>`).join('')}
                        <span class="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-bold uppercase tracking-tighter">${opt.duration}</span>
                    </div>
                    <button class="w-full py-3 rounded-lg border ${isSelected ? 'bg-orange-500 text-black font-bold border-orange-500 shadow-[0_0_15px_rgba(255,140,0,0.3)]' : 'border-zinc-800 text-white font-bold hover:border-orange-500 hover:text-orange-500'} text-sm transition-all active:scale-[0.98] select-opt-btn" data-id="${opt.id}">
                        ${isSelected ? 'Deselect' : 'Select'}
                    </button>
                </div>
            </div>
            `;
        }).join('');

        resultCount.textContent = `Showing ${options.length} results`;
    }

    // Delegation for both Featured and Grid
    document.body.addEventListener("click", (e) => {
        const btn = e.target.closest(".select-opt-btn");
        if (!btn) return;

        const id = btn.getAttribute("data-id");
        
        if (selectedOptionsMap.has(id)) {
            selectedOptionsMap.delete(id);
        } else {
            // Find the object
            let found = null;
            Object.values(REAL_SERVICES_DATA).forEach(list => {
                const item = list.find(o => o.id === id);
                if (item) found = item;
            });
            if (found) selectedOptionsMap.set(id, found);
        }

        saveState();
        renderActiveCategory(); // Refresh UI
        updateFooterStatus();
    });

    function saveState() {
        const selectedArray = Array.from(selectedOptionsMap.values());
        localStorage.setItem("selectedOptions", JSON.stringify(selectedArray));
        if (window.initStepNavigation) window.initStepNavigation(2);
    }

    function updateFooterStatus() {
        const count = selectedOptionsMap.size;
        selectionStatus.textContent = `${count} option${count === 1 ? '' : 's'} selected`;
        nextToPriorityBtn.disabled = count === 0;
    }

    nextToPriorityBtn.addEventListener("click", () => {
        window.handleStepNavigation("priority.html");
    });
});
