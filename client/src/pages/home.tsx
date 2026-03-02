import { motion } from "framer-motion";
import { Link } from "wouter";
import { Coffee, Cat, Heart, Instagram, Facebook, MapPin } from "lucide-react";
import logoImg from "@assets/639470726_17865298347579929_990346486148551162_n_1772472004615.png";
import treatsImg from "@assets/Screenshot_2026-03-02_191927_1772471998543.png";

import _639470726_17865298347579929_990346486148551162_n from "@assets/639470726_17865298347579929_990346486148551162_n.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/">
            <img src={logoImg} alt="Meankat Cafe Logo" className="h-12 w-auto cursor-pointer hover:scale-105 transition-transform" />
          </Link>
          <div className="hidden md:flex gap-6 text-lg font-display text-primary">
            <a href="#menu" className="hover:text-secondary transition-colors">Menu</a>
            <a href="#about" className="hover:text-secondary transition-colors">About</a>
            <a href="#visit" className="hover:text-secondary transition-colors">Visit Us</a>
          </div>
          <button className="md:hidden text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </nav>
      {/* Hero Section */}
      <header className="pt-32 pb-20 px-4 relative overflow-hidden flex flex-col items-center text-center">
        {/* Decorative background blobs */}
        <div className="absolute top-20 -left-20 w-64 h-64 bg-secondary/30 blob-shape -z-10 mix-blend-multiply"></div>
        <div className="absolute top-40 -right-20 w-80 h-80 bg-primary/20 blob-shape -z-10 mix-blend-multiply" style={{ animationDelay: '2s' }}></div>
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="mb-8"
        >
          <img src={logoImg} alt="Meankat Cafe" className="w-full max-w-md mx-auto drop-shadow-xl" />
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-2xl md:text-3xl font-display text-secondary text-shadow-sm-purple mb-8">Eat • Play • Adopt</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#menu" className="bg-primary text-white font-display text-xl px-8 py-3 rounded-full shadow-[0_4px_0_0_hsl(268,45%,60%)] hover:translate-y-1 hover:shadow-none transition-all">
              See Our Menu
            </a>
            <a href="https://www.instagram.com/meankatcafe_durban" target="_blank" rel="noreferrer" className="bg-secondary text-primary font-display text-xl px-8 py-3 rounded-full shadow-[0_4px_0_0_hsl(52,90%,55%)] hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2">
              <Instagram size={24} /> Follow Us
            </a>
          </div>
        </motion.div>
      </header>
      {/* About Highlights */}
      <section id="about" className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-3xl p-8 text-center shadow-sm border border-primary/10 hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="text-primary w-10 h-10" />
              </div>
              <h3 className="text-2xl mb-4">Delicious Treats</h3>
              <p className="text-foreground/80">From our rich Matilda Brownies to perfectly crafted Matcha lattes, we have something to satisfy every craving.</p>
            </div>
            <div className="bg-background rounded-3xl p-8 text-center shadow-sm border border-primary/10 hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-secondary/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cat className="text-secondary-foreground w-10 h-10" />
              </div>
              <h3 className="text-2xl mb-4">Playful Friends</h3>
              <p className="text-foreground/80">Spend time with our adorable resident rescue cats in a relaxing, purr-fect environment.</p>
            </div>
            <div className="bg-background rounded-3xl p-8 text-center shadow-sm border border-primary/10 hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-primary w-10 h-10" />
              </div>
              <h3 className="text-2xl mb-4">Adopt a Cat</h3>
              <p className="text-foreground/80">Fall in love? Many of our furry friends are looking for their forever homes. Ask us about adoption!</p>
            </div>
          </div>
        </div>
      </section>
      {/* Recreated Menu Section */}
      <section id="menu" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl md:text-6xl text-center mb-16 text-secondary text-shadow-purple relative inline-block left-1/2 -translate-x-1/2">
            Our Menu
            <Cat className="absolute -top-6 -right-10 text-primary w-12 h-12 rotate-12" />
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Drinks Column */}
            <div className="space-y-10">
              <MenuCategory title="COFFEE">
                <MenuItem name="Espresso" price="R28" />
                <MenuItem name="Extra Shot" price="+R7" />
                <MenuItem name="Americano" price="R32" />
                <MenuItem name="Cappuccino" price="R36" />
                <MenuItem name="Flat White" price="R40" />
                <div className="flex justify-between items-baseline mt-2 border-b border-primary/20 border-dashed pb-2">
                  <span className="font-semibold text-foreground/90 uppercase tracking-wider text-sm">Cortado</span>
                  <div className="text-right">
                    <span className="text-sm text-foreground/70 mr-2">Single R35</span>
                    <span className="text-sm text-foreground/70">Double R37</span>
                  </div>
                </div>
              </MenuCategory>

              <MenuCategory title="LATTES">
                <MenuItem name="Classic" price="R38" />
                <MenuItem name="Spicy Chai" price="R41" />
                <MenuItem name="Dirty Chai" price="R45" />
                <MenuItem name="Vanilla" price="R68" />
                <MenuItem name="Rolo, Speckled Egg, Milk Tart, Double Chocolate or Blueberry Chocolate." price="R75" isMultiline />
              </MenuCategory>

              <MenuCategory title="MOCHAS">
                <MenuItem name="Classic" price="R50" />
                <MenuItem name="Cocoa" price="R60" />
                <MenuItem name="White Mocha" price="R60" />
              </MenuCategory>
              
              <MenuCategory title="HOT CHOCOLATE">
                <MenuItem name="Classic" price="R45" />
                <MenuItem name="Double Chocolate" price="R60" />
                <MenuItem name="White Chocolate" price="R58" />
                <div className="mt-4">
                  <h4 className="text-sm text-foreground/70 font-bold mb-1">DELUX ADD-ONS</h4>
                  <MenuItem name="Rolo, Milk Tart, Speckled egg Or Bubblegum" price="R60" isMultiline />
                </div>
              </MenuCategory>
              
              <MenuCategory title="MILKSHAKES">
                <MenuItem name="Vanilla, Strawberry, Chocolate Or Bubblegum" price="R55" isMultiline />
                <MenuItem name="Double Chocolate" price="R65" />
                <MenuItem name="Mango" price="R70" />
                <MenuItem name="Rolo, Milk Tart, Speckled egg, Unicorn Or Mixed berry" price="R75" isMultiline />
              </MenuCategory>
            </div>

            {/* Food & Cold Drinks Column */}
            <div className="space-y-10">
              <MenuCategory title="MATCHA">
                <div className="mb-2">
                  <h4 className="text-sm text-foreground/70 font-bold mb-1">HOT</h4>
                  <MenuItem name="Coconut Matcha Latte" price="R65" />
                  <MenuItem name="Strawberry & Coconut Matcha Latte" price="R70" />
                  <MenuItem name="Choc-Coconut Matcha Fusion" price="R72" />
                </div>
                <div>
                  <h4 className="text-sm text-foreground/70 font-bold mb-1">COLD</h4>
                  <MenuItem name="Coconut Matcha Latte" price="R68" />
                  <MenuItem name="Strawberry & Coconut Matcha Latte" price="R70" />
                  <MenuItem name="Choc-Coconut Matcha Fusion" price="R75" />
                  <MenuItem name="Coconut Matcha Crusher" price="R75" />
                </div>
              </MenuCategory>

              <MenuCategory title="CRUSHERS">
                <MenuItem name="Strawberry" price="R70" />
                <MenuItem name="Peach" price="R70" />
                <MenuItem name="Raspberry Dragonfruit" price="R70" />
                <MenuItem name="Mixed Berry" price="R70" />
                <MenuItem name="Mango" price="R70" />
                <MenuItem name="Passion Fruit" price="R65" />
                <MenuItem name="Pear Elderflower" price="R70" />
              </MenuCategory>

              <MenuCategory title="FRAPPES">
                <MenuItem name="Coffee" price="R55" />
                <MenuItem name="White Chocolate" price="R60" />
                <MenuItem name="Bubble Gum" price="R70" />
                <MenuItem name="Milk Tart" price="R70" />
                <MenuItem name="Iced Cappuccino" price="R67" />
              </MenuCategory>

              <div className="bg-white rounded-3xl p-6 shadow-sm border border-primary/20 relative mt-8">
                <div className="absolute -top-4 -left-4 bg-secondary text-primary font-display font-bold px-4 py-1 rounded-full rotate-[-5deg] shadow-sm">SAVOURY</div>
                <h3 className="text-2xl mb-4 font-display text-primary">MINI PITAS</h3>
                <p className="text-sm text-foreground/80 mb-2">
                  Tender chicken, spiced with Middle Eastern rich spices served in a soft pita with tomatoes, onions, and a drizzle of tahini sauce.
                </p>
                <div className="flex justify-between items-center font-bold">
                  <span className="text-xs text-foreground/60 italic max-w-[70%]">Flavour Options: Middle Eastern, Spicy, Mediterranean with pineapple Or Lemon & Herb</span>
                  <span className="text-lg">R65</span>
                </div>
              </div>
              
              <MenuCategory title="CRUMBLE BISCUITS">
                <MenuItem name="Chocolate" price="R45" />
                <MenuItem name="Triple Choc" price="R50" />
                <MenuItem name="Oreo Delight" price="R50" />
                <MenuItem name="Smores" price="R50" />
                <MenuItem name="Lotus Biscoff Delight" price="R55" />
                <MenuItem name="Pistacio" price="R55" />
                <MenuItem name="Nutella Choc Chip" price="R55" />
                <div className="flex justify-between items-baseline mt-2 border-b border-primary/20 border-dashed pb-2">
                  <span className="font-semibold text-foreground/90 uppercase tracking-wider text-sm">Mini Choc Chip Cookies</span>
                  <div className="text-right">
                    <span className="text-xs text-foreground/70 mr-2 block text-center">Regular<br/>R45</span>
                    <span className="text-xs text-foreground/70 block text-center">Large<br/>R65</span>
                  </div>
                </div>
              </MenuCategory>
              
              <MenuCategory title="DESSERTS">
                <MenuItem name="Chocolate Cake" price="R55" />
                <MenuItem name="Chocolate Cheesecake" price="R80" />
                <MenuItem name="Brownie" price="R60" />
                <MenuItem name="Kataifi Brownie" price="R85" />
                <MenuItem name="Brown Butter Almond Cake" price="R65" />
                <MenuItem name="Tiramisu Buns" price="R85" />
                <MenuItem name="Cinnamon Buns" price="R60" />
                <MenuItem name="Waffle Sticks" price="R80" />
                <span className="text-xs text-foreground/60 italic mt-1 block">Ask for topping options</span>
              </MenuCategory>
            </div>
          </div>
        </div>
      </section>
      {/* Specialty Treats Highlight */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl mb-6 text-primary drop-shadow-sm">Meankat Cafe Treats</h2>
              <p className="text-lg mb-8 text-foreground/80">Partnering with <span className="font-display text-secondary font-bold text-xl px-2 py-1 bg-white rounded-lg shadow-sm rotate-2 inline-block">Butter Milk</span> to bring you the most decadent, mouth-watering bakes in Durban.</p>
              
              <div className="space-y-6">
                <TreatItem 
                  name="NUTELLA CHOC CHIP COOKIE" 
                  desc="WARM, GOOEY, AND LOADED WITH CREAMY NUTELLA SWIRLS AND POOLS OF MELTED CHOCOLATE CHIPS IN EVERY BUTTERY BITE."
                />
                <TreatItem 
                  name="MATILDA BROWNIE" 
                  desc="THE ULTIMATE DECADENT BROWNIE, ULTRA FUDGY, INTENSELY CHOCOLATEY, AND SO RICH IT FEELS LIKE A BITE OF PURE MAGIC."
                />
                <TreatItem 
                  name="KATAIFI BROWNIE" 
                  desc="FUDGY BROWNIE BASE, GOLDEN CRISPY KATAIFI PASTRY SWIRLED WITH PISTACHIO CREAM, ALL CROWNED WITH A THICK, SILKY CHOCOLATE GANACHE."
                />
                <TreatItem 
                  name="BROWN BUTTER ALMOND CAKE" 
                  desc="NUTTY BROWN BUTTER MEETS TENDER ALMOND CAKE, MOIST, FRAGRANT, AND TOPPED WITH A DELICATE CRUNCH FOR PURE COMFORT IN EVERY SLICE."
                />
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               {/* Using the actual treats image to retain its vibe, slightly stylized */}
               <motion.div 
                 whileHover={{ scale: 1.02, rotate: 1 }}
                 className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
               >
                 <img src={treatsImg} alt="Meankat Treats Menu" className="w-full h-auto" />
               </motion.div>
               {/* Decorative elements behind image */}
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary rounded-full opacity-50 blur-2xl z-0"></div>
               <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary rounded-full opacity-30 blur-2xl z-0"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer id="visit" className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <img src={_639470726_17865298347579929_990346486148551162_n} alt="Meankat Cafe Logo" className="h-16 w-auto mb-6 brightness-0 invert" />
            <p className="text-white/80 mb-4 max-w-sm">
              Durban's favorite spot for great coffee, delicious treats, and playful rescues.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/meankatcafe_durban" target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-secondary hover:text-foreground transition-colors">
                <Instagram size={20} />
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
                <span>Durban, South Africa<br/>(Check our Instagram for exact location!)</span>
              </li>
              <li className="flex items-start gap-3">
                <Coffee className="text-primary mt-1 shrink-0" size={20} />
                <span>Mon - Sun: Check our socials for current hours</span>
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

// Helper Components for Menu
function MenuCategory({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-2xl mb-4 border-b-2 border-primary/30 pb-2 inline-block font-display text-primary">{title}</h3>
      <div className="flex flex-col">
        {children}
      </div>
    </div>
  );
}

function MenuItem({ name, price, isMultiline = false }: { name: string, price: string, isMultiline?: boolean }) {
  return (
    <div className={`flex justify-between items-baseline mt-2 border-b border-primary/20 border-dashed pb-2 ${isMultiline ? 'items-end' : ''}`}>
      <span className={`font-semibold text-foreground/90 uppercase tracking-wider text-sm ${isMultiline ? 'max-w-[75%]' : ''}`}>
        {name}
      </span>
      <span className="text-lg ml-4">{price}</span>
    </div>
  );
}

function TreatItem({ name, desc }: { name: string, desc: string }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-primary/10">
      <h4 className="text-lg font-bold text-foreground mb-2">{name}</h4>
      <p className="text-sm text-foreground/70 italic">{desc}</p>
    </div>
  );
}
