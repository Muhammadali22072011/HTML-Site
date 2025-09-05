// Урок 1: Что такое компьютер?
const lesson1Content = {
    title: "Урок 1: Что такое компьютер?",
    duration: "60 минут",
    difficulty: "Начальный",
    age: "2-4 класс",
    content: `
        <div class="lesson-detail">
            <h2><i class="fas fa-desktop"></i> Что такое компьютер?</h2>
            <div class="lesson-meta">
                <span class="duration"><i class="fas fa-clock"></i> 60 минут</span>
                <span class="difficulty"><i class="fas fa-star"></i> Начальный</span>
                <span class="age"><i class="fas fa-child"></i> 2-4 класс</span>
            </div>
            
            <div class="media-section">
                <h3><i class="fas fa-video"></i> Вводное видео</h3>
                <div class="video-container">
                    <div class="video-placeholder">
                        <i class="fas fa-play-circle"></i>
                        <p>Видео: "Знакомство с компьютером" (5 минут)</p>
                        <small>Анимированное объяснение что такое компьютер и зачем он нужен</small>
                    </div>
                </div>
            </div>
            
            <div class="lesson-timeline">
                <h3><i class="fas fa-clock"></i> План урока по времени</h3>
                <div class="timeline">
                    <div class="timeline-item">
                        <span class="time">0-5 мин</span>
                        <span class="activity">Просмотр вводного видео</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">5-15 мин</span>
                        <span class="activity">Изучение частей компьютера с картинками</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">15-25 мин</span>
                        <span class="activity">Интерактивная игра "Найди и покажи"</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">25-35 мин</span>
                        <span class="activity">Практическое знакомство с устройствами</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">35-50 мин</span>
                        <span class="activity">Рисование и подписывание частей компьютера</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">50-60 мин</span>
                        <span class="activity">Викторина и подведение итогов</span>
                    </div>
                </div>
            </div>

            <div class="lesson-objectives">
                <h3><i class="fas fa-target"></i> Цели урока</h3>
                <ul>
                    <li>Понять, что такое компьютер простыми словами</li>
                    <li>Изучить основные части компьютера</li>
                    <li>Понять, зачем нужна каждая часть</li>
                    <li>Научиться правильно называть части компьютера</li>
                    <li>Попрактиковаться с реальными устройствами</li>
                    <li>Создать свой первый рисунок компьютера</li>
                </ul>
            </div>

            <div class="lesson-content-section">
                <h3><i class="fas fa-book"></i> Что мы изучаем</h3>
                
                <div class="image-gallery">
                    <h4><i class="fas fa-images"></i> Фотогалерея: Части компьютера</h4>
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <div class="image-placeholder">
                                <i class="fas fa-desktop"></i>
                                <p>Настольный компьютер</p>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <div class="image-placeholder">
                                <i class="fas fa-laptop"></i>
                                <p>Ноутбук</p>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <div class="image-placeholder">
                                <i class="fas fa-tablet-alt"></i>
                                <p>Планшет</p>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <div class="image-placeholder">
                                <i class="fas fa-mobile-alt"></i>
                                <p>Смартфон</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="computer-parts">
                    <div class="part-card detailed">
                        <div class="part-image">
                            <div class="image-placeholder">
                                <i class="fas fa-tv"></i>
                                <span>Фото монитора</span>
                            </div>
                        </div>
                        <div class="part-info">
                            <h4>Монитор (Экран)</h4>
                            <p>Это экран компьютера. Как телевизор, но для компьютера. На нём мы видим картинки, текст, игры.</p>
                            <div class="detailed-info">
                                <h5>Что можно увидеть на мониторе:</h5>
                                <ul>
                                    <li>🖼️ Картинки и фотографии</li>
                                    <li>📝 Тексты и буквы</li>
                                    <li>🎮 Игры и мультики</li>
                                    <li>🌐 Сайты в интернете</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="part-card detailed">
                        <div class="part-image">
                            <div class="image-placeholder">
                                <i class="fas fa-keyboard"></i>
                                <span>Фото клавиатуры</span>
                            </div>
                        </div>
                        <div class="part-info">
                            <h4>Клавиатура</h4>
                            <p>Много кнопок с буквами и цифрами. С её помощью мы печатаем слова.</p>
                            <div class="detailed-info">
                                <h5>Что есть на клавиатуре:</h5>
                                <ul>
                                    <li>🔤 Буквы (А, Б, В... и A, B, C...)</li>
                                    <li>🔢 Цифры (1, 2, 3, 4, 5...)</li>
                                    <li>⌨️ Специальные кнопки (Пробел, Enter)</li>
                                    <li>🎯 Стрелки для движения</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="part-card detailed">
                        <div class="part-image">
                            <div class="image-placeholder">
                                <i class="fas fa-mouse"></i>
                                <span>Фото компьютерной мыши</span>
                            </div>
                        </div>
                        <div class="part-info">
                            <h4>Компьютерная мышь</h4>
                            <p>Маленькое устройство, которое помещается в руку. Помогает нам указывать на что-то на экране.</p>
                            <div class="detailed-info">
                                <h5>Что можно делать мышью:</h5>
                                <ul>
                                    <li>👆 Нажимать на кнопки</li>
                                    <li>🎯 Указывать на картинки</li>
                                    <li>🎨 Рисовать линии</li>
                                    <li>📁 Открывать папки</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="activities">
                <h3><i class="fas fa-gamepad"></i> Интерактивные задания (20 минут)</h3>
                
                <div class="activity-section">
                    <h4>🎮 Игра 1: "Найди и покажи" (5 минут)</h4>
                    <div class="game-instructions">
                        <p><strong>Правила:</strong> Учитель называет часть компьютера, дети показывают на неё</p>
                        <div class="game-items">
                            <div class="game-item">
                                <span class="item-name">"Покажи монитор!"</span>
                                <span class="expected-action">Дети показывают на экран</span>
                            </div>
                            <div class="game-item">
                                <span class="item-name">"Где клавиатура?"</span>
                                <span class="expected-action">Показывают на кнопки с буквами</span>
                            </div>
                            <div class="game-item">
                                <span class="item-name">"Найди мышь!"</span>
                                <span class="expected-action">Показывают на маленькое устройство</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="activity-section">
                    <h4>🧩 Игра 2: "Компьютерные загадки" (5 минут)</h4>
                    <div class="riddles-list">
                        <div class="riddle">
                            <p class="riddle-text">"У него есть экран, но это не телевизор. Что это?"</p>
                            <p class="riddle-answer">Ответ: Монитор/Компьютер</p>
                        </div>
                        <div class="riddle">
                            <p class="riddle-text">"Много кнопочек с буквами, нажимаешь - появляются слова."</p>
                            <p class="riddle-answer">Ответ: Клавиатура</p>
                        </div>
                        <div class="riddle">
                            <p class="riddle-text">"Маленькая, в руке лежит, по экрану бежит."</p>
                            <p class="riddle-answer">Ответ: Мышь</p>
                        </div>
                    </div>
                </div>
                
                <div class="activity-section">
                    <h4>🎨 Творческое задание: "Мой компьютер" (10 минут)</h4>
                    <div class="drawing-task">
                        <p><strong>Задание:</strong> Нарисовать компьютер и подписать его части</p>
                        <div class="drawing-steps">
                            <div class="step">
                                <span class="step-number">1</span>
                                <span class="step-text">Нарисуй прямоугольник (монитор)</span>
                            </div>
                            <div class="step">
                                <span class="step-number">2</span>
                                <span class="step-text">Нарисуй плоскую коробку (клавиатура)</span>
                            </div>
                            <div class="step">
                                <span class="step-number">3</span>
                                <span class="step-text">Нарисуй маленький овал (мышь)</span>
                            </div>
                            <div class="step">
                                <span class="step-number">4</span>
                                <span class="step-text">Подпиши каждую часть</span>
                            </div>
                            <div class="step">
                                <span class="step-number">5</span>
                                <span class="step-text">Раскрась и укрась как хочешь!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h3><i class="fas fa-question-circle"></i> Мини-викторина (10 минут)</h3>
                <div class="quiz-questions">
                    <div class="question">
                        <p><strong>1.</strong> На чём мы смотрим картинки?</p>
                        <div class="answers">
                            <span class="correct">Монитор</span>
                            <span>Клавиатура</span>
                            <span>Мышь</span>
                        </div>
                    </div>
                    <div class="question">
                        <p><strong>2.</strong> Чем мы печатаем слова?</p>
                        <div class="answers">
                            <span>Монитор</span>
                            <span class="correct">Клавиатура</span>
                            <span>Мышь</span>
                        </div>
                    </div>
                    <div class="question">
                        <p><strong>3.</strong> Что помогает указывать на экране?</p>
                        <div class="answers">
                            <span>Монитор</span>
                            <span>Клавиатура</span>
                            <span class="correct">Мышь</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="homework">
                <h3><i class="fas fa-home"></i> Домашнее задание</h3>
                <div class="homework-task">
                    <p>🔍 Найди дома компьютер, планшет или ноутбук.</p>
                    <p>👩‍👧‍👦 Покажи родителям:</p>
                    <ul>
                        <li>Где монитор (экран)</li>
                        <li>Где можно печатать</li>
                        <li>Что похоже на мышь</li>
                    </ul>
                    <p>📝 Расскажи им всё, что узнал на уроке!</p>
                </div>
            </div>
        </div>
    `
};