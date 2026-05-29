
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const figmaFamor = "https://www.figma.com/design/5UmKA9hr3oDR4t9ocKWGK0/UID?node-id=24-977&t=Pky4BfdicJCDN5Yk-1";
const figmaAdmin = "https://www.figma.com/design/5UmKA9hr3oDR4t9ocKWGK0/UID?node-id=1071-2323&t=Gjfyew6uiYq4fzos-1";
const figmaBuu = "https://www.figma.com/design/HdkOD2B9zviQ6bIGzC42KY/Tugas-Design-UI-Mobile?node-id=0-1&t=R0bywFoJfNpHE86c-1";
const figmaBuuWeb = "https://www.figma.com/design/btI3KZDJw66PIIA1iLv8Wq/Tugas-Design-UI-Website?node-id=1-16&t=nm0jm6KL9FkbdIHk-1";
const figmaSekala = "https://www.figma.com/design/SmFBc4lRwKQtlLI7Ab1XzH/SEKALA?node-id=0-1&t=WBj74O2GNRRtrM3v-1";
const figmaUBBC = "https://www.figma.com/design/BNeTOC9PndF3V1BV1shhd3/UBBC-AND-CBS?node-id=7-16&t=1dWtvfZ4HuBX31xo-1";
const canvaCarousel = "https://canva.link/0xefm37k087kbuc";

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeIn({ children, delay = 0, className = "", direction = "up" }: {
  children: React.ReactNode; delay?: number; className?: string; direction?: "up" | "left" | "right";
}) {
  const { ref, inView } = useInView();
  const transform = {
    up: inView ? "translateY(0)" : "translateY(40px)",
    left: inView ? "translateX(0)" : "translateX(-40px)",
    right: inView ? "translateX(0)" : "translateX(40px)",
  }[direction];
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform, transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s` }}>
      {children}
    </div>
  );
}

type Project = {
  img: string; alt: string; tag: string; title: string; desc: string;
  features: string[]; link: string; accent: string; tool: string;
  toolIcon: string; toolIcon2?: string; linkLabel?: string;
};

const projects: Project[] = [
  {
    img: "/projects/famor-thumb.png",
    alt: "FAMOR",
    tag: "Mobile App",
    title: "FAMOR — Five G Auto Motor",
    desc: "Merancang UI/UX aplikasi mobile showroom motor untuk mempermudah booking service, monitoring kendaraan, dan simulasi cicilan dengan tampilan modern dan user-friendly.",
    features: ["Booking Service", "Riwayat Service", "Simulasi Cicilan", "Customer Service"],
    link: figmaFamor,
    accent: "#3b82f6",
    tool: "Figma",
    toolIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  },
  {
    img: "/projects/famor-admin-thumb.png",
    alt: "FAMOR Admin",
    tag: "Dashboard",
    title: "FAMOR Admin Panel",
    desc: "Merancang dashboard admin berbasis web untuk manajemen operasional showroom motor, mulai dari pengelolaan produk, stok kendaraan, hingga monitoring order dan layanan servis.",
    features: ["Dashboard Analytics", "Manajemen Produk", "Order & Stok", "Service Management"],
    link: figmaAdmin,
    accent: "#6366f1",
    tool: "Figma",
    toolIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  },
  {
    img: "/projects/buu-burger-thumb.png",
    alt: "Buu Burger App",
    tag: "Mobile App",
    title: "Buu Burger — Mobile App",
    desc: "Mendesain aplikasi mobile pemesanan makanan untuk brand fast food lokal, menghadirkan pengalaman order yang cepat, intuitif, dan menarik dengan fitur promo dan wishlist.",
    features: ["Order Makanan", "Kategori Menu", "Promo & Diskon", "Wishlist & Favorit"],
    link: figmaBuu,
    accent: "#f97316",
    tool: "Figma",
    toolIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  },
  {
    img: "/projects/buu-burger-web-thumb.png",
    alt: "Buu Burger Web",
    tag: "Website",
    title: "Buu Burger — Website",
    desc: "Merancang website restoran fast food dengan tampilan modern dan responsif, mencakup informasi menu, promo aktif, dan alur pemesanan online yang mudah digunakan.",
    features: ["Informasi Menu", "Promo & Diskon", "Pemesanan Online", "Responsif"],
    link: figmaBuuWeb,
    accent: "#ef4444",
    tool: "Figma",
    toolIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  },
  {
    img: "/projects/sekala-thumb.png",
    alt: "Sekala",
    tag: "Website",
    title: "Sekala — Platform Konten Digital",
    desc: "Mendesain platform layanan konten digital berbasis web yang memudahkan pelaku usaha memesan konten kreatif secara terstruktur, lengkap dengan manajemen paket dan dashboard klien.",
    features: ["Request Konten", "Manajemen Paket", "Dashboard Klien", "Responsif"],
    link: figmaSekala,
    accent: "#0ea5e9",
    tool: "Figma",
    toolIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  },
  {
    img: "/projects/ubbc-cbs-thumb.png",
    alt: "UBBC CBS",
    tag: "Graphic Design",
    title: "Content Design UBBC & CBS",
    desc: "Merancang aset visual promosi untuk event fitness & bodybuilding UBBC dan brand CBS, mencakup poster event, konten feed Instagram, materi promo produk, dan backdrop panggung.",
    features: ["Poster Event", "Feed Instagram", "Promo Produk", "Backdrop"],
    link: figmaUBBC,
    accent: "#f59e0b",
    tool: "Figma & Canva",
    toolIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    toolIcon2: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
  },
  {
    img: "/projects/social-media-carousel-thumb.png",
    alt: "Carousel",
    tag: "Graphic Design",
    title: "Social Media Carousel — Branding",
    desc: "Mendesain konten carousel media sosial untuk kebutuhan branding dan promosi digital, dengan konsep visual modern dan premium yang mendukung identitas brand korporat.",
    features: ["Social Media Carousel", "Branding Visual", "Promosi Digital", "Corporate Design"],
    link: canvaCarousel,
    accent: "#0284c7",
    tool: "Canva",
    toolIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    linkLabel: "Lihat di Canva"
  },
];

const experiences = [
  {
    role: "Content Creator & Visual Designer",
    company: "UBBC — Bali Body Contest",
    period: "Nov 2025 — Jan 2026",
    type: "Event-Based",
    accent: "#f59e0b",
    points: [
      "Membuat konten dokumentasi dan promosi event Bali Body Contest secara konsisten.",
      "Merancang desain panggung, poster, dan aset visual pendukung acara yang sesuai konsep.",
      "Berkolaborasi lintas tim untuk memastikan seluruh output visual selaras dengan branding event.",
      "Mengadaptasi desain secara fleksibel sesuai kebutuhan teknis dan arahan klien di lapangan."
    ]
  },
  {
    role: "Daily Worker / Assistant Supervisor",
    company: "Klumpu Catering",
    period: "Mei 2023 — Present",
    type: "Part-Time",
    accent: "#3b82f6",
    points: [
      "Memberikan pelayanan langsung kepada pelanggan pada berbagai acara formal dan non-formal.",
      "Membantu supervisor dalam mengoordinasikan tim service selama acara berlangsung.",
      "Mengawasi alur kerja tim, memastikan persiapan, penyajian, dan kebersihan berjalan sesuai standar.",
      "Terbiasa bekerja secara kolaboratif dalam lingkungan yang dinamis dan berorientasi pada target."
    ]
  },
];

const educations = [
  {
    degree: "S1 Sistem Informasi",
    school: "Primakara University",
    period: "2023 — Present",
    accent: "#3b82f6",
    points: [
      "Fokus pada pengembangan sistem informasi, aplikasi, dan solusi digital berbasis teknologi.",
      "Mengembangkan pemahaman mendalam tentang teknologi, desain antarmuka, dan produk digital."
    ]
  },
  {
    degree: "Rekayasa Perangkat Lunak",
    school: "SMK Wira Harapan",
    period: "2020 — 2023",
    accent: "#6366f1",
    points: [
      "Mempelajari dasar-dasar pemrograman dan pengembangan aplikasi berbasis web dan desktop.",
      "Terlibat aktif dalam proyek pembuatan aplikasi dan desain digital sebagai bagian dari kurikulum."
    ]
  },
];

const whyMe = [
  { icon: "⚡", title: "Fast Learner", desc: "Cepat memahami teknologi dan tools baru, mampu beradaptasi dengan kebutuhan project secara efisien." },
  { icon: "🎯", title: "Detail Oriented", desc: "Memperhatikan setiap aspek visual dan fungsional untuk menghasilkan output yang rapi dan konsisten." },
  { icon: "🤝", title: "Team Collaboration", desc: "Terbiasa bekerja dalam tim lintas disiplin, dari desainer hingga developer, untuk mencapai tujuan bersama." },
  { icon: "🧩", title: "Problem Solving", desc: "Mampu menganalisis masalah dan menemukan solusi desain maupun teknis yang tepat sasaran." },
  { icon: "💡", title: "Creative Thinking", desc: "Selalu mencari pendekatan kreatif dalam setiap project untuk menghasilkan solusi yang unik dan efektif." },
];

const skillCategories = [
  {
    label: "UI/UX Design",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.07)",
    border: "rgba(167,139,250,0.18)",
    icon: "✦",
    skills: [
      { name: "Wireframing" },
      { name: "Prototyping" },
      { name: "Design System" },
      { name: "User Research" },
      { name: "Responsive Design" },
    ],
  },
  {
    label: "Frontend Development",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.07)",
    border: "rgba(96,165,250,0.18)",
    icon: "◈",
    skills: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    label: "Backend Development",
    color: "#34d399",
    bg: "rgba(52,211,153,0.07)",
    border: "rgba(52,211,153,0.18)",
    icon: "⬡",
    skills: [
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    label: "Mobile Development",
    color: "#f472b6",
    bg: "rgba(244,114,182,0.07)",
    border: "rgba(244,114,182,0.18)",
    icon: "◉",
    skills: [
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    ],
  },
  {
    label: "Tools",
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.07)",
    border: "rgba(251,191,36,0.18)",
    icon: "⚙",
    skills: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
      { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
    ],
  },
];

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/haidzanursafa",
    href: "https://github.com/haidzanursafa",
    accent: "#ffffff",
    accentBg: "rgba(255,255,255,0.08)",
    accentBorder: "rgba(255,255,255,0.18)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    value: "dimashaidzanursafa@gmail.com",
    href: "mailto:dimashaidzanursafa@gmail.com",
    accent: "#60a5fa",
    accentBg: "rgba(59,130,246,0.08)",
    accentBorder: "rgba(59,130,246,0.22)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8l9 6 9-6M3 8v10a1 1 0 001 1h16a1 1 0 001-1V8M3 8a1 1 0 011-1h16a1 1 0 011 1"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+62 896 0645 2121",
    href: "https://wa.me/6289606452121",
    accent: "#34d399",
    accentBg: "rgba(52,211,153,0.08)",
    accentBorder: "rgba(52,211,153,0.22)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#34d399">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@hdznr._",
    href: "https://www.instagram.com/hdznr._?igsh=MWY3b2Zoc3RpY2VqOQ==",
    accent: "#f472b6",
    accentBg: "rgba(244,114,182,0.08)",
    accentBorder: "rgba(244,114,182,0.22)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouse);
    return () => { window.removeEventListener("scroll", handleScroll); window.removeEventListener("mousemove", handleMouse); };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("dimashaidzanursafa@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navItems = ["Home", "About", "Experience", "Skills", "Projects", "Contact"];

  return (
    <main className="min-h-screen text-white overflow-hidden" style={{ background: "#03080F", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #03080F; }
        ::-webkit-scrollbar-thumb { background: rgba(59,130,246,0.4); border-radius: 99px; }
        .syne { font-family: 'Outfit', sans-serif; }

        @keyframes float { 0%,100%{transform:translateY(0) rotate(0deg)} 33%{transform:translateY(-14px) rotate(1.5deg)} 66%{transform:translateY(-7px) rotate(-1deg)} }
        @keyframes pulse-orb { 0%,100%{opacity:0.3;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.08)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes spin-reverse { from{transform:rotate(360deg)} to{transform:rotate(0deg)} }
        @keyframes hero-in { 0%{opacity:0;transform:translateY(48px) skewY(3deg)} 100%{opacity:1;transform:translateY(0) skewY(0)} }
        @keyframes dot-blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
        @keyframes mobile-menu-in { 0%{opacity:0;transform:translateY(-10px)} 100%{opacity:1;transform:translateY(0)} }

        .f1{animation:float 6s ease-in-out infinite}
        .f2{animation:float 8s ease-in-out infinite 1s}
        .f3{animation:float 7s ease-in-out infinite 2s}
        .f4{animation:float 9s ease-in-out infinite 0.5s}
        .f5{animation:float 5s ease-in-out infinite 1.5s}

        .hl1{animation:hero-in 1s cubic-bezier(0.16,1,0.3,1) 0.1s both}
        .hl2{animation:hero-in 1s cubic-bezier(0.16,1,0.3,1) 0.25s both}
        .hl3{animation:hero-in 1s cubic-bezier(0.16,1,0.3,1) 0.4s both}
        .hl4{animation:hero-in 1s cubic-bezier(0.16,1,0.3,1) 0.55s both}
        .hl5{animation:hero-in 1s cubic-bezier(0.16,1,0.3,1) 0.7s both}
        .hl6{animation:hero-in 1s cubic-bezier(0.16,1,0.3,1) 0.85s both}

        .gradient-text {
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #60a5fa 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 5s linear infinite;
        }

        .glass {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          backdrop-filter: blur(12px);
        }

        .glass-hover {
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .glass-hover:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(59,130,246,0.25);
          transform: translateY(-4px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.3), 0 0 0 1px rgba(59,130,246,0.1);
        }

        .btn-blue {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(59,130,246,0.3);
        }
        .btn-blue::before {
          content:''; position:absolute; inset:0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent);
          transform: translateX(-100%); transition: transform 0.4s ease;
        }
        .btn-blue:hover::before { transform: translateX(0); }
        .btn-blue:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(59,130,246,0.5); }

        .btn-ghost {
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .btn-ghost:hover {
          border-color: rgba(59,130,246,0.4);
          background: rgba(59,130,246,0.08);
          transform: translateY(-2px);
        }

        .nav-link { position: relative; }
        .nav-link::after { content:''; position:absolute; bottom:-3px; left:0; width:0; height:1px; background:linear-gradient(90deg,#60a5fa,#a78bfa); transition:width 0.3s ease; }
        .nav-link:hover::after { width:100%; }

        .project-img { transition: transform 0.7s cubic-bezier(0.16,1,0.3,1); }
        .project-wrap:hover .project-img { transform: scale(1.06); }

        .dot-live { animation: dot-blink 1.8s ease-in-out infinite; }

        .noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E");
          opacity: 0.025; pointer-events: none;
        }

        .why-card {
          transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
          cursor: default;
        }
        .why-card:hover {
          transform: translateY(-6px);
          border-color: rgba(59,130,246,0.3) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(59,130,246,0.1);
        }

        .skill-category {
          transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .skill-category:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.25);
        }

        .skill-badge {
          transition: all 0.22s cubic-bezier(0.16,1,0.3,1);
          cursor: default;
        }
        .skill-badge:hover {
          transform: translateY(-3px) scale(1.07);
          filter: brightness(1.15);
        }

        .contact-card {
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .contact-card:hover {
          transform: translateX(6px) translateY(-2px);
        }
        .contact-icon-wrap {
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .contact-card:hover .contact-icon-wrap {
          transform: scale(1.12);
          filter: brightness(1.3);
        }

        /* ── MOBILE MENU ── */
        .mobile-menu {
          animation: mobile-menu-in 0.3s cubic-bezier(0.16,1,0.3,1) both;
        }

        /* ── RESPONSIVE OVERRIDES ── */

        /* Padding helpers */
        .section-px { padding-left: 48px; padding-right: 48px; }
        @media (max-width: 768px) {
          .section-px { padding-left: 20px; padding-right: 20px; }
        }
        @media (max-width: 480px) {
          .section-px { padding-left: 16px; padding-right: 16px; }
        }

        /* ── HERO LAYOUT ── */
        /*
         * Desktop (>900px):   2-column grid, photo on the right
         * Tablet (600–900px): 1-column, photo centred below text (smaller size)
         * Mobile (<600px):    1-column, photo centred below text (compact)
         */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 80px;
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }

        /* Photo column — always visible, centred on mobile/tablet */
        .hero-photo-col {
          display: flex;
          justify-content: center;
        }

        /* Photo wrapper sizing per breakpoint */
        .hero-photo-wrapper {
          position: relative;
          width: 320px;
          height: 420px;
        }
        @media (max-width: 900px) {
          .hero-photo-wrapper {
            width: 220px;
            height: 290px;
            margin-bottom: 48px;
          }
        }
        @media (max-width: 480px) {
          .hero-photo-wrapper {
            width: 180px;
            height: 240px;
            margin-bottom: 40px;
          }
        }

        /* About grid */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 32px; }
        }

        /* Why-me grid */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        @media (max-width: 1024px) {
          .why-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .why-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* Skills grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .skills-grid { grid-template-columns: 1fr; }
        }

        /* Project card: stack on mobile */
        .project-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
          .project-inner { grid-template-columns: 1fr; }
        }

        /* Contact grid */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 32px; }
        }

        /* About stats grid */
        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        /* Footer flex */
        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        @media (max-width: 640px) {
          .footer-inner { flex-direction: column; align-items: flex-start; }
          .footer-links { flex-wrap: wrap; gap: 12px; }
        }

        /* Hamburger button */
        .hamburger { display: none; }
        @media (max-width: 900px) {
          .hamburger { display: flex; }
          .desktop-nav { display: none; }
          .desktop-cv-btn { display: none; }
        }

        /* Hero text padding: give breathing room on mobile when stacked */
        .hero-text-col { padding-top: 0; padding-bottom: 0; }
        @media (max-width: 900px) {
          .hero-text-col { padding-top: 100px; padding-bottom: 32px; }
        }

        /* Floating icons: only on desktop to avoid overflow on small screens */
        .floating-icons { display: block; }
        @media (max-width: 900px) {
          .floating-icons { display: none; }
        }

        /* On mobile the photo is the second item in the grid;
           reorder so text comes first */
        @media (max-width: 900px) {
          .hero-text-col  { order: 1; }
          .hero-photo-col { order: 2; padding-bottom: 48px; }
        }
      `}</style>

      {/* CURSOR GLOW (desktop only) */}
      <div className="fixed pointer-events-none z-10 hidden md:block" style={{ left: mousePos.x - 250, top: mousePos.y - 250, width: 500, height: 500, background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 65%)", transition: "left 0.12s ease, top 0.12s ease" }} />

      {/* NOISE */}
      <div className="fixed inset-0 noise z-0" />

      {/* BG ORBS */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 60%)", animation: "pulse-orb 8s ease-in-out infinite", zIndex: 0 }} />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 60%)", animation: "pulse-orb 10s ease-in-out infinite 3s", zIndex: 0 }} />

      {/* ── NAVBAR ── */}
      <nav className="flex items-center justify-between px-5 md:px-12 py-4 md:py-5 sticky top-0 z-50" style={{ background: scrollY > 50 ? "rgba(3,8,15,0.95)" : "transparent", backdropFilter: scrollY > 50 ? "blur(24px)" : "none", borderBottom: scrollY > 50 ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent", transition: "all 0.5s ease" }}>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}>
            <span className="text-xs font-black text-white">D</span>
          </div>
          <span className="syne text-sm font-bold tracking-wide">DHS<span className="text-blue-400">.</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="desktop-nav flex gap-8 text-xs font-medium">
          {navItems.map((item) => (
            <a key={item} href={item === "Home" ? "#" : `#${item.toLowerCase()}`} className="nav-link text-white/40 hover:text-white transition-colors duration-300">{item}</a>
          ))}
        </div>

        {/* Desktop CV button */}
        <a href="/CV_Dimas_Haidzanur.pdf" download className="desktop-cv-btn btn-blue text-white px-5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 15V3M12 15l-4-4M12 15l4-4M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Download CV
        </a>

        {/* Hamburger */}
        <button
          className="hamburger items-center justify-center w-9 h-9 rounded-xl"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="16" x2="20" y2="16"/></svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu fixed top-[61px] left-0 right-0 z-40 mx-4 rounded-2xl overflow-hidden"
          style={{ background: "rgba(8,15,28,0.97)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(24px)" }}>
          <div className="flex flex-col py-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                className="px-5 py-3 text-sm text-white/50 hover:text-white hover:bg-white/5 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="mx-4 mt-2 mb-3">
              <a href="/CV_Dimas_Haidzanur.pdf" download className="btn-blue text-white w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 15V3M12 15l-4-4M12 15l4-4M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="relative section-px max-w-7xl mx-auto min-h-[95vh]">
        <div className="hero-grid" style={{ minHeight: "95vh" }}>
          {/* Background grid */}
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(59,130,246,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.025) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

          {/* Text Column */}
          <div className="hero-text-col space-y-6 relative z-10 py-20 md:py-24">
            <div className="hl1 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full" style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 dot-live" />
              <span className="text-green-400 text-[10px] font-semibold uppercase tracking-[0.2em]">Available for Internship</span>
            </div>

            <div className="space-y-1">
              <p className="hl2 text-white/30 text-xs font-medium tracking-[0.15em] uppercase">Hello, I&apos;m</p>
              <h1 className="syne hl3 leading-none tracking-tight" style={{ fontSize: "clamp(44px, 8vw, 80px)", fontWeight: 900 }}>Dimas</h1>
              <h1 className="syne hl4 leading-none tracking-tight" style={{ fontSize: "clamp(44px, 8vw, 80px)", fontWeight: 900 }}>Haidzanur</h1>
              <div className="hl5 pt-1">
                <span className="syne gradient-text" style={{ fontSize: "clamp(16px, 3vw, 36px)", fontWeight: 700 }}>UI/UX Designer & Frontend Enthusiast</span>
              </div>
            </div>

            <p className="hl6 text-white/35 text-sm leading-loose max-w-sm" style={{ fontWeight: 300 }}>
              UI/UX Designer dan Frontend Enthusiast yang berfokus membangun pengalaman digital modern, intuitif, dan user-centered — dari wireframe hingga produk akhir.
            </p>

            <div className="hl6 flex gap-3 flex-wrap">
              <a href="#projects" className="btn-blue text-white px-6 py-3 rounded-xl text-sm font-semibold">
                Lihat Project ↓
              </a>
              <a href="#contact" className="btn-ghost text-white/70 px-6 py-3 rounded-xl text-sm font-semibold">
                Hubungi Saya
              </a>
            </div>

            <div className="hl6 flex gap-6 pt-2">
              {[{ val: "7+", label: "Projects" }, { val: "2+", label: "Years Exp." }, { val: "S7", label: "Semester" }].map(({ val, label }) => (
                <div key={label}>
                  <p className="syne text-xl font-black text-white">{val}</p>
                  <p className="text-white/30 text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Column — responsive on ALL screen sizes */}
          <div className="hero-photo-col relative z-10 py-10 md:py-24">
            <div className="hero-photo-wrapper">
              {/* Spinning rings — hidden on mobile to keep it clean */}
              <div className="absolute inset-[-30px] rounded-full border border-white/[0.04] hidden md:block" style={{ animation: "spin-slow 25s linear infinite" }}>
                <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full" style={{ background: "#3b82f6", transform: "translateX(-50%)", boxShadow: "0 0 8px #3b82f6" }} />
              </div>
              <div className="absolute inset-[-55px] rounded-full border border-white/[0.025] hidden md:block" style={{ animation: "spin-reverse 35s linear infinite" }}>
                <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 rounded-full bg-violet-500" style={{ boxShadow: "0 0 6px #7c3aed" }} />
              </div>
              {/* Glow */}
              <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 70%, rgba(59,130,246,0.3) 0%, transparent 65%)", filter: "blur(40px)", borderRadius: "50%" }} />
              {/* Photo */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <Image src="/dimas-new.png" alt="Dimas" fill className="object-cover project-img" priority style={{ filter: "drop-shadow(0 0 60px rgba(59,130,246,0.3))" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,8,15,0.5) 0%, transparent 50%)" }} />
              </div>
              {/* Floating Icons (desktop only) */}
              <div className="floating-icons">
                {[
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", label: "Figma", style: { top: -16, left: -20 }, cls: "f1" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", label: "GitHub", style: { top: 40, right: -24 }, cls: "f2", invert: true },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", label: "Canva", style: { bottom: 80, left: -28 }, cls: "f3" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", label: "VSCode", style: { top: "45%", left: -40 }, cls: "f4" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", label: "Postman", style: { top: "45%", right: -40 }, cls: "f5" },
                ].map(({ src, label, style, cls, invert }) => (
                  <div key={label} className={`absolute flex flex-col items-center gap-1 ${cls}`} style={style}>
                    <div style={{ background: "rgba(3,8,15,0.85)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: 10, backdropFilter: "blur(16px)", boxShadow: "0 8px 24px rgba(0,0,0,0.5)" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} width={22} height={22} alt={label} style={invert ? { filter: "invert(1)" } : {}} />
                    </div>
                    <span style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", fontWeight: 600, letterSpacing: "0.05em" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden md:flex" style={{ opacity: 0.2 }}>
          <span style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase" }}>scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="section-px pb-24 max-w-7xl mx-auto">
        <FadeIn>
          <div className="about-grid rounded-3xl p-6 md:p-10 glass relative overflow-hidden">
            <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div className="space-y-4">
              <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em]">Tentang Saya</span>
              <h2 className="syne text-2xl md:text-3xl leading-snug" style={{ fontWeight: 800 }}>Mahasiswa Sistem Informasi yang aktif membangun karya nyata.</h2>
              <p className="text-white/40 text-sm leading-loose" style={{ fontWeight: 300 }}>
                Saya Dimas, mahasiswa Sistem Informasi semester 7 di Primakara University. Saya memiliki fokus di bidang{" "}
                <span className="text-blue-400 font-medium">UI/UX Design</span>,{" "}
                <span className="text-blue-400 font-medium">Frontend Development</span>, dan{" "}
                <span className="text-blue-400 font-medium">Creative Design</span>.
              </p>
              <p className="text-white/40 text-sm leading-loose" style={{ fontWeight: 300 }}>
                Selain kuliah, saya aktif mengerjakan berbagai project desain dan digital — mulai dari desain aplikasi, website, hingga konten visual untuk kebutuhan brand dan event.
              </p>
            </div>
            <div className="about-stats">
              {[{ val: "7+", label: "Project Selesai" }, { val: "UI/UX", label: "Design Focus" }, { val: "Frontend", label: "Development" }, { val: "2025", label: "Internship Ready" }].map(({ val, label }, i) => (
                <FadeIn key={label} delay={i * 0.1}>
                  <div className="glass-hover glass rounded-2xl p-5 cursor-default">
                    <h3 className="syne text-xl font-black text-blue-400">{val}</h3>
                    <p className="text-white/35 text-xs mt-1.5" style={{ fontWeight: 300 }}>{label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── WHY ME ── */}
      <section id="whyme" className="section-px pb-24 max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-10">
            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em]">Value Saya</span>
            <h2 className="syne text-3xl md:text-4xl font-black tracking-tight mt-3">Why Me?</h2>
          </div>
        </FadeIn>
        <div className="why-grid">
          {whyMe.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="why-card glass rounded-2xl p-5 h-full" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="syne font-bold text-sm text-white mb-2">{item.title}</h3>
                <p className="text-white/35 text-xs leading-relaxed" style={{ fontWeight: 300 }}>{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" className="section-px pb-24 max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-10">
            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em]">Pendidikan</span>
            <h2 className="syne text-3xl md:text-4xl font-black tracking-tight mt-3">Education</h2>
          </div>
        </FadeIn>
        <div className="relative pl-5 md:pl-6">
          <div className="absolute left-0 top-2 bottom-2 w-px" style={{ background: "linear-gradient(to bottom, rgba(59,130,246,0.6), rgba(59,130,246,0.05))" }} />
          <div className="flex flex-col gap-5">
            {educations.map((edu, i) => (
              <FadeIn key={edu.school} delay={i * 0.15} direction="left">
                <div className="relative pl-6 md:pl-8">
                  <div className="absolute -left-[21px] md:-left-[25px] top-6 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: edu.accent, boxShadow: `0 0 12px ${edu.accent}60` }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                  <div className="glass glass-hover rounded-2xl p-5 md:p-6">
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                      <div>
                        <h3 className="syne font-bold text-sm md:text-base">{edu.degree}</h3>
                        <p className="text-white/40 text-xs md:text-sm mt-0.5">{edu.school}</p>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full font-medium flex-shrink-0" style={{ background: `${edu.accent}15`, border: `1px solid ${edu.accent}30`, color: edu.accent }}>{edu.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {edu.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-xs text-white/35" style={{ fontWeight: 300 }}>
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: edu.accent }} />{pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="section-px pb-24 max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-10">
            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em]">Pengalaman Kerja</span>
            <h2 className="syne text-3xl md:text-4xl font-black tracking-tight mt-3">Work Experience</h2>
          </div>
        </FadeIn>
        <div className="relative pl-5 md:pl-6">
          <div className="absolute left-0 top-2 bottom-2 w-px" style={{ background: "linear-gradient(to bottom, rgba(59,130,246,0.6), rgba(59,130,246,0.05))" }} />
          <div className="flex flex-col gap-5">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.company} delay={i * 0.15} direction="left">
                <div className="relative pl-6 md:pl-8">
                  <div className="absolute -left-[21px] md:-left-[25px] top-6 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: exp.accent, boxShadow: `0 0 12px ${exp.accent}60` }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                  <div className="glass glass-hover rounded-2xl p-5 md:p-6">
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                      <div>
                        <h3 className="syne font-bold text-sm md:text-base">{exp.role}</h3>
                        <p className="text-white/40 text-xs md:text-sm mt-0.5">{exp.company}</p>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: `${exp.accent}15`, border: `1px solid ${exp.accent}30`, color: exp.accent }}>{exp.type}</span>
                        <span className="text-xs px-3 py-1 rounded-full text-white/30" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-xs text-white/35" style={{ fontWeight: 300 }}>
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: exp.accent }} />{pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="section-px pb-24 max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-10">
            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em]">Skills & Tools</span>
            <h2 className="syne text-3xl md:text-4xl font-black tracking-tight mt-3">Tech Stack & Tools</h2>
          </div>
        </FadeIn>
        <div className="skills-grid">
          {skillCategories.map((cat, ci) => (
            <FadeIn key={cat.label} delay={ci * 0.07}>
              <div className="skill-category rounded-2xl p-5 md:p-6 h-full" style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${cat.border}`, boxShadow: `0 0 40px ${cat.bg}` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base font-black flex-shrink-0" style={{ background: cat.bg, border: `1px solid ${cat.border}`, color: cat.color }}>
                    {cat.icon}
                  </div>
                  <div>
                    <p className="syne text-sm font-bold text-white leading-none">{cat.label}</p>
                    <p className="text-white/25 text-[10px] mt-0.5">{cat.skills.length} item{cat.skills.length > 1 ? "s" : ""}</p>
                  </div>
                </div>
                <div className="mb-4" style={{ borderTop: `1px solid ${cat.border}` }} />
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((sk) => (
                    <div key={sk.name} className="skill-badge flex items-center gap-2 px-3 py-1.5 rounded-xl" style={{ background: cat.bg, border: `1px solid ${cat.border}` }}>
                      {"icon" in sk && sk.icon && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={sk.icon} width={16} height={16} alt={sk.name} style={"invert" in sk && sk.invert ? { filter: "invert(1)" } : {}} />
                      )}
                      <span className="text-xs font-semibold" style={{ color: cat.color }}>{sk.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="section-px pb-24 max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-10">
            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em]">Portfolio</span>
            <h2 className="syne text-3xl md:text-4xl font-black tracking-tight mt-3">Featured Projects</h2>
          </div>
        </FadeIn>
        <div className="flex flex-col gap-4 md:gap-5">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.06}>
              <div
                className="project-wrap rounded-3xl overflow-hidden cursor-pointer"
                style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${activeProject === i ? p.accent + "40" : "rgba(255,255,255,0.06)"}`, boxShadow: activeProject === i ? `0 32px 64px ${p.accent}12` : "none", transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)" }}
                onMouseEnter={() => setActiveProject(i)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="project-inner">
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ minHeight: 240 }}>
                    <Image src={p.img} alt={p.alt} fill className="object-cover project-img" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(3,8,15,0.3) 0%, transparent 50%)" }} />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: `${p.accent}20`, border: `1px solid ${p.accent}40`, color: p.accent }}>{p.tag}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex flex-col justify-center p-6 md:p-10 space-y-3 md:space-y-4">
                    <h3 className="syne text-base md:text-xl font-black leading-snug">{p.title}</h3>
                    <p className="text-white/35 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 300 }}>{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.features.map((f) => (<span key={f} className="text-xs px-2.5 py-1 rounded-lg text-white/40" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>{f}</span>))}
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.toolIcon} width={14} height={14} alt={p.tool} />
                      {p.toolIcon2 && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={p.toolIcon2} width={14} height={14} alt="tool2" />
                      )}
                      <span className="text-xs text-white/25">{p.tool}</span>
                    </div>
                    <a href={p.link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white text-xs font-semibold px-5 py-2.5 rounded-xl w-fit"
                      style={{ background: p.accent, boxShadow: `0 4px 16px ${p.accent}40`, transition: "all 0.3s ease" }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
                      {p.linkLabel ?? "Lihat di Figma"}
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section-px pb-24 max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-10">
            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em]">Get In Touch</span>
            <h2 className="syne text-3xl md:text-4xl font-black tracking-tight mt-3">Contact Me</h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="glass rounded-3xl p-6 md:p-10 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)" }} />
            <div className="absolute -bottom-20 -left-20 w-52 h-52 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)" }} />

            <div className="contact-grid relative z-10">
              <div className="space-y-4">
                <h3 className="syne text-2xl md:text-3xl font-black leading-snug">
                  Let&apos;s build something<br />
                  <span className="gradient-text">amazing together.</span> 🚀
                </h3>
                <p className="text-white/35 text-sm leading-loose" style={{ fontWeight: 300 }}>
                  Saat ini terbuka untuk internship, freelance project, dan kolaborasi kreatif di bidang desain dan teknologi. Jangan ragu untuk menghubungi saya!
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 dot-live" />
                  <span className="text-green-400 text-xs font-semibold">Available — Bali, Indonesia</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium"
                  style={{
                    background: copied ? "rgba(52,211,153,0.1)" : "rgba(59,130,246,0.08)",
                    border: copied ? "1px solid rgba(52,211,153,0.3)" : "1px solid rgba(59,130,246,0.2)",
                    color: copied ? "#34d399" : "#60a5fa",
                    transition: "all 0.3s ease",
                  }}
                >
                  {copied ? (
                    <><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Email tersalin!</>
                  ) : (
                    <><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>Salin email saya</>
                  )}
                </button>

                <a
                  href="/CV_Dimas_Haidzanur.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium"
                  style={{
                    background: "rgba(139,92,246,0.1)",
                    border: "1px solid rgba(139,92,246,0.25)",
                    color: "#a78bfa",
                    transition: "all 0.3s ease",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 15V3M12 15l-4-4M12 15l4-4M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Download CV saya
                </a>
              </div>

              <div className="flex flex-col gap-3">
                {contactLinks.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="contact-card rounded-2xl p-3 md:p-4"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = c.accentBorder;
                      (e.currentTarget as HTMLElement).style.background = c.accentBg;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                    }}
                  >
                    <div className="contact-icon-wrap w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: c.accentBg, border: `1px solid ${c.accentBorder}` }}>
                      {c.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/25 text-[10px] mb-0.5 uppercase tracking-wider font-semibold">{c.label}</p>
                      <p className="text-xs md:text-sm font-medium truncate" style={{ color: c.accent }}>{c.value}</p>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: "rgba(255,255,255,0.2)", flexShrink: 0 }}>
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── FOOTER ── */}
      <footer className="section-px pb-10 max-w-7xl mx-auto">
        <div className="footer-inner pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}>
              <span className="text-[10px] font-black text-white">D</span>
            </div>
            <span className="syne text-sm font-bold">DHS<span className="text-blue-400">.</span></span>
          </div>
          <p className="text-white/15 text-xs">© 2025 Dimas Haidzanur Safa. All rights reserved.</p>
          <div className="footer-links flex gap-5">
            <a href="https://github.com/haidzanursafa" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/60 transition-colors text-xs">GitHub</a>
            <a href="https://www.instagram.com/hdznr._?igsh=MWY3b2Zoc3RpY2VqOQ==" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/60 transition-colors text-xs">Instagram</a>
            <a href="https://wa.me/6289606452121" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/60 transition-colors text-xs">WhatsApp</a>
            <a href="mailto:dimashaidzanursafa@gmail.com" className="text-white/20 hover:text-white/60 transition-colors text-xs">Email</a>
          </div>
        </div>
      </footer>

    </main>
  );
}