// src/pages/KitDetailsPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaWhatsapp, FaPlay, FaCheck, FaArrowLeft, FaCartPlus, FaImages, FaVideo, FaBoxOpen, FaCubes } from 'react-icons/fa';
import { products } from '../components/AaklanKit';

const KitDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeMedia, setActiveMedia] = useState('video');

    const kitComponents = {
        'starter-robotics-kit': [
            {
                id: 1,
                name: "Arduino Uno R3",
                description: "Main microcontroller with USB cable",
                image: "https://cdn.shopify.com/s/files/1/0174/1800/9852/products/3_32f7a77f-9c51-4cee-8625-4c0b22769be9_600x.jpg",
                quantity: 1
            },
            {
                id: 2,
                name: "Ultrasonic Sensor HC-SR04",
                description: "Distance measurement sensor",
                image: "https://cdn.shopify.com/s/files/1/0174/1800/9852/products/7_ce6c92a8-a3d9-4a59-8dcb-157e27a1734c_600x.jpg",
                quantity: 1
            },
            {
                id: 3,
                name: "IR Sensor Module",
                description: "Line following and obstacle detection",
                image: "https://cdn.shopify.com/s/files/1/0174/1800/9852/products/8_600x.jpg",
                quantity: 2
            },
            {
                id: 4,
                name: "Servo Motor SG90",
                description: "180-degree rotation servo",
                image: "https://cdn.shopify.com/s/files/1/0174/1800/9852/products/9_0abdcfd5-4259-4daf-81b2-3f43424a16c5_600x.jpg",
                quantity: 2
            },
            {
                id: 5,
                name: "DC Motors with Wheels",
                description: "300 RPM motors with plastic wheels",
                image: "https://cdn.shopify.com/s/files/1/0174/1800/9852/products/2_bb05c77f-0d1f-47a7-b5d8-56faa7ecc129_600x.jpg",
                quantity: 2
            },
            {
                id: 6,
                name: "Motor Driver L298N",
                description: "Dual H-bridge motor driver",
                image: "https://cdn.shopify.com/s/files/1/0174/1800/9852/products/5_0b150bc9-c1f1-42a1-823d-784125ab9883_600x.jpg",
                quantity: 1
            },
            {
                id: 7,
                name: "Breadboard & Jumper Wires",
                description: "400 points breadboard and wire pack",
                image: "https://cdn.shopify.com/s/files/1/0174/1800/9852/products/6_600x.jpg",
                quantity: 1
            },
            {
                id: 8,
                name: "9V Battery with Connector",
                description: "Rechargeable battery pack",
                image: "https://cdn.shopify.com/s/files/1/0174/1800/9852/products/4_89f9ba8b-08dc-4274-b34d-26f90f63e677_600x.jpg",
                quantity: 1
            }
        ],
        'ai-computer-vision-kit': [
            {
                id: 1,
                name: "Raspberry Pi 4B",
                description: "4GB RAM with cooling fan",
                image: "https://cdn.shopify.com/s/files/1/0174/1800/9852/products/10_600x.jpg",
                quantity: 1
            },
            {
                id: 2,
                name: "Raspberry Pi Camera V2",
                description: "8MP camera module",
                image: "https://cdn.shopify.com/s/files/1/0174/1800/9852/products/11_600x.jpg",
                quantity: 1
            },
            {
                id: 3,
                name: "Google Coral USB Accelerator",
                description: "Edge TPU for AI inference",
                image: "https://cdn.shopify.com/s/files/1/0174/1800/9852/products/12_600x.jpg",
                quantity: 1
            },
            {
                id: 4,
                name: "32GB MicroSD Card",
                description: "Class 10 with OS pre-installed",
                image: "https://cdn.shopify.com/s/files/1/0174/1800/9852/products/13_600x.jpg",
                quantity: 1
            },
            {
                id: 5,
                name: "Power Supply 5V/3A",
                description: "Official Raspberry Pi supply",
                image: "https://cdn.shopify.com/s/files/1/0174/1800/9852/products/14_600x.jpg",
                quantity: 1
            },
            {
                id: 6,
                name: "USB Keyboard & Mouse",
                description: "Compact wireless combo",
                image: "https://cdn.shopify.com/s/files/1/0174/1800/9852/products/15_600x.jpg",
                quantity: 1
            }
        ],
        'iot-smart-home-kit': [
            {
                id: 1,
                name: "ESP32 Development Board",
                description: "Wi-Fi & Bluetooth enabled",
                image: "https://cdn.shopify.com/s/files/1/0174/1800/9852/products/16_600x.jpg",
                quantity: 1
            },
            {
                id: 2,
                name: "DHT11 Sensor",
                description: "Temperature & humidity",
                image: "https://cdn.shopify.com/s/files/1/0174/1800/9852/products/17_600x.jpg",
                quantity: 1
            },
            {
                id: 3,
                name: "PIR Motion Sensor",
                description: "Human detection",
                image: "https://cdn.shopify.com/s/files/1/0174/1800/9852/products/18_600x.jpg",
                quantity: 1
            },
            {
                id: 4,
                name: "Relay Module 4-channel",
                description: "Home appliances control",
                image: "https://cdn.shopify.com/s/files/1/0174/1800/9852/products/19_600x.jpg",
                quantity: 1
            },
            {
                id: 5,
                name: "LCD Display 16x2",
                description: "I2C interface",
                image: "https://cdn.shopify.com/s/files/1/0174/1800/9852/products/20_600x.jpg",
                quantity: 1
            },
            {
                id: 6,
                name: "Buzzer & LED Pack",
                description: "Audio and visual indicators",
                image: "https://cdn.shopify.com/s/files/1/0174/1800/9852/products/21_600x.jpg",
                quantity: 1
            }
        ]
    };

    useEffect(() => {
        const foundProduct = products.find(p => p.slug === id);

        if (foundProduct) {
            setProduct(foundProduct);
            document.title = `${foundProduct.name} - Aaklan Robotics`;
        } else {
            navigate('/');
        }

        setIsLoading(false);
        window.scrollTo(0, 0);
    }, [id, navigate]);

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;
        if (product && newQuantity >= 1 && newQuantity <= product.stock) {
            setQuantity(newQuantity);
        }
    };

    const handleAddToCart = () => {
        alert(`${quantity} × ${product.name} added to cart!`);
    };

    const handleBuyNow = () => {
        alert(`Proceeding to checkout with ${quantity} × ${product.name}`);
    };

    const handleWhatsAppClick = () => {
        const message = `Hi, I'm interested in ${product.name}. Can you provide more details?`;
        const whatsappUrl = `https://wa.me/919571677609?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
                <div className="text-xl text-[#0b234a]">Loading product details...</div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white">
                <div className="text-2xl text-[#0b234a] mb-4">Product not found</div>
                <button
                    onClick={() => navigate('/')}
                    className="px-6 py-2 bg-[#0b234a] text-white rounded-lg hover:bg-[#E22213] transition-colors"
                >
                    Back to Kits
                </button>
            </div>
        );
    }

    // Current kit के components get करें
    const currentKitComponents = kitComponents[id] || kitComponents['starter-robotics-kit'];
    const otherProducts = products.filter(p => p.id !== product.id);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <div className="mb-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-[#0b234a] hover:text-[#E22213] transition-colors font-medium px-4 py-2 rounded-lg hover:bg-[#0b234a]/5"
                    >
                        <FaArrowLeft className="mr-2" />
                        Back to All Kits
                    </button>
                </div>

                {/* Main Product Container */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
                        {/* Left Column - Media Gallery */}
                        <div>
                            {/* Media Type Selector */}
                            <div className="flex gap-2 mb-4">
                                <button
                                    onClick={() => setActiveMedia('video')}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${activeMedia === 'video'
                                        ? 'bg-[#0b234a] text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    <FaVideo />
                                    Video
                                </button>
                                <button
                                    onClick={() => setActiveMedia('image')}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${activeMedia === 'image'
                                        ? 'bg-[#0b234a] text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    <FaImages />
                                    Images
                                </button>
                            </div>

                            {/* Main Media Display */}
                            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden mb-6 h-96">
                                {activeMedia === 'video' ? (
                                    <video
                                        src={product.videos}
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        muted
                                        loop
                                    />
                                ) : activeMedia === 'image' ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain p-4"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center p-8">
                                        <div className="text-center">
                                            <FaBoxOpen className="text-6xl text-gray-400 mx-auto mb-4" />
                                            <h3 className="text-xl font-bold text-[#0b234a]">Kit Components</h3>
                                            <p className="text-gray-600">Scroll down to see all included items</p>
                                        </div>
                                    </div>
                                )}

                                {/* Discount Badge */}
                                <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-[#E22213] to-orange-500 text-white rounded-full font-bold shadow-lg z-10">
                                    Save {product.discount}%
                                </div>

                                {/* Stock Status */}
                                <div className="absolute top-4 right-4 z-10">
                                    <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${product.stock > 10
                                        ? "bg-green-100 text-green-800 border border-green-200"
                                        : product.stock > 5
                                            ? "bg-orange-100 text-orange-800 border border-orange-200"
                                            : "bg-red-100 text-red-800 border border-red-200"
                                        }`}>
                                        {product.stock <= 5 ? `Low Stock (${product.stock} available)` : `${product.stock} in stock`}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Product Details */}
                        <div className="flex flex-col">
                            {/* Category Tag */}
                            <div className="mb-4">
                                <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#0b234a]/10 to-[#E22213]/10 text-[#0b234a] rounded-full text-sm font-semibold border border-[#0b234a]/20">
                                    {product.category}
                                </span>
                            </div>

                            {/* Product Name */}
                            <h1 className="text-3xl lg:text-4xl font-bold text-[#0b234a] mb-2">
                                {product.name}
                            </h1>

                            {/* Tagline */}
                            <p className="text-lg text-[#E22213] font-semibold mb-4">
                                {product.tagline}
                            </p>

                            {/* Rating */}
                            <div className="flex items-center mb-6">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className={`text-xl ${i < product.rating ? "text-orange-500" : "text-gray-300"}`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <span className="ml-2 text-gray-600">({product.rating}.0 rating)</span>
                                <span className="ml-4 text-gray-500">•</span>
                                <span className="ml-4 text-gray-600">120+ students learned</span>
                            </div>

                            {/* Price Section */}
                            <div className="mb-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 shadow-sm">
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="text-3xl font-bold text-[#0b234a]">{product.price}</span>
                                    <span className="text-xl line-through text-gray-500">{product.originalPrice}</span>
                                    <span className="px-3 py-1 bg-gradient-to-r from-[#E22213]/10 to-orange-500/10 text-[#E22213] rounded-full text-sm font-bold border border-[#E22213]/20">
                                        Save {product.discount}%
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600">Inclusive of all taxes • Free shipping • 6 months warranty</p>
                            </div>

                            {/* Description */}
                            <div className="mb-8">
                                <h3 className="text-lg font-bold text-[#0b234a] mb-2">Description</h3>
                                <p className="text-gray-700 leading-relaxed">{product.description}</p>
                            </div>

                            {/* Quantity Selector */}
                            <div className="mb-8">
                                <p className="text-gray-700 font-medium mb-3">Quantity:</p>
                                <div className="flex items-center">
                                    <button
                                        onClick={() => handleQuantityChange(-1)}
                                        className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 rounded-l-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        disabled={quantity <= 1}
                                    >
                                        <span className="text-2xl">-</span>
                                    </button>
                                    <div className="w-16 h-12 flex items-center justify-center border-y-2 border-gray-300 text-xl font-bold">
                                        {quantity}
                                    </div>
                                    <button
                                        onClick={() => handleQuantityChange(1)}
                                        className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 rounded-r-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        disabled={quantity >= product.stock}
                                    >
                                        <span className="text-2xl">+</span>
                                    </button>
                                    <span className="ml-4 text-sm text-gray-600">
                                        {product.stock} units available
                                    </span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 px-6 py-4 bg-white border-2 border-[#0b234a] text-[#0b234a] rounded-xl font-bold text-lg hover:bg-[#0b234a] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                                >
                                    <FaCartPlus className="text-xl" />
                                    Add to Cart
                                </button>
                                <button
                                    onClick={handleBuyNow}
                                    className="flex-1 px-6 py-4 bg-gradient-to-r from-[#0b234a] to-[#E22213] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                                >
                                    Buy Now
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* WHAT'S INCLUDED SECTION */}
                    <div className="border-t border-gray-200 p-6 lg:p-8 bg-gradient-to-b from-white to-gray-50">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-gradient-to-r from-[#0b234a] to-[#E22213] rounded-lg">
                                <FaBoxOpen className="text-2xl text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#0b234a]">What's Included in the Kit</h3>
                                <p className="text-gray-600">Everything you need to start building projects immediately</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {currentKitComponents.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:border-[#0b234a]/30 transition-all duration-300"
                                >
                                    <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden mb-3 flex items-center justify-center p-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="flex items-start justify-between mb-2">
                                        <h4 className="font-bold text-[#0b234a]">{item.name}</h4>
                                        <span className="px-2 py-1 bg-[#0b234a]/10 text-[#0b234a] text-xs rounded-full font-bold">
                                            x{item.quantity}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RELATED PRODUCTS */}
                    <div className="border-t border-gray-200 p-6 lg:p-8">
                        <h3 className="text-2xl font-bold text-[#0b234a] mb-6">Other Kits You Might Like</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {otherProducts.map((relatedProduct) => (
                                <div
                                    key={relatedProduct.id}
                                    className="flex flex-col md:flex-row items-center border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                                >
                                    <div className="md:w-1/3 h-48 md:h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
                                        <img
                                            src={relatedProduct.image}
                                            alt={relatedProduct.name}
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </div>
                                    <div className="md:w-2/3 p-6">
                                        <h4 className="text-xl font-bold text-[#0b234a] mb-2">{relatedProduct.name}</h4>
                                        <p className="text-[#E22213] font-medium mb-2">{relatedProduct.tagline}</p>
                                        <p className="text-gray-600 text-sm mb-3">{relatedProduct.description}</p>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="text-lg font-bold text-[#0b234a]">{relatedProduct.price}</span>
                                                {relatedProduct.originalPrice && (
                                                    <span className="ml-2 text-sm line-through text-gray-500">{relatedProduct.originalPrice}</span>
                                                )}
                                            </div>
                                            <Link
                                                to={`/kitDetails/${relatedProduct.slug}`}
                                                className="px-4 py-2 text-sm bg-[#0b234a] text-white rounded-lg hover:bg-[#E22213] transition-colors"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Support CTA */}
                <div className="mt-12">
                    <div className="bg-gradient-to-r from-[#0b234a]/5 via-[#E22213]/5 to-orange-500/5 rounded-3xl p-8 border border-[#0b234a]/10 shadow-lg">
                        <h3 className="text-2xl font-bold text-[#0b234a] mb-4 text-center">
                            Need Help Choosing the Right Kit?
                        </h3>
                        <p className="text-gray-600 mb-6 text-center max-w-2xl mx-auto text-lg">
                            Our education specialists are here to help you choose the perfect kit for your needs and provide ongoing support.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={handleWhatsAppClick}
                                className="px-6 py-3 bg-gradient-to-r from-[#25D366] to-green-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <FaWhatsapp className="w-5 h-5" />
                                Get Instant Support
                            </button>
                            <button
                                onClick={() => navigate('/book-demo')}
                                className="px-6 py-3 bg-gradient-to-r from-[#0b234a] via-[#E22213] to-orange-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
                            >
                                Book a Free Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KitDetailsPage;