// Урок 10: Игра «Вопрос-ответ»
const lesson10Content = {
    title: "Урок 10: Игра «Вопрос-ответ»",
    duration: "60 минут",
    difficulty: "Начальный",
    age: "2-4 класс",
    content: `
        <div class="lesson-detail">
            <h2><i class="fas fa-question-circle"></i> Игра «Вопрос-ответ»</h2>
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
                        <p>Видео: "Как задавать хорошие вопросы" (6 минут)</p>
                        <small>Учимся формулировать понятные и интересные вопросы</small>
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
                        <span class="activity">Учимся задавать понятные вопросы</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">15-35 мин</span>
                        <span class="activity">Играем в "Вопрос-ответ" с ChatGPT</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">35-50 мин</span>
                        <span class="activity">Командные игры и соревнования</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">50-60 мин</span>
                        <span class="activity">Обмен лучшими вопросами</span>
                    </div>
                </div>
            </div>
            
            <div class="lesson-objectives">
                <h3><i class="fas fa-target"></i> Цели урока</h3>
                <ul>
                    <li>Научиться задавать понятные вопросы ChatGPT</li>
                    <li>Понять, какие вопросы дают интересные ответы</li>
                    <li>Освоить разные типы вопросов</li>
                    <li>Играть в командные игры с ChatGPT</li>
                    <li>Учиться на примерах других учеников</li>
                    <li>Развить любознательность и интерес к обучению</li>
                </ul>
            </div>

            <div class="lesson-content-section">
                <h3><i class="fas fa-lightbulb"></i> Как задавать хорошие вопросы</h3>
                
                <div class="question-types">
                    <h4>Типы вопросов:</h4>
                    <div class="types-grid">
                        <div class="type-card">
                            <div class="type-icon">❓</div>
                            <h5>Что это?</h5>
                            <p>Вопросы для объяснения</p>
                            <div class="type-examples">
                                <strong>Примеры:</strong>
                                <ul>
                                    <li>"Что такое радуга?"</li>
                                    <li>"Что едят слоны?"</li>
                                    <li>"Что происходит зимой?"</li>
                                </ul>
                            </div>
                        </div>

                        <div class="type-card">
                            <div class="type-icon">🤔</div>
                            <h5>Как это работает?</h5>
                            <p>Вопросы про процессы</p>
                            <div class="type-examples">
                                <strong>Примеры:</strong>
                                <ul>
                                    <li>"Как летает самолёт?"</li>
                                    <li>"Как растут цветы?"</li>
                                    <li>"Как работает телевизор?"</li>
                                </ul>
                            </div>
                        </div>

                        <div class="type-card">
                            <div class="type-icon">🌟</div>
                            <h5>Почему так?</h5>
                            <p>Вопросы про причины</p>
                            <div class="type-examples">
                                <strong>Примеры:</strong>
                                <ul>
                                    <li>"Почему идёт дождь?"</li>
                                    <li>"Почему кошки мурлычут?"</li>
                                    <li>"Почему небо голубое?"</li>
                                </ul>
                            </div>
                        </div>

                        <div class="type-card">
                            <div class="type-icon">📍</div>
                            <h5>Где и когда?</h5>
                            <p>Вопросы про место и время</p>
                            <div class="type-examples">
                                <strong>Примеры:</strong>
                                <ul>
                                    <li>"Где живут пингвины?"</li>
                                    <li>"Когда цветут яблони?"</li>
                                    <li>"Где находится Луна?"</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="good-vs-bad">
                    <h4>Хорошие и плохие вопросы:</h4>
                    <div class="comparison-container">
                        <div class="good-questions">
                            <h5>✅ Хорошие вопросы</h5>
                            <div class="question-examples">
                                <div class="example-item">
                                    <strong>Вопрос:</strong> "Расскажи интересные факты про дельфинов"<br>
                                    <strong>Почему хорошо:</strong> Понятно, конкретно, интересно
                                </div>
                                <div class="example-item">
                                    <strong>Вопрос:</strong> "Как научиться рисовать животных?"<br>
                                    <strong>Почему хорошо:</strong> Практический, полезный
                                </div>
                                <div class="example-item">
                                    <strong>Вопрос:</strong> "Придумай весёлую игру для детей"<br>
                                    <strong>Почему хорошо:</strong> Творческий, активный
                                </div>
                            </div>
                        </div>

                        <div class="bad-questions">
                            <h5>❌ Неудачные вопросы</h5>
                            <div class="question-examples">
                                <div class="example-item">
                                    <strong>Вопрос:</strong> "Расскажи всё"<br>
                                    <strong>Почему плохо:</strong> Слишком общий, непонятный
                                </div>
                                <div class="example-item">
                                    <strong>Вопрос:</strong> "Да или нет?"<br>
                                    <strong>Почему плохо:</strong> Слишком простой ответ
                                </div>
                                <div class="example-item">
                                    <strong>Вопрос:</strong> "Ответь быстро!"<br>
                                    <strong>Почему плохо:</strong> Не вежливо
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="game-section">
                <h3><i class="fas fa-gamepad"></i> Играем с ChatGPT</h3>
                
                <div class="game-rounds">
                    <div class="game-round">
                        <h4>🎯 Раунд 1: "Угадай животное" (10 минут)</h4>
                        <div class="game-description">
                            <p><strong>Правила:</strong> Опиши животное ChatGPT и попроси угадать, кто это</p>
                            <div class="game-example">
                                <h5>Пример:</h5>
                                <div class="dialogue">
                                    <div class="user-message">
                                        <strong>Ученик:</strong> "Угадай животное: оно большое, серое, с длинным носом, живёт в Африке"
                                    </div>
                                    <div class="ai-message">
                                        <strong>ChatGPT:</strong> "Это слон! У слонов действительно длинный нос - хобот, и они живут в Африке."
                                    </div>
                                </div>
                            </div>
                            <div class="game-ideas">
                                <h5>Идеи животных для описания:</h5>
                                <span>🦒 Жираф</span>
                                <span>🐧 Пингвин</span>
                                <span>🦘 Кенгуру</span>
                                <span>🐨 Коала</span>
                                <span>🦋 Бабочка</span>
                            </div>
                        </div>
                    </div>

                    <div class="game-round">
                        <h4>🌈 Раунд 2: "Объясни как ребёнку" (10 минут)</h4>
                        <div class="game-description">
                            <p><strong>Правила:</strong> Попроси ChatGPT объяснить сложные вещи простыми словами</p>
                            <div class="game-example">
                                <h5>Пример:</h5>
                                <div class="dialogue">
                                    <div class="user-message">
                                        <strong>Ученик:</strong> "Объясни простыми словами, почему меняются времена года"
                                    </div>
                                    <div class="ai-message">
                                        <strong>ChatGPT:</strong> "Представь, что Земля - это мячик, который крутится вокруг лампочки (Солнца). Когда мячик поворачивается..."
                                    </div>
                                </div>
                            </div>
                            <div class="topics-to-ask">
                                <h5>Темы для объяснения:</h5>
                                <ul>
                                    <li>🌙 Почему бывает день и ночь</li>
                                    <li>🌧️ Откуда берутся облака</li>
                                    <li>🌈 Как появляется радуга</li>
                                    <li>⚡ Что такое электричество</li>
                                    <li>🎵 Как работает музыка</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="game-round">
                        <h4>✨ Раунд 3: "Волшебные 'что если'" (10 минут)</h4>
                        <div class="game-description">
                            <p><strong>Правила:</strong> Задавай фантастические вопросы "Что если..."</p>
                            <div class="game-example">
                                <h5>Пример:</h5>
                                <div class="dialogue">
                                    <div class="user-message">
                                        <strong>Ученик:</strong> "Что если бы животные умели говорить как люди?"
                                    </div>
                                    <div class="ai-message">
                                        <strong>ChatGPT:</strong> "Это было бы удивительно! Мы могли бы узнать, о чём думают кошки, что чувствуют собаки..."
                                    </div>
                                </div>
                            </div>
                            <div class="what-if-ideas">
                                <h5>Идеи для "Что если":</h5>
                                <ul>
                                    <li>🏰 Что если бы дома были из конфет?</li>
                                    <li>🚗 Что если бы машины летали?</li>
                                    <li>🌈 Что если бы дождь был разноцветным?</li>
                                    <li>🎪 Что если бы все были клоунами?</li>
                                    <li>🎂 Что если бы деревья росли пирожными?</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="team-games">
                <h3><i class="fas fa-users"></i> Командные игры</h3>
                
                <div class="team-activities">
                    <div class="team-game">
                        <h4>🏆 "Лучший вопрос"</h4>
                        <div class="game-rules">
                            <p><strong>Правила:</strong></p>
                            <ul>
                                <li>Каждый ученик задаёт один вопрос ChatGPT</li>
                                <li>Все слушают ответы</li>
                                <li>Голосуем за самый интересный вопрос</li>
                                <li>Победитель получает звание "Лучший исследователь"</li>
                            </ul>
                        </div>
                    </div>

                    <div class="team-game">
                        <h4>🎭 "Цепочка вопросов"</h4>
                        <div class="game-rules">
                            <p><strong>Правила:</strong></p>
                            <ul>
                                <li>Первый ученик задаёт вопрос ChatGPT</li>
                                <li>Следующий ученик задаёт вопрос про ответ ChatGPT</li>
                                <li>Так продолжаем цепочку из 5-6 вопросов</li>
                                <li>Смотрим, к какой теме мы пришли!</li>
                            </ul>
                        </div>
                        <div class="chain-example">
                            <h5>Пример цепочки:</h5>
                            <ol>
                                <li>"Что едят слоны?" → "Траву и фрукты"</li>
                                <li>"Какие фрукты самые сладкие?" → "Манго, бананы..."</li>
                                <li>"Где растут бананы?" → "В тропических странах"</li>
                                <li>"Что такое тропики?" → "Жаркие места на Земле"</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div class="question-collection">
                <h3><i class="fas fa-star"></i> Коллекция лучших вопросов</h3>
                
                <div class="categories">
                    <div class="question-category">
                        <h4>🔬 Наука и природа</h4>
                        <ul>
                            <li>"Как дышат рыбы под водой?"</li>
                            <li>"Почему листья зелёные?"</li>
                            <li>"Что внутри планет?"</li>
                            <li>"Как птицы знают, куда лететь?"</li>
                        </ul>
                    </div>

                    <div class="question-category">
                        <h4>🎨 Творчество и искусство</h4>
                        <ul>
                            <li>"Придумай новую игру с мячом"</li>
                            <li>"Как нарисовать красивый закат?"</li>
                            <li>"Сочини песенку про дождик"</li>
                            <li>"Какие поделки можно сделать из бумаги?"</li>
                        </ul>
                    </div>

                    <div class="question-category">
                        <h4>🌍 Мир и люди</h4>
                        <ul>
                            <li>"Как живут дети в других странах?"</li>
                            <li>"Какие бывают профессии?"</li>
                            <li>"Как люди придумали письменность?"</li>
                            <li>"Что такое дружба?"</li>
                        </ul>
                    </div>

                    <div class="question-category">
                        <h4>🎮 Игры и развлечения</h4>
                        <ul>
                            <li>"Придумай загадку про школу"</li>
                            <li>"Какие игры можно играть зимой?"</li>
                            <li>"Расскажи смешную историю"</li>
                            <li>"Как устроить квест дома?"</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="assessment">
                <h3><i class="fas fa-check-circle"></i> Проверяем себя</h3>
                <div class="checklist">
                    <label><input type="checkbox"> Умею задавать понятные вопросы</label>
                    <label><input type="checkbox"> Знаю разные типы вопросов</label>
                    <label><input type="checkbox"> Могу играть в "Вопрос-ответ" с ChatGPT</label>
                    <label><input type="checkbox"> Участвовал в командных играх</label>
                    <label><input type="checkbox"> Придумал свой интересный вопрос</label>
                    <label><input type="checkbox"> Понимаю, как получать лучшие ответы</label>
                </div>
            </div>

            <div class="homework">
                <h3><i class="fas fa-home"></i> Домашнее задание</h3>
                <div class="homework-task">
                    <p>❓ Придумай дома 5 интересных вопросов для ChatGPT</p>
                    <p>👨‍👩‍👧‍👦 Поиграй с родителями в "Угадай животное"</p>
                    <p>📝 Запиши самый интересный ответ, который ты получил сегодня</p>
                    <p>🌟 Подумай о вопросе типа "Что если...", который ты хочешь задать</p>
                </div>
            </div>
        </div>
    `
};