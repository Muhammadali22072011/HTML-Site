// Урок 8: Форматирование текста
const lesson8Content = {
    title: "Урок 8: Форматирование текста",
    duration: "60 минут",
    difficulty: "Начальный",
    age: "2-4 класс",
    content: `
        <div class="lesson-detail">
            <h2><i class="fas fa-font"></i> Форматирование текста</h2>
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
                        <p>Видео: "Делаем текст красивым" (6 минут)</p>
                        <small>Основы форматирования: шрифт, размер, цвет</small>
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
                        <span class="time">6-20 мин</span>
                        <span class="activity">Изучаем инструменты форматирования</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">20-40 мин</span>
                        <span class="activity">Практика: делаем красивый текст</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">40-55 мин</span>
                        <span class="activity">Создаём красивое объявление</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">55-60 мин</span>
                        <span class="activity">Презентация работ</span>
                    </div>
                </div>
            </div>
            
            <div class="lesson-objectives">
                <h3><i class="fas fa-target"></i> Цели урока</h3>
                <ul>
                    <li>Научиться изменять шрифт и размер текста</li>
                    <li>Освоить выделение текста жирным и курсивом</li>
                    <li>Понять, как менять цвет текста</li>
                    <li>Научиться выравнивать текст</li>
                    <li>Создать красивое объявление</li>
                    <li>Понять, когда использовать разные стили</li>
                </ul>
            </div>

            <div class="lesson-content-section">
                <h3><i class="fas fa-toolbox"></i> Инструменты форматирования</h3>
                
                <div class="formatting-tools">
                    <div class="tool-category">
                        <h4>🔤 Шрифт и размер</h4>
                        <div class="tools-grid">
                            <div class="tool-item">
                                <div class="tool-icon">🔤</div>
                                <h5>Выбор шрифта</h5>
                                <p>Times New Roman, Arial, Comic Sans</p>
                                <div class="tool-demo">
                                    <span style="font-family: 'Times New Roman';">Times New Roman</span><br>
                                    <span style="font-family: Arial;">Arial</span><br>
                                    <span style="font-family: 'Comic Sans MS';">Comic Sans</span>
                                </div>
                            </div>
                            <div class="tool-item">
                                <div class="tool-icon">📏</div>
                                <h5>Размер шрифта</h5>
                                <p>Маленький, средний, большой</p>
                                <div class="tool-demo">
                                    <span style="font-size: 12px;">Маленький (12)</span><br>
                                    <span style="font-size: 16px;">Средний (16)</span><br>
                                    <span style="font-size: 24px;">Большой (24)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tool-category">
                        <h4>💪 Стили текста</h4>
                        <div class="tools-grid">
                            <div class="tool-item">
                                <div class="tool-icon">💪</div>
                                <h5>Жирный (Bold)</h5>
                                <p>Ctrl + B или кнопка B</p>
                                <div class="tool-demo">
                                    <span style="font-weight: bold;">Жирный текст</span>
                                </div>
                            </div>
                            <div class="tool-item">
                                <div class="tool-icon">📝</div>
                                <h5>Курсив (Italic)</h5>
                                <p>Ctrl + I или кнопка I</p>
                                <div class="tool-demo">
                                    <span style="font-style: italic;">Курсивный текст</span>
                                </div>
                            </div>
                            <div class="tool-item">
                                <div class="tool-icon">⚡</div>
                                <h5>Подчёркнутый</h5>
                                <p>Ctrl + U или кнопка U</p>
                                <div class="tool-demo">
                                    <span style="text-decoration: underline;">Подчёркнутый текст</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tool-category">
                        <h4>🎨 Цвета и выравнивание</h4>
                        <div class="tools-grid">
                            <div class="tool-item">
                                <div class="tool-icon">🎨</div>
                                <h5>Цвет текста</h5>
                                <p>Кнопка "A" с цветной линией</p>
                                <div class="tool-demo">
                                    <span style="color: red;">Красный</span>
                                    <span style="color: blue;">Синий</span>
                                    <span style="color: green;">Зелёный</span>
                                </div>
                            </div>
                            <div class="tool-item">
                                <div class="tool-icon">📐</div>
                                <h5>Выравнивание</h5>
                                <p>По левому краю, по центру, по правому краю</p>
                                <div class="tool-demo">
                                    <div style="text-align: left;">Слева</div>
                                    <div style="text-align: center;">По центру</div>
                                    <div style="text-align: right;">Справа</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="practice-section">
                <h3><i class="fas fa-dumbbell"></i> Практические упражнения</h3>
                
                <div class="practice-exercises">
                    <div class="exercise">
                        <h4>Упражнение 1: Моя визитка (15 минут)</h4>
                        <div class="exercise-task">
                            <p><strong>Задание:</strong> Создай красивую визитку с информацией о себе</p>
                            <div class="template">
                                <h5>Что включить в визитку:</h5>
                                <ul>
                                    <li><strong>Имя:</strong> Большой жирный шрифт</li>
                                    <li><strong>Возраст:</strong> Обычный шрифт</li>
                                    <li><strong>Класс:</strong> Курсив</li>
                                    <li><strong>Увлечение:</strong> Цветной текст</li>
                                    <li><strong>Мечта:</strong> Подчёркнутый текст</li>
                                </ul>
                            </div>
                            <div class="example-card">
                                <h5>Пример визитки:</h5>
                                <div class="card-demo">
                                    <div style="font-size: 24px; font-weight: bold; text-align: center;">САША ПЕТРОВ</div>
                                    <div style="text-align: center;">8 лет</div>
                                    <div style="font-style: italic; text-align: center;">2 класс</div>
                                    <div style="color: blue; text-align: center;">Люблю рисовать</div>
                                    <div style="text-decoration: underline; text-align: center;">Хочу стать художником</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="exercise">
                        <h4>Упражнение 2: Красивое стихотворение (15 минут)</h4>
                        <div class="exercise-task">
                            <p><strong>Задание:</strong> Оформи любимое стихотворение красиво</p>
                            <div class="poetry-tips">
                                <h5>Советы по оформлению:</h5>
                                <ul>
                                    <li>Название - большим жирным шрифтом по центру</li>
                                    <li>Строки стихотворения - обычным шрифтом</li>
                                    <li>Автора - курсивом в конце</li>
                                    <li>Можно добавить цвета для настроения</li>
                                </ul>
                            </div>
                            <div class="poetry-example">
                                <h5>Пример оформления:</h5>
                                <div class="poem-demo">
                                    <div style="font-size: 20px; font-weight: bold; text-align: center; color: orange;">ОСЕНЬ</div>
                                    <br>
                                    <div>Листья жёлтые кружатся,</div>
                                    <div>На дорожки ложатся.</div>
                                    <div style="color: brown;">Дождик тихо стучит,</div>
                                    <div style="color: brown;">Осень в гости спешит.</div>
                                    <br>
                                    <div style="font-style: italic; text-align: right;">А. Пушкин</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="creative-section">
                <h3><i class="fas fa-star"></i> Творческий проект: Объявление (15 минут)</h3>
                <div class="creative-task">
                    <p><strong>Задание:</strong> Создай красивое объявление для школьной доски</p>
                    
                    <div class="announcement-themes">
                        <h4>Темы объявлений на выбор:</h4>
                        <div class="themes-list">
                            <div class="theme-option">
                                <i class="fas fa-birthday-cake"></i>
                                <span>Приглашение на день рождения</span>
                            </div>
                            <div class="theme-option">
                                <i class="fas fa-gamepad"></i>
                                <span>Приглашение поиграть</span>
                            </div>
                            <div class="theme-option">
                                <i class="fas fa-book"></i>
                                <span>Объявление о кружке</span>
                            </div>
                            <div class="theme-option">
                                <i class="fas fa-paw"></i>
                                <span>Объявление о потерянном питомце</span>
                            </div>
                            <div class="theme-option">
                                <i class="fas fa-theater-masks"></i>
                                <span>Приглашение на спектакль</span>
                            </div>
                        </div>
                    </div>

                    <div class="announcement-structure">
                        <h4>Структура объявления:</h4>
                        <div class="structure-parts">
                            <div class="part-item">
                                <span class="part-number">1</span>
                                <div class="part-content">
                                    <strong>ЗАГОЛОВОК</strong>
                                    <p>Большими жирными буквами, по центру</p>
                                </div>
                            </div>
                            <div class="part-item">
                                <span class="part-number">2</span>
                                <div class="part-content">
                                    <strong>Основная информация</strong>
                                    <p>Что, где, когда - обычным шрифтом</p>
                                </div>
                            </div>
                            <div class="part-item">
                                <span class="part-number">3</span>
                                <div class="part-content">
                                    <strong>Важные детали</strong>
                                    <p>Цветным или подчёркнутым текстом</p>
                                </div>
                            </div>
                            <div class="part-item">
                                <span class="part-number">4</span>
                                <div class="part-content">
                                    <strong>Контакты</strong>
                                    <p>Курсивом в конце</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="announcement-example">
                        <h4>Пример объявления:</h4>
                        <div class="example-announcement">
                            <div style="font-size: 24px; font-weight: bold; text-align: center; color: purple;">
                                ПРИГЛАШАЕМ НА ДЕНЬ РОЖДЕНИЯ!
                            </div>
                            <br>
                            <div style="text-align: center;">
                                Маша отмечает свой 8-й день рождения<br>
                                15 октября в 15:00<br>
                                у неё дома (улица Весёлая, дом 5)
                            </div>
                            <br>
                            <div style="color: red; text-align: center;">
                                Будут торт, игры и подарки!
                            </div>
                            <br>
                            <div style="font-style: italic; text-align: center;">
                                Звоните: 123-45-67
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="formatting-rules">
                <h3><i class="fas fa-lightbulb"></i> Правила красивого текста</h3>
                <div class="rules-list">
                    <div class="rule-item">
                        <i class="fas fa-check-circle"></i>
                        <div class="rule-content">
                            <h5>Не переборщи с цветами</h5>
                            <p>Используй 2-3 цвета максимум</p>
                        </div>
                    </div>
                    <div class="rule-item">
                        <i class="fas fa-check-circle"></i>
                        <div class="rule-content">
                            <h5>Заголовки - крупнее</h5>
                            <p>Заголовки должны быть больше основного текста</p>
                        </div>
                    </div>
                    <div class="rule-item">
                        <i class="fas fa-check-circle"></i>
                        <div class="rule-content">
                            <h5>Важное - выделяй</h5>
                            <p>Самую важную информацию делай жирной или цветной</p>
                        </div>
                    </div>
                    <div class="rule-item">
                        <i class="fas fa-check-circle"></i>
                        <div class="rule-content">
                            <h5>Читаемость важнее красоты</h5>
                            <p>Текст должен быть легко читаемым</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="assessment">
                <h3><i class="fas fa-check-circle"></i> Проверяем себя</h3>
                <div class="checklist">
                    <label><input type="checkbox"> Умею менять шрифт и размер текста</label>
                    <label><input type="checkbox"> Знаю, как сделать текст жирным и курсивным</label>
                    <label><input type="checkbox"> Могу изменить цвет текста</label>
                    <label><input type="checkbox"> Умею выравнивать текст по центру</label>
                    <label><input type="checkbox"> Создал красивое объявление</label>
                    <label><input type="checkbox"> Понимаю правила красивого оформления</label>
                </div>
            </div>

            <div class="homework">
                <h3><i class="fas fa-home"></i> Домашнее задание</h3>
                <div class="homework-task">
                    <p>🎨 Создай дома красивую поздравительную открытку в Word</p>
                    <p>📝 Используй разные цвета, размеры и стили текста</p>
                    <p>👨‍👩‍👧‍👦 Покажи родителям, что ты научился делать</p>
                    <p>🎯 Попробуй использовать комбинации Ctrl+B, Ctrl+I, Ctrl+U</p>
                </div>
            </div>
        </div>
    `
};