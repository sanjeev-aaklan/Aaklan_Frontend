import { useEffect, useRef, useState } from "react";
import BookDemoForm from "../components/BookFreeDemo";
import adsVideo from "../assets/adsVideo.mp4";

export default function Ads() {
    const [open, setOpen] = useState(false);

    // ---------- OPEN POPUP ----------
    const openPopup = () => {
        if (!open) {
            setOpen(true);

            // Facebook event: ViewContent
            if (window.fbq) {
                window.fbq("track", "ViewContent");
            }
        }
    };

    useEffect(() => {
        // Facebook Page View
        if (window.fbq) {
            window.fbq("track", "PageView");
        }

        // 1️⃣ Auto open after 7 sec
        const timer = setTimeout(openPopup, 4000);

        // 2️⃣ Open when user scrolls
        const handleScroll = () => {
            if (window.scrollY > 100) {
                openPopup();
            }
        };

        // 3️⃣ Exit intent
        const handleExit = (e) => {
            if (e.clientY < 50) {
                openPopup();
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mouseout", handleExit);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mouseout", handleExit);
        };
    }, [open]);

    const videoRef = useRef(null);

    useEffect(() => {
        const unlockAudio = () => {
            const video = videoRef.current;
            if (!video) return;

            video.muted = false;
            video.volume = 1;
            video.play();

            window.removeEventListener("click", unlockAudio);
            window.removeEventListener("touchstart", unlockAudio);
            window.removeEventListener("scroll", unlockAudio);
        };

        window.addEventListener("click", unlockAudio);
        window.addEventListener("touchstart", unlockAudio);
        window.addEventListener("scroll", unlockAudio);

        return () => {
            window.removeEventListener("click", unlockAudio);
            window.removeEventListener("touchstart", unlockAudio);
            window.removeEventListener("scroll", unlockAudio);
        };
    }, []);


    return (
        <div className="w-screen h-screen bg-black overflow-hidden relative">

            {/* Fullscreen Video */}
            <video
                ref={videoRef}
                src={adsVideo}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-contain bg-black"
            />


            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* CTA Text */}
            <div className="absolute bottom-16 w-full text-center z-10">
                <button
                    onClick={openPopup}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-lg font-semibold shadow-2xl animate-pulse"
                >
                    Book Free Demo
                </button>
            </div>

            {/* Popup */}
            {open && (
                <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-4xl max-h-[95vh] overflow-y-auto rounded-xl">

                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-4 z-50 bg-black/70 text-white px-3 py-1 rounded"
                        >
                            ✕
                        </button>

                        <BookDemoForm />

                    </div>
                </div>
            )}
        </div>
    );
} 