
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const typingText = document.getElementById("typingText");

let texts = [
    "Mahasiswa Teknik Informatika",
    "Pemuda taat",
    "Pecinta Budaya"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentText = texts[textIndex];

    if (deleting) {
        typingText.textContent =
            currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent =
            currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentText.length) {
        speed = 1800;
        deleting = true;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        textIndex++;

        if (textIndex >= texts.length) {
            textIndex = 0;
        }

        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(function(element) {
        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 50) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

const progressBars =
    document.querySelectorAll(".progress-bar");

let progressStarted = false;

function animateProgress() {
    const skillsSection =
        document.getElementById("keahlian");

    const position =
        skillsSection.getBoundingClientRect().top;

    if (
        position < window.innerHeight &&
        !progressStarted
    ) {
        progressStarted = true;

        progressBars.forEach(function (bar) {
            const width =
                bar.getAttribute("data-width");

            bar.style.width = width;
        });
    }
}

window.addEventListener("scroll", animateProgress);

const galleryItems =
    document.querySelectorAll(".gallery-item");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const lightboxClose =
    document.getElementById("lightboxClose");

galleryItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
        if (event.target.tagName === "VIDEO") {
            return;
        }

        const image =
            item.getAttribute("data-image");

        const title =
            item.getAttribute("data-title");

        if (!image) {
            return;
        }

        lightboxImage.src = image;
        lightboxImage.alt = title;
        lightboxTitle.textContent = title;

        lightbox.classList.add("active");
    });
});

lightboxClose.addEventListener("click", function () {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }
});

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();

    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {
        formMessage.textContent = currentLanguage === "jv"
            ? "ꦩꦺꦴꦲꦺꦴꦤ꧀ ꦭꦺꦁꦏꦥꦶ ꦱꦧꦼꦤ꧀ ꦢꦠ ꦩꦭꦶꦃꦤꦶꦏꦸꦠꦶ."
            : "Mohon lengkapi semua data terlebih dahulu.";
        return;
    }

    if (!email.includes("@")) {
        formMessage.textContent = currentLanguage === "jv"
            ? "ꦩꦱꦸꦏ꧀ꦤ ꦲꦭꦩꦠ꧀ email ꦏꦁ ꦧꦼꦤꦼꦂ."
            : "Masukkan alamat email yang valid.";
        return;
    }

    formMessage.textContent = currentLanguage === "jv"
        ? "ꦥꦼꦱꦤ꧀ ꦧꦼꦂꦲꦱꦶꦭ꧀ ꦢꦶꦏꦶꦫꦶꦩ꧀. ꦩꦠꦸꦂ ꦤꦸꦮꦸꦤ꧀!"
        : "Pesan berhasil dikirim. Terima kasih!";

    contactForm.reset();
});

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const themeToggle =
    document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (
        document.body.classList.contains("dark-mode")
    ) {
        themeToggle.textContent = "☀";
    } else {
        themeToggle.textContent = "☾";
    }
});


(function () {
    function initGununganIntro() {
        const intro = document.getElementById("gununganIntro");
        const enterButton = document.getElementById("enterPortfolio");
        const introContent = document.getElementById("introContent");
        const introHint = document.getElementById("introHint");
        const skipButton = document.getElementById("skipIntro");

        if (!intro || !enterButton || !introContent) {
            return;
        }

        if (intro.dataset.initialized === "true") {
            return;
        }

        intro.dataset.initialized = "true";

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const TIME = reduceMotion
            ? { scene: 0, transition: 0, welcome: 700, ready: 300 }
            : { scene: 1700, transition: 7000, welcome: 9800, ready: 2200 };

        const pageParts = document.querySelectorAll(
            "header.navbar, main, footer, .back-to-top"
        );

        let stage = "closed";
        const timers = [];

        function later(callback, delay) {
            timers.push(window.setTimeout(callback, delay));
        }

        function clearTimers() {
            while (timers.length) {
                window.clearTimeout(timers.pop());
            }
        }

        function setPageLocked(locked) {
            document.documentElement.style.overflow = locked ? "hidden" : "";
            document.body.style.overflow = locked ? "hidden" : "";
            document.body.classList.toggle("intro-active", locked);

            pageParts.forEach(function (part) {
                if (locked) {
                    part.setAttribute("inert", "");
                } else {
                    part.removeAttribute("inert");
                }
            });
        }

        window.scrollTo(0, 0);
        setPageLocked(true);

        intro.focus({ preventScroll: true });

        function showWelcome() {
            if (stage === "welcome" || stage === "done") {
                return;
            }

            stage = "welcome";
            clearTimers();

            intro.classList.add("is-transition", "is-welcome", "show-content");
            introContent.setAttribute("aria-hidden", "false");

            later(function () {
                intro.classList.add("is-ready");
                enterButton.focus({ preventScroll: true });
            }, TIME.ready);
        }

        function skipScene() {
            if (stage !== "opening") {
                return;
            }

            clearTimers();
            intro.classList.add("scene-play", "is-fast", "is-transition");
            later(showWelcome, 650);
        }

        function openGunungan() {
            if (stage !== "closed") {
                return;
            }

            stage = "opening";

            intro.classList.add("is-opening");

            if (introHint) {
                introHint.style.opacity = "0";
            }

            if (reduceMotion) {
                later(showWelcome, TIME.welcome);
                return;
            }

            later(function () {
                intro.classList.add("scene-play");
            }, TIME.scene);

            later(function () {
                intro.classList.add("is-transition");
            }, TIME.transition);

            later(showWelcome, TIME.welcome);
        }

        function closeIntro(event) {
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }

            if (stage !== "welcome" || !intro.classList.contains("is-ready")) {
                return;
            }

            stage = "done";
            clearTimers();

            intro.classList.remove("show-content");
            introContent.setAttribute("aria-hidden", "true");
            intro.classList.add("is-hidden");

            setPageLocked(false);

            const target = document.getElementById("beranda");

            if (target) {
                target.scrollIntoView({
                    behavior: reduceMotion ? "auto" : "smooth",
                    block: "start"
                });
                target.setAttribute("tabindex", "-1");
                target.focus({ preventScroll: true });
            }

            window.setTimeout(function () {
                intro.style.display = "none";
            }, 850);
        }

        intro.addEventListener("click", function (event) {
            if (
                event.target.closest("#enterPortfolio") ||
                event.target.closest("#skipIntro")
            ) {
                return;
            }

            openGunungan();
        });

        if (skipButton) {
            skipButton.addEventListener("click", function (event) {
                event.stopPropagation();
                skipScene();
            });
        }

        enterButton.addEventListener("click", closeIntro);

        intro.addEventListener("keydown", function (event) {
            if (
                stage === "closed" &&
                (event.key === "Enter" || event.key === " ")
            ) {
                event.preventDefault();
                openGunungan();
            }

            if (stage === "opening" && event.key === "Escape") {
                skipScene();
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initGununganIntro,
            { once: true }
        );
    } else {
        initGununganIntro();
    }
})();


let currentLanguage = "id";

(function initLanguageToggle() {
    const selector = document.getElementById("languageToggle");
    if (!selector) return;

    const translations = {
        "Raffi | Portfolio": "Raffi | Portofolio",
        "Wayang Kulit · Warisan Nusantara": "ꦮꦪꦁ ꦏꦸꦭꦶꦠ꧀ · ꦮꦫꦶꦱꦤ꧀ ꦤꦸꦱꦤ꧀ꦠꦫ",
        "Sebuah Perjalanan Dimulai": "ꦱꦮꦶꗯꦺꦴꦤ꧀ ꦥꦼꦂꦗꦭꦤ꧀ ꦢꦶꦩꦸꦭꦻ",
        "Sugeng Rawuh": "ꦱꦸꦒꦼꦁ ꦫꦮꦸꦃ",
        "PORTOFOLIO": "ꦥꦺꦴꦂꦠꦺꦴꦥ꦳ꦺꦴꦭꦶꦪꦺꦴ",
        "Masuk ke Portofolio": "ꦩꦱꦸꦏ꧀ ꦩꦼꦚꦁ ꦥꦺꦴꦂꦠꦺꦴꦥ꦳ꦺꦴꦭꦶꦪꦺꦴ",
        "Lewati ›": "ꦭꦭꦶꦠꦶ ›",
        "Klik di mana saja untuk membuka": "ꦥꦤ꧀ꦠꦺꦤ꧀ ꦲꦤ꧀ꦢꦶ ꦩꦤꦲꦺ ꦏꦁꦒꦺꦴ ꦔ꧀ꦒꦸꦏ",
        "꧁ BUDAYA · KARYA · IDENTITAS ꧂": "꧁ ꦧꦸꦢꦪ · ꦏꦂꦪ · ꦲꦶꦢꦼꦤ꧀ꦠꦶꦠꦱ꧀ ꧂",
        "Beranda": "ꦲꦺꦴꦩꦃ",
        "Tentang Saya": "ꦤꦼꦁꦒꦺꦤꦶ ꦲꦏꦸ",
        "Keahlian": "ꦏꦼꦱꦼꦒꦼꦫꦤ꧀",
        "Proyek": "ꦏꦂꦪ",
        "Pengalaman": "ꦥꦔꦭꦩꦤ꧀",
        "Galeri": "ꦒꦭꦺꦫꦶ",
        "Kontak": "ꦏꦺꦴꦤ꧀ꦠꦏ꧀",
        "Halo, Saya": "ꦲꦭꦺꦴ, ꦲꦏꦸ",
        "Mahasiswa Teknik Informatika yang memiliki ketertarikan pada dunia teknologi, pemrograman, pengembangan kreativitas dan pelestarian budaya Indonesia.": "ꦩꦲꦱꦶꦱ꧀ꦮ ꦠꦼꦏ꧀ꦤꦶꦏ꧀ ꦲꦶꦤ꧀ꦥ꦳ꦺꦴꦂꦩꦠꦶꦏ ꦏꦁ ꦔ꧀ꦒꦼꦩꦫꦶ ꦠꦼꦏ꧀ꦤꦺꦴꦭꦺꦴꦒꦶ, ꦥꦿꦺꦴꦒꦿꦩꦶꦁ, ꦏꦿꦺꦪꦠꦶꦥ꧀ꦮꦶꦠꦱ꧀, ꦭꦤ꧀ ꦩꦼꦭꦼꦱ꧀ꦠꦫꦶꦏꦏꦺ ꦧꦸꦢꦪ ꦲꦶꦤ꧀ꦢꦺꦴꦤꦺꦱꦶꦪ꧉",
        "Lihat Portofolio": "ꦲꦶꦭꦶꦃ ꦥꦺꦴꦂꦠꦺꦴꦥ꦳ꦺꦴꦭꦶꦪꦺꦴ",
        "Hubungi Saya": "ꦲꦸꦧꦸꦁꦔꦶ ꦲꦏꦸ",
        "꧁ Tentang Saya ꧂": "꧁ ꦤꦼꦁꦒꦺꦤꦶ ꦲꦏꦸ ꧂",
        "Mengenal Lebih Dekat": "ꦭꦸꦮꦶꦃ ꦤꦼꦁꦒꦺꦤꦶ ꦲꦏꦸ",
        "Teknologi Modern,": "ꦠꦼꦏ꧀ꦤꦺꦴꦭꦺꦴꦒꦶ ꦩꦺꦴꦢꦺꦂꦤ꧀,",
        "Jiwa Tradisi.": "ꦗꦶꦮ ꦠꦿꦢꦶꦱꦶ꧉",
        "Saya adalah mahasiswa Teknik Informatika yang memiliki ketertarikan pada pengembangan teknologi, kreativitas, dan pemrograman": "ꦲꦏꦸ ꦲꦶꦏꦶ ꦩꦲꦱꦶꦱ꧀ꦮ ꦠꦼꦏ꧀ꦤꦶꦏ꧀ ꦲꦶꦤ꧀ꦥ꦳ꦺꦴꦂꦩꦠꦶꦏ ꦏꦁ ꦔ꧀ꦒꦼꦩꦫꦶ ꦥꦔꦼꦩ꧀ꦧꦔꦤ꧀ ꦠꦼꦏ꧀ꦤꦺꦴꦭꦺꦴꦒꦶ, ꦏꦿꦺꦪꦠꦶꦥ꧀ꦮꦶꦠꦱ꧀, ꦭꦤ꧀ ꦥꦿꦺꦴꦒꦿꦩꦶꦁ꧉",
        "Melalui website ini saya ingin menggabungkan perkembangan teknologi modern dengan kekayaan budaya Jawa. Bagi saya, teknologi bukan hanya tentang kode, tetapi juga tentang bagaimana sebuah karya dapat memiliki identitas.": "ꦭꦤ꧀ꦠꦫꦤ꧀ ꦮꦺꦧ꧀ꦱꦻꦠ꧀ ꦲꦶꦏꦶ, ꦲꦏꦸ ꦲꦺꦴꦫ ꦩꦺꦴꦭꦺꦃ ꦔꦒꦧꦸꦁꦏꦏꦺ ꦥꦔꦼꦩ꧀ꦧꦔꦤ꧀ ꦠꦼꦏ꧀ꦤꦺꦴꦭꦺꦴꦒꦶ ꦩꦺꦴꦢꦺꦂꦤ꧀ ꦏꦫꦺꦴ ꦏꦏꦪꦤ꧀ ꦧꦸꦢꦪ ꦗꦮ꧉ ꦩꦼꦤꦸꦫꦸꦠ꧀ꦏꦸ, ꦠꦼꦏ꧀ꦤꦺꦴꦭꦺꦴꦒꦶ ꦲꦸꦢꦸ ꦩꦸꦁ ꦩꦼꦤ꧀ꦠꦶꦁ ꦏꦺꦴꦢꦺ, ꦤꦔꦶꦁ ꦏꦼꦤꦺꦴ ꦱꦸꦮꦶꦗꦶꦤꦶꦁ ꦏꦂꦪ ꦢꦸꦮꦺ ꦲꦶꦢꦼꦤ꧀ꦠꦶꦠꦱ꧀꧉",
        "Nama": "ꦗꦼꦤꦼꦁ",
        "Pendidikan": "ꦥꦔꦼꦠꦲꦸꦮꦤ꧀",
        "Fokus": "ꦥꦼꦩꦸꦱꦠꦤ꧀",
        "Game dan Software Developer": "ꦒꦺꦩ꧀ ꦭꦤ꧀ ꦥꦔꦼꦩ꧀ꦧꦔꦤ꧀ ꦱꦺꦴꦥ꧀ꦠ꧀ꦮꦺꦂ",
        "꧁ Keahlian ꧂": "꧁ ꦏꦼꦱꦼꦒꦼꦫꦤ꧀ ꧂",
        "Kemampuan Saya": "ꦏꦼꦩꦩ꧀ꦥꦸꦮꦤ꧀ꦏꦸ",
        "Membuat struktur website menggunakan HTML yang terstruktur": "ꦔ꧀ꦒ꧀ꦮꦺ ꦱ꧀ꦠꦿꦸꦏ꧀ꦠꦸꦂ ꦮꦺꦧ꧀ꦱꦻꦠ꧀ ꦏꦫꦺꦴ HTML ꦏꦁ ꦫꦥꦶ꧉",
        "Membuat tampilan website yang menarik, modern, dan responsive.": "ꦔ꧀ꦒ꧀ꦮꦺ ꦠꦩ꧀ꦥꦶꦭꦤ꧀ ꦮꦺꦧ꧀ꦱꦻꦠ꧀ ꦏꦁ ꦩꦼꦤꦫꦶꦏ꧀, ꦩꦺꦴꦢꦺꦂꦤ꧀, ꦭꦤ꧀ ꦫꦺꦱ꧀ꦥꦺꦴꦤ꧀ꦱꦶꦥ꧀꧉",
        "Membuat website lebih interaktif menggunakan JavaScript vanilla.": "ꦔ꧀ꦒ꧀ꦮꦺ ꦮꦺꦧ꧀ꦱꦻꦠ꧀ ꦭꦸꦮꦶꦃ ꦲꦶꦤ꧀ꦠꦼꦫꦏ꧀ꦠꦶꦥ꧀ ꦏꦫꦺꦴ JavaScript vanilla꧉",
        "Jaringan": "ꦗꦫꦶꦔꦤ꧀",
        "Memahami dasar instalasi dan konfigurasi jaringan komputer.": "ꦩꦼꦩꦲꦩꦶ ꦢꦱꦂ ꦲꦶꦤ꧀ꦱ꧀ꦠꦭꦱꦶ ꦭꦤ꧀ ꦏꦺꦴꦤ꧀ꦥ꦳ꦶꦒꦸꦫꦱꦶ ꦗꦫꦶꦔꦤ꧀ ꦏꦺꦴꦩ꧀ꦥꦸꦠꦼꦂ꧉",
        "Editing": "ꦲꦼꦢꦶꦠꦶꦁ",
        "Mengedit foto dan video untuk kebutuhan konten digital.": "ꦔꦼꦢꦶꦠ꧀ ꦥ꦳ꦺꦴꦠꦺꦴ ꦭꦤ꧀ ꦮꦶꦢꦺꦪꦺꦴ ꦏꦁꦒꦺꦴ ꦏꦼꦧꦸꦠꦸꦲꦤ꧀ ꦏꦺꦴꦤ꧀ꦠꦺꦤ꧀ ꦢꦶꦒꦶꦠꦭ꧀꧉",
        "Komunikasi": "ꦏꦺꦴꦩꦸꦤꦶꦏꦱꦶ",
        "Mampu bekerja sama dan berkomunikasi dalam sebuah tim.": "ꦩꦩ꧀ꦥꦸ ꦲꦺꦴꦭꦃ ꦧꦫꦺꦁ ꦭꦤ꧀ ꦏꦺꦴꦩꦸꦤꦶꦏꦱꦶ ꦲꦶꦁ ꦱꦶꦗꦶꦤꦶꦁ ꦠꦶꦩ꧀꧉",
        "Pencak Silat": "ꦥꦼꦚ꧀ꦕꦏ꧀ ꦱꦶꦭꦠ꧀",
        "Memiliki kemampuan dan ketertarikan dalam seni bela diri tradisional Indonesia.": "ꦢꦸꦮꦺ ꦏꦼꦩꦩ꧀ꦥꦸꦮꦤ꧀ ꦭꦤ꧀ ꦏꦼꦥꦼꦤ꧀ꦠꦶꦔꦤ꧀ ꦩꦼꦤ꧀ꦢꦭꦩ꧀ ꦱꦼꦤꦶ ꦧꦼꦭ ꦢꦶꦫꦶ ꦠꦿꦢꦶꦱꦶꦪꦺꦴꦤꦭ꧀ ꦲꦶꦤ꧀ꦢꦺꦴꦤꦺꦱꦶꦪ꧉",
        "꧁ Portofolio ꧂": "꧁ ꦥꦺꦴꦂꦠꦺꦴꦥ꦳ꦺꦴꦭꦶꦪꦺꦴ ꧂",
        "Proyek Saya": "ꦏꦂꦪꦏꦸ",
        "Web Development": "ꦥꦔꦼꦩ꧀ꦧꦔꦤ꧀ ꦮꦺꦧ꧀",
        "Website Portfolio": "ꦮꦺꦧ꧀ꦱꦻꦠ꧀ ꦥꦺꦴꦂꦠꦺꦴꦥ꦳ꦺꦴꦭꦶꦪꦺꦴ",
        "Website portofolio pribadi dengan perpaduan teknologi modern dan budaya Jawa.": "ꦮꦺꦧ꧀ꦱꦻꦠ꧀ ꦥꦺꦴꦂꦠꦺꦴꦥ꦳ꦺꦴꦭꦶꦪꦺꦴ ꦥꦿꦶꦧꦢꦶ ꦏꦁ ꦔꦒꦧꦸꦁꦏꦏꦺ ꦠꦼꦏ꧀ꦤꦺꦴꦭꦺꦴꦒꦶ ꦩꦺꦴꦢꦺꦂꦤ꧀ ꦭꦤ꧀ ꦧꦸꦢꦪ ꦗꦮ꧉",
        "Lihat Project →": "ꦲꦶꦭꦶꦃ ꦏꦂꦪ →",
        "꧁ Perjalanan ꧂": "꧁ ꦥꦼꦂꦗꦭꦤ꧀ ꧂",
        "Pengalaman & Pendidikan": "ꦥꦔꦭꦩꦤ꧀ ꦭꦤ꧀ ꦥꦔꦼꦠꦲꦸꦮꦤ꧀",
        "2024 - Sekarang": "2024 - ꦱꦼꦏꦫꦁ",
        "Mahasiswa Teknik Informatika UNINDRA": "ꦩꦲꦱꦶꦱ꧀ꦮ ꦠꦼꦏ꧀ꦤꦶꦏ꧀ ꦲꦶꦤ꧀ꦥ꦳ꦺꦴꦂꦩꦠꦶꦏ UNINDRA",
        "Mempelajari pemrograman, basis data, sistem operasi, jaringan komputer, dan pengembangan website.": "ꦩꦼꦭꦗꦫꦶ ꦥꦿꦺꦴꦒꦿꦩꦶꦁ, ꦧꦱꦶꦱ꧀ ꦢꦠ, ꦱꦶꦱ꧀ꦠꦺꦩ꧀ ꦲꦺꦴꦥꦼꦫꦱꦶ, ꦗꦫꦶꦔꦤ꧀ ꦏꦺꦴꦩ꧀ꦥꦸꦠꦼꦂ, ꦭꦤ꧀ ꦥꦔꦼꦩ꧀ꦧꦔꦤ꧀ ꦮꦺꦧ꧀ꦱꦻꦠ꧀꧉",
        "2022 - 2023": "2022 - 2023",
        "Wakil Ketua OSIS SMAN 1 Moga": "ꦮꦏꦶꦭ꧀ ꦏꦼꦠꦸꦮ OSIS SMAN 1 Moga",
        "Berpartisipasi dalam organisasi sekolah, bekerja sama dengan anggota, dan membantu menjalankan berbagai kegiatan sekolah.": "ꦩꦸꦫꦸꦠ꧀ ꦲꦶꦁ ꦲꦺꦴꦂꦒꦤꦶꦱꦱꦶ ꦱꦼꦏꦺꦴꦭꦃ, ꦲꦺꦴꦭꦃ ꦧꦫꦺꦁ ꦏꦫꦺꦴ ꦲꦁꦒꦺꦴꦠ, ꦭꦤ꧀ ꦩꦼꦤ꧀ꦢꦼꦫꦺꦏ꧀ ꦩꦼꦭꦏ꧀ꦱꦤꦏꦏꦺ ꦏꦼꦒꦶꦪꦠꦤ꧀ ꦱꦼꦏꦺꦴꦭꦃ꧉",
        "Pengalaman": "ꦥꦔꦭꦩꦤ꧀",
        "Instalasi CCTV Pt. Coca Cola Indonesia": "ꦲꦶꦤ꧀ꦱ꧀ꦠꦭꦱꦶ CCTV Pt. Coca Cola Indonesia",
        "Memiliki pengalaman dalam membantu proses instalasi CCTV di Pt. Coca Cola Indonesia dan memahami dasar perangkat jaringan.": "ꦢꦸꦮꦺ ꦥꦔꦭꦩꦤ꧀ ꦩꦼꦤ꧀ꦢꦼꦫꦺꦏ꧀ ꦥꦿꦺꦴꦱꦺꦱ꧀ ꦲꦶꦤ꧀ꦱ꧀ꦠꦭꦱꦶ CCTV ꦲꦶꦁ Pt. Coca Cola Indonesia ꦭꦤ꧀ ꦩꦼꦩꦲꦩꦶ ꦢꦱꦂ ꦥꦼꦫꦁꦏꦠ꧀ ꦗꦫꦶꦔꦤ꧀꧉",
        "꧁ Warisan Nusantara ꧂": "꧁ ꦮꦫꦶꦱꦤ꧀ ꦤꦸꦱꦤ꧀ꦠꦫ ꧂",
        "Galeri Budaya Jawa": "ꦒꦭꦺꦫꦶ ꦧꦸꦢꦪ ꦗꦮ",
        "Wayang": "ꦮꦪꦁ",
        "Batik": "ꦧꦠꦶꦏ꧀",
        "Rumah Joglo": "ꦒꦿꦶꦪ ꦗꦺꦴꦒ꧀ꦭꦺꦴ",
        "Gamelan": "ꦒꦩꦼꦭꦤ꧀",
        "Tari Jawa": "ꦠꦫꦶ ꦗꦮ",
        "Silat Tradisional": "ꦱꦶꦭꦠ꧀ ꦠꦿꦢꦶꦱꦶ",
        "Lihat gambar": "ꦲꦶꦭꦶꦃ ꦒꦩ꧀ꦧꦂ",
        "Lihat video": "ꦲꦶꦭꦶꦃ ꦮꦶꦢꦺꦪꦺꦴ",
        "꧁ Hubungi Saya ꧂": "꧁ ꦲꦸꦧꦸꦁꦔꦶ ꦲꦏꦸ ꧂",
        "Mari Terhubung": "ꦩꦫꦶ ꦱꦭꦶꦁ ꦔꦸꦧꦸꦁ꧉",
        "Punya pertanyaan atau ingin bekerja sama?": "ꦲꦤ ꦥꦿꦠꦚꦤ꧀ ꦲꦸꦠꦮ ꦲꦺꦴꦫ ꦲꦶꦁꦒꦶꦤ꧀ ꦲꦺꦴꦭꦃ ꦧꦫꦺꦁ?",
        "Jangan ragu untuk menghubungi saya. Infokan Lokasi Shareloc tak parani.": "ꦲꦺꦴꦫ ꦲꦸꦱꦃ ꦫꦒꦸ ꦏꦁꦒꦺꦴ ꦔꦸꦧꦸꦁꦔꦶ ꦲꦏꦸ. ꦩꦼꦫꦶꦁꦔꦶ ꦭꦺꦴꦏꦱꦶ, ꦱꦼꦥꦸꦂꦤꦺ ꦲꦏꦸ ꦥꦫꦤꦶ꧉",
        "Email": "ꦱꦸꦫꦼꦭ꧀",
        "Lokasi": "ꦭꦺꦴꦏꦱꦶ",
        "Jakarta, Indonesia": "ꦗꦏꦂꦠ, ꦲꦶꦤ꧀ꦢꦺꦴꦤꦺꦱꦶꦪ",
        "email": "ꦱꦸꦫꦼꦭ꧀",
        "pesan": "ꦥꦼꦱꦤ꧀",
        "Kirim Pesan": "ꦏꦶꦫꦶꦩ꧀ ꦥꦼꦱꦤ꧀",
        "\"Nguri-uri budaya, ngembangake teknologi.\"": "\"ꦔꦸꦫꦶ-ꦲꦸꦫꦶ ꦧꦸꦢꦪ, ꦔꦼꦩ꧀ꦧꦔꦏꦺ ꦠꦼꦏ꧀ꦤꦺꦴꦭꦺꦴꦒꦶ.\"",
        "© 2026 Raffi. Dibuat dengan HTML, CSS & JavaScript.": "© 2026 Raffi. ꦢꦶꦒ꧀ꦮꦺ ꦏꦫꦺꦴ HTML, CSS & JavaScript.",
        "Pilih bahasa": "ꦥꦶꦭꦶꦃ ꦧꦱ",
        "Foto Profil Raffi": "ꦥ꦳ꦺꦴꦠꦺꦴ ꦥꦿꦺꦴꦥ꦳ꦶꦭ꧀ Raffi",
        "Wayang Jawa": "ꦮꦪꦁ ꦗꦮ",
        "Batik Jawa": "ꦧꦠꦶꦏ꧀ ꦗꦮ",
        "Rumah Joglo": "ꦒꦿꦶꦪ ꦗꦺꦴꦒ꧀ꦭꦺꦴ",
        "Gamelan Jawa": "ꦒꦩꦼꦭꦤ꧀ ꦗꦮ",
        "Tari Jawa": "ꦠꦫꦶ ꦗꦮ",
        "Website Portfolio": "ꦮꦺꦧ꧀ꦱꦻꦠ꧀ ꦥꦺꦴꦂꦠꦺꦴꦥ꦳ꦺꦴꦭꦶꦪꦺꦴ"
    };

    const attributeTranslations = {
        "Masukkan nama": "ꦩꦱꦸꦏ꧀ꦤ ꦗꦼꦤꦼꦁ",
        "Masukkan email": "ꦩꦱꦸꦏ꧀ꦤ ꦱꦸꦫꦼꦭ꧀",
        "Tulis pesan...": "ꦠꦸꦭꦶꦱ꧀ ꦥꦼꦱꦤ꧀...",
        "Pilih bahasa": "ꦥꦶꦭꦶꦃ ꦧꦱ",
        "Ganti tema": "ꦒꦤ꧀ꦠꦶ ꦠꦺꦩ"
    };

    const originals = new WeakMap();
    const originalAttributes = new WeakMap();

    function normalized(value) {
        return String(value).replace(/\s+/g, " ").trim();
    }

    function translateDocument(language) {
        currentLanguage = language;
        document.documentElement.lang = language === "jv" ? "jv" : "id";
        document.title = language === "jv" ? "Raffi | ꦥꦺꦴꦂꦠꦺꦴꦥ꦳ꦺꦴꦭꦶꦪꦺꦴ" : "Raffi | Portfolio";

        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
            if (node.parentElement && node.parentElement.closest("script, style, #typingText, #formMessage, #languageToggle")) continue;
            if (!originals.has(node)) originals.set(node, node.nodeValue);
            const original = originals.get(node);
            const key = normalized(original);
            if (!key) continue;
            const translated = translations[key];
            const replacement = language === "jv" && translated ? translated : key;
            const leading = (original.match(/^\s*/) || [""])[0];
            const trailing = (original.match(/\s*$/) || [""])[0];
            node.nodeValue = leading + replacement + trailing;
        }

        const elements = document.querySelectorAll("[placeholder], [alt], [title], [aria-label], [data-title]");
        elements.forEach(function (element) {
            ["placeholder", "alt", "title", "aria-label", "data-title"].forEach(function (attribute) {
                if (!element.hasAttribute(attribute)) return;
                let cache = originalAttributes.get(element);
                if (!cache) {
                    cache = {};
                    originalAttributes.set(element, cache);
                }
                if (!(attribute in cache)) cache[attribute] = element.getAttribute(attribute);
                const original = cache[attribute];
                const key = normalized(original);
                const translated = attributeTranslations[key] || translations[key];
                element.setAttribute(attribute, language === "jv" && translated ? translated : original);
            });
        });

        const typingByLanguage = {
            id: ["Mahasiswa Teknik Informatika", "Pemuda taat", "Pecinta Budaya"],
            jv: ["ꦩꦲꦱꦶꦱ꧀ꦮ ꦠꦼꦏ꧀ꦤꦶꦏ꧀ ꦲꦶꦤ꧀ꦥ꦳ꦺꦴꦂꦩꦠꦶꦏ", "ꦥꦼꦩꦸꦢ ꦠꦼꦠꦼꦥ꧀", "ꦥꦼꦚꦶꦤ꧀ꦠ ꦧꦸꦢꦪ"]
        };
        texts.splice(0, texts.length, ...typingByLanguage[language]);
        textIndex = 0;
        charIndex = 0;
        deleting = false;
        if (typingText) typingText.textContent = "";

        selector.value = language;
        selector.setAttribute("aria-label", language === "jv" ? "ꦥꦶꦭꦶꦃ ꦧꦱ" : "Pilih bahasa");
        selector.title = language === "jv" ? "ꦥꦶꦭꦶꦃ ꦧꦱ" : "Pilih bahasa";

        const formMessage = document.getElementById("formMessage");
        if (formMessage && !formMessage.textContent.trim()) return;
        if (formMessage) {
            const message = formMessage.textContent.trim();
            if (language === "jv") {
                if (message === "Mohon lengkapi semua data terlebih dahulu.") formMessage.textContent = "ꦩꦺꦴꦲꦺꦴꦤ꧀ ꦭꦺꦁꦏꦥꦶ ꦱꦧꦼꦤ꧀ ꦢꦠ ꦩꦭꦶꦃꦤꦶꦏꦸꦠꦶ.";
                else if (message === "Masukkan alamat email yang valid.") formMessage.textContent = "ꦩꦱꦸꦏ꧀ꦤ ꦲꦭꦩꦠ꧀ email ꦏꦁ ꦧꦼꦤꦼꦂ.";
                else if (message === "Pesan berhasil dikirim. Terima kasih!") formMessage.textContent = "ꦥꦼꦱꦤ꧀ ꦧꦼꦂꦲꦱꦶꦭ꧀ ꦢꦶꦏꦶꦫꦶꦩ꧀. ꦩꦠꦸꦂ ꦤꦸꦮꦸꦤ꧀!";
            } else {
                if (message.includes("ꦩꦺꦴꦲꦺꦴꦤ꧀ ꦭꦺꦁꦏꦥꦶ")) formMessage.textContent = "Mohon lengkapi semua data terlebih dahulu.";
                else if (message.includes("ꦩꦱꦸꦏ꧀ꦤ ꦲꦭꦩꦠ꧀ email")) formMessage.textContent = "Masukkan alamat email yang valid.";
                else if (message.includes("ꦥꦼꦱꦤ꧀ ꦧꦼꦂꦲꦱꦶꦭ꧀")) formMessage.textContent = "Pesan berhasil dikirim. Terima kasih!";
            }
        }
    }

    selector.addEventListener("change", function () {
        translateDocument(selector.value);
    });

    translateDocument("id");
})();