import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header = ({ activeSection, onSectionChange }: HeaderProps) => {
  return (
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
                onClick={() => onSectionChange(item.id)}
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
  );
};

export default Header;
