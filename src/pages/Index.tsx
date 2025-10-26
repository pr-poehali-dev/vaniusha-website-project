import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            ВАНЮША
          </div>
          <div className="flex gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Обо мне
            </a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">
              Портфолио
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-6">
              <div className="text-8xl mb-4">🍕</div>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              ВАНЮША
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-muted-foreground font-semibold">
              Мукбанг • Обзоры • Контент
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <Icon name="Play" className="mr-2" size={24} />
                Смотреть видео
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                <Icon name="MessageCircle" className="mr-2" size={24} />
                Связаться
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section id="about" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center animate-fade-in">
              Обо мне
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-scale-in">
                <img 
                  src="https://cdn.poehali.dev/projects/472bb512-c21a-4262-8197-56aec3daf152/files/8a956a20-917c-4f3c-9358-9bea2c0eaad0.jpg" 
                  alt="ВАНЮША"
                  className="aspect-square object-cover rounded-3xl shadow-2xl"
                />
              </div>
              <div className="space-y-6 animate-fade-in">
                <p className="text-xl leading-relaxed text-muted-foreground">
                  Привет! Я ВАНЮША — мукбангер и контент-криейтор. Люблю пробовать новую еду и делиться эмоциями с вами!
                </p>
                <p className="text-xl leading-relaxed text-muted-foreground">
                  На моём канале вы найдёте честные обзоры, яркие эмоции и море позитива. Присоединяйтесь к моему пищевому приключению!
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Users" className="text-primary" size={24} />
                    <span className="text-lg font-semibold">50K+ подписчиков</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Video" className="text-accent" size={24} />
                    <span className="text-lg font-semibold">200+ видео</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-12 text-center animate-fade-in">
            Портфолио
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                emoji: "🍔",
                title: "Гигантский бургер челлендж",
                views: "125K просмотров",
                color: "from-primary/20 to-primary/5"
              },
              {
                emoji: "🍕",
                title: "Пицца XXL за 10 минут",
                views: "98K просмотров",
                color: "from-accent/20 to-accent/5"
              },
              {
                emoji: "🍜",
                title: "Самая острая лапша",
                views: "156K просмотров",
                color: "from-secondary/20 to-secondary/5"
              },
              {
                emoji: "🌮",
                title: "20 тако за раз",
                views: "87K просмотров",
                color: "from-primary/20 to-primary/5"
              },
              {
                emoji: "🍣",
                title: "Суши-марафон",
                views: "142K просмотров",
                color: "from-accent/20 to-accent/5"
              },
              {
                emoji: "🍰",
                title: "Торт весом 5 кг",
                views: "201K просмотров",
                color: "from-secondary/20 to-secondary/5"
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="group cursor-pointer hover:scale-105 transition-all duration-300 animate-fade-in border-2 hover:border-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className={`aspect-video bg-gradient-to-br ${item.color} flex items-center justify-center text-8xl rounded-t-lg`}>
                    {item.emoji}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Eye" size={18} />
                      <span>{item.views}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 animate-fade-in">
              Свяжитесь со мной
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Готов к сотрудничеству и новым проектам!
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "Youtube", label: "YouTube", color: "hover:text-accent" },
                { icon: "Instagram", label: "Instagram", color: "hover:text-secondary" },
                { icon: "Send", label: "Telegram", color: "hover:text-primary" },
                { icon: "Mail", label: "Email", color: "hover:text-accent" }
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className="h-32 flex flex-col gap-3 border-2 hover:scale-110 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon name={social.icon} size={32} className={social.color} />
                  <span className="font-semibold">{social.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 ВАНЮША. Все права защищены.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Сделано с ❤️ и 🍕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;