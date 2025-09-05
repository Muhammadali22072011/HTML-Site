// Урок 4: Печатаем предложения
const lesson4Content = {
    title: "Урок 4: Печатаем предложения",
    duration: "60 минут",
    difficulty: "Начальный",
    age: "2-4 класс",
    content: `
        <div class="lesson-detail">
            <h2><i class="fas fa-pencil-alt"></i> Печатаем предложения</h2>
            <div class="lesson-meta">
                <span class="duration"><i class="fas fa-clock"></i> 60 минут</span>
                <span class="difficulty"><i class="fas fa-star"></i> Начальный</span>
                <span class="age"><i class="fas fa-child"></i> 2-4 класс</span>
            </div>
            
            <div class="media-section">
                <h3><i class="fas fa-video"></i> Обучающее видео</h3>
                <div class="video-container">
                    <div class="video-placeholder">
                        <i class="fas fa-play-circle"></i>
                        <p>Видео: "Учимся печатать о себе" (6 минут)</p>
                        <small>Правила написания предложений и использование пробелов</small>
                    </div>
                </div>
            </div>
            
            <div class="lesson-timeline">
                <h3><i class="fas fa-clock"></i> План урока по времени</h3>
                <div class="timeline">
                    <div class="timeline-item">
                        <span class="time">0-6 мин</span>
                        <span class="activity">Просмотр обучающего видео</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">6-15 мин</span>
                        <span class="activity">Правила написания предложений</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">15-30 мин</span>
                        <span class="activity">Печатаем предложения о себе</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">30-45 мин</span>
                        <span class="activity">Рассказ о семье и друзьях</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">45-60 мин</span>
                        <span class="activity">Создаём свою первую страничку</span>
                    </div>
                </div>
            </div>
            
            <div class="lesson-objectives">
                <h3><i class="fas fa-target"></i> Цели урока</h3>
                <ul>
                    <li>Научиться печатать целые предложения</li>
                    <li>Освоить правило: один пробел между словами</li>
                    <li>Понять, как строить простые предложения</li>
                    <li>Рассказать о себе с помощью компьютера</li>
                    <li>Создать свою первую личную страничку</li>
                    <li>Научиться исправлять ошибки аккуратно</li>
                </ul>
            </div>

            <div class="lesson-content-section">
                <h3><i class="fas fa-book"></i> Правила написания предложений</h3>
                
                <div class="rules-section">
                    <div class="rule-card">
                        <div class="rule-icon">✏️</div>
                        <h4>Правило 1: Начинаем с заглавной буквы</h4>
                        <p>Каждое предложение начинается с большой буквы.</p>
                        <div class="rule-example">
                            <strong>Правильно:</strong> <span class="correct">Меня зовут Маша.</span><br>
                            <strong>Неправильно:</strong> <span class="wrong">меня зовут Маша.</span>
                        </div>
                    </div>

                    <div class="rule-card">
                        <div class="rule-icon">🔤</div>
                        <h4>Правило 2: Один пробел между словами</h4>
                        <p>Между словами делаем только один пробел.</p>
                        <div class="rule-example">
                            <strong>Правильно:</strong> <span class="correct">Я учусь в школе.</span><br>
                            <strong>Неправильно:</strong> <span class="wrong">Я  учусь  в  школе.</span>
                        </div>
                    </div>

                    <div class="rule-card">
                        <div class="rule-icon">📝</div>
                        <h4>Правило 3: Заканчиваем точкой</h4>
                        <p>В конце предложения ставим точку.</p>
                        <div class="rule-example">
                            <strong>Правильно:</strong> <span class="correct">У меня есть кот.</span><br>
                            <strong>Неправильно:</strong> <span class="wrong">У меня есть кот</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="practice-section">
                <h3><i class="fas fa-keyboard"></i> Практика печатания (30 минут)</h3>
                
                <div class="practice-exercises">
                    <div class="exercise">
                        <h4>Упражнение 1: Рассказ о себе (10 минут)</h4>
                        <p><strong>Задание:</strong> Напечатай 4-5 предложений о себе</p>
                        <div class="template">
                            <h5>Шаблон для заполнения:</h5>
                            <div class="template-text">
                                Меня зовут _______.<br>
                                Мне _______ лет.<br>
                                Я учусь в _______ классе.<br>
                                Моё любимое занятие - _______.<br>
                                У меня есть _______.
                            </div>
                        </div>
                        <div class="example-text">
                            <h5>Пример:</h5>
                            <div class="text-example">
                                Меня зовут Саша.<br>
                                Мне 8 лет.<br>
                                Я учусь во втором классе.<br>
                                Моё любимое занятие - рисование.<br>
                                У меня есть собака.
                            </div>
                        </div>
                    </div>

                    <div class="exercise">
                        <h4>Упражнение 2: Моя семья (10 минут)</h4>
                        <p><strong>Задание:</strong> Расскажи о своей семье</p>
                        <div class="template">
                            <h5>Помощные фразы:</h5>
                            <ul>
                                <li>В нашей семье ... человек</li>
                                <li>Мою маму зовут ...</li>
                                <li>Мой папа работает ...</li>
                                <li>У меня есть брат/сестра ...</li>
                                <li>Мы любим вместе ...</li>
                            </ul>
                        </div>
                    </div>

                    <div class="exercise">
                        <h4>Упражнение 3: Мои увлечения (10 минут)</h4>
                        <p><strong>Задание:</strong> Напиши о том, что ты любишь делать</p>
                        <div class="template">
                            <h5>Идеи для предложений:</h5>
                            <ul>
                                <li>Я люблю играть в ...</li>
                                <li>Мой любимый мультфильм ...</li>
                                <li>В свободное время я ...</li>
                                <li>Мне нравится есть ...</li>
                                <li>Я хочу научиться ...</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="creative-section">
                <h3><i class="fas fa-star"></i> Творческое задание: "Моя страничка" (15 минут)</h3>
                <div class="creative-task">
                    <p><strong>Задание:</strong> Создай свою первую личную страничку</p>
                    <div class="page-structure">
                        <h4>Структура странички:</h4>
                        <div class="structure-item">
                            <span class="item-number">1</span>
                            <div class="item-content">
                                <strong>Заголовок:</strong> МОЯ СТРАНИЧКА
                            </div>
                        </div>
                        <div class="structure-item">
                            <span class="item-number">2</span>
                            <div class="item-content">
                                <strong>О себе:</strong> 3-4 предложения
                            </div>
                        </div>
                        <div class="structure-item">
                            <span class="item-number">3</span>
                            <div class="item-content">
                                <strong>Моя семья:</strong> 2-3 предложения
                            </div>
                        </div>
                        <div class="structure-item">
                            <span class="item-number">4</span>
                            <div class="item-content">
                                <strong>Мои увлечения:</strong> 2-3 предложения
                            </div>
                        </div>
                        <div class="structure-item">
                            <span class="item-number">5</span>
                            <div class="item-content">
                                <strong>Подпись:</strong> Автор: [твоё имя]
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="error-correction">
                <h3><i class="fas fa-tools"></i> Как аккуратно исправлять ошибки</h3>
                <div class="correction-tips">
                    <div class="tip">
                        <h4>Совет 1: Не торопись исправлять</h4>
                        <p>Прочитай предложение целиком, найди ошибку глазами</p>
                    </div>
                    <div class="tip">
                        <h4>Совет 2: Backspace - твой друг</h4>
                        <p>Нажимай Backspace столько раз, сколько букв нужно стереть</p>
                    </div>
                    <div class="tip">
                        <h4>Совет 3: Проверяй пробелы</h4>
                        <p>Между словами должен быть только один пробел</p>
                    </div>
                    <div class="tip">
                        <h4>Совет 4: Читай вслух</h4>
                        <p>Прочитай написанное вслух - так легче найти ошибки</p>
                    </div>
                </div>
            </div>

            <div class="assessment">
                <h3><i class="fas fa-check-circle"></i> Проверяем себя</h3>
                <div class="checklist">
                    <label><input type="checkbox"> Умею печатать целые предложения</label>
                    <label><input type="checkbox"> Делаю один пробел между словами</label>
                    <label><input type="checkbox"> Начинаю предложения с заглавной буквы</label>
                    <label><input type="checkbox"> Ставлю точку в конце предложения</label>
                    <label><input type="checkbox"> Могу рассказать о себе на компьютере</label>
                    <label><input type="checkbox"> Умею аккуратно исправлять ошибки</label>
                </div>
            </div>

            <div class="homework">
                <h3><i class="fas fa-home"></i> Домашнее задание</h3>
                <div class="homework-task">
                    <p>📝 Дома попробуй написать ещё 3 предложения:</p>
                    <ul>
                        <li>О своём любимом дне недели</li>
                        <li>О своей любимой еде</li>
                        <li>О том, кем ты хочешь стать</li>
                    </ul>
                    <p>👨‍👩‍👧‍👦 Покажи родителям свою страничку и прочитай её вслух!</p>
                </div>
            </div>
        </div>
    `
};