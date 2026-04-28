console.log("Main JS loaded");
console.log("Page loaded");
window.addEventListener("beforeunload", () => {
  console.log("⚠️ Page is navigating away");
});
// #region agent log
fetch('http://127.0.0.1:7386/ingest/906f7911-d4a7-47af-abdd-10f049d51ba8',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d22060'},body:JSON.stringify({sessionId:'d22060',runId:'pre-fix',hypothesisId:'H2',location:'js/main.js:1',message:'Main JS evaluated',data:{readyState:document.readyState,hasSupabase:!!window.supabase,hasSupabaseClient:!!window.supabaseClient},timestamp:Date.now()})}).catch(()=>{});
// #endregion

document.addEventListener("DOMContentLoaded", () => {
  // #region agent log
  fetch('http://127.0.0.1:7386/ingest/906f7911-d4a7-47af-abdd-10f049d51ba8',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d22060'},body:JSON.stringify({sessionId:'d22060',runId:'pre-fix',hypothesisId:'H4',location:'js/main.js:~DOMContentLoaded',message:'DOMContentLoaded fired in main.js',data:{hasSignInBtn:!!document.getElementById('signInBtn')},timestamp:Date.now()})}).catch(()=>{});
  // #endregion

  const mobileMenuToggle = document.querySelector('[data-mobile-menu-toggle]');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileDropdownTriggers = document.querySelectorAll('[data-mobile-dropdown-trigger]');
  const mobileNavLinks = document.querySelectorAll('#mobile-menu a[href^="#"]');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden', isOpen);
      mobileMenuToggle.setAttribute('aria-expanded', String(!isOpen));
      const icon = mobileMenuToggle.querySelector('.material-symbols-outlined');
      if (icon) icon.textContent = isOpen ? 'menu' : 'close';
    });
  }

  mobileDropdownTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const key = trigger.getAttribute('data-mobile-dropdown-trigger');
      const target = document.querySelector(`[data-mobile-dropdown="${key}"]`);
      if (!target) return;

      const isOpen = !target.classList.contains('hidden');
      target.classList.toggle('hidden', isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));

      const icon = trigger.querySelector('.material-symbols-outlined');
      if (icon) icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
    });
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (!mobileMenu || !mobileMenuToggle) return;
      mobileMenu.classList.add('hidden');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      const icon = mobileMenuToggle.querySelector('.material-symbols-outlined');
      if (icon) icon.textContent = 'menu';
    });
  });

  const isRestaurantPage = window.location.pathname.endsWith('/restaurant.html') || window.location.pathname.endsWith('restaurant.html');
  if (isRestaurantPage) document.querySelectorAll('[data-food-dining-link]').forEach((link) => link.classList.add('text-orange-500', 'bg-white/5'));
  const isEntertainmentPage = window.location.pathname.endsWith('/entertainment.html') || window.location.pathname.endsWith('entertainment.html');
  if (isEntertainmentPage) document.querySelectorAll('[data-entertainment-link]').forEach((link) => link.classList.add('text-orange-500', 'bg-white/5'));
  const isSpaPage = window.location.pathname.endsWith('/spa.html') || window.location.pathname.endsWith('spa.html');
  if (isSpaPage) document.querySelectorAll('[data-spa-link]').forEach((link) => link.classList.add('text-orange-500', 'bg-white/5'));

  const datetimeInput = document.getElementById('datetime');
  const datetimeDisplay = document.getElementById('datetimeDisplay');
  const calendarIcon = document.querySelector('.calendar-icon');
  if (calendarIcon && datetimeInput) {
    calendarIcon.onclick = () => {
      if (typeof datetimeInput.showPicker === 'function') datetimeInput.showPicker();
      else { datetimeInput.focus(); datetimeInput.click(); }
    };
    datetimeInput.addEventListener('change', () => {
      if (datetimeDisplay) datetimeDisplay.textContent = datetimeInput.value.replace('T', ' ');
    });
  }

  const durationDisplay = document.getElementById('durationDisplay');
  const durationValue = document.getElementById('durationValue');
  const durationPanel = document.getElementById('durationPanel');
  const durationInput = document.getElementById('durationInput');
  const durationChips = document.querySelectorAll('#durationChips .chip');
  if (durationDisplay && durationPanel && durationInput) {
    const closePanel = () => durationPanel.classList.add('hidden');
    const updateDurationValue = (value) => {
      if (durationValue) durationValue.textContent = value ? `${value}h` : 'Select Duration';
    };

    durationDisplay.addEventListener('click', () => durationPanel.classList.toggle('hidden'));
    durationDisplay.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); durationPanel.classList.toggle('hidden'); }
    });

    durationChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const value = chip.getAttribute('data-value');
        durationInput.value = value;
        updateDurationValue(value);
        closePanel();
      });
    });

    durationInput.addEventListener('input', () => updateDurationValue(durationInput.value.trim()));

    document.addEventListener('click', (event) => {
      if (!durationPanel.contains(event.target) && !durationDisplay.contains(event.target)) closePanel();
    });
  }

  const fadeSections = document.querySelectorAll('.fade-section');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.18 });
    fadeSections.forEach((section) => observer.observe(section));
  } else {
    fadeSections.forEach((section) => section.classList.add('is-visible'));
  }

  function getSupabase() {
    const client = window.supabaseClient || null;
    // #region agent log
    fetch('http://127.0.0.1:7386/ingest/906f7911-d4a7-47af-abdd-10f049d51ba8',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d22060'},body:JSON.stringify({sessionId:'d22060',runId:'pre-fix',hypothesisId:'H8',location:'js/main.js:~getSupabase',message:'getSupabase invoked',data:{hasSupabaseClient:!!client},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
    return client;
  }

  function setAuthError(message) {
    const el = document.getElementById('authError');
    if (!el) return;
    el.textContent = message || '';
    el.classList.toggle('hidden', !message);
  }

  function normalizeAuthErrorMessage(error) {
    const msg = (error?.message || '').trim();
    if (!msg) return 'Something went wrong. Please try again.';
    return msg;
  }

  async function signUp(email, password) {
    // #region agent log
    fetch('http://127.0.0.1:7386/ingest/906f7911-d4a7-47af-abdd-10f049d51ba8',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d22060'},body:JSON.stringify({sessionId:'d22060',runId:'pre-fix',hypothesisId:'P3',location:'js/main.js:~signUp',message:'signUp called',data:{hasEmail:!!email,passwordLength:typeof password==='string'?password.length:0},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
    const supabaseClient = getSupabase();
    if (!supabaseClient) throw new Error('Supabase client not loaded.');
    const { error } = await supabaseClient.auth.signUp({ email, password });
    if (error) throw error;
    window.location.href = "dashboard.html";
  }

  async function signIn(email, password) {
    // #region agent log
    fetch('http://127.0.0.1:7386/ingest/906f7911-d4a7-47af-abdd-10f049d51ba8',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d22060'},body:JSON.stringify({sessionId:'d22060',runId:'pre-fix',hypothesisId:'H9',location:'js/main.js:~signIn',message:'signIn called',data:{hasEmail:!!email,passwordLength:typeof password==='string'?password.length:0},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
    const supabaseClient = getSupabase();
    if (!supabaseClient) throw new Error('Supabase client not loaded.');
    const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) throw error;
    window.location.href = "dashboard.html";
  }

  async function signInWithGoogle() {
    const supabaseClient = getSupabase();
    if (!supabaseClient) throw new Error('Supabase client not loaded.');
    // #region agent log
    fetch('http://127.0.0.1:7386/ingest/906f7911-d4a7-47af-abdd-10f049d51ba8',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d22060'},body:JSON.stringify({sessionId:'d22060',runId:'pre-fix',hypothesisId:'H10',location:'js/main.js:~signInWithGoogle',message:'Google OAuth started',data:{redirectTo:window.location.origin + "/dashboard.html"},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin + "/dashboard.html" }
    });
    if (error) {
      // #region agent log
      fetch('http://127.0.0.1:7386/ingest/906f7911-d4a7-47af-abdd-10f049d51ba8',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d22060'},body:JSON.stringify({sessionId:'d22060',runId:'pre-fix',hypothesisId:'H10',location:'js/main.js:~signInWithGoogle',message:'Google OAuth returned error',data:{errorMessage:error.message},timestamp:Date.now()})}).catch(()=>{});
      // #endregion
      throw error;
    }
  }

  async function getSession() {
    const supabaseClient = getSupabase();
    if (!supabaseClient) return null;
    const { data: { session } } = await supabaseClient.auth.getSession();
    return session || null;
  }

  async function checkUser() {
    const supabaseClient = getSupabase();
    if (!supabaseClient) return null;
    const { data: { user } } = await supabaseClient.auth.getUser();
    return user || null;
  }

  const authModalRoot = document.getElementById('authModalRoot');
  const authBackdrop = authModalRoot?.querySelector('[data-auth-backdrop]');
  const authClose = authModalRoot?.querySelector('[data-auth-close]');
  const authGoogleBtn = authModalRoot?.querySelector('[data-auth-google]');
  const authContinueBtn = authModalRoot?.querySelector('[data-auth-continue]');
  const authToggleBtn = authModalRoot?.querySelector('[data-auth-toggle]');
  const authModeLabel = authModalRoot?.querySelector('[data-auth-mode-label]');
  const authEmail = document.getElementById('authEmail');
  const authPassword = document.getElementById('authPassword');

  let authMode = 'signIn';

  function setAuthMode(nextMode) {
    authMode = nextMode;
    if (!authModeLabel || !authToggleBtn) return;
    if (authMode === 'signIn') {
      authModeLabel.textContent = 'New here?';
      authToggleBtn.textContent = 'Sign Up';
    } else {
      authModeLabel.textContent = 'Already have an account?';
      authToggleBtn.textContent = 'Sign In';
    }
  }

  function openAuthModal() {
    if (!authModalRoot) return;
    authModalRoot.classList.remove('hidden');
    authModalRoot.setAttribute('aria-hidden', 'false');
    setAuthMode(authMode);
    setAuthError('');
    authEmail?.focus();
    // #region agent log
    fetch('http://127.0.0.1:7386/ingest/906f7911-d4a7-47af-abdd-10f049d51ba8',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d22060'},body:JSON.stringify({sessionId:'d22060',runId:'pre-fix',hypothesisId:'H5',location:'js/main.js:~openAuthModal',message:'openAuthModal executed',data:{modalHidden:authModalRoot.classList.contains('hidden')},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
  }

  function closeAuthModal() {
    if (!authModalRoot) return;
    authModalRoot.classList.add('hidden');
    authModalRoot.setAttribute('aria-hidden', 'true');
  }

  authBackdrop?.addEventListener('click', closeAuthModal);
  authClose?.addEventListener('click', closeAuthModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAuthModal(); });

  authGoogleBtn?.addEventListener('click', async () => {
    setAuthError('');
    try { await signInWithGoogle(); } catch (e) { setAuthError(normalizeAuthErrorMessage(e)); }
  });

  authToggleBtn?.addEventListener('click', () => setAuthMode(authMode === 'signIn' ? 'signUp' : 'signIn'));

  authContinueBtn?.addEventListener('click', async () => {
    const email = authEmail?.value?.trim();
    const password = authPassword?.value || '';
    if (!email || !password) { setAuthError('Please enter email and password.'); return; }
    setAuthError('');
    try {
      if (authMode === 'signUp') await signUp(email, password);
      else await signIn(email, password);
    } catch (e) {
      setAuthError(normalizeAuthErrorMessage(e));
    }
  });

  // STEP 1 debug per request
  console.log("Sign In button loaded");
  document.getElementById("signInBtn")?.addEventListener("click", () => {
    console.log("Sign In clicked");
  });

  // STEP 5 safe event binding
  const signInBtn = document.getElementById("signInBtn");
  if (signInBtn) {
    signInBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Sign In clicked working");
      // #region agent log
      fetch('http://127.0.0.1:7386/ingest/906f7911-d4a7-47af-abdd-10f049d51ba8',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d22060'},body:JSON.stringify({sessionId:'d22060',runId:'pre-fix',hypothesisId:'H1',location:'js/main.js:~signInBtn',message:'signInBtn handler fired',data:{id:signInBtn.id,tag:signInBtn.tagName},timestamp:Date.now()})}).catch(()=>{});
      // #endregion
      openAuthModal();
    });
  } else {
    console.error("Sign In button not found");
    // #region agent log
    fetch('http://127.0.0.1:7386/ingest/906f7911-d4a7-47af-abdd-10f049d51ba8',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d22060'},body:JSON.stringify({sessionId:'d22060',runId:'pre-fix',hypothesisId:'H1',location:'js/main.js:~signInBtn',message:'signInBtn not found in DOM',data:{},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
  }

  const navPlanLayover = document.querySelector('[data-nav-plan]');
  const navSignIn = document.querySelector('[data-nav-signin]');
  const exploreExperiencesBtn = document.getElementById('exploreExperiencesBtn');
  const airportText = document.querySelector('.airport-text');
  const airportField = document.getElementById('airportField');
  const exploreError = document.getElementById('exploreError');

  function setExploreError(message) {
    if (!exploreError) return;
    exploreError.textContent = message || '';
    exploreError.classList.toggle('hidden', !message);
  }

  function markFieldError(fieldEl, hasError) {
    if (!fieldEl) return;
    fieldEl.classList.toggle('border-red-500', hasError);
  }

  function ensureAccountMenu(containerEl, user) {
    if (!containerEl) return;
    containerEl.innerHTML = '';
    const wrapper = document.createElement('div');
    wrapper.className = 'relative';
    wrapper.innerHTML = `
      <button type="button" class="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.06] transition-colors inline-flex items-center gap-2" data-account-trigger>
        <span class="material-symbols-outlined text-[18px]">person</span>
        <span class="max-w-[180px] truncate">${user?.email || 'Account'}</span>
        <span class="material-symbols-outlined text-[18px]">expand_more</span>
      </button>
      <div class="nav-dropdown absolute right-0 top-full pt-3 min-w-[220px]" data-account-menu>
        <div class="rounded-2xl border border-white/10 bg-surface-container/95 backdrop-blur-xl shadow-2xl shadow-black/40 p-2 space-y-1">
          <div class="px-3 py-2 text-xs text-secondary/70">${user?.email || ''}</div>
          <button class="w-full text-left rounded-xl px-3 py-3 text-secondary hover:text-white hover:bg-white/5 transition" data-account-logout type="button">Logout</button>
        </div>
      </div>
    `;
    containerEl.appendChild(wrapper);

    const trigger = wrapper.querySelector('[data-account-trigger]');
    const menu = wrapper.querySelector('[data-account-menu]');
    const logoutBtn = wrapper.querySelector('[data-account-logout]');

    const toggleMenu = () => menu?.classList.toggle('open');
    trigger?.addEventListener('click', toggleMenu);
    document.addEventListener('click', (e) => { if (!wrapper.contains(e.target)) menu?.classList.remove('open'); });
    logoutBtn?.addEventListener('click', async () => {
      try {
        const supabaseClient = getSupabase();
        if (!supabaseClient) throw new Error('Supabase client not loaded.');
        await supabaseClient.auth.signOut();
        window.location.href = "/";
      } catch (e) {
        setAuthError(normalizeAuthErrorMessage(e));
      }
    });
  }

  async function bootAuthUI() {
    const session = await getSession();
    const user = session?.user || await checkUser();

    if (navSignIn) {
      if (user) ensureAccountMenu(navSignIn.parentElement, user);
      else navSignIn.addEventListener('click', (e) => { e.preventDefault(); openAuthModal(); });
    }

    if (navPlanLayover) {
      const handlePlanLayoverClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Plan Layover clicked -> ONLY opening modal");
        // #region agent log
        fetch('http://127.0.0.1:7386/ingest/906f7911-d4a7-47af-abdd-10f049d51ba8',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d22060'},body:JSON.stringify({sessionId:'d22060',runId:'post-fix',hypothesisId:'P1',location:'js/main.js:~handlePlanLayoverClick',message:'Plan Layover click intercepted; opening modal only',data:{tagName:navPlanLayover.tagName,hasHref:!!navPlanLayover.getAttribute('href')},timestamp:Date.now()})}).catch(()=>{});
        // #endregion
        openAuthModal();
      };
      navPlanLayover.addEventListener('click', handlePlanLayoverClick);
    }

    if (exploreExperiencesBtn) {
      exploreExperiencesBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        setExploreError('');

        const airportValue = (airportText?.textContent || '').trim();
        const durationRaw = (durationInput?.value || '').trim();
        const durationValue = durationRaw || ((document.getElementById('durationValue')?.textContent || '').trim());
        const dateTimeValue = (datetimeInput?.value || '').trim();
        const user = await checkUser();
        const hasAirport = Boolean(airportValue && airportValue !== 'Select Airport');
        const hasDuration = Boolean(durationRaw || (durationValue && durationValue !== 'Select Duration'));
        const hasDateTime = Boolean(dateTimeValue);
        // #region agent log
        fetch('http://127.0.0.1:7386/ingest/906f7911-d4a7-47af-abdd-10f049d51ba8',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d22060'},body:JSON.stringify({sessionId:'d22060',runId:'pre-fix',hypothesisId:'E1',location:'js/main.js:~exploreExperiencesBtn',message:'Explore Experiences clicked with current gate state',data:{tagName:exploreExperiencesBtn.tagName,href:exploreExperiencesBtn.getAttribute('href')||'',hasUser:!!user,hasAirport:!!airportValue,hasDuration:hasDuration,hasDateTime:!!dateTimeValue},timestamp:Date.now()})}).catch(()=>{});
        // #endregion

        // Removed mandatory login check to allow browsing without signing in
        /*
        if (!user) {
          setExploreError('Please sign up or log in to continue.');
          openAuthModal();
          return;
        }
        */

        const missingFields = [];
        if (!hasAirport) missingFields.push('Airport');
        if (!hasDuration) missingFields.push('Duration');
        if (!hasDateTime) missingFields.push('Date & Time');

        markFieldError(airportField, !hasAirport);
        markFieldError(durationInput, !hasDuration);
        markFieldError(datetimeInput, !hasDateTime);

        if (missingFields.length > 0) {
          setExploreError(`Please fill: ${missingFields.join(', ')}`);
          return;
        }

        localStorage.setItem('airport', airportValue);
        localStorage.setItem('duration', durationRaw || durationValue.replace('h', ''));
        localStorage.setItem('dateTime', dateTimeValue);
        window.location.href = 'explore_experiences.html';
      });
    } else {
      // #region agent log
      fetch('http://127.0.0.1:7386/ingest/906f7911-d4a7-47af-abdd-10f049d51ba8',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d22060'},body:JSON.stringify({sessionId:'d22060',runId:'pre-fix',hypothesisId:'E2',location:'js/main.js:~exploreExperiencesBtn',message:'Explore Experiences button not found',data:{},timestamp:Date.now()})}).catch(()=>{});
      // #endregion
    }
  }

  // --- CENTRAL ARCHITECT & NAVIGATION ---
  const AppState = {
      getKeys: () => ({
          services: 'selectedServices',
          options: 'selectedOptions',
          priority: 'priorityList',
          plan: 'finalPlan'
      }),
      save: (key, data) => localStorage.setItem(key, JSON.stringify(data)),
      get: (key) => JSON.parse(localStorage.getItem(key) || '[]'),
      validateStep: (targetPage) => {
          const keys = AppState.getKeys();
          const validation = {
              "explore_experiences.html": true,
              "options.html": AppState.get(keys.services).length > 0,
              "priority.html": AppState.get(keys.options).length > 0,
              "plan.html": AppState.get(keys.priority).length > 0,
              "finalize.html": AppState.get(keys.plan).length > 0
          };
          return validation[targetPage] || false;
      }
  };

  window.handleStepNavigation = function(targetPage) {
      if (AppState.validateStep(targetPage)) {
          document.body.style.opacity = '0';
          setTimeout(() => { window.location.href = targetPage; }, 300);
      } else {
          const alertBox = document.createElement('div');
          alertBox.className = "fixed top-24 left-1/2 -translate-x-1/2 z-[100] glass-card px-6 py-4 rounded-2xl border border-red-500/50 text-white flex items-center gap-3 animate-bounce shadow-[0_0_50px_rgba(239,68,68,0.2)]";
          alertBox.innerHTML = `<span class="material-symbols-outlined text-red-500">warning</span><p class="font-bold text-sm">Please complete the previous step first.</p>`;
          document.body.appendChild(alertBox);
          setTimeout(() => alertBox.remove(), 3000);
      }
  };

  window.initStepNavigation = function(currentStep) {
      const steps = [
          { id: 1, name: "Explore", page: "explore_experiences.html", key: 'services' },
          { id: 2, name: "Options", page: "options.html", key: 'options' },
          { id: 3, name: "Priority", page: "priority.html", key: 'priority' },
          { id: 4, name: "Plan", page: "plan.html", key: 'plan' },
          { id: 5, name: "Finalize", page: "finalize.html", key: null }
      ];

      document.querySelectorAll('nav .md\\:flex a').forEach(link => {
          const text = link.textContent.trim();
          const step = steps.find(s => s.name === text);
          if (step) {
              link.onclick = (e) => { e.preventDefault(); window.handleStepNavigation(step.page); };
              if (step.id === currentStep) link.className = 'text-[#FF6B00] font-semibold';
              else if (!AppState.validateStep(step.page)) link.className = 'text-white/20 cursor-not-allowed';
              else link.className = 'text-white/60 hover:text-white transition-colors';
          }
      });

      const indicators = document.querySelectorAll('.flex.justify-between.max-w-2xl.mx-auto.mb-20.relative > div:not(.absolute)');
      indicators.forEach((indicator, index) => {
          const stepId = index + 1;
          const step = steps[index];
          const circle = indicator.querySelector('.w-8.h-8');
          const label = indicator.querySelector('span');
          if (!circle || !label) return;

          const isAllowed = AppState.validateStep(step.page);
          indicator.style.cursor = isAllowed ? 'pointer' : 'not-allowed';
          indicator.onclick = () => isAllowed && window.handleStepNavigation(step.page);

          if (stepId < currentStep) {
              circle.innerHTML = '✓';
              circle.className = 'w-8 h-8 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center text-xs font-bold border border-[#FF6B00]/20';
          } else if (stepId === currentStep) {
              circle.innerHTML = stepId;
              circle.className = 'w-8 h-8 rounded-full bg-[#FF6B00] text-black flex items-center justify-center text-xs font-bold';
              label.classList.add('text-[#FF6B00]');
          } else {
              circle.innerHTML = stepId;
              circle.className = 'w-8 h-8 rounded-full bg-surface-container-highest text-white/60 flex items-center justify-center text-xs font-bold border border-white/5';
              if (!isAllowed) indicator.style.opacity = '0.3';
          }
      });
  };

  document.body.style.transition = 'opacity 0.3s ease';
  document.body.style.opacity = '1';

  function bootAuthUIWhenSupabaseReady() {
    if (window.supabaseClient) { bootAuthUI(); return; }
    window.addEventListener('supabase:ready', () => bootAuthUI(), { once: true });
  }

  bootAuthUIWhenSupabaseReady();
});

