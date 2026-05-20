import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/8ffb062c-3e33-4568-974a-44f70c579d1b/files/14281e6d-5696-40ed-be56-ae40a44c3546.jpg"
          alt="Кибербезопасность"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-70">
          День открытых дверей · Колледж IT Москва
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          ЗАЩИТИ<br />ЦИФРОВОЙ<br />МИР
        </h1>
        <p className="text-base md:text-xl max-w-2xl mx-auto opacity-90 mb-10 leading-relaxed">
          Направление «Обеспечение информационной безопасности автоматизированных систем» —
          профессия настоящего и будущего
        </p>
        <a
          href="#register"
          className="inline-block bg-white text-black px-8 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors duration-300"
        >
          Записаться на мероприятие
        </a>
      </div>
    </div>
  );
}
