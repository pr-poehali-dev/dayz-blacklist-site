import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center animate-fade-in">
        <Badge className="mb-4 px-4 py-2 text-base bg-accent">
          <Icon name="Activity" size={16} className="mr-2" />
          СЕРВЕР ОНЛАЙН • 127 ИГРОКОВ
        </Badge>
        <h1 className="text-7xl md:text-9xl font-bold mb-6 text-primary drop-shadow-2xl">
          DAYZ<br/>BLACKLIST
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Хардкорный сервер выживания в постапокалиптическом мире. Только сильнейшие останутся в живых.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            <Icon name="Gamepad2" size={24} className="mr-2" />
            НАЧАТЬ ИГРУ
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-black/50">
            <Icon name="Info" size={24} className="mr-2" />
            УЗНАТЬ БОЛЬШЕ
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
          {[
            { icon: 'Users', value: '127', label: 'Игроков онлайн' },
            { icon: 'Target', value: '45K+', label: 'Убийств' },
            { icon: 'Map', value: '12', label: 'Локаций' },
            { icon: 'Skull', value: '99%', label: 'Смертность' }
          ].map((stat, i) => (
            <Card key={i} className="bg-black/60 border-border hover:bg-black/80 transition-all">
              <CardContent className="p-6 text-center">
                <Icon name={stat.icon as any} size={32} className="text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
