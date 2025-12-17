import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export interface Clan {
  id: number;
  name: string;
  tag: string;
  members: number;
  kills: number;
  leader: string;
  description: string;
  level: number;
}

interface ClansSectionProps {
  clans: Clan[];
  selectedClan: Clan | null;
  onSelectClan: (clan: Clan | null) => void;
}

const ClansSection = ({ clans, selectedClan, onSelectClan }: ClansSectionProps) => {
  return (
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
            {clans.map((clan) => (
              <Card 
                key={clan.id} 
                className="bg-black/60 border-border hover:bg-black/80 transition-all cursor-pointer"
                onClick={() => onSelectClan(clan)}
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
              onClick={() => onSelectClan(null)}
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
  );
};

export default ClansSection;
