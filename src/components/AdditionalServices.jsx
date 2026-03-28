import styles from './AdditionalServices.module.css'

export default function AdditionalServices() {
  return (
    <section className="section" style={{ background: 'rgba(255,255,255,0.015)' }}>
      <div className="container">
        <h2 className="section-title">Детально про додаткові послуги</h2>

        <div className={styles.grid}>
          {/* Consultation */}
          <div className={`card ${styles.card}`}>
            <div className={styles.header}>
              <span className="tag">Консультація</span>
              <span className={styles.price}>100$</span>
            </div>
            <ul className={styles.list}>
              <li>Тривалість 2 години</li>
              <li>Визначення точки А та точки Б</li>
              <li>Оцінка ресурсів (наявних та необхідних)</li>
              <li>Побудова стратегії</li>
              <li>Відповіді на 5–10 питань експерта</li>
              <li>Чіткий план дій</li>
              <li>Підтримка в месенджері 1 тиждень</li>
            </ul>
          </div>

          {/* Consultation + target */}
          <div className={`card ${styles.card}`}>
            <div className={styles.header}>
              <span className="tag">Консультація + таргет</span>
              <span className={styles.price}>250$</span>
            </div>
            <ul className={styles.list}>
              <li>Розбір вашого запиту</li>
              <li>Аналіз попередніх продажів</li>
              <li>Аналіз скрипта переписок</li>
              <li>Покращення скрипта переписок</li>
              <li>Ефективне налаштування реклами та ведення на місяць</li>
            </ul>
          </div>

          {/* Landing */}
          <div className={`card ${styles.card}`}>
            <div className={styles.header}>
              <span className="tag">Лендінг під ключ</span>
              <span className={styles.price}>250$</span>
            </div>
            <p className={styles.note}>Стандартний термін: 7–10 робочих днів</p>
            <ul className={styles.list}>
              <li>Лендінг на Weblium (12 блоків за моєю структурою)</li>
              <li>Адаптація текстів + базовий копірайтинг (підзаголовки, CTA)</li>
              <li>Робота з візуалом (мінімальна обробка фото, відео)</li>
              <li>Допомога з реєстрацією на WayForPay для автооплати</li>
              <li>Інтеграція кнопки оплати з WayForPay</li>
              <li>Redirect після оплати на доступ до продукту</li>
              <li>До 3 сесій правок (далі правки платні)</li>
            </ul>
            <div className={styles.urgentBox}>
              <p className={styles.urgentTitle}>Термінові тарифи:</p>
              <p>7 днів: +30% (390$) &nbsp; 3 дні: +50% (450$) &nbsp; Завтра: +100% (600$)</p>
            </div>
          </div>

          {/* Webinar */}
          <div className={`card ${styles.card}`}>
            <div className={styles.header}>
              <span className="tag">Вебінар під ключ</span>
              <span className={styles.price}>300$</span>
            </div>
            <p className={styles.note}>Стандартний термін: 10–14 днів</p>
            <ul className={styles.list}>
              <li>Зідзвон-діагностика — знайомство, уточнення теми та формату</li>
              <li>Глибинна розпаковка, написання тезисів</li>
              <li>Створення структури та тез вебінару — повний сценарій</li>
              <li>Презентація результату на зідзвоні та правки</li>
              <li>Фінальний зідзвон з правками у форматі репетиції</li>
            </ul>
          </div>

          {/* Payment automation */}
          <div className={`card ${styles.card} ${styles.wideCard}`}>
            <div className={styles.header}>
              <span className="tag">Автоматизація оплат</span>
              <span className={styles.price}>від 20$</span>
            </div>
            <ul className={styles.list}>
              <li>Налаштування платіжних кнопок, соціальних інвойсів та автоматизації</li>
              <li>Інтеграція кнопки на сайт</li>
              <li>Налаштування автопереадресації після оплати на Telegram, Google Drive тощо</li>
              <li>Складання тексту пропозиції (за потреби)</li>
            </ul>
            <div className={styles.payTable}>
              <div className={styles.payHeader}>
                <span>Варіант</span>
                <span>1й раз</span>
                <span>2й раз</span>
              </div>
              {[
                ['Кнопка або соцінвойс без сайту', '20$', '10$'],
                ['Реєстрація з нуля + перша кнопка', '30$', '10$'],
                ['Кнопка з інтеграцією на сайт', '30$', '20$'],
                ['Написання тексту', '+5–7$', '+5–7$'],
                ['Допомога з ботом або пошуком посилань', '10–30$', '10–30$'],
              ].map(([name, p1, p2]) => (
                <div key={name} className={styles.payRow}>
                  <span>{name}</span>
                  <span className={styles.payPrice}>{p1}</span>
                  <span className={styles.payPrice}>{p2}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
