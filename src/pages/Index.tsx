import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      before: 'https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/5d467fcd-9fec-4ccb-8c94-8f35d5028c77.jpg',
      after: 'https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/5d467fcd-9fec-4ccb-8c94-8f35d5028c77.jpg',
      title: 'Mercedes AMG GT',
      description: 'Полная трансформация экстерьера'
    },
    {
      before: 'https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/d28a152a-d8e2-4d20-a0a5-8589258d5375.jpg',
      after: 'https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/d28a152a-d8e2-4d20-a0a5-8589258d5375.jpg',
      title: 'Премиум Интерьер',
      description: 'Эксклюзивная отделка салона'
    },
    {
      before: 'https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/4169d985-7ac3-4128-9931-05a521c64bcb.jpg',
      after: 'https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/4169d985-7ac3-4128-9931-05a521c64bcb.jpg',
      title: 'Luxury SUV',
      description: 'Аэродинамический обвес'
    }
  ];

  const services = [
    {
      icon: 'Wrench',
      title: 'Тюнинг Двигателя',
      description: 'Чип-тюнинг, турбонаддув, увеличение мощности до 50%'
    },
    {
      icon: 'Palette',
      title: 'Аэродинамика',
      description: 'Эксклюзивные обвесы, спойлеры, диффузоры из карбона'
    },
    {
      icon: 'Sparkles',
      title: 'Салон Premium',
      description: 'Перетяжка кожей Nappa, Алькантара, индивидуальный дизайн'
    },
    {
      icon: 'Gauge',
      title: 'Подвеска',
      description: 'Пневмоподвеска, койловеры, занижение, настройка жесткости'
    },
    {
      icon: 'Zap',
      title: 'Выхлопная Система',
      description: 'Спортивные выхлопы Akrapovic, Capristo с клапанным управлением'
    },
    {
      icon: 'Shield',
      title: 'Защита Кузова',
      description: 'Керамика, бронепленка, антигравийная защита премиум-класса'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-accent" size={32} />
            <span className="text-2xl font-heading font-bold text-accent">ELITE TUNING</span>
          </div>
          <div className="hidden md:flex gap-8">
            {['home', 'portfolio', 'services', 'about', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                  activeSection === section ? 'text-accent' : 'text-foreground hover:text-accent'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'portfolio' && 'Портфолио'}
                {section === 'services' && 'Услуги'}
                {section === 'about' && 'О Нас'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
          </div>
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            Консультация
          </Button>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-10" />
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/5d467fcd-9fec-4ccb-8c94-8f35d5028c77.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 z-20 text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-heading font-black mb-6 text-foreground">
            ПРЕВОСХОДСТВО<br />
            <span className="text-accent">В ДЕТАЛЯХ</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Эксклюзивный тюнинг премиум автомобилей. Индивидуальный подход к каждому проекту.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
              onClick={() => scrollToSection('portfolio')}
            >
              Наши Работы
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6"
              onClick={() => scrollToSection('contacts')}
            >
              Связаться
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-heading font-bold mb-4">
              НАШЕ <span className="text-accent">ПОРТФОЛИО</span>
            </h2>
            <p className="text-xl text-muted-foreground">Проекты, которыми мы гордимся</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <Card 
                key={index}
                className="group overflow-hidden cursor-pointer hover-scale bg-card border-border"
                onClick={() => setSelectedImage(selectedImage === index ? null : index)}
              >
                <CardContent className="p-0 relative">
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={selectedImage === index ? item.after : item.before}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold">
                      {selectedImage === index ? 'ПОСЛЕ' : 'ДО'}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-heading font-bold mb-4">
              НАШИ <span className="text-accent">УСЛУГИ</span>
            </h2>
            <p className="text-xl text-muted-foreground">Полный спектр премиального тюнинга</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group hover-scale bg-card border-border hover:border-accent transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                    <Icon name={service.icon} className="text-accent group-hover:text-accent-foreground" size={32} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-5xl font-heading font-bold mb-4">
                О <span className="text-accent">КОМПАНИИ</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/d28a152a-d8e2-4d20-a0a5-8589258d5375.jpg"
                  alt="About"
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <span className="text-accent font-bold">ELITE TUNING</span> — эксклюзивное ателье по доработке премиальных автомобилей. 
                  Более 15 лет опыта в создании уникальных проектов.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="Award" className="text-accent mt-1" size={24} />
                    <div>
                      <h4 className="font-heading font-bold text-lg mb-1">Сертифицированные специалисты</h4>
                      <p className="text-muted-foreground">Команда профессионалов с международной квалификацией</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Gem" className="text-accent mt-1" size={24} />
                    <div>
                      <h4 className="font-heading font-bold text-lg mb-1">Премиальные материалы</h4>
                      <p className="text-muted-foreground">Только оригинальные компоненты и эксклюзивные решения</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Shield" className="text-accent mt-1" size={24} />
                    <div>
                      <h4 className="font-heading font-bold text-lg mb-1">Гарантия качества</h4>
                      <p className="text-muted-foreground">Полная гарантия на все виды работ и материалы</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-5xl font-heading font-bold mb-4">
                <span className="text-accent">КОНТАКТЫ</span>
              </h2>
              <p className="text-xl text-muted-foreground">Начните свой проект с консультации</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Card className="bg-card border-border p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="text-accent" size={24} />
                    <div>
                      <h4 className="font-heading font-bold mb-2">Адрес</h4>
                      <p className="text-muted-foreground">Москва, ул. Тюнинговая, 1</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card border-border p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="text-accent" size={24} />
                    <div>
                      <h4 className="font-heading font-bold mb-2">Телефон</h4>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card border-border p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="text-accent" size={24} />
                    <div>
                      <h4 className="font-heading font-bold mb-2">Email</h4>
                      <p className="text-muted-foreground">info@elitetuning.ru</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card border-border p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" className="text-accent" size={24} />
                    <div>
                      <h4 className="font-heading font-bold mb-2">Часы работы</h4>
                      <p className="text-muted-foreground">Пн-Сб: 10:00 - 20:00<br />Вс: По записи</p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="bg-card border-border p-8">
                <h3 className="text-2xl font-heading font-bold mb-6">Запись на консультацию</h3>
                <form className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel"
                      placeholder="Телефон" 
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Марка автомобиля" 
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Описание проекта" 
                      className="bg-background border-border min-h-32"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    size="lg"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/50 py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-accent" size={24} />
              <span className="text-xl font-heading font-bold text-accent">ELITE TUNING</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Elite Tuning. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent">
                <Icon name="Facebook" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;