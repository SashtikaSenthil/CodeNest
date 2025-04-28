// Sample flashcards (10 cards)
let flashcards = [
    {
      question: "What is the correct keyword to define a function in Python?",
      options: ["function", "def", "define", "fun"],
      answer: "def"
    },
    {
      question: "Which data type is immutable in Python?",
      options: ["List", "Dictionary", "Tuple", "Set"],
      answer: "Tuple"
    },
    {
      question: "Which operator is used for exponentiation in Python?",
      options: ["^", "**", "//", "%"],
      answer: "**"
    },
    {
      question: "What is used to comment in Python?",
      options: ["//", "#", "/*", "<!--"],
      answer: "#"
    },
    {
      question: "Which of the following is not a Python data type?",
      options: ["int", "str", "float", "char"],
      answer: "char"
    },
    {
      question: "Which keyword is used to create a class in Python?",
      options: ["class", "def", "create", "structure"],
      answer: "class"
    },
    {
      question: "What is the correct syntax to import a module in Python?",
      options: ["import module", "import module()", "from module import", "from module() import"],
      answer: "import module"
    },
    {
      question: "What is the output of print(2 + 3 * 4) in Python?",
      options: ["14", "20", "18", "10"],
      answer: "14"
    },
    {
      question: "What method is used to remove an item from a list in Python?",
      options: ["remove()", "pop()", "del", "all of the above"],
      answer: "all of the above"
    },
    {
      question: "How do you declare a dictionary in Python?",
      options: ["{}", "[]", "()", "dict()"],
      answer: "{}"
    }
  ];
  
  let currentCard = 0;
  let score = 0;
  
  // Shuffle flashcards
  function shuffleFlashcards() {
    flashcards.sort(() => Math.random() - 0.5);
  }
  
  // Start flashcards after intro
  function startFlashcards() {
    document.getElementById('topicInfo').style.display = 'none';
    document.getElementById('flashcardBox').style.display = 'block';
    document.getElementById('navButtons').style.display = 'block';
    shuffleFlashcards();
    displayCard();
  }
  
  function displayCard() {
    const card = flashcards[currentCard];
    const flashcardBox = document.getElementById('flashcardBox');
    
    // Display the current question number
    flashcardBox.innerHTML = `
      <div class="question-number">Question ${currentCard + 1} of ${flashcards.length}</div>
      <h2>${card.question}</h2>
      ${card.options.map(option => 
        `<button class="option-btn" onclick="selectAnswer('${option}')">${option}</button>`
      ).join('')}
    `;
    
    // Hide Prev button on first flashcard
    document.getElementById('prevBtn').style.display = currentCard === 0 ? 'none' : 'inline-block';
    
    // Update Progress Bar
    const progress = ((currentCard + 1) / flashcards.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
  }
  
  function selectAnswer(selectedOption) {
    const correct = flashcards[currentCard].answer;
    if (selectedOption === correct) {
      score++;
    }
    nextCard();
  }
  
  function nextCard() {
    if (currentCard < flashcards.length - 1) {
      currentCard++;
      displayCard();
    } else {
      showScore();
    }
  }
  
  function prevCard() {
    if (currentCard > 0) {
      currentCard--;
      displayCard();
    }
  }
  
  function showScore() {
    document.getElementById('flashcardBox').style.display = 'none';
    document.getElementById('navButtons').style.display = 'none';
    document.getElementById('scoreBox').style.display = 'block';
    document.getElementById('finalScore').innerText = `${score} / ${flashcards.length}`;
  }
  
  // Set Topic Title
  const selectedTopic = localStorage.getItem('selectedTopic');
  document.getElementById('topicTitle').innerText = selectedTopic ? `Flashcards: ${selectedTopic}` : "Flashcards";