import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const schedule = [
  { time: "10:00", event: "Торжественное открытие и приветственное слово директора колледжа" },
  { time: "10:30", event: "Презентация направления «Информационная безопасность АС»" },
  { time: "11:15", event: "Экскурсия по лабораториям и учебным аудиториям" },
  { time: "12:00", event: "Мастер-класс: «Как взламывают и защищают системы» — демо от студентов" },
  { time: "13:00", event: "Встреча с преподавателями и ответы на вопросы о поступлении" },
  { time: "13:30", event: "Свободное общение с будущими однокурсниками" },
];

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/8ffb062c-3e33-4568-974a-44f70c579d1b/files/db795b9f-3ec8-4afa-b98c-1296552934ea.jpg"
            alt="Кибербезопасность"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-20">
        <h3 className="text-white uppercase tracking-widest text-xs mb-2 opacity-60">
          Программа мероприятия
        </h3>
        <p className="text-white text-3xl md:text-5xl font-bold mb-12 leading-tight">
          День открытых дверей
        </p>

        <div className="flex flex-col gap-0">
          {schedule.map((item, i) => (
            <div
              key={i}
              className="flex gap-6 items-start border-t border-white/20 py-5"
            >
              <span className="text-white/50 text-sm font-mono w-12 shrink-0 pt-0.5">{item.time}</span>
              <p className="text-white text-sm md:text-base leading-relaxed">{item.event}</p>
            </div>
          ))}
          <div className="border-t border-white/20" />
        </div>

        <div className="mt-12 p-6 border border-white/20 bg-white/5 backdrop-blur-sm">
          <p className="text-white/70 text-xs uppercase tracking-widest mb-2">Для кого это мероприятие</p>
          <p className="text-white text-sm md:text-base leading-relaxed">
            Выпускники 9 и 11 классов, которые интересуются IT и хотят связать карьеру с защитой данных и кибербезопасностью. Родители и все, кто помогает с выбором профессии.
          </p>
        </div>
      </div>
    </div>
  );
}
