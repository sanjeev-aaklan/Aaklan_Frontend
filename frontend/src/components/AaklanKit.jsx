// src/components/AaklanKit.jsx
import { useEffect, useState, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { kitVideos, ourKits } from "../assets/Our_Kits/ourKits.js";

// Common product images for all kits
const commonProductImages = {
    allKits: [
        { id: 1, title: "Full Kit View", image: ourKits.yellow_kit },
        { id: 2, title: "Components Layout", image: ourKits.Red_Kit_box },
        { id: 3, title: "Building Process", image: ourKits.Leeka_Packed_Box },
        { id: 4, title: "Final Project", image: ourKits.yellow_kit },
        { id: 5, title: "Package View", image: ourKits.Red_Kit_box },
        { id: 6, title: "Accessories", image: ourKits.Leeka_Packed_Box }
    ],
    wonderKit: [
        { id: 1, title: "Wonder Kit Box", image: ourKits.yellow_kit },
        { id: 2, title: "Components", image: ourKits.yellow_kit },
        { id: 3, title: "Projects", image: ourKits.yellow_kit },
        { id: 4, title: "In Action", image: ourKits.yellow_kit }
    ],
    nexusKit: [
        { id: 1, title: "Nexus Kit Box", image: ourKits.Red_Kit_box },
        { id: 2, title: "Advanced Components", image: ourKits.Red_Kit_box },
        { id: 3, title: "IoT Setup", image: ourKits.Red_Kit_box },
        { id: 4, title: "Professional Projects", image: ourKits.Red_Kit_box }
    ],
    leelaBoard: [
        { id: 1, title: "Leela Board", image: ourKits.Leeka_Packed_Box },
        { id: 2, title: "Pin Layout", image: ourKits.Leeka_Packed_Box },
        { id: 3, title: "Programming", image: ourKits.Leeka_Packed_Box },
        { id: 4, title: "Projects", image: ourKits.Leeka_Packed_Box }
    ]
};

const products = [
    {
        id: 1,
        name: "Aaklan Wonder Kit",
        tagline: "Begin Your Robotics Journey",
        description: "Perfect for beginners and young innovators. Everything you need to start your robotics adventure with block-based programming.",
        image: ourKits.yellow_kit,
        price: "₹2,240",
        originalPrice: "₹2,690",
        rating: 4,
        slug: "aaklan-wonder-kit",
        features: [
            "Block-Based Programming",
            "10+ Robotics Projects",
            "PictoBlox Compatible",
            "Beginner Friendly (Age 8+)",
        ],
        category: "Beginner",
        stock: 15,
        discount: 17,
        // Detailed info for detail page
        detailedDescription: "The Aaklan Wonder Kit is the perfect starting point for young innovators aged 8 and above. This comprehensive kit introduces robotics and coding through fun, hands-on projects using block-based programming.",
        specifications: [
            "Leela Microcontroller Board",
            "5 Different Sensors",
            "100+ Building Components",
            "Step-by-Step Project Guide",
            "Online Course Access",
            "USB Charging Cable",
            "Project Documentation"
        ],
        videos: kitVideos.wonderKitVideo,
        // ALL KITS PHOTOS - सभी kits के photos
        allKitPhotos: commonProductImages.allKits,
        // Current kit specific photos
        kitPhotos: commonProductImages.wonderKit,
        highlights: [
            "Ideal for ages 8-16",
            "No prior experience needed",
            "Visual block programming",
            "STEM learning certified"
        ]
    },
    {
        id: 2,
        name: "Aaklan Nexus Kit",
        tagline: "Advanced Robotics Platform",
        description: "Professional grade robotics kit for makers and educators. Enhanced sensors and expanded capabilities for complex projects.",
        image: ourKits.Red_Kit_box,
        price: "₹3,590",
        originalPrice: "₹4,490",
        rating: 5,
        slug: "aaklan-nexus-kit",
        features: [
            "Text-Based Programming",
            "20+ Advanced Projects",
            "Wi-Fi & Bluetooth",
            "Arduino IDE Support",
        ],
        category: "Advanced",
        stock: 8,
        discount: 20,
        detailedDescription: "The Aaklan Nexus Kit is a professional-grade robotics platform designed for makers, educators, and advanced learners. With enhanced sensors and expanded capabilities, it enables complex projects and real-world applications.",
        specifications: [
            "Leela Pro Board (ESP32)",
            "10+ Advanced Sensors",
            "Wi-Fi & Bluetooth 5.0",
            "Arduino & Python Support",
            "200+ Building Components",
            "Motor Drivers & Actuators",
            "Advanced Project Library",
            "IoT Cloud Integration"
        ],
        videos: kitVideos.nexusKitVideo,
        // ALL KITS PHOTOS - सभी kits के photos
        allKitPhotos: commonProductImages.allKits,
        // Current kit specific photos
        kitPhotos: commonProductImages.nexusKit,
        highlights: [
            "Professional grade components",
            "IoT & AI capabilities",
            "For ages 14+",
            "Industry-relevant skills"
        ]
    },
    {
        id: 3,
        name: "Leela Microcontroller Board",
        tagline: "The Ultimate Development Board",
        description: "Standalone Leela board for custom projects. Perfect for Arduino enthusiasts and professional developers.",
        image: ourKits.Leeka_Packed_Box,
        price: "₹1,790",
        originalPrice: "₹2,240",
        rating: 4,
        slug: "leela-arduino-board",
        features: [
            "Arduino Compatible",
            "ESP32 Processor",
            "Multiple I/O Ports",
            "Compact Design",
        ],
        category: "Development",
        stock: 25,
        discount: 20,
        detailedDescription: "The Leela Microcontroller Board is a standalone development board based on ESP32. Perfect for Arduino enthusiasts and professional developers looking to create custom IoT and robotics projects.",
        specifications: [
            "ESP32 Dual-Core Processor",
            "Wi-Fi & Bluetooth 4.2",
            "30+ GPIO Pins",
            "USB-C Programming",
            "Arduino & MicroPython",
            "65x45mm Compact Design",
            "Onboard LED Indicators",
            "Breadboard Compatible"
        ],
        videos: kitVideos.leelaBoardVideo,
        // ALL KITS PHOTOS - सभी kits के photos
        allKitPhotos: commonProductImages.allKits,
        // Current kit specific photos
        kitPhotos: commonProductImages.leelaBoard,
        highlights: [
            "Standalone development",
            "Arduino compatible",
            "IoT ready",
            "Professional tooling"
        ]
    },
];

// Export products for use in detail page
export { products };

export default function AaklanKit() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const navigate = useNavigate();

    const handleProductClick = (slug) => {
        navigate(`/robotics-ai/kitDetails/${slug}`);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const renderStars = (rating) => {
        return (
            <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                    <span
                        key={i}
                        className={`text-sm ${i < rating ? "text-orange-500" : "text-gray-300"}`}
                    >
                        ★
                    </span>
                ))}
                <span className="text-xs text-gray-500 ml-1">({rating}.0)</span>
            </div>
        );
    };

    return (
        <section
            className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white"
            ref={sectionRef}
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div
                    className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                        }`}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0b234a] mb-4">
                        Our Robotics Kits
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose the perfect kit for your robotics journey - from beginner to advanced
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`rounded-2xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:scale-105 cursor-pointer border-2 border-gray-200 bg-white ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                                }`}
                            style={{
                                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                            }}
                        >
                            {/* Product Image Section */}
                            <div className="h-56 flex items-center justify-center p-6 overflow-hidden relative bg-gradient-to-br from-gray-50 to-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-contain hover:scale-110 transition-transform duration-300"
                                />

                                {/* Discount Badge */}
                                {product.discount && (
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#E22213] text-white rounded-full text-sm font-semibold">
                                        -{product.discount}%
                                    </div>
                                )}

                                {/* Category Badge */}
                                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#0b234a] border border-[#0b234a]/20">
                                    {product.category}
                                </div>
                            </div>

                            {/* Product Info Section */}
                            <div className="p-6 text-gray-800">
                                {/* Rating and Stock */}
                                <div className="flex justify-between items-center mb-3">
                                    {renderStars(product.rating)}
                                    <span
                                        className={`text-xs px-2 py-1 rounded-full font-medium ${product.stock > 10
                                            ? "bg-green-100 text-green-800"
                                            : product.stock > 5
                                                ? "bg-orange-100 text-orange-800"
                                                : "bg-red-100 text-red-800"
                                            }`}
                                    >
                                        {product.stock} in stock
                                    </span>
                                </div>

                                {/* Product Name */}
                                <h3 className="text-2xl font-bold mb-2 text-[#0b234a] hover:text-[#E22213] transition-colors">
                                    {product.name}
                                </h3>

                                {/* Tagline */}
                                <p className="text-[#E22213] font-medium mb-3">
                                    {product.tagline}
                                </p>

                                {/* Description */}
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {product.description}
                                </p>

                                {/* Price Section */}
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-2xl font-bold text-[#0b234a]">{product.price}</span>
                                    {product.originalPrice && (
                                        <span className="text-lg line-through text-gray-400">
                                            {product.originalPrice}
                                        </span>
                                    )}
                                </div>

                                {/* Features List */}
                                <div className="mb-6">
                                    <ul className="space-y-2">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm">
                                                <span className="w-1.5 h-1.5 rounded-full mr-3 bg-orange-500"></span>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Buttons */}
                                <div className="flex ">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleProductClick(product.slug);
                                        }}
                                        className="flex-1 px-4 py-3 hover:cursor-pointer bg-white border-2 border-current text-current rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-opacity-10"
                                    >
                                        More Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Stats */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="p-6 bg-gradient-to-br from-[#0b234a]/5 to-[#0b234a]/10 rounded-xl border border-[#0b234a]/20">
                        <div className="text-2xl font-bold text-[#0b234a]">100K+</div>
                        <div className="text-sm text-[#0b234a]/80">Students Learning</div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-[#E22213]/5 to-[#E22213]/10 rounded-xl border border-[#E22213]/20">
                        <div className="text-2xl font-bold text-[#E22213]">500+</div>
                        <div className="text-sm text-[#E22213]/80">Schools Using</div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-orange-500/5 to-orange-500/10 rounded-xl border border-orange-500/20">
                        <div className="text-2xl font-bold text-orange-600">24/7</div>
                        <div className="text-sm text-orange-600/80">Expert Support</div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-green-500/5 to-green-500/10 rounded-xl border border-green-500/20">
                        <div className="text-2xl font-bold text-green-600">98%</div>
                        <div className="text-sm text-green-600/80">Satisfaction Rate</div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <div className="bg-gradient-to-r from-[#0b234a]/5 via-[#E22213]/5 to-orange-500/5 rounded-3xl p-8 border border-[#0b234a]/10 shadow-lg">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0b234a] mb-4">Need Help Choosing?</h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
                            Contact our education specialists to find the perfect kit for your classroom or learning needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={() => window.open('https://wa.me/919571677609?text=Hi%20I%20want%20to%20know%20more%20about%20your%20curriculum', '_blank')}
                                className="px-6 py-3 bg-gradient-to-r from-[#25D366] to-green-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <FaWhatsapp className="w-5 h-5" />
                                WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}