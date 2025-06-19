const { createApp } = Vue;
        
        createApp({
            data() {
                return {
                    mobileMenuOpen: false,
                    
                    // ব্যক্তিগত তথ্য - এখানে আপনার তথ্য পরিবর্তন করুন
                    personalInfo: {
                        name: 'জামাল আজাদ',
                        title: 'ফুল স্ট্যাক ওয়েব ডেভেলপার',
                        bio: 'আমি একজন ফুল স্ট্যাক ওয়েব ডেভেলপার যিনি আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরি করতে পছন্দ করি।',
                        description: 'আমি ৫+ বছরের অভিজ্ঞতা নিয়ে একজন ফুল স্ট্যাক ডেভেলপার। আমি VueJS, Laravel, এবং আধুনিক ওয়েব টেকনোলজি নিয়ে কাজ করি। আমার লক্ষ্য হল ব্যবহারকারী-বান্ধব এবং কার্যকর ওয়েব অ্যাপ্লিকেশন তৈরি করা।',
                        image: 'https://assets.codepen.io/857965/internal/avatars/users/default.png',
                        details: [
                            { label: 'বয়স', value: '৩৫ বছর' },
                            { label: 'অবস্থান', value: 'চট্টগ্রাম, বাংলাদেশ' },
                            { label: 'অভিজ্ঞতা', value: '৫+ বছর' },
                            { label: 'ভাষা', value: 'বাংলা, ইংরেজি, হিন্দি' }
                        ]
                    },
                    
                    // নেভিগেশন
                    navigation: [
                        { name: 'হোম', href: '#home' },
                        { name: 'সম্পর্কে', href: '#about' },
                        { name: 'দক্ষতা', href: '#skills' },
                        { name: 'প্রকল্প', href: '#projects' },
                        { name: 'যোগাযোগ', href: '#contact' }
                    ],
                    
                    // দক্ষতা
                    skills: [
                        {
                            name: 'ফ্রন্ট-এন্ড',
                            icon: 'fas fa-laptop-code',
                            technologies: [
                                { name: 'HTML/CSS', level: 95 },
                                { name: 'JavaScript', level: 90 },
                                { name: 'Vue.js', level: 85 },
                                { name: 'Tailwind CSS', level: 88 }
                            ]
                        },
                        {
                            name: 'ব্যাক-এন্ড',
                            icon: 'fas fa-server',
                            technologies: [
                                { name: 'PHP', level: 90 },
                                { name: 'Laravel', level: 85 },
                                { name: 'MySQL', level: 80 },
                                { name: 'REST API', level: 88 }
                            ]
                        },
                        {
                            name: 'টুলস',
                            icon: 'fas fa-tools',
                            technologies: [
                                { name: 'Git', level: 85 },
                                { name: 'Docker', level: 70 },
                                { name: 'Linux', level: 75 },
                                { name: 'VS Code', level: 95 }
                            ]
                        }
                    ],
                    
                    // প্রকল্প
                    projects: [
                        {
                            id: 1,
                            title: 'ই-কমার্স ওয়েবসাইট',
                            description: 'একটি সম্পূর্ণ ই-কমার্স সলিউশন যা Laravel এবং VueJS দিয়ে তৈরি।',
                            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
                            technologies: ['Laravel', 'VueJS', 'MySQL', 'Tailwind'],
                            liveUrl: '#',
                            githubUrl: '#'
                        },
                        {
                            id: 2,
                            title: 'টাস্ক ম্যানেজমেন্ট অ্যাপ',
                            description: 'একটি রিয়েল-টাইম টাস্ক ম্যানেজমেন্ট অ্যাপ্লিকেশন।',
                            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
                            technologies: ['VueJS', 'PHP', 'WebSocket', 'MySQL'],
                            liveUrl: '#',
                            githubUrl: '#'
                        },
                        {
                            id: 3,
                            title: 'পোর্টফোলিও ওয়েবসাইট',
                            description: 'একটি রেস্পন্সিভ পোর্টফোলিও ওয়েবসাইট আধুনিক ডিজাইনের সাথে।',
                            image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
                            technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
                            liveUrl: '#',
                            githubUrl: '#'
                        }
                    ],
                    
                    // যোগাযোগের তথ্য
                    contactInfo: [
                        {
                            type: 'email',
                            label: 'ইমেইল',
                            value: 'azadiduniya@gmail.com',
                            icon: 'fas fa-envelope'
                        },
                        {
                            type: 'phone',
                            label: 'ফোন',
                            value: '+880 1234 567890',
                            icon: 'fas fa-phone'
                        },
                        {
                            type: 'address',
                            label: 'ঠিকানা',
                            value: 'চট্টগ্রাম, বাংলাদেশ',
                            icon: 'fas fa-map-marker-alt'
                        }
                    ],
                    
                    // সোশ্যাল লিংক
                    socialLinks: [
                        { name: 'Facebook', url: '#', icon: 'fab fa-facebook-f' },
                        { name: 'Twitter', url: '#', icon: 'fab fa-twitter' },
                        { name: 'LinkedIn', url: '#', icon: 'fab fa-linkedin-in' },
                        { name: 'GitHub', url: '#', icon: 'fab fa-github' }
                    ],
                    
                    // ফর্ম ডেটা
                    form: {
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    }
                }
            },
            
            methods: {
                submitForm() {
                    // এখানে ফর্ম সাবমিট লজিক যোগ করুন
                    alert('বার্তা পাঠানো হয়েছে! ধন্যবাদ।');
                    
                    // ফর্ম রিসেট করুন
                    this.form = {
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    };
                }
            },
            
            mounted() {
                // Smooth scrolling for anchor links
                const links = document.querySelectorAll('a[href^="#"]');
                links.forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const target = document.querySelector(link.getAttribute('href'));
                        if (target) {
                            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    });
                });
            }
        }).mount('#app');