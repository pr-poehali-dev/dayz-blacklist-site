import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Clan } from './ClansSection';

interface ContentSectionsProps {
  activeSection: string;
  mockClans: Clan[];
}

const ContentSections = ({ activeSection, mockClans }: ContentSectionsProps) => {
  return (
    <>
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
    </>
  );
};

export default ContentSections;
