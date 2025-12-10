// script.js

document.addEventListener('DOMContentLoaded', () => {
    const projectData = {
        best1: {
            title: "Strawberry Cheesecake App",
            type: "Best Seller: UX/UI",
            content: `<p class="font-bold text-pink-600">Best Seller Reason:</p><p>This website is designed with highly intuitive navigation (UX) so that customers can order their favorite cheesecake in just 3 clicks. Its visual design (UI) uses a calming and cute pastel palette, just like the smooth taste of the cheese.</p><p class="text-sm italic mt-2">Technology: Figma, Responsive HTML/CSS, Interactive Prototyping.</p>`
        },
        best2: {
            title: "Coding Hot Chocolate",
            type: "Best Seller: Front-end",
            content: `<p class="font-bold text-pink-600">Best Seller Reason:</p><p>This hot chocolate represents a simple web project that has smooth and fast JavaScript functionality. This project demonstrates my expertise in performance optimization and form validation without over-stressing the server.</p><p class="text-sm italic mt-2">Technology: HTML5, Tailwind CSS, Vanilla JavaScript (ES6+).</p>`
        },
        best3: {
            title: "Vanilla Logic Latte",
            type: "Best Seller: Fundamental Logic",
            content: `<p class="font-bold text-pink-600">Best Seller Reason:</p><p>This latte symbolizes a strong foundation in programming logic. It is a small project focused on problem-solving (debugging) and efficient data structures, ensuring every line of code is as stable as dense latte foam.</p><p class="text-sm italic mt-2">Technology: Pure JavaScript Logic, Code Efficiency, Basic Unit Testing.</p>`
        },
        recipe1: {
            title: "Vanilla CSS Website Recipe",
            type: "Recipe Collection: Front-end",
            content: `
                <div class="text-left overflow-y-auto max-h-[60vh]">
                    <p class="text-xl font-bold text-pink-700">Resep Website Anti Gagal (Vanilla CSS)</p>
                    <p class="font-bold text-pink-600 mt-3">Bahan-bahan (Komponen Dasar):</p>
                    <ul class="list-disc ml-5 text-gray-700">
                        <li>2 Cup Porsi HTML Semantik (Wajib untuk Struktur)</li>
                        <li>1 Sendok Teh CSS Normalize/Reset (Untuk Keseragaman Browser)</li>
                        <li>300ml Warna Pastel & Gradasi Lembut (Mood & Aesthetics)</li>
                        <li>150g Skema Layout Grid/Flexbox (Untuk Responsivitas)</li>
                        <li>1 Tetes Vanilla JavaScript (Hanya untuk Interaksi Kecil)</li>
                    </ul>
                    <p class="font-bold text-pink-600 mt-3">Langkah Pembuatan (Proses Coding):</p>
                    <ol class="list-decimal ml-5 text-gray-700">
                        <li>**Siapkan Kerangka:** Tuang HTML Semantik. Pastikan setiap div, header, dan section memiliki makna.</li>
                        <li>**Campur Rasa:** Drench dengan CSS, fokus pada Mobile-First Design. Pastikan semua elemen tata letak Flex/Grid bekerja sempurna di layar kecil.</li>
                        <li>**Tambahkan Sentuhan:** Sisipkan font yang mudah dibaca (Inter/Pacifico) dan atur Transisi CSS (0.3s) pada hover untuk sentuhan kehalusan.</li>
                        <li>**Uji Rasa:** Panggang di berbagai ukuran browser untuk memastikan website Anda "pixel perfect" dan fungsional.</li>
                    </ol>
                    <p class="mt-4 text-xs italic text-gray-500">Resep ini dirancang untuk dapat digulir jika ukurannya melebihi tinggi maksimal pop-up.</p>
                </div>
            `
        },
        recipe2: {
            title: "Cookie Algorithm Recipe",
            type: "Recipe Collection: Logic",
            content: `
                <div class="text-left overflow-y-auto max-h-[60vh]">
                    <p class="text-xl font-bold text-pink-700">Resep Algoritma Kue Kering (Logika Pengurangan Stok)</p>
                    <p class="font-bold text-pink-600 mt-3">Bahan-bahan (Konsep Logika):</p>
                    <ul class="list-disc ml-5 text-gray-700">
                        <li>1 Buah Flowchart Rapi (Peta Alur Logika)</li>
                        <li>Secukupnya Pseudocode/Komentar (Keterangan setiap langkah)</li>
                        <li>250g Data Struktur (Array/Object untuk Daftar Produk)</li>
                        <li>Variabel Gula Logic (*If/Else* atau *Switch*) secukupnya.</li>
                        <li>*Loop* (*For/While*) yang efisien untuk hitungan stok.</li>
                    </ul>
                    <p class="font-bold text-pink-600 mt-3">Langkah Pembuatan (Proses Algoritma):</p>
                    <ol class="list-decimal ml-5 text-gray-700">
                        <li>**Input Awal:** Definisikan variabel stok awal (misal: \`stock = 10\`).</li>
                        <li>**Pemeriksaan Kondisi:** Gunakan *If/Else* untuk memastikan pesanan (\`order\`) tidak melebihi \`stock\`.</li>
                        <li>**Proses Pengurangan:** Jika kondisi terpenuhi, kurangi stok (\`stock = stock - order\`) menggunakan operator aritmatika.</li>
                        <li>**Uji Stabilitas:** Lakukan *testing* (uji coba) dengan angka ekstrem (nol, negatif, dan melebihi stok) untuk memastikan sistem tidak menghasilkan *bug*.</li>
                        <li>**Sajikan:** Sajikan hasil logika dengan pesan sukses/gagal yang jelas kepada pengguna.</li>
                    </ol>
                    <p class="mt-4 text-xs italic text-gray-500">Resep ini dirancang untuk dapat digulir jika ukurannya melebihi tinggi maksimal pop-up.</p>
                </div>
            `
        }
    };

    const modal = document.getElementById('info-modal');
    const modalInner = modal ? modal.querySelector('div') : null;
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const profileImage = document.getElementById('profile-image');
    const greetingPopup = document.getElementById('greeting-popup');
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const bestSellerList = document.getElementById('best-seller-list'); 
    const recipeList = document.getElementById('recipe-list');


    const isDarkMode = () => document.body.classList.contains('dark');

    const updateThemeIcons = (isDark) => {
        if (sunIcon && moonIcon) {
            sunIcon.classList.toggle('hidden', isDark);
            moonIcon.classList.toggle('hidden', !isDark);
        }
        const header = document.querySelector('header');
        if (header) {
            header.classList.toggle('bg-pink-100/80', !isDark);
            header.classList.toggle('bg-gray-900/90', isDark);
        }
    };

    const applyTheme = (isDark) => {
        document.body.classList.toggle('dark', isDark);
        updateThemeIcons(isDark);
        try {
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        } catch (e) {
            console.warn("localStorage is unavailable.");
        }
    };

    let savedTheme = null;
    try {
        savedTheme = localStorage.getItem('theme');
    } catch (e) {
        console.warn("localStorage read failed.");
    }

    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        applyTheme(savedTheme === 'dark');
    } else {
        applyTheme(systemPrefersDark);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newMode = !isDarkMode();
            applyTheme(newMode);
        });
    }

    const createSparkles = (x, y) => {
        const numSparkles = 10;
        const color = ['#ffc0cb', '#ff99aa', '#ff6677'];

        for (let i = 0; i < numSparkles; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle-particle';
            
            const size = Math.random() * 8 + 4; 
            sparkle.style.width = size + 'px';
            sparkle.style.height = size + 'px';
            sparkle.style.backgroundColor = color[Math.floor(Math.random() * color.length)];

            const offsetX = (Math.random() - 0.5) * 50;
            const offsetY = (Math.random() - 0.5) * 50;

            sparkle.style.left = x + offsetX + 'px';
            sparkle.style.top = y + offsetY + 'px';
            
            document.body.appendChild(sparkle);

            sparkle.animate([
                { opacity: 1, transform: `translateY(0) scale(1)` },
                { opacity: 0, transform: `translateY(${(Math.random() * -100) - 50}px) scale(0.5)` }
            ], {
                duration: 800 + Math.random() * 400,
                easing: 'ease-out'
            });

            setTimeout(() => {
                sparkle.remove();
            }, 1300);
        }
    };

    const showModal = (title, content) => {
        if (!modal || !modalInner) return;
        modalTitle.innerHTML = title;
        modalContent.innerHTML = content; 
        
        modal.classList.remove('hidden');
        requestAnimationFrame(() => {
            modalInner.classList.remove('scale-95', 'opacity-0');
            modalInner.classList.add('scale-100', 'opacity-100');
        });
    };
    
    const showSuccessModal = (name) => {
        if (!modal || !modalInner) return;
        const successTitle = "Order Successfully Placed!";
        
        const successContent = `
            <div class="text-center space-y-4">
                <svg class="w-16 h-16 text-pink-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p class="text-xl font-bold text-pink-700 dark:text-pink-400">Congratulations, ${name}!</p>
                <p class="text-gray-700 dark:text-gray-300">Your sweet idea has been received! I'll contact you soon to discuss your digital creation. Have a great day!</p>
            </div>
        `;
        
        modalTitle.innerHTML = successTitle;
        modalContent.innerHTML = successContent;
        
        modal.classList.remove('hidden');
        requestAnimationFrame(() => {
            modalInner.classList.remove('scale-95', 'opacity-0');
            modalInner.classList.add('scale-100', 'opacity-100');
        });
    }

    const hideModal = () => {
        if (!modal || !modalInner) return;
        const isSuccess = modalTitle.innerHTML.includes("Order Successfully Placed!"); 

        modalInner.classList.remove('scale-100', 'opacity-100');
        modalInner.classList.add('scale-95', 'opacity-0');
        
        setTimeout(() => {
            modal.classList.add('hidden');
            
            if (isSuccess) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }

        }, 300);
    };

    const closeModalButtons = [
        document.getElementById('close-modal-button'),
        document.getElementById('modal-close-button-bottom')
    ];
    if (modal) {
        closeModalButtons.forEach(button => button.addEventListener('click', hideModal));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideModal();
            }
        });
    }

    if (profileImage && greetingPopup) {
        profileImage.addEventListener('click', () => {
            const isHidden = greetingPopup.classList.toggle('hidden');

            if (!isHidden) {
                // Apply subtle zoom on click
                profileImage.style.transform = 'scale(1.05)'; 
                
                greetingPopup.classList.remove('opacity-0', 'translate-x-2');
                greetingPopup.classList.add('opacity-100', 'translate-x-0');

                setTimeout(() => {
                    greetingPopup.classList.add('opacity-0', 'translate-x-2');
                    setTimeout(() => greetingPopup.classList.add('hidden'), 300);
                    // Reset zoom
                    profileImage.style.transform = 'scale(1.0)'; 
                }, 3000); 
            } else {
                greetingPopup.classList.add('opacity-0', 'translate-x-2');
                setTimeout(() => greetingPopup.classList.add('hidden'), 300);
                profileImage.style.transform = 'scale(1.0)';
            }
        });
    }
    
    // --- FINAL CRITICAL FIX: Direct attachment to all menu LI items ---
    // This is the most stable method for this environment.
    const menuItems = document.querySelectorAll('.best-seller-item, .recipe-item');

    const handleMenuClickDirect = (e) => {
        e.preventDefault(); 
        
        const item = e.currentTarget;
        const menuId = item.getAttribute('data-menu-id');
        const data = projectData[menuId];

        createSparkles(e.clientX, e.clientY);

        if (data) {
            showModal(data.title + ' (' + data.type + ')', data.content);
        }
    };

    // Attach listener directly to every menu item
    menuItems.forEach(item => {
        // Remove existing listener (for safety) and add the new one
        item.removeEventListener('click', handleMenuClickDirect); 
        item.addEventListener('click', handleMenuClickDirect);
    });
    // --- END FINAL CRITICAL FIX ---


    const heroSection = document.getElementById('hero');
    const contentToAnimate = document.querySelectorAll('.animate-on-scroll');

    const applyParallax = () => {
        if (heroSection) {
            const scrollPos = window.pageYOffset;
            heroSection.style.backgroundPositionY = scrollPos * 0.5 + 'px';
        }
    };

    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.2 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    contentToAnimate.forEach(el => {
        el.classList.add('opacity-0', 'transition', 'duration-1000', 'transform', 'translate-y-10');
        observer.observe(el);
    });

    const handleScroll = () => { applyParallax(); };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => { mobileMenu.classList.toggle('hidden'); });
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                mobileMenu.classList.add('hidden');
                const targetElement = document.getElementById(link.getAttribute('href').substring(1));
                if (targetElement) { targetElement.scrollIntoView({ behavior: 'smooth' }); }
            });
        });
    }

    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.getElementById(this.getAttribute('href').substring(1));
            if (targetElement) { targetElement.scrollIntoView({ behavior: 'smooth' }); }
        });
    });

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('name');

            if (!nameInput.checkValidity()) { 
                return; 
            }
            
            const customerName = nameInput.value.trim().split(' ')[0] || 'Dear Customer';
            formStatus.textContent = 'Preparing your order...';
            formStatus.className = 'text-center mt-4 text-sm text-pink-500';
            
            const buttonRect = e.target.querySelector('button[type="submit"]').getBoundingClientRect();
            createSparkles(buttonRect.x + buttonRect.width / 2, buttonRect.y + buttonRect.height / 2);

            setTimeout(() => {
                formStatus.textContent = ''; 
                formStatus.className = '';
                
                showSuccessModal(customerName); 
                contactForm.reset();
            }, 1500);
        });
    }
});