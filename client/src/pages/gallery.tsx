import { motion } from "framer-motion";
import { Link } from "wouter";
import { Coffee, Cat, Heart, Instagram, Facebook, MapPin } from "lucide-react";
import logoImg from "@assets/639470726_17865298347579929_990346486148551162_n_1772472004615.png";
import _639470726_17865298347579929_990346486148551162_n from "@assets/639470726_17865298347579929_990346486148551162_n.png";

import cat1 from "@assets/customer1.jpg";
import cat2 from "@assets/customer2.jpg";
import cat3 from "@assets/customer3.png";

const images = [
    { src: cat1, alt: "Cats resting on the floor" },
    { src: cat2, alt: "Cats sleeping on pillows" },
    { src: cat3, alt: "Cat resting close-up" },
];

export default function Gallery() {
    return (
        <div className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-background">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <Link href="/">
                        <img src={logoImg} alt="Meankat Cafe Logo" className="h-12 w-auto cursor-pointer hover:scale-105 transition-transform" />
                    </Link>
                    <div className="hidden md:flex gap-6 text-lg font-display text-primary">
                        <Link href="/" className="hover:text-secondary transition-colors cursor-pointer">Home</Link>
                    </div>
                    <button className="md:hidden text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </button>
                </div>
            </nav>

            {/* Header */}
            <header className="pt-32 pb-12 px-4 relative flex flex-col items-center text-center">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl font-display text-secondary text-shadow-sm-purple mb-4 relative inline-block">
                        Our Happy Customers
                        <Cat className="absolute -top-6 -right-10 text-primary w-12 h-12 rotate-12" />
                    </h1>
                    <p className="text-lg text-foreground/80 max-w-2xl mx-auto mt-4">
                        Take a look at some of the adorable, purr-fect moments captured by our visitors!
                    </p>
                </motion.div>
            </header>

            {/* Gallery Grid */}
            <section className="py-12 px-4 flex-grow">
                <div className="container mx-auto max-w-6xl">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {images.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                whileHover={{ scale: 1.03 }}
                                className="relative rounded-2xl overflow-hidden shadow-sm border-4 border-primary/10 hover:border-secondary/30 transition-all cursor-pointer group break-inside-avoid"
                            >
                                <img src={img.src} alt={img.alt} className="w-full h-auto object-cover group-hover:brightness-110 transition-all duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <Heart className="text-secondary w-8 h-8 drop-shadow-md" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="visit" className="bg-foreground text-white py-12 mt-20">
                <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
                    <div>
                        <img src={logoImg} alt="Meankat Cafe Logo" className="h-16 w-auto mb-6 drop-shadow-md" />
                        <p className="text-white/80 mb-4 max-w-sm">
                            Durban's favorite spot for great coffee, delicious treats, and playful rescues.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/meankatcafe_durban" target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-secondary hover:text-foreground transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.tiktok.com/@meankatcafe" target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-secondary hover:text-foreground transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                            </a>
                            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-secondary hover:text-foreground transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-2xl font-display text-secondary mb-6">Visit Us</h4>
                        <ul className="space-y-4 text-white/80">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                                <span>87 Smiso Nkwanyana Road<br />Morningside, Berea, Durban, 4001</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Coffee className="text-primary mt-1 shrink-0" size={20} />
                                <div className="flex flex-col text-sm w-48">
                                    <span className="flex justify-between py-1 border-b border-white/10"><span className="font-semibold text-white/90">Monday</span><span>Closed</span></span>
                                    <span className="flex justify-between py-1 border-b border-white/10"><span className="font-semibold text-white/90">Tues - Thur</span><span>9:00 - 17:00</span></span>
                                    <span className="flex justify-between py-1 border-b border-white/10"><span className="font-semibold text-white/90">Friday</span><span>9:00 - 22:00</span></span>
                                    <span className="flex justify-between py-1 border-b border-white/10"><span className="font-semibold text-white/90">Saturday</span><span>8:00 - 22:00</span></span>
                                    <span className="flex justify-between py-1"><span className="font-semibold text-white/90">Sunday</span><span>8:00 - 16:00</span></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-2xl font-display text-secondary mb-6">Meow Updates</h4>
                        <p className="text-white/80 mb-4">Follow us to see our available rescues and new menu items!</p>
                        <a href="https://www.instagram.com/meankatcafe_durban" target="_blank" rel="noreferrer" className="inline-block bg-primary text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-primary transition-colors">
                            @meankatcafe_durban
                        </a>
                    </div>
                </div>
                <div className="container mx-auto px-4 mt-12 pt-6 border-t border-white/10 text-center text-white/50 text-sm">
                    <p>© {new Date().getFullYear()} Meankat Cafe. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
