import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [activeTab, setActiveTab] = useState('mission');

  const events = [
    { id: 1, date: '10.12.2025', time: '10:00', title: 'Общее собрание', department: 'Все отделы' },
    { id: 2, date: '11.12.2025', time: '14:00', title: 'Планерка IT-отдела', department: 'IT' },
    { id: 3, date: '12.12.2025', time: '11:00', title: 'Совещание по проекту', department: 'Разработка' },
    { id: 4, date: '15.12.2025', time: '09:00', title: 'Встреча с клиентом', department: 'Продажи' },
  ];

  const departments = [
    { name: 'Отдел разработки', head: 'Иванов И.И.', employees: 12, icon: 'Code' },
    { name: 'Отдел продаж', head: 'Петрова А.С.', employees: 8, icon: 'TrendingUp' },
    { name: 'IT-отдел', head: 'Сидоров П.К.', employees: 6, icon: 'Server' },
    { name: 'Бухгалтерия', head: 'Смирнова О.В.', employees: 4, icon: 'Calculator' },
  ];

  const instructions = [
    { id: 1, title: 'Инструкция по работе с CRM', category: 'Продажи' },
    { id: 2, title: 'Правила безопасности', category: 'Общее' },
    { id: 3, title: 'Работа с корпоративной почтой', category: 'IT' },
    { id: 4, title: 'Оформление командировок', category: 'Кадры' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-card backdrop-blur supports-[backdrop-filter]:bg-card/95">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Building2" className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">КорпПортал</span>
          </div>
          <nav className="flex gap-6">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'about' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              О компании
            </button>
            <button
              onClick={() => scrollToSection('departments')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'departments' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Отделы
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Контакты
            </button>
            <button
              onClick={() => scrollToSection('instructions')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'instructions' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Инструкции
            </button>
          </nav>
        </div>
      </header>

      <main className="container py-8">
        <section id="home" className="mb-16">
          <div className="rounded-lg bg-gradient-to-r from-primary to-accent p-12 text-center text-white">
            <h1 className="mb-4 text-4xl font-bold">Добро пожаловать в корпоративный портал</h1>
            <p className="mx-auto max-w-2xl text-lg opacity-90">
              Централизованная система управления информацией, расписанием и документами компании
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Calendar" className="h-5 w-5 text-primary" />
                  Календарь событий
                </CardTitle>
                <CardDescription>Декабрь 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border p-4">
                  <div className="mb-4 text-center font-semibold text-primary">Декабрь 2025</div>
                  <div className="grid grid-cols-7 gap-2 text-center text-sm">
                    {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day) => (
                      <div key={day} className="font-medium text-muted-foreground">
                        {day}
                      </div>
                    ))}
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].map((day) => (
                      <div
                        key={day}
                        className={`rounded-md p-2 ${
                          day === 8 ? 'bg-primary text-white' : 'hover:bg-secondary'
                        } ${[10, 11, 12, 15].includes(day) ? 'font-bold text-accent' : ''}`}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Clock" className="h-5 w-5 text-primary" />
                  Ближайшие встречи
                </CardTitle>
                <CardDescription>Расписание на ближайшие дни</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map((event) => (
                    <div key={event.id} className="flex items-start justify-between rounded-lg border p-3">
                      <div>
                        <p className="font-medium">{event.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {event.date} в {event.time}
                        </p>
                      </div>
                      <Badge variant="secondary">{event.department}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="about" className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Info" className="h-5 w-5 text-primary" />
                О компании
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-2 border-b">
                  <button
                    onClick={() => setActiveTab('mission')}
                    className={`px-4 py-2 font-medium ${
                      activeTab === 'mission'
                        ? 'border-b-2 border-primary text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Миссия
                  </button>
                  <button
                    onClick={() => setActiveTab('values')}
                    className={`px-4 py-2 font-medium ${
                      activeTab === 'values'
                        ? 'border-b-2 border-primary text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Ценности
                  </button>
                  <button
                    onClick={() => setActiveTab('history')}
                    className={`px-4 py-2 font-medium ${
                      activeTab === 'history'
                        ? 'border-b-2 border-primary text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    История
                  </button>
                </div>

                <div className="pt-4">
                  {activeTab === 'mission' && (
                    <p className="text-muted-foreground">
                      Наша компания стремится предоставлять высококачественные технологические решения, которые
                      помогают бизнесу расти и развиваться. Мы создаём инновационные продукты, ориентированные на
                      потребности клиентов.
                    </p>
                  )}
                  {activeTab === 'values' && (
                    <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                      <li>Профессионализм и ответственность</li>
                      <li>Инновации и постоянное развитие</li>
                      <li>Командная работа и взаимопомощь</li>
                      <li>Ориентация на результат</li>
                    </ul>
                  )}
                  {activeTab === 'history' && (
                    <p className="text-muted-foreground">
                      Компания основана в 2010 году. За 15 лет работы мы выросли от небольшого стартапа до крупного
                      предприятия с филиалами в 5 городах России. Сегодня в нашей команде работает более 200
                      специалистов.
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="departments" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">Структура отделов</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {departments.map((dept, index) => (
              <Card key={index} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name={dept.icon as any} className="h-5 w-5 text-primary" />
                    {dept.name}
                  </CardTitle>
                  <CardDescription>Руководитель: {dept.head}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Количество сотрудников</span>
                    <Badge variant="outline">{dept.employees} чел.</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contacts" className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Phone" className="h-5 w-5 text-primary" />
                Контактная информация
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 font-semibold">Главный офис</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <Icon name="MapPin" className="h-4 w-4" />
                      г. Москва, ул. Тверская, д. 10
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Phone" className="h-4 w-4" />
                      +7 (495) 123-45-67
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Mail" className="h-4 w-4" />
                      info@company.ru
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Режим работы</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Понедельник - Пятница: 9:00 - 18:00</p>
                    <p>Суббота - Воскресенье: выходной</p>
                  </div>
                  <Button className="mt-4">
                    <Icon name="MessageSquare" className="mr-2 h-4 w-4" />
                    Написать в поддержку
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="instructions" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">База знаний и инструкции</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {instructions.map((instruction) => (
                  <div
                    key={instruction.id}
                    className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-secondary"
                  >
                    <div className="flex items-center gap-3">
                      <Icon name="FileText" className="h-5 w-5 text-primary" />
                      <span className="font-medium">{instruction.title}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{instruction.category}</Badge>
                      <Button variant="ghost" size="sm">
                        <Icon name="ChevronRight" className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t bg-card py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 Корпоративный портал. Все права защищены.</p>
          <p className="mt-2">Внутренняя информационная система организации</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;