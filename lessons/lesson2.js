// Урок 2: Работа с мышью
const lesson2Content = {
    title: "Урок 2: Работа с мышью",
    duration: "60 минут",
    difficulty: "Начальный",
    age: "2-4 класс",
    content: `
        <div class="lesson-detail">
            <h2><i class="fas fa-mouse"></i> Работа с мышью</h2>
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
                        <p>Видео: "Как правильно держать мышь" (5 минут)</p>
                        <small>Показываем правильное положение руки и пальцев</small>
                    </div>
                </div>
            </div>
            
            <div class="lesson-timeline">
                <h3><i class="fas fa-clock"></i> План урока по времени</h3>
                <div class="timeline">
                    <div class="timeline-item">
                        <span class="time">0-5 мин</span>
                        <span class="activity">Повторение прошлого урока</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">5-10 мин</span>
                        <span class="activity">Просмотр обучающего видео</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">10-25 мин</span>
                        <span class="activity">Освоение видов кликов с практикой</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">25-45 мин</span>
                        <span class="activity">Игры-тренажёры на меткость</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">45-55 мин</span>
                        <span class="activity">Самостоятельные упражнения</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">55-60 мин</span>
                        <span class="activity">Подведение итогов и самооценка</span>
                    </div>
                </div>
            </div>
            
            <div class="lesson-objectives">
                <h3><i class="fas fa-target"></i> Цели урока</h3>
                <ul>
                    <li>Научиться правильно держать мышь</li>
                    <li>Освоить один клик левой кнопкой</li>
                    <li>Понять разницу между одним и двойным кликом</li>
                    <li>Научиться перетаскивать объекты</li>
                    <li>Попрактиковаться в различных играх</li>
                    <li>Оценить свои навыки работы с мышью</li>
                </ul>
            </div>

            <div class="lesson-content-section">
                <h3><i class="fas fa-hand-paper"></i> Как правильно держать мышь</h3>
                
                <div class="image-gallery">
                    <h4><i class="fas fa-images"></i> Фотогалерея: Правильные положения</h4>
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <div class="image-placeholder">
                                <i class="fas fa-hand-pointer"></i>
                                <p>Положение руки</p>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <div class="image-placeholder">
                                <i class="fas fa-mouse"></i>
                                <p>Позиция пальцев</p>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <div class="image-placeholder">
                                <i class="fas fa-desktop"></i>
                                <p>Посадка за столом</p>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <div class="image-placeholder">
                                <i class="fas fa-times-circle"></i>
                                <p>Неправильное положение</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="mouse-technique">
                    <div class="technique-card">
                        <h4>Правильное положение руки</h4>
                        <ul>
                            <li>👋 Ладонь лежит на мыши удобно</li>
                            <li>☝️ Указательный палец на левой кнопке</li>
                            <li>🖐️ Средний палец на правой кнопке</li>
                            <li>🤔 Запястье на столе, не висит в воздухе</li>
                            <li>✨ Рука расслаблена, не напряжена</li>
                        </ul>
                    </div>
                </div>

                <h3><i class="fas fa-mouse-pointer"></i> Виды кликов</h3>
                
                <div class="click-types">
                    <div class="click-card">
                        <div class="click-icon">👆</div>
                        <h4>Один клик</h4>
                        <p>Один раз быстро нажали и отпустили левую кнопку</p>
                        <div class="when-use"><strong>Когда используем:</strong> Выбрать картинку, нажать кнопку</div>
                    </div>

                    <div class="click-card">
                        <div class="click-icon">👆👆</div>
                        <h4>Двойной клик</h4>
                        <p>Два раза быстро-быстро нажали левую кнопку</p>
                        <div class="when-use"><strong>Когда используем:</strong> Открыть программу, открыть папку</div>
                    </div>

                    <div class="click-card">
                        <div class="click-icon">🤏</div>
                        <h4>Перетаскивание</h4>
                        <p>Нажали кнопку, не отпускаем, двигаем мышь, потом отпускаем</p>
                        <div class="when-use"><strong>Когда используем:</strong> Перемещать картинки, рисовать</div>
                    </div>
                </div>
            </div>
            
            <div class="games-section">
                <h3><i class="fas fa-gamepad"></i> Игры-тренажёры (20 минут)</h3>
                
                <div class="training-games">
                    <div class="game-card">
                        <h4>🎯 Игра "Попади в цель" (5 минут)</h4>
                        <p>На экране появляются большие кружки. Нужно кликнуть по ним один раз.</p>
                        <div class="game-goal">Цель: Научиться точно кликать</div>
                        <div class="game-levels">
                            <p><strong>Уровни:</strong></p>
                            <ul>
                                <li>Лёгкий: Кружки размером с мяч</li>
                                <li>Средний: Кружки размером с яблоко</li>
                                <li>Сложный: Кружки размером с монетку</li>
                            </ul>
                        </div>
                    </div>

                    <div class="game-card">
                        <h4>🏠 Игра "Открой домик" (5 минут)</h4>
                        <p>На экране картинки домиков. Двойной клик открывает домик и показывает, кто в нём живёт.</p>
                        <div class="game-goal">Цель: Освоить двойной клик</div>
                        <div class="surprises">
                            <p><strong>Кто может выйти из домика:</strong></p>
                            <span>🐱 Котик</span>
                            <span>🐶 Собачка</span>
                            <span>🐰 Зайчик</span>
                            <span>🐼 Мишка</span>
                        </div>
                    </div>

                    <div class="game-card">
                        <h4>🧩 Игра "Собери пазл" (5 минут)</h4>
                        <p>Перетаскиваем кусочки пазла на правильные места.</p>
                        <div class="game-goal">Цель: Научиться перетаскивать</div>
                        <div class="puzzle-themes">
                            <p><strong>Темы пазлов:</strong></p>
                            <ul>
                                <li>🌈 Радуга (4 кусочка)</li>
                                <li>🎄 Ёлочка (6 кусочков)</li>
                                <li>🏠 Домик (9 кусочков)</li>
                            </ul>
                        </div>
                    </div>

                    <div class="game-card">
                        <h4>🎨 Игра "Раскраска" (5 минут)</h4>
                        <p>Выбираем цвет одним кликом, рисуем перетаскиванием.</p>
                        <div class="game-goal">Цель: Комбинировать разные виды кликов</div>
                        <div class="coloring-options">
                            <p><strong>Что можно раскрашивать:</strong></p>
                            <ul>
                                <li>🐱 Котики и собачки</li>
                                <li>🌼 Цветы и бабочки</li>
                                <li>🚗 Машинки и самолёты</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="practice-tips">
                <h3><i class="fas fa-lightbulb"></i> Советы для тренировки</h3>
                <ul>
                    <li>Начинаем с больших объектов, потом переходим к маленьким</li>
                    <li>Не спешим - точность важнее скорости</li>
                    <li>Делаем перерывы, чтобы рука не уставала</li>
                    <li>Хвалим себя за каждое попадание!</li>
                </ul>
            </div>

            <div class="assessment">
                <h3><i class="fas fa-check-circle"></i> Проверяем себя (5 минут)</h3>
                <div class="checklist">
                    <label><input type="checkbox"> Умею правильно держать мышь</label>
                    <label><input type="checkbox"> Могу кликнуть один раз точно по цели</label>
                    <label><input type="checkbox"> Умею делать двойной клик</label>
                    <label><input type="checkbox"> Могу перетащить картинку</label>
                    <label><input type="checkbox"> Понимаю, когда использовать какой клик</label>
                </div>
            </div>

            <div class="homework">
                <h3><i class="fas fa-home"></i> Домашнее задание</h3>
                <div class="homework-task">
                    <p>🖱️ Попроси родителей показать тебе мышь и попробуй покликать по разным кнопкам на экране.</p>
                    <p>🎯 Попрактикуйся кликать по большим кнопкам в интернете или играх.</p>
                    <p>📝 Расскажи, что нового ты узнал о мыши!</p>
                </div>
            </div>
        </div>
    `
};