import { HeroSection } from "@/components/hero-section";
import { BiographyAccordion } from "@/components/biography-accordion";
import { PhotoGallery } from "@/components/photo-gallery";
import { LifePersonalitySection } from "@/components/life-personality-section";
import { QuotesCarousel } from "@/components/quotes-carousel";
import { MediaSection } from "@/components/media-section";
import { AudioPlayerSection } from "@/components/audio-player-section";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { ContactsSection } from "@/components/contacts-section";

export default function Home() {
  const biographyItems = [
    {
      value: "biography",
      title: "Биография",
      content:
        "Александр Викторович Карпук родился в Бресте. С ранних лет он проявлял интерес к науке и искусству. После окончания школы, Александр поступил в университет, где изучал инженерное дело. В своей карьере он достиг значительных успехов, работая над различными проектами в области технологий. В свободное время Александр увлекается фотографией и путешествиями, что позволяет ему открывать новые горизонты и вдохновляться окружающим миром.",
    },
    {
      value: "hobbies",
      title: "Увлечения",
      content:
        "Александр был страстным любителем фотографии. Его камера всегда была рядом, запечатлевая моменты красоты в повседневной жизни. Он любил путешествовать, исследуя новые места и культуры. Садоводство было еще одним его увлечением — его розы были гордостью всего района. По вечерам он наслаждался игрой в шахматы и чтением исторических романов, погружаясь в другие эпохи и миры.",
    },
    {
      value: "education",
      title: "Образование",
      content:
        "Александр получил высшее образование в Брестском государственном техническом университете по специальности 'Архитектура'. Во время учебы он проявил себя как талантливый студент, получая стипендии и участвуя в различных архитектурных конкурсах. После окончания университета он продолжил профессиональное развитие, посещая мастер-классы и семинары ведущих архитекторов Европы. Его дипломный проект был отмечен специальной наградой за инновационный подход к градостроительству.",
    },
  ];

  const photos = [
    {
      url: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/9745fb9a-0ee5-44a4-a407-1e8c628514cd/photo/1759514632632_bio_photo_1.jpg",
      title: "bio_photo_1",
      description: "фото для секции Фотографии",
    },
    {
      url: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/9745fb9a-0ee5-44a4-a407-1e8c628514cd/photo/1759514638987_bio_photo_2.jpg",
      title: "bio_photo_2",
      description: "фото для секции Фотографии",
    },
    {
      url: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/9745fb9a-0ee5-44a4-a407-1e8c628514cd/photo/1759514643619_bio_photo_3.jpg",
      title: "bio_photo_3",
      description: "фото для секции Фотографии",
    },
    {
      url: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/9745fb9a-0ee5-44a4-a407-1e8c628514cd/photo/1759514651355_bio_photo_4.jpg",
      title: "bio_photo_4",
      description: "фото для секции Фотографии",
    },
    {
      url: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/9745fb9a-0ee5-44a4-a407-1e8c628514cd/photo/1759514656507_bio_photo_5.jpg",
      title: "bio_photo_5",
      description: "фото для секции Фотографии",
    },
    {
      url: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/9745fb9a-0ee5-44a4-a407-1e8c628514cd/photo/1759514661928_bio_photo_6.jpg",
      title: "bio_photo_6",
      description: "фото для секции Фотографии",
    },
    {
      url: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/9745fb9a-0ee5-44a4-a407-1e8c628514cd/photo/1759514666393_bio_photo_7.jpg",
      title: "bio_photo_7",
      description: "фото для секции Фотографии",
    },
    {
      url: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/9745fb9a-0ee5-44a4-a407-1e8c628514cd/photo/1759514671129_bio_photo_8.jpg",
      title: "bio_photo_8",
      description: "фото для секции Фотографии",
    },
    {
      url: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/9745fb9a-0ee5-44a4-a407-1e8c628514cd/photo/1759514676015_bio_photo_9.jpg",
      title: "bio_photo_9",
      description: "фото для секции Фотографии",
    },
  ];

  const quotes = [
    {
      text: "Архитектор не просто строит дома, он создаёт места, где рождаются истории.",
      author: "Александр Викторович",
    },
    {
      text: "Внуки — это главный подарок жизни.",
      author: "Александр Викторович",
    },
    {
      text: "Каждое здание должно рассказывать свою историю и служить людям.",
      author: "Александр Викторович",
    },
  ];

  const testimonials = [
    {
      name: "Полина Викторович",
      role: "дочь",
      content:
        "Папа был для меня не просто отцом, а настоящим другом и наставником. Он всегда находил время выслушать, поддержать и дать мудрый совет. Его любовь к жизни, к семье и к своему делу вдохновляла всех вокруг. Я помню, как он часами мог рассказывать о своих проектах, о том, как важно создавать пространства, где людям будет комфортно жить. Он учил меня видеть красоту в деталях и ценить каждый момент. Мне будет всегда не хватать его улыбки, его шуток и его объятий. Папа, ты навсегда останешься в моем сердце.",
      avatarUrl:
        "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/9745fb9a-0ee5-44a4-a407-1e8c628514cd/photo/1759514711932_avatar_polina.jpg",
    },
    {
      name: "Виктор Александрович",
      role: "сын",
      content:
        "Отец был моим главным примером в жизни. Он показал мне, что значит быть настоящим профессионалом и порядочным человеком. Каждый его проект был сделан с душой и вниманием к деталям. Я горжусь тем, что пошёл по его стопам и стал инженером. Он всегда поддерживал меня, верил в мои силы даже тогда, когда я сам сомневался. Папа был не только отличным архитектором, но и замечательным отцом, дедушкой и мужем. Его доброта и мудрость останутся с нами навсегда.",
      avatarUrl:
        "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/9745fb9a-0ee5-44a4-a407-1e8c628514cd/photo/1759514711932_avatar_polina.jpg",
    },
    {
      name: "Ольга Сергеевна",
      role: "жена",
      content:
        "Мой любимый Саша... Мы прожили вместе столько лет, и каждый день с ним был наполнен любовью и теплом. Он был не только моим мужем, но и лучшим другом. Мы вместе радовались успехам детей и внуков, путешествовали, мечтали. Его забота о семье была безграничной. Он всегда знал, как меня рассмешить, как поддержать в трудную минуту. Саша, ты оставил после себя не только прекрасные здания, но и огромную любовь в наших сердцах. Я буду любить тебя вечно.",
      avatarUrl:
        "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/9745fb9a-0ee5-44a4-a407-1e8c628514cd/photo/1759514711932_avatar_polina.jpg",
    },
    {
      name: "Максим",
      role: "внук",
      content:
        "Дедушка был самым добрым и весёлым человеком на свете. Он всегда играл со мной, рассказывал интересные истории и учил меня разным вещам. Я помню, как мы вместе работали в саду, и он показывал мне, как ухаживать за розами. Дедушка говорил, что каждое растение нуждается в любви и внимании, как и люди. Я очень скучаю по нему и буду всегда помнить наши совместные моменты.",
      avatarUrl:
        "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/9745fb9a-0ee5-44a4-a407-1e8c628514cd/photo/1759514711932_avatar_polina.jpg",
    },
  ];

  const contacts = [
    {
      role: "Жена",
      name: "Ольга Сергеевна",
      phone: "+375 29 123-45-67",
      email: "olga.karpuk@example.com",
    },
    {
      role: "Дочь",
      name: "Полина Викторович",
      phone: "+375 29 234-56-78",
      email: "polina.karpuk@example.com",
    },
    {
      role: "Сын",
      name: "Виктор Александрович",
      phone: "+375 29 345-67-89",
      email: "viktor.karpuk@example.com",
    },
    {
      role: "Организатор церемонии",
      name: "Ритуальное агентство 'Память'",
      phone: "+375 162 12-34-56",
      address: "г. Брест, ул. Московская, 125",
    },
    {
      role: "Кладбище",
      name: "Брестское городское кладбище",
      phone: "+375 162 23-45-67",
      address: "г. Брест, ул. Кладбищенская, 1",
    },
    {
      role: "Храм",
      name: "Свято-Воскресенский собор",
      phone: "+375 162 34-56-78",
      address: "г. Брест, ул. Московская, 271",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection
        firstName="Александр"
        middleName="Викторович"
        lastName="Карпук"
        birthDate={new Date(1965, 0, 3)}
        deathDate={new Date(2025, 9, 3)}
        birthPlace="Солигорск, Беларусь"
        deathPlace="Брест, Беларусь"
        mainImageUrl="https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/9745fb9a-0ee5-44a4-a407-1e8c628514cd/photo/1759514597180_main_image.png"
        backgroundImageUrl="https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/9745fb9a-0ee5-44a4-a407-1e8c628514cd/photo/1759514615394_hero_section_bg_image.png"
        yearsLived="60 лет жизни"
      />

      <BiographyAccordion items={biographyItems} />

      <PhotoGallery photos={photos} />

      <LifePersonalitySection
        leftBlocks={[
          {
            title: "Семья",
            content:
              "Александр прожил счастливую жизнь с женой Ольгой Сергеевной. Вместе они воспитали двоих замечательных детей — Виктора и Елену. Виктор пошёл по стопам отца, став инженером, а Елена выбрала медицину и стала врачом. У Александра было трое внуков, которых он обожал: Максим, Полина и София. Он всегда говорил, что внуки — это главный подарок жизни.",
          },
          {
            title: "Каким он был",
            content:
              "Его знали как человека с добрым сердцем и невероятной щедростью. Он всегда находил время для друзей, был душой компании и мастером анекдотов.",
          },
        ]}
        rightBlocks={[
          {
            title: "Кем он был",
            content:
              "По профессии Александр был архитектором, и его работы до сих пор украшают Брест. Главная площадь города, несколько школ, жилые кварталы — всё это носит отпечаток его таланта. Он обожал своё дело и часто говорил: 'Архитектор не просто строит дома, он создаёт места, где рождаются истории.' Но его жизнь — это не только чертежи и проекты. Александр любил проводить время с семьёй, играть в шахматы и читать исторические романы. Его особенной страстью был сад — во дворе всегда цвели розы, которые он ухаживал с особой любовью.",
          },
        ]}
      />

      <QuotesCarousel
        quotes={quotes}
        backgroundPattern="https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/9745fb9a-0ee5-44a4-a407-1e8c628514cd/photo/1759514729127_bg_contacts_pattern.png"
        openQuoteIcon="https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/9745fb9a-0ee5-44a4-a407-1e8c628514cd/photo/1759514692079_open_quote.png"
        closeQuoteIcon="https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/9745fb9a-0ee5-44a4-a407-1e8c628514cd/photo/1759514700678_close_quote.png"
      />

      <MediaSection videoUrls={["https://youtu.be/dQw4w9WgXcQ", "https://youtu.be/dQw4w9WgXcQ"]} />

      <AudioPlayerSection
        audioUrl="https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/9745fb9a-0ee5-44a4-a407-1e8c628514cd/audio/1759514742532_song.mp3"
        title="Песня Александра"
      />

      <TestimonialsCarousel testimonials={testimonials} />

      <ContactsSection
        contacts={contacts}
        backgroundPattern="https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/9745fb9a-0ee5-44a4-a407-1e8c628514cd/photo/1759514729127_bg_contacts_pattern.png"
      />
    </main>
  );
}