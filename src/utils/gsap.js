import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Daftarkan plugin secara global di sini agar tidak perlu diulang di setiap komponen
gsap.registerPlugin(useGSAP, ScrollTrigger);

// Export kembali semuanya agar komponen lain cukup import dari file ini
export { gsap, useGSAP, ScrollTrigger };
