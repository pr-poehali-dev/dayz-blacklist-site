import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ClansSection, { Clan } from '@/components/ClansSection';
import ContentSections from '@/components/ContentSections';

const mockClans: Clan[] = [
  {
    id: 1,
    name: 'Survivors Elite',
    tag: 'SURV',
    members: 24,
    kills: 1847,
    leader: 'Commander_X',
    description: 'Элитный клан выживших. Мы контролируем северные территории и всегда готовы к бою.',
    level: 45
  },
  {
    id: 2,
    name: 'Dark Wolves',
    tag: 'WOLF',
    members: 18,
    kills: 1523,
    leader: 'AlphaWolf',
    description: 'Одинокие волки объединились. Охотимся в стае, выживаем вместе.',
    level: 38
  },
  {
    id: 3,
    name: 'Last Hope',
    tag: 'HOPE',
    members: 31,
    kills: 2104,
    leader: 'Preacher',
    description: 'Последняя надежда человечества. Помогаем новичкам и строим новый мир.',
    level: 52
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedClan, setSelectedClan] = useState<Clan | null>(null);

  return (
    <div className="min-h-screen bg-black text-foreground">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://cdn.poehali.dev/projects/68ff56f0-5176-414d-b418-8760ec8e2650/files/c4443259-322b-4f57-9de1-25e7578e3a46.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="relative z-10">
        <Header activeSection={activeSection} onSectionChange={setActiveSection} />

        <main className="pt-20">
          {activeSection === 'home' && <HeroSection />}
          {activeSection === 'clans' && (
            <ClansSection 
              clans={mockClans}
              selectedClan={selectedClan}
              onSelectClan={setSelectedClan}
            />
          )}
          <ContentSections activeSection={activeSection} mockClans={mockClans} />
        </main>

        <footer className="bg-black/80 border-t border-border py-8 mt-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground mb-2">
              © 2024 DayZ Blacklist. Все права защищены.
            </p>
            <p className="text-sm text-muted-foreground">
              Хардкорный сервер выживания • Сделано с ❤️ для игроков
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
