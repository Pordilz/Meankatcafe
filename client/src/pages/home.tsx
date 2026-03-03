import { motion } from "framer-motion";
import { Link } from "wouter";
import { Coffee, Cat, Heart, Instagram, Facebook, MapPin } from "lucide-react";
import logoImg from "@assets/639470726_17865298347579929_990346486148551162_n_1772472004615.png";
import treatsImg from "@assets/Screenshot_2026-03-02_191927_1772471998543.png";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import _639470726_17865298347579929_990346486148551162_n from "@assets/639470726_17865298347579929_990346486148551162_n.png";

import cat1 from "@assets/customer1.jpg";
import cat2 from "@assets/customer2.jpg";
import cat3 from "@assets/customer3.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/">
            <img src={logoImg} alt="Meankat Cafe Logo" className="h-12 w-auto cursor-pointer hover:scale-105 transition-transform" />
          </Link>
          <div className="hidden md:flex gap-6 text-lg font-display text-primary items-center">
            <a href="#menu" className="hover:text-secondary transition-colors">Menu</a>
            <a href="#about" className="hover:text-secondary transition-colors">About</a>
            <Link href="/gallery" className="hover:text-secondary transition-colors cursor-pointer">Gallery</Link>
            <a href="#visit" className="hover:text-secondary transition-colors">Visit Us</a>
          </div>
          <button className="md:hidden text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </nav>
      {/* Hero Section */}
      <header className="pt-32 pb-20 px-4 relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Floating Background Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-secondary/20 blur-xl -z-10 mix-blend-multiply"
            style={{
              width: Math.random() * 150 + 50,
              height: Math.random() * 150 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
          {/* Left Text Side */}
          <div className="text-left flex flex-col items-start space-y-8">
            <motion.img
              src={logoImg}
              alt="Meankat Cafe Logo"
              className="w-48 drop-shadow-md origin-left"
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", bounce: 0.5 }}
            />
            <h1 className="text-5xl md:text-7xl font-display text-secondary text-shadow-sm-purple leading-tight">
              {["Where", "Great", "Coffee", "Meets", "Purr-fect", "Company."].map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-3 mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p
              className="text-xl text-foreground/80 max-w-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Enjoy decadent treats while spending time with our adorable friends in Durban.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <a href="#menu" className="relative group overflow-hidden bg-primary text-white font-display text-xl px-8 py-4 rounded-full shadow-[0_4px_0_0_hsl(268,45%,60%)] hover:shadow-none hover:translate-y-1 transition-all flex items-center gap-2">
                <span className="relative z-10">See Our Menu</span>
                <Coffee className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12 z-0"></div>
              </a>
              <a href="https://www.instagram.com/meankatcafe_durban" target="_blank" rel="noreferrer" className="relative group overflow-hidden bg-secondary text-primary font-display text-xl px-8 py-4 rounded-full shadow-[0_4px_0_0_hsl(52,90%,55%)] hover:shadow-none hover:translate-y-1 transition-all flex items-center gap-2">
                <span className="relative z-10">Follow Us</span>
                <Instagram className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-white/30 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 ease-out z-0 opacity-0 group-hover:opacity-100"></div>
              </a>
            </motion.div>
          </div>

          {/* Right Polaroid Stack Side */}
          <div className="relative w-full aspect-square max-w-md mx-auto perspective-1000 hidden md:block">
            {[
              { img: cat3, rot: -8, x: -20, y: 10, label: "Sleepy time" },
              { img: cat2, rot: 5, x: 20, y: 0, label: "Purr-fect" },
              { img: cat1, rot: -2, x: 0, y: -10, label: "Cat cuddles" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 bg-white p-4 pb-16 shadow-2xl rounded flex flex-col border border-primary/5 cursor-pointer origin-bottom"
                initial={{ rotateZ: item.rot, x: item.x, y: item.y }}
                whileHover={{ rotateZ: item.rot * 2, y: -30, scale: 1.05, zIndex: 20 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                style={{ zIndex: i }}
              >
                <img src={item.img} alt={`Meankat Cafe cat ${i}`} className="w-full h-full object-cover rounded-sm grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
                <div className="absolute bottom-5 left-0 right-0 text-center font-display text-primary/80 text-xl tracking-wide">
                  {item.label}
                </div>
              </motion.div>
            ))}

            {/* Playful Floating Elements near the stack */}
            <motion.div
              className="absolute -right-8 -top-8 text-secondary"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Cat size={64} className="opacity-70 drop-shadow-md" />
            </motion.div>
          </div>
        </div>
      </header>
      {/* About Highlights */}
      <section id="about" className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-background rounded-3xl p-8 text-center shadow-sm border border-primary/10 transition-colors"
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5, boxShadow: "0px 10px 30px rgba(100, 70, 150, 0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="text-primary w-10 h-10" />
              </div>
              <h3 className="text-2xl mb-4">Delicious Treats</h3>
              <p className="text-foreground/80">From our rich Matilda Brownies to perfectly crafted Matcha lattes, we have something to satisfy every craving.</p>
            </motion.div>
            <motion.div
              className="bg-background rounded-3xl p-8 text-center shadow-sm border border-primary/10 transition-colors"
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5, boxShadow: "0px 10px 30px rgba(100, 70, 150, 0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-secondary/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cat className="text-secondary-foreground w-10 h-10" />
              </div>
              <h3 className="text-2xl mb-4">Playful Friends</h3>
              <p className="text-foreground/80">Spend time with our adorable resident rescue cats in a relaxing, purr-fect environment.</p>
            </motion.div>
            <motion.div
              className="bg-background rounded-3xl p-8 text-center shadow-sm border border-primary/10 transition-colors"
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5, boxShadow: "0px 10px 30px rgba(100, 70, 150, 0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-primary w-10 h-10" />
              </div>
              <h3 className="text-2xl mb-4">Adopt a Cat</h3>
              <p className="text-foreground/80">Fall in love? Many of our furry friends are looking for their forever homes. Ask us about adoption!</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Recreated Menu Section */}
      <section id="menu" className="py-20 px-4 relative bg-primary/5">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl md:text-6xl text-center mb-16 text-secondary text-shadow-purple relative inline-block left-1/2 -translate-x-1/2 font-display">
            Our Menu
            <Cat className="absolute -top-6 -right-10 text-primary w-12 h-12 rotate-12" />
          </h2>

          <Tabs defaultValue="hot" className="w-full">
            <TabsList className="flex w-full max-w-md mx-auto mb-12 bg-white/50 p-1 rounded-full shadow-sm border border-primary/10">
              <TabsTrigger value="hot" className="flex-1 rounded-full text-lg data-[state=active]:bg-primary data-[state=active]:text-white transition-all">
                Hot Drinks
              </TabsTrigger>
              <TabsTrigger value="cold" className="flex-1 rounded-full text-lg data-[state=active]:bg-secondary data-[state=active]:text-primary transition-all">
                Cold Drinks
              </TabsTrigger>
              <TabsTrigger value="food" className="flex-1 rounded-full text-lg data-[state=active]:bg-foreground data-[state=active]:text-white transition-all">
                Food & Sweets
              </TabsTrigger>
            </TabsList>

            <TabsContent value="hot" className="grid md:grid-cols-2 gap-8 outline-none">
              <MenuCategory title="COFFEE">
                <MenuItem name="Espresso" price="R28" />
                <MenuItem name="Extra Shot" price="+R7" />
                <MenuItem name="Americano" price="R32" />
                <MenuItem name="Cappuccino" price="R36" />
                <MenuItem name="Flat White" price="R40" />
                <div className="flex justify-between items-baseline mt-2 border-b border-primary/10 border-dashed pb-2">
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

              <MenuCategory title="HOT MATCHA">
                <MenuItem name="Coconut Matcha Latte" price="R65" />
                <MenuItem name="Strawberry & Coconut Matcha Latte" price="R70" />
                <MenuItem name="Choc-Coconut Matcha Fusion" price="R72" />
              </MenuCategory>
            </TabsContent>

            <TabsContent value="cold" className="grid md:grid-cols-2 gap-8 outline-none">
              <MenuCategory title="MILKSHAKES">
                <MenuItem name="Vanilla, Strawberry, Chocolate Or Bubblegum" price="R55" isMultiline />
                <MenuItem name="Double Chocolate" price="R65" />
                <MenuItem name="Mango" price="R70" />
                <MenuItem name="Rolo, Milk Tart, Speckled egg, Unicorn Or Mixed berry" price="R75" isMultiline />
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

              <MenuCategory title="COLD MATCHA">
                <MenuItem name="Coconut Matcha Latte" price="R68" />
                <MenuItem name="Strawberry & Coconut Matcha Latte" price="R70" />
                <MenuItem name="Choc-Coconut Matcha Fusion" price="R75" />
                <MenuItem name="Coconut Matcha Crusher" price="R75" />
              </MenuCategory>
            </TabsContent>

            <TabsContent value="food" className="grid md:grid-cols-2 gap-8 outline-none">
              <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all border border-primary/5 hover:border-primary/20 relative">
                <div className="absolute -top-4 -left-4 bg-secondary text-primary font-display font-bold px-4 py-1 rounded-full rotate-[-5deg] shadow-sm">SAVOURY</div>
                <h3 className="text-2xl mb-4 font-display text-primary border-b-2 border-primary/20 pb-2 inline-block">MINI PITAS</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Tender chicken, spiced with Middle Eastern rich spices served in a soft pita with tomatoes, onions, and a drizzle of tahini sauce.
                </p>
                <div className="flex justify-between items-center mt-auto border-t border-primary/10 pt-4">
                  <span className="text-xs text-foreground/60 italic max-w-[70%]">Flavour Options: Middle Eastern, Spicy, Mediterranean with pineapple Or Lemon & Herb</span>
                  <span className="text-xl font-bold">R65</span>
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
                <div className="flex justify-between items-baseline mt-4 border-t border-primary/10 pt-2">
                  <span className="font-semibold text-foreground/90 uppercase tracking-wider text-sm">Mini Choc Chip Cookies</span>
                  <div className="text-right flex gap-4">
                    <span className="text-xs text-foreground/70"><b className="block">Regular</b>R45</span>
                    <span className="text-xs text-foreground/70"><b className="block">Large</b>R65</span>
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
                <span className="text-xs text-foreground/60 italic mt-3 block text-center bg-primary/5 rounded-md py-1">Ask for topping options</span>
              </MenuCategory>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      {/* Specialty Treats Highlight */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl mb-6 text-primary drop-shadow-sm text-center">Meankat Cafe Treats</h2>
              <p className="text-lg mb-8 text-foreground/80 text-center">Partnering with <span className="font-display text-secondary font-bold text-xl px-2 py-1 bg-white rounded-lg shadow-sm rotate-2 inline-block">Butter Milk</span> to bring you the most decadent, mouth-watering bakes in Durban.</p>

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
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer id="visit" className="bg-foreground text-white py-12">
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
