'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const services = [
  { title: 'Реєстрація ФОП під ключ', desc: 'Від консультації до повного пакету документів', price: 'від 1500 грн' },
  { title: 'Щомісячний супровід', desc: 'Ведення ФОП 1/2/3 групи, контроль строків та податків', price: 'від 800 грн/міс' },
  { title: 'Звітність ФОП', desc: 'Річні та квартальні декларації, уточнення, перевірки', price: 'від 700 грн' },
  { title: 'ПРРО та декретні', desc: 'Реєстрація ПРРО і повний супровід декретних виплат', price: 'від 700 грн' }
];

const testimonials = [
  ['Ірина допомогла мені зареєструвати ФОП за один день. Все пояснила, нічого зайвого.', 'Марія К.', 'Реєстрація ФОП'],
  ['Оформила декретні через Ірину — все пройшло бездоганно.', 'Оксана В.', 'Декретні ФОП'],
  ['Звернулась з питанням про ПРРО — вирішила за день. Завжди відповідає швидко.', 'Юлія М.', 'ПРРО']
];

const faqs = [
  ['Чи працюєте ви онлайн по всій Україні?', 'Так, працюю дистанційно з ФОП по всій Україні. Більшість задач закриваємо без візиту в офіс.'],
  ['Скільки триває реєстрація ФОП?', 'Зазвичай 1 робочий день, залежно від вихідних даних і швидкості погодження документів.'],
  ['Перша консультація дійсно безкоштовна?', 'Так. На першому контакті уточнюємо вашу ситуацію, після чого пропоную чіткий план дій і вартість.']
];

const counters = [
  { value: 200, suffix: '+', label: 'клієнтів' },
  { value: 5, suffix: '', label: 'років' },
  { value: 0, suffix: '', label: 'штрафів' },
  { value: 24, suffix: '/7', label: 'підтримка' }
];

export function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div>
          <div className="logo-name">Ірина Кузик</div>
          <div className="logo-title">Бухгалтер для ФОП</div>
        </div>
        <nav>
          <a href="#services">Послуги</a>
          <a href="#why">Переваги</a>
          <a href="#reviews">Відгуки</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="btn-primary header-cta" href="#contact">
          Консультація
        </a>
      </header>

      <section className="hero section-border" id="top">
        <div>
          <p className="label">БУХГАЛТЕРСЬКІ ПОСЛУГИ · ЛЬВІВ · УКРАЇНА</p>
          <div className="gold-line" />
          <h1>
            Бухгалтер <br /> для <span className="accent">ФОП</span>
          </h1>
          <p className="hero-subtitle">
            Реєстрація, звітність, декретні, ПРРО — беру все на себе. Онлайн по всій Україні.
          </p>
          <div className="hero-cta-row">
            <a className="btn-primary" href="https://t.me/iryna_buhgalter" target="_blank">
              НАПИСАТИ В TELEGRAM
            </a>
            <a className="btn-outline" href="#services">
              ПЕРЕГЛЯНУТИ ПОСЛУГИ
            </a>
          </div>
          <div className="messenger-row">
            <a className="messenger-btn" href="https://t.me/iryna_buhgalter" target="_blank">
              Telegram ↗
            </a>
            <a className="messenger-btn" href="#contact">
              Viber ↗
            </a>
            <a className="messenger-btn" href="https://instagram.com/iryna_buhgalter" target="_blank">
              Instagram ↗
            </a>
          </div>
          <div className="stats-row">
            <div>
              <strong>200+</strong>
              <span>клієнтів</span>
            </div>
            <div>
              <strong>5</strong>
              <span>років</span>
            </div>
            <div>
              <strong>0</strong>
              <span>штрафів</span>
            </div>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <div className="photo-glow" />
          <Image src="/images/iryna-photo.svg" alt="Ірина Кузик" width={620} height={780} className="hero-photo" priority />
          <div className="hero-overlay">✦ Перша консультація — безкоштовно</div>
        </div>
      </section>

      <section className="section" id="services">
        <p className="label">ПОСЛУГИ</p>
        <h2>
          Що я роблю для <span className="accent">вас</span>
        </h2>
        <div className="grid-2">
          {services.map((s, i) => (
            <article className="card" key={s.title}>
              <p className="service-number">✦ {String(i + 1).padStart(2, '0')}</p>
              <h3>{s.title}</h3>
              <div className="gold-line" />
              <p>{s.desc}</p>
              <div className="service-price">
                <span>{s.price}</span>
                <span>→</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section warm" id="why">
        <div className="grid-4 why-grid">
          {['Відповідь за 2 години', 'Фіксована ціна', 'Слідкую за законами', 'Все онлайн'].map((item, i) => (
            <div key={item}>
              <div className="why-number">{String(i + 1).padStart(2, '0')}</div>
              <h4>{item}</h4>
              <p>Працюю структурно, без хаосу та ризику для вашого бізнесу.</p>
            </div>
          ))}
        </div>
      </section>

      <motion.section className="counter" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        {counters.map((counterItem) => (
          <div key={counterItem.label}>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
              {counterItem.value}
              {counterItem.suffix}
            </motion.p>
            <span>{counterItem.label}</span>
          </div>
        ))}
      </motion.section>

      <section className="section" id="reviews">
        <h2>Відгуки клієнтів</h2>
        <div className="grid-3">
          {testimonials.map(([text, name, type]) => (
            <article className="review" key={name}>
              <div className="quote">“</div>
              <p>{text}</p>
              <div className="gold-line" />
              <h5>{name}</h5>
              <span>{type}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="steps">
        <h2>Як це працює</h2>
        <div className="steps-grid">
          {[
            ['01', 'Пишеш мені', 'Telegram, Viber або Instagram'],
            ['02', 'Обговорюємо', 'Розповідаєш ситуацію, я підбираю рішення'],
            ['03', 'Результат', 'Беру все на себе — ти займаєшся бізнесом']
          ].map(([n, t, d]) => (
            <div className="step" key={n}>
              <div className="step-circle">{n}</div>
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section warm contact" id="contact">
        <div>
          <p className="label">ЗВ'ЯЗАТИСЬ</p>
          <h2>Залиш заявку</h2>
          <p>Зв'яжусь протягом 2 годин у робочий час.</p>
          <div className="contact-links">
            <a href="https://t.me/iryna_buhgalter" target="_blank">
              Telegram ↗
            </a>
            <a href="#contact">Viber ↗</a>
            <a href="https://instagram.com/iryna_buhgalter" target="_blank">
              Instagram ↗
            </a>
          </div>
        </div>
        <form className="contact-form">
          <input placeholder="Ваше ім'я" />
          <input placeholder="Телефон або Telegram" />
          <select defaultValue="">
            <option value="" disabled>
              Яка послуга цікавить
            </option>
            <option>Реєстрація ФОП</option>
            <option>Щомісячний супровід</option>
            <option>Звітність</option>
            <option>ПРРО</option>
            <option>Декретні</option>
          </select>
          <select defaultValue="">
            <option value="" disabled>
              Зручний месенджер
            </option>
            <option>Telegram</option>
            <option>Viber</option>
            <option>Instagram</option>
          </select>
          <textarea rows={3} placeholder="Коротко про ситуацію" />
          <button type="button" className="btn-primary">
            НАДІСЛАТИ ЗАЯВКУ
          </button>
        </form>
      </section>

      <section className="section faq" id="faq">
        <h2>Поширені питання</h2>
        {faqs.map(([q, a], i) => {
          const active = activeFaq === i;
          return (
            <article className={`faq-item ${active ? 'active' : ''}`} key={q}>
              <button onClick={() => setActiveFaq(active ? null : i)}>
                <span>{q}</span>
                <span>{active ? '−' : '+'}</span>
              </button>
              {active && (
                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                  {a}
                </motion.p>
              )}
            </article>
          );
        })}
      </section>

      <div className="floating-messenger">
        <a href="https://t.me/iryna_buhgalter" target="_blank">T</a>
        <a href="#contact">V</a>
        <a href="https://instagram.com/iryna_buhgalter" target="_blank">I</a>
      </div>

      <footer>
        <div>
          <h3>Ірина Кузик</h3>
          <p>Бухгалтер для ФОП</p>
          <p>Преміальний супровід для підприємців по всій Україні.</p>
        </div>
        <div>
          <h6>Послуги</h6>
          <p>Реєстрація ФОП</p>
          <p>Звітність</p>
          <p>Декретні</p>
        </div>
        <div>
          <h6>Навігація</h6>
          <p>Головна</p>
          <p>Послуги</p>
          <p>FAQ</p>
        </div>
        <div>
          <h6>Контакти</h6>
          <p>@iryna_buhgalter</p>
          <p>Львів, Україна</p>
        </div>
      </footer>
    </main>
  );
}
