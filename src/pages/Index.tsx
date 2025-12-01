import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'BRABUS ROCKET GTS MEAN GREEN',
      subtitle: 'based on Mercedes-AMG G 63',
      mainImage: 'https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/5d467fcd-9fec-4ccb-8c94-8f35d5028c77.jpg',
      gallery: [
        'https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/5d467fcd-9fec-4ccb-8c94-8f35d5028c77.jpg',
        'https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/d28a152a-d8e2-4d20-a0a5-8589258d5375.jpg',
        'https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/4169d985-7ac3-4128-9931-05a521c64bcb.jpg'
      ]
    },
    {
      id: 2,
      title: 'BRABUS 800 DEEP RED',
      subtitle: 'based on Mercedes-AMG G 63',
      mainImage: 'https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/4169d985-7ac3-4128-9931-05a521c64bcb.jpg',
      gallery: [
        'https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/4169d985-7ac3-4128-9931-05a521c64bcb.jpg',
        'https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/5d467fcd-9fec-4ccb-8c94-8f35d5028c77.jpg',
        'https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/d28a152a-d8e2-4d20-a0a5-8589258d5375.jpg'
      ]
    },
    {
      id: 3,
      title: 'BRABUS LUXURY INTERIOR',
      subtitle: 'based on Mercedes-AMG S-Class',
      mainImage: 'https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/d28a152a-d8e2-4d20-a0a5-8589258d5375.jpg',
      gallery: [
        'https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/d28a152a-d8e2-4d20-a0a5-8589258d5375.jpg',
        'https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/4169d985-7ac3-4128-9931-05a521c64bcb.jpg',
        'https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/5d467fcd-9fec-4ccb-8c94-8f35d5028c77.jpg'
      ]
    },
    {
      id: 4,
      title: 'BRABUS PERFORMANCE GT',
      subtitle: 'based on Mercedes-AMG GT 63 S',
      mainImage: 'https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/5d467fcd-9fec-4ccb-8c94-8f35d5028c77.jpg',
      gallery: [
        'https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/5d467fcd-9fec-4ccb-8c94-8f35d5028c77.jpg',
        'https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/d28a152a-d8e2-4d20-a0a5-8589258d5375.jpg'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-8 flex justify-center">
          <h1 className="text-4xl font-heading tracking-wider text-foreground">ELITE TUNING</h1>
        </div>
      </header>

      <main className="pt-32">
        <section className="relative h-[70vh] flex items-center justify-center">
          <div className="absolute inset-0 opacity-40">
            <img 
              src="https://cdn.poehali.dev/projects/e760aa08-8e40-4c2b-b323-359abfa34da2/files/5d467fcd-9fec-4ccb-8c94-8f35d5028c77.jpg"
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-center px-6">
            <h2 className="text-7xl md:text-9xl font-heading mb-6 text-foreground tracking-wide">
              ПРЕВОСХОДСТВО
            </h2>
            <p className="text-xl text-muted-foreground tracking-wider">
              Эксклюзивный тюнинг премиум автомобилей
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-1">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="relative group cursor-pointer overflow-hidden aspect-[4/3]"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <img 
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-12">
                    <h3 className="text-3xl font-heading tracking-wider text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/70 tracking-wider uppercase">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-6xl font-heading mb-8 tracking-wide">О нас</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                Эксклюзивное ателье по доработке премиальных автомобилей. 
                Более 15 лет опыта в создании уникальных проектов. 
                Команда профессионалов с международной квалификацией.
              </p>
              <div className="grid grid-cols-3 gap-12 text-center mt-16">
                <div>
                  <p className="text-5xl font-heading mb-2">15+</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Лет опыта</p>
                </div>
                <div>
                  <p className="text-5xl font-heading mb-2">200+</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Проектов</p>
                </div>
                <div>
                  <p className="text-5xl font-heading mb-2">100%</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Качество</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-5xl font-heading mb-4 tracking-wide">Контакты</h2>
              <p className="text-muted-foreground mb-8">Москва, ул. Тюнинговая, 1</p>
              <p className="text-muted-foreground mb-8">+7 (495) 123-45-67</p>
              <p className="text-muted-foreground mb-12">info@elitetuning.ru</p>
              <Button 
                size="lg"
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 px-12 py-6 text-sm tracking-wider"
              >
                ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground tracking-wider">
            © 2024 ELITE TUNING. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>

      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-6xl p-0 bg-background border-border">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <Icon name="X" size={24} className="text-foreground" />
            <span className="sr-only">Close</span>
          </DialogClose>
          {selectedProject && (
            <div className="grid gap-1 p-1">
              {projects.find(p => p.id === selectedProject)?.gallery.map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full object-cover"
                />
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
