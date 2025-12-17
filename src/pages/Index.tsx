import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Clan {
  id: number;
  name: string;
  tag: string;
  members: number;
  kills: number;
  leader: string;
  description: string;
  level: number;
}

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
        <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-border z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
                  <Icon name="Target" className="text-primary-foreground" size={28} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-primary">DAYZ BLACKLIST</h1>
                  <p className="text-xs text-muted-foreground">HARDCORE SURVIVAL</p>
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                {[
                  { id: 'home', label: 'Главная', icon: 'Home' },
                  { id: 'about', label: 'О сервере', icon: 'Info' },
                  { id: 'rules', label: 'Правила', icon: 'Shield' },
                  { id: 'ratings', label: 'Рейтинги', icon: 'Trophy' },
                  { id: 'clans', label: 'Кланы', icon: 'Users' },
                  { id: 'donate', label: 'Донат', icon: 'Heart' },
                  { id: 'contacts', label: 'Контакты', icon: 'MessageCircle' }
                ].map((item) => (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? 'default' : 'ghost'}
                    onClick={() => setActiveSection(item.id)}
                    className="text-sm"
                  >
                    <Icon name={item.icon as any} size={16} className="mr-2" />
                    {item.label}
                  </Button>
                ))}
              </div>

              <Button size="lg" className="hidden md:flex">
                <Icon name="Gamepad2" size={20} className="mr-2" />
                ИГРАТЬ
              </Button>
            </div>
          </div>
        </nav>

        <main className="pt-20">
          {activeSection === 'home' && (
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
          )}

          {activeSection === 'about' && (
            <section className="min-h-screen py-20 px-4">
              <div className="container mx-auto max-w-4xl">
                <h2 className="text-5xl font-bold mb-8 text-primary">О СЕРВЕРЕ</h2>
                <div className="space-y-6">
                  <Card className="bg-black/60 border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center text-primary">
                        <Icon name="Server" size={24} className="mr-3" />
                        Особенности сервера
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Icon name="Check" className="text-secondary mt-1" size={20} />
                        <div>
                          <p className="font-semibold">Хардкорный режим выживания</p>
                          <p className="text-sm text-muted-foreground">Реалистичная система голода, жажды и здоровья</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="Check" className="text-secondary mt-1" size={20} />
                        <div>
                          <p className="font-semibold">PvP и PvE контент</p>
                          <p className="text-sm text-muted-foreground">Опасные зомби, дикие животные и другие игроки</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="Check" className="text-secondary mt-1" size={20} />
                        <div>
                          <p className="font-semibold">Система кланов</p>
                          <p className="text-sm text-muted-foreground">Объединяйтесь с друзьями для совместного выживания</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="Check" className="text-secondary mt-1" size={20} />
                        <div>
                          <p className="font-semibold">Регулярные ивенты</p>
                          <p className="text-sm text-muted-foreground">Аирдропы, рейды и специальные события</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          )}

          {activeSection === 'rules' && (
            <section className="min-h-screen py-20 px-4">
              <div className="container mx-auto max-w-4xl">
                <h2 className="text-5xl font-bold mb-8 text-primary">ПРАВИЛА СЕРВЕРА</h2>
                <div className="space-y-4">
                  {[
                    { title: 'Запрещены читы и эксплойты', desc: 'Использование любого стороннего ПО приведет к перманентному бану' },
                    { title: 'Уважайте других игроков', desc: 'Токсичность, оскорбления и дискриминация не допускаются' },
                    { title: 'Нельзя блокировать спавны', desc: 'Запрещено строить возле точек появления предметов' },
                    { title: 'Система рейдов', desc: 'Рейды баз разрешены только в определенное время' },
                    { title: 'Запрет на убийство в сейф-зонах', desc: 'В торговых зонах действует перемирие' }
                  ].map((rule, i) => (
                    <Card key={i} className="bg-black/60 border-border hover:bg-black/80 transition-all">
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          <Badge className="mr-3 bg-accent text-accent-foreground">#{i + 1}</Badge>
                          {rule.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">{rule.desc}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          {activeSection === 'ratings' && (
            <section className="min-h-screen py-20 px-4">
              <div className="container mx-auto max-w-4xl">
                <h2 className="text-5xl font-bold mb-8 text-primary">РЕЙТИНГИ</h2>
                <Tabs defaultValue="kills" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="kills">По убийствам</TabsTrigger>
                    <TabsTrigger value="survival">По выживанию</TabsTrigger>
                    <TabsTrigger value="clans">Кланы</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="kills">
                    <div className="space-y-3">
                      {[
                        { rank: 1, name: 'Reaper_666', kills: 847, deaths: 124 },
                        { rank: 2, name: 'Silent_Hunter', kills: 723, deaths: 98 },
                        { rank: 3, name: 'Mad_Max', kills: 691, deaths: 156 }
                      ].map((player) => (
                        <Card key={player.rank} className="bg-black/60 border-border">
                          <CardContent className="p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <Badge className="text-xl font-bold w-12 h-12 flex items-center justify-center bg-primary">
                                #{player.rank}
                              </Badge>
                              <div>
                                <p className="font-bold text-lg">{player.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {player.kills} убийств • {player.deaths} смертей
                                </p>
                              </div>
                            </div>
                            <Icon name="Skull" className="text-accent" size={28} />
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="survival">
                    <div className="space-y-3">
                      {[
                        { rank: 1, name: 'Survivor_Pro', hours: 324, days: 45 },
                        { rank: 2, name: 'The_Ghost', hours: 298, days: 41 },
                        { rank: 3, name: 'Nomad_X', hours: 276, days: 38 }
                      ].map((player) => (
                        <Card key={player.rank} className="bg-black/60 border-border">
                          <CardContent className="p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <Badge className="text-xl font-bold w-12 h-12 flex items-center justify-center bg-secondary">
                                #{player.rank}
                              </Badge>
                              <div>
                                <p className="font-bold text-lg">{player.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {player.hours} часов • {player.days} дней выживания
                                </p>
                              </div>
                            </div>
                            <Icon name="Heart" className="text-secondary" size={28} />
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="clans">
                    <div className="space-y-3">
                      {mockClans.map((clan, index) => (
                        <Card key={clan.id} className="bg-black/60 border-border">
                          <CardContent className="p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <Badge className="text-xl font-bold w-12 h-12 flex items-center justify-center bg-primary">
                                #{index + 1}
                              </Badge>
                              <div>
                                <p className="font-bold text-lg">[{clan.tag}] {clan.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {clan.members} участников • {clan.kills} убийств
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-muted-foreground">Уровень</p>
                              <p className="text-2xl font-bold text-primary">{clan.level}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </section>
          )}

          {activeSection === 'clans' && (
            <section className="min-h-screen py-20 px-4">
              <div className="container mx-auto max-w-6xl">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-5xl font-bold text-primary">СИСТЕМА КЛАНОВ</h2>
                  <Button size="lg">
                    <Icon name="Plus" size={20} className="mr-2" />
                    СОЗДАТЬ КЛАН
                  </Button>
                </div>

                {!selectedClan ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockClans.map((clan) => (
                      <Card 
                        key={clan.id} 
                        className="bg-black/60 border-border hover:bg-black/80 transition-all cursor-pointer"
                        onClick={() => setSelectedClan(clan)}
                      >
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge className="text-lg px-3 py-1 bg-primary">[{clan.tag}]</Badge>
                            <Badge variant="outline" className="text-sm">
                              LVL {clan.level}
                            </Badge>
                          </div>
                          <CardTitle className="text-2xl">{clan.name}</CardTitle>
                          <CardDescription className="text-muted-foreground mt-2">
                            {clan.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm flex items-center text-muted-foreground">
                                <Icon name="Users" size={16} className="mr-2" />
                                Участники
                              </span>
                              <span className="font-bold">{clan.members}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm flex items-center text-muted-foreground">
                                <Icon name="Target" size={16} className="mr-2" />
                                Убийства
                              </span>
                              <span className="font-bold text-accent">{clan.kills}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm flex items-center text-muted-foreground">
                                <Icon name="Crown" size={16} className="mr-2" />
                                Лидер
                              </span>
                              <span className="font-bold">{clan.leader}</span>
                            </div>
                          </div>
                          <Button className="w-full mt-4">
                            <Icon name="UserPlus" size={16} className="mr-2" />
                            ВСТУПИТЬ
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div>
                    <Button 
                      variant="ghost" 
                      className="mb-6"
                      onClick={() => setSelectedClan(null)}
                    >
                      <Icon name="ArrowLeft" size={20} className="mr-2" />
                      НАЗАД К СПИСКУ
                    </Button>
                    
                    <Card className="bg-black/60 border-border">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <Badge className="text-2xl px-4 py-2 bg-primary">[{selectedClan.tag}]</Badge>
                              <Badge variant="outline" className="text-lg px-3 py-1">
                                УРОВЕНЬ {selectedClan.level}
                              </Badge>
                            </div>
                            <CardTitle className="text-4xl mb-4">{selectedClan.name}</CardTitle>
                            <CardDescription className="text-lg text-muted-foreground">
                              {selectedClan.description}
                            </CardDescription>
                          </div>
                          <Button size="lg">
                            <Icon name="UserPlus" size={20} className="mr-2" />
                            ВСТУПИТЬ В КЛАН
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                          <Card className="bg-black/40 border-border">
                            <CardContent className="p-6 text-center">
                              <Icon name="Users" size={40} className="text-primary mx-auto mb-2" />
                              <p className="text-3xl font-bold">{selectedClan.members}</p>
                              <p className="text-sm text-muted-foreground">Участников</p>
                            </CardContent>
                          </Card>
                          <Card className="bg-black/40 border-border">
                            <CardContent className="p-6 text-center">
                              <Icon name="Target" size={40} className="text-accent mx-auto mb-2" />
                              <p className="text-3xl font-bold">{selectedClan.kills}</p>
                              <p className="text-sm text-muted-foreground">Убийств</p>
                            </CardContent>
                          </Card>
                          <Card className="bg-black/40 border-border">
                            <CardContent className="p-6 text-center">
                              <Icon name="Crown" size={40} className="text-secondary mx-auto mb-2" />
                              <p className="text-xl font-bold">{selectedClan.leader}</p>
                              <p className="text-sm text-muted-foreground">Лидер клана</p>
                            </CardContent>
                          </Card>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold">ПРЕИМУЩЕСТВА КЛАНА</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-start space-x-3">
                              <Icon name="Shield" className="text-secondary mt-1" size={20} />
                              <div>
                                <p className="font-semibold">Общая база</p>
                                <p className="text-sm text-muted-foreground">Доступ к укрепленной базе клана</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <Icon name="Radio" className="text-secondary mt-1" size={20} />
                              <div>
                                <p className="font-semibold">Групповой чат</p>
                                <p className="text-sm text-muted-foreground">Коммуникация с союзниками</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <Icon name="Package" className="text-secondary mt-1" size={20} />
                              <div>
                                <p className="font-semibold">Общий склад</p>
                                <p className="text-sm text-muted-foreground">Делитесь ресурсами с членами клана</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <Icon name="Award" className="text-secondary mt-1" size={20} />
                              <div>
                                <p className="font-semibold">Клановые награды</p>
                                <p className="text-sm text-muted-foreground">Эксклюзивные бонусы и достижения</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </section>
          )}

          {activeSection === 'donate' && (
            <section className="min-h-screen py-20 px-4">
              <div className="container mx-auto max-w-5xl">
                <h2 className="text-5xl font-bold mb-8 text-primary text-center">ПОДДЕРЖАТЬ СЕРВЕР</h2>
                <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
                  Ваша поддержка помогает развивать сервер и добавлять новый контент
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { 
                      name: 'ВЫЖИВШИЙ', 
                      price: '299₽', 
                      perks: ['VIP статус (30 дней)', 'Приоритет в очереди', '+50% опыта', 'Эксклюзивный тег'] 
                    },
                    { 
                      name: 'ОХОТНИК', 
                      price: '599₽', 
                      perks: ['VIP статус (90 дней)', 'Все из "Выживший"', 'Стартовый набор', 'Цветное имя в чате', 'Личный склад'] 
                    },
                    { 
                      name: 'ЛЕГЕНДА', 
                      price: '999₽', 
                      perks: ['VIP статус (180 дней)', 'Все из "Охотник"', 'Личный транспорт', 'Спавн в любой точке', 'Уникальная одежда'] 
                    }
                  ].map((pack, i) => (
                    <Card 
                      key={i} 
                      className={`bg-black/60 border-border hover:bg-black/80 transition-all ${i === 1 ? 'border-primary border-2 scale-105' : ''}`}
                    >
                      <CardHeader>
                        {i === 1 && <Badge className="mb-2 bg-primary">ПОПУЛЯРНЫЙ</Badge>}
                        <CardTitle className="text-3xl">{pack.name}</CardTitle>
                        <div className="text-4xl font-bold text-primary mt-4">{pack.price}</div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 mb-6">
                          {pack.perks.map((perk, j) => (
                            <li key={j} className="flex items-start space-x-2">
                              <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                              <span className="text-sm">{perk}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full" size="lg" variant={i === 1 ? 'default' : 'outline'}>
                          <Icon name="ShoppingCart" size={18} className="mr-2" />
                          КУПИТЬ
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          {activeSection === 'contacts' && (
            <section className="min-h-screen py-20 px-4">
              <div className="container mx-auto max-w-4xl">
                <h2 className="text-5xl font-bold mb-8 text-primary">КОНТАКТЫ</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-black/60 border-border hover:bg-black/80 transition-all">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name="MessageCircle" size={24} className="mr-3 text-primary" />
                        Discord
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Присоединяйтесь к нашему Discord серверу для общения с администрацией и игроками
                      </p>
                      <Button variant="outline" className="w-full">
                        <Icon name="ExternalLink" size={18} className="mr-2" />
                        ПРИСОЕДИНИТЬСЯ
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/60 border-border hover:bg-black/80 transition-all">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name="Send" size={24} className="mr-3 text-primary" />
                        Telegram
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Новости, обновления и важные объявления в нашем Telegram канале
                      </p>
                      <Button variant="outline" className="w-full">
                        <Icon name="ExternalLink" size={18} className="mr-2" />
                        ПОДПИСАТЬСЯ
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/60 border-border hover:bg-black/80 transition-all">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name="AtSign" size={24} className="mr-3 text-primary" />
                        Email
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-2">
                        admin@dayzblacklist.ru
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Для официальных обращений и предложений
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/60 border-border hover:bg-black/80 transition-all">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name="Server" size={24} className="mr-3 text-primary" />
                        IP Сервера
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-2 font-mono text-lg">
                        play.dayzblacklist.ru:2302
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Добавьте в избранное для быстрого подключения
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          )}
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