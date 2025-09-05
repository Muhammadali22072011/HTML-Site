// Урок 3: Знакомство с клавиатурой
const lesson3Content = {
    title: "Урок 3: Знакомство с клавиатурой",
    duration: "60 минут",
    difficulty: "Начальный", 
    age: "2-4 класс",
    content: `
        <div class="lesson-detail">
            <h2><i class="fas fa-keyboard"></i> Знакомство с клавиатурой</h2>
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
                        <p>Видео: "Путешествие по клавиатуре" (7 минут)</p>
                        <small>Интерактивная экскурсия по кнопкам клавиатуры</small>
                    </div>
                </div>
            </div>
            
            <div class="lesson-timeline">
                <h3><i class="fas fa-clock"></i> План урока по времени</h3>
                <div class="timeline">
                    <div class="timeline-item">
                        <span class="time">0-7 мин</span>
                        <span class="activity">Просмотр обучающего видео</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">7-20 мин</span>
                        <span class="activity">Изучение групп клавиш с примерами</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">20-35 мин</span>
                        <span class="activity">Игра "Напечатай слово" (4 уровня)</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">35-50 мин</span>
                        <span class="activity">Практика печатания простых предложений</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">50-60 мин</span>
                        <span class="activity">Создание своего первого текста</span>
                    </div>
                </div>
            </div>
            
            <div class="lesson-objectives">
                <h3><i class="fas fa-target"></i> Цели урока</h3>
                <ul>
                    <li>Изучить расположение букв на клавиатуре</li>
                    <li>Найти цифры и основные символы</li>
                    <li>Освоить клавишу пробел и Enter</li>
                    <li>Попрактиковаться в печатании простых слов</li>
                    <li>Научиться исправлять ошибки с Backspace</li>
                    <li>Создать свой первый текст о себе</li>
                </ul>
            </div>

            <div class="lesson-content-section">
                <h3><i class="fas fa-search"></i> Изучаем клавиатуру</h3>
                
                <div class="image-gallery">
                    <h4><i class="fas fa-images"></i> Фотогалерея: Виды клавиатур</h4>
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <div class="image-placeholder">
                                <i class="fas fa-keyboard"></i>
                                <p>Обычная клавиатура</p>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <div class="image-placeholder">
                                <i class="fas fa-laptop"></i>
                                <p>Клавиатура ноутбука</p>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <div class="image-placeholder">
                                <i class="fas fa-tablet-alt"></i>
                                <p>Виртуальная клавиатура</p>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <div class="image-placeholder">
                                <i class="fas fa-mobile-alt"></i>
                                <p>Клавиатура телефона</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="keyboard-layout">
                    <h4>Основные группы клавиш</h4>
                    
                    <div class="key-groups">
                        <div class="key-group">
                            <div class="group-icon">🔤</div>
                            <h5>Буквы</h5>
                            <p>Русские буквы: А, Б, В, Г, Д... (как в алфавите)</p>
                            <p>Английские буквы: A, B, C, D, E...</p>
                            <div class="tip">Совет: Сначала изучаем русские буквы</div>
                            <div class="letter-examples">
                                <h6>Найди эти буквы на клавиатуре:</h6>
                                <div class="letter-grid">
                                    <span class="letter">А</span>
                                    <span class="letter">О</span>
                                    <span class="letter">И</span>
                                    <span class="letter">Е</span>
                                    <span class="letter">У</span>
                                    <span class="letter">Я</span>
                                </div>
                            </div>
                        </div>

                        <div class="key-group">
                            <div class="group-icon">🔢</div>
                            <h5>Цифры</h5>
                            <p>Вверху клавиатуры: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0</p>
                            <div class="tip">Совет: Цифры всегда в одном ряду сверху</div>
                            <div class="number-examples">
                                <h6>Попробуй найти:</h6>
                                <div class="number-grid">
                                    <span class="number">1</span>
                                    <span class="number">2</span>
                                    <span class="number">3</span>
                                    <span class="number">5</span>
                                    <span class="number">7</span>
                                    <span class="number">0</span>
                                </div>
                            </div>
                        </div>

                        <div class="key-group">
                            <div class="group-icon">⌨️</div>
                            <h5>Особые клавиши</h5>
                            <div class="special-keys">
                                <div class="special-key">
                                    <strong>Пробел</strong> - самая длинная клавиша внизу
                                    <div class="key-function">Делает пробел между словами</div>
                                </div>
                                <div class="special-key">
                                    <strong>Enter</strong> - переход на новую строку
                                    <div class="key-function">Как нажать на "готово"</div>
                                </div>
                                <div class="special-key">
                                    <strong>Backspace</strong> - стирает последнюю букву
                                    <div class="key-function">Исправляет ошибки</div>
                                </div>
                                <div class="special-key">
                                    <strong>Shift</strong> - делает буквы большими
                                    <div class="key-function">Для заглавных букв</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="games-section">
                <h3><i class="fas fa-gamepad"></i> Игра "Напечатай слово" (15 минут)</h3>
                
                <div class="typing-games">
                    <div class="game-level">
                        <h4>Уровень 1: Простые буквы (3 минуты)</h4>
                        <div class="words-to-type">
                            <span class="word">А</span>
                            <span class="word">О</span>
                            <span class="word">И</span>
                            <span class="word">Е</span>
                            <span class="word">У</span>
                            <span class="word">Я</span>
                        </div>
                        <p>Находим и нажимаем по одной букве</p>
                        <div class="level-tip">💡 Совет: Не торопись, найди букву глазами, потом нажми</div>
                    </div>

                    <div class="game-level">
                        <h4>Уровень 2: Короткие слова (4 минуты)</h4>
                        <div class="words-to-type">
                            <span class="word">ДОМ</span>
                            <span class="word">КОТ</span>
                            <span class="word">МИР</span>
                            <span class="word">СОН</span>
                            <span class="word">МАК</span>
                            <span class="word">ЛУК</span>
                        </div>
                        <p>Печатаем простые слова из 3 букв</p>
                        <div class="level-tip">💡 Совет: Произноси слово вслух, пока печатаешь</div>
                    </div>

                    <div class="game-level">
                        <h4>Уровень 3: Слова с пробелом (4 минуты)</h4>
                        <div class="words-to-type">
                            <span class="word">Я ЕМ</span>
                            <span class="word">МОЙ ДОМ</span>
                            <span class="word">МАМА ДОМА</span>
                            <span class="word">ЛЮБЛЮ КОТА</span>
                        </div>
                        <p>Учимся использовать пробел между словами</p>
                        <div class="level-tip">💡 Совет: Пробел - самая длинная кнопка внизу</div>
                    </div>

                    <div class="game-level">
                        <h4>Уровень 4: Цифры и слова (4 минуты)</h4>
                        <div class="words-to-type">
                            <span class="word">1 2 3</span>
                            <span class="word">МНЕ 7 ЛЕТ</span>
                            <span class="word">У МЕНЯ 2 КОТА</span>
                            <span class="word">В ДОМЕ 5 ОКОН</span>
                        </div>
                        <p>Добавляем цифры в наши предложения</p>
                        <div class="level-tip">💡 Совет: Цифры находятся в верхнем ряду</div>
                    </div>
                </div>
            </div>

            <div class="practice-section">
                <h3><i class="fas fa-pencil-alt"></i> Практика печатания (15 минут)</h3>
                
                <div class="practice-exercises">
                    <div class="exercise">
                        <h4>Упражнение 1: О себе (5 минут)</h4>
                        <p><strong>Задание:</strong> Напечатай короткий рассказ о себе</p>
                        <div class="example-text">
                            <h5>Пример:</h5>
                            <div class="text-example">
                                МЕНЯ ЗОВУТ МАША.<br>
                                МНЕ 8 ЛЕТ.<br>
                                Я УЧУСЬ В ШКОЛЕ.<br>
                                У МЕНЯ ЕСТЬ КОТ.
                            </div>
                        </div>
                        <div class="writing-tips">
                            <h6>Подсказки для написания:</h6>
                            <ul>
                                <li>Напиши своё имя</li>
                                <li>Сколько тебе лет</li>
                                <li>Где ты учишься</li>
                                <li>Есть ли у тебя домашние животные</li>
                            </ul>
                        </div>
                    </div>

                    <div class="exercise">
                        <h4>Упражнение 2: Моя семья (5 минут)</h4>
                        <p><strong>Задание:</strong> Расскажи о своей семье</p>
                        <div class="example-text">
                            <h5>Пример:</h5>
                            <div class="text-example">
                                МАМА РАБОТАЕТ.<br>
                                ПАПА ДОБРЫЙ.<br>
                                У МЕНЯ ЕСТЬ БРАТ.<br>
                                МЫ ДРУЖНАЯ СЕМЬЯ.
                            </div>
                        </div>
                    </div>

                    <div class="exercise">
                        <h4>Упражнение 3: Мои увлечения (5 минут)</h4>
                        <p><strong>Задание:</strong> Напиши, что ты любишь делать</p>
                        <div class="example-text">
                            <h5>Пример:</h5>
                            <div class="text-example">
                                Я ЛЮБЛЮ РИСОВАТЬ.<br>
                                МНЕ НРАВИТСЯ ЧИТАТЬ.<br>
                                Я ИГРАЮ В ФУТБОЛ.<br>
                                ЛЮБЛЮ МОРОЖЕНОЕ.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="error-correction">
                <h3><i class="fas fa-eraser"></i> Как исправлять ошибки</h3>
                <div class="correction-steps">
                    <div class="step">
                        <span class="step-number">1</span>
                        <span class="step-text">Заметил ошибку? Не паникуй!</span>
                    </div>
                    <div class="step">
                        <span class="step-number">2</span>
                        <span class="step-text">Найди кнопку Backspace (обычно справа вверху)</span>
                    </div>
                    <div class="step">
                        <span class="step-number">3</span>
                        <span class="step-text">Нажми её - последняя буква исчезнет</span>
                    </div>
                    <div class="step">
                        <span class="step-number">4</span>
                        <span class="step-text">Напечатай правильную букву</span>
                    </div>
                </div>
            </div>

            <div class="assessment">
                <h3><i class="fas fa-check-circle"></i> Проверяем себя</h3>
                <div class="checklist">
                    <label><input type="checkbox"> Умею находить буквы на клавиатуре</label>
                    <label><input type="checkbox"> Могу напечатать простое слово</label>
                    <label><input type="checkbox"> Знаю, где находится пробел</label>
                    <label><input type="checkbox"> Умею использовать Backspace для исправления ошибок</label>
                    <label><input type="checkbox"> Могу напечатать предложение о себе</label>
                </div>
            </div>

            <div class="homework">
                <h3><i class="fas fa-home"></i> Домашнее задание</h3>
                <div class="homework-task">
                    <p>⌨️ Попроси родителей показать клавиатуру и найди на ней:</p>
                    <ul>
                        <li>Первую букву своего имени</li>
                        <li>Цифру, которая показывает твой возраст</li>
                        <li>Кнопку пробел</li>
                    </ul>
                    <p>📝 Попробуй напечатать своё имя на компьютере или планшете!</p>
                </div>
            </div>
        </div>
    `
};