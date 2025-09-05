// Урок 5: Файлы и папки
const lesson5Content = {
    title: "Урок 5: Файлы и папки",
    duration: "60 минут",
    difficulty: "Начальный",
    age: "2-4 класс",
    content: `
        <div class="lesson-detail">
            <h2><i class="fas fa-folder"></i> Файлы и папки</h2>
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
                        <p>Видео: "Что такое файлы и папки" (7 минут)</p>
                        <small>Объясняем файловую систему простыми словами</small>
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
                        <span class="activity">Понятие файлов и папок</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">20-35 мин</span>
                        <span class="activity">Создаём первый файл</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">35-50 мин</span>
                        <span class="activity">Сохраняем и находим файлы</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">50-60 мин</span>
                        <span class="activity">Создаём папку "Мои работы"</span>
                    </div>
                </div>
            </div>
            
            <div class="lesson-objectives">
                <h3><i class="fas fa-target"></i> Цели урока</h3>
                <ul>
                    <li>Понять, что такое файл и папка</li>
                    <li>Научиться создавать и сохранять файл</li>
                    <li>Освоить поиск файлов на компьютере</li>
                    <li>Создать свою первую папку</li>
                    <li>Научиться наводить порядок в файлах</li>
                    <li>Понять важность организации документов</li>
                </ul>
            </div>

            <div class="lesson-content-section">
                <h3><i class="fas fa-question-circle"></i> Что такое файл и папка?</h3>
                
                <div class="analogy-section">
                    <div class="analogy-card">
                        <div class="analogy-icon">📄</div>
                        <h4>Файл = Лист бумаги</h4>
                        <p>Файл - это как лист бумаги, на котором что-то написано или нарисовано</p>
                        <div class="examples">
                            <strong>Примеры файлов:</strong>
                            <ul>
                                <li>📝 Текст (рассказ, письмо)</li>
                                <li>🖼️ Картинка (рисунок, фото)</li>
                                <li>🎵 Музыка (песня)</li>
                                <li>🎬 Видео (мультфильм)</li>
                            </ul>
                        </div>
                    </div>

                    <div class="analogy-card">
                        <div class="analogy-icon">📁</div>
                        <h4>Папка = Коробка</h4>
                        <p>Папка - это как коробка, куда мы складываем листы бумаги (файлы)</p>
                        <div class="examples">
                            <strong>Примеры папок:</strong>
                            <ul>
                                <li>📚 "Школа" (все школьные работы)</li>
                                <li>🎮 "Игры" (все игры)</li>
                                <li>📸 "Фото" (все фотографии)</li>
                                <li>🎨 "Рисунки" (все рисунки)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="file-types">
                    <h4><i class="fas fa-file-alt"></i> Виды файлов</h4>
                    <div class="file-grid">
                        <div class="file-type">
                            <div class="file-icon">📝</div>
                            <h5>Текстовые файлы</h5>
                            <p>Заканчиваются на .txt или .doc</p>
                        </div>
                        <div class="file-type">
                            <div class="file-icon">🖼️</div>
                            <h5>Картинки</h5>
                            <p>Заканчиваются на .jpg или .png</p>
                        </div>
                        <div class="file-type">
                            <div class="file-icon">🎵</div>
                            <h5>Музыка</h5>
                            <p>Заканчиваются на .mp3</p>
                        </div>
                        <div class="file-type">
                            <div class="file-icon">🎬</div>
                            <h5>Видео</h5>
                            <p>Заканчиваются на .mp4</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="practice-section">
                <h3><i class="fas fa-hands-helping"></i> Практическая работа</h3>
                
                <div class="practice-exercises">
                    <div class="exercise">
                        <h4>Упражнение 1: Создаём первый файл (15 минут)</h4>
                        <div class="steps">
                            <div class="step">
                                <span class="step-number">1</span>
                                <div class="step-content">
                                    <strong>Открываем блокнот</strong>
                                    <p>Нажми кнопку "Пуск" и найди программу "Блокнот"</p>
                                </div>
                            </div>
                            <div class="step">
                                <span class="step-number">2</span>
                                <div class="step-content">
                                    <strong>Пишем текст</strong>
                                    <p>Напиши: "Меня зовут [твоё имя]. Сегодня я учусь работать с файлами."</p>
                                </div>
                            </div>
                            <div class="step">
                                <span class="step-number">3</span>
                                <div class="step-content">
                                    <strong>Сохраняем файл</strong>
                                    <p>Нажми Ctrl+S (или Файл → Сохранить)</p>
                                </div>
                            </div>
                            <div class="step">
                                <span class="step-number">4</span>
                                <div class="step-content">
                                    <strong>Даём имя файлу</strong>
                                    <p>Назови файл "Мой первый файл"</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="exercise">
                        <h4>Упражнение 2: Создаём папку (15 минут)</h4>
                        <div class="steps">
                            <div class="step">
                                <span class="step-number">1</span>
                                <div class="step-content">
                                    <strong>Открываем рабочий стол</strong>
                                    <p>Нажми правой кнопкой мыши на пустом месте рабочего стола</p>
                                </div>
                            </div>
                            <div class="step">
                                <span class="step-number">2</span>
                                <div class="step-content">
                                    <strong>Создаём папку</strong>
                                    <p>Выбери "Создать" → "Папку"</p>
                                </div>
                            </div>
                            <div class="step">
                                <span class="step-number">3</span>
                                <div class="step-content">
                                    <strong>Называем папку</strong>
                                    <p>Назови папку "Мои работы"</p>
                                </div>
                            </div>
                            <div class="step">
                                <span class="step-number">4</span>
                                <div class="step-content">
                                    <strong>Открываем папку</strong>
                                    <p>Дважды кликни по папке, чтобы открыть её</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="organization-game">
                <h3><i class="fas fa-gamepad"></i> Игра "Наводим порядок" (10 минут)</h3>
                <div class="game-description">
                    <p><strong>Правила игры:</strong> У нас есть много разных файлов, и нужно их рассортировать по правильным папкам!</p>
                    
                    <div class="sorting-activity">
                        <h4>Файлы для сортировки:</h4>
                        <div class="files-to-sort">
                            <span class="file-item">📝 Сочинение.txt</span>
                            <span class="file-item">🖼️ Котик.jpg</span>
                            <span class="file-item">🎵 Песенка.mp3</span>
                            <span class="file-item">📝 Домашка.doc</span>
                            <span class="file-item">🖼️ Семья.png</span>
                            <span class="file-item">🎬 Мультик.mp4</span>
                        </div>
                        
                        <h4>Папки:</h4>
                        <div class="target-folders">
                            <div class="folder-box">
                                <i class="fas fa-folder"></i>
                                <span>Школа</span>
                            </div>
                            <div class="folder-box">
                                <i class="fas fa-folder"></i>
                                <span>Картинки</span>
                            </div>
                            <div class="folder-box">
                                <i class="fas fa-folder"></i>
                                <span>Музыка</span>
                            </div>
                            <div class="folder-box">
                                <i class="fas fa-folder"></i>
                                <span>Видео</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="important-rules">
                <h3><i class="fas fa-exclamation-triangle"></i> Важные правила</h3>
                <div class="rules-grid">
                    <div class="rule-item">
                        <i class="fas fa-check-circle"></i>
                        <span>Давай файлам понятные имена</span>
                    </div>
                    <div class="rule-item">
                        <i class="fas fa-check-circle"></i>
                        <span>Сохраняй работы сразу после создания</span>
                    </div>
                    <div class="rule-item">
                        <i class="fas fa-check-circle"></i>
                        <span>Создавай папки для разных видов файлов</span>
                    </div>
                    <div class="rule-item">
                        <i class="fas fa-check-circle"></i>
                        <span>Не удаляй файлы, если не уверен</span>
                    </div>
                </div>
            </div>

            <div class="assessment">
                <h3><i class="fas fa-check-circle"></i> Проверяем себя</h3>
                <div class="checklist">
                    <label><input type="checkbox"> Понимаю, что такое файл</label>
                    <label><input type="checkbox"> Понимаю, что такое папка</label>
                    <label><input type="checkbox"> Умею создавать и сохранять файлы</label>
                    <label><input type="checkbox"> Могу создать новую папку</label>
                    <label><input type="checkbox"> Знаю, как навести порядок в файлах</label>
                    <label><input type="checkbox"> Могу найти свой файл на компьютере</label>
                </div>
            </div>

            <div class="homework">
                <h3><i class="fas fa-home"></i> Домашнее задание</h3>
                <div class="homework-task">
                    <p>📁 Создай дома папку "Моё обучение"</p>
                    <p>📝 Сохрани в неё свой файл из урока</p>
                    <p>🏠 Покажи родителям, как ты научился создавать файлы и папки!</p>
                </div>
            </div>
        </div>
    `
};