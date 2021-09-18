class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here");
    this.input2 = createInput("Enter Correct Option No");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  setElementsStyle() {
    this.title.class("title");
    this.question.class("greeting");
    this.option1.class("greeting");
    this.option2.class("greeting");
    this.option3.class("greeting");
    this.option4.class("greeting");
    this.message.class("greeting");
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    // this.question("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    // this.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.html("Question:- WHAT IS THE BEST FEELING? " );
    // question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );

    this.question.position(150, 100);
    this.option1.html("1: When you finally get to sleep...  " );
    this.option1.position(150, 130);
    this.option2.html("2: When you get ready for a party!" );
    this.option2.position(150, 160);
    this.option3.html("3: When someone gets chai for you :) " );
    this.option3.position(150, 190);
    this.option4.html("4: When Vardaan submits atleast one project!!" );
    this.option4.position(150, 220);

    this.input1.position(200,300);
    this.input2.position(400,300);
    this.button.position(350, 340);

    this.button.mousePressed(()=>{
      
      this.message.html("Thank You, Your Answer Has Been Submitted");
      this.message.position(430, 360);

      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position();

      // this.message("Thank You, Your Answer Has Been Submitted");
      // this.message(350, 350);

      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position(350);


    });
    this.setElementsStyle();

  }
}
