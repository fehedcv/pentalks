import { Button } from "./ui/button";
import BlurText from "./blurtext";
import Silk from "./background";
import { motion } from "framer-motion";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Silk
          speed={5}
          scale={1}
          color="#d7b08f"
          noiseIntensity={1.5}
          rotation={0}
          className="absolute top-0 left-0 w-screen h-screen -z-10"
          style={{ width: '100vw', height: '100vh' }}
        />
      </div>
  
      {/* Hero Section */}
      <main className="absolute inset-0 flex items-center justify-center">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="max-w-4xl mx-auto w-full">
              <div className="flex flex-col justify-center items-center mb-6">
                <motion.img 
                  src="image.png" 
                  alt="Logo" 
                  className="h-20 w-auto mb-4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" , delay:1.0}}
                />
                <BlurText
                  text="Pentalks"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-foreground leading-tight text-center"
                />
              </div>
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl text-white mx-auto leading-relaxed text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
              >
                Build amazing experiences with modern tools and cutting-edge technology. Start your journey today and
                transform your ideas into reality.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Button size="lg" className="text-lg text-white px-8 py-3 w-full sm:w-auto">
                    Get Started
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20}}
                >
                  <Button variant="outline" size="lg" className="text-lg px-8 text-white py-3 w-full sm:w-auto bg-transparent">
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}