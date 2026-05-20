const advantages = [
  {
    icon: "🛡️",
    title: "Профессия в топ-5 самых востребованных",
    desc: "Специалисты по ИБ нужны в банках, госструктурах, IT-компаниях и промышленности. Дефицит кадров — более 60 000 вакансий по России.",
  },
  {
    icon: "🎓",
    title: "Диплом государственного образца",
    desc: "Обучение по ФГОС СПО 10.02.05. Очная форма, срок обучения — 3 года 10 месяцев. Бюджетные и платные места.",
  },
  {
    icon: "💻",
    title: "Практика с первого курса",
    desc: "Работа с реальными инструментами: Kali Linux, Wireshark, средства криптозащиты и межсетевого экранирования.",
  },
  {
    icon: "🏢",
    title: "Партнёры — работодатели",
    desc: "Колледж сотрудничает с ведущими IT-компаниями Москвы. Лучшие студенты получают приглашения на стажировку ещё в процессе учёбы.",
  },
];

export default function Featured() {
  return (
    <div id="program" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/8ffb062c-3e33-4568-974a-44f70c579d1b/files/93edfcfc-ea10-4461-ad0c-ca08a0fdb60a.jpg"
          alt="Студенты IT-колледжа"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Почему стоит прийти</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight font-bold">
          Информационная безопасность — это не просто профессия. Это ответственность за цифровую инфраструктуру страны.
        </p>

        <div className="flex flex-col gap-5 mb-8">
          {advantages.map((item) => (
            <div key={item.title} className="flex gap-4 items-start">
              <span className="text-2xl mt-0.5">{item.icon}</span>
              <div>
                <p className="font-semibold text-neutral-900 text-sm mb-1">{item.title}</p>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#register"
          className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
        >
          Прийти на день открытых дверей
        </a>
      </div>
    </div>
  );
}
