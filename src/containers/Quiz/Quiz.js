import React from "react";
import classes from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
    state = {
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                question: 'What is the color of the sky',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'Black', id: 1},
                    {text: 'Blue', id: 2},
                    {text: 'Green', id: 3 },
                    {text: 'Red', id: 4},
                ]
            },
            {
                question: 'When the Uzbekistan became independent',
                rightAnswerId: 2,
                id: 2,
                answers: [
                    {text: '1990', id: 1},
                    {text: '1991', id: 2},
                    {text: '1992', id: 3 },
                    {text: '1993', id: 4},
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {
        const question = this.state.quiz[this.state.activeQuestion];

        if (question.rightAnswerId === answerId) {
            this.setState({
                answerState: {[answerId]: 'success'}
            });

            const timeout = setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('finished')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    });
                }

                clearTimeout(timeout);
            }, 1000)
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            });
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    render() {
        return (
            <div className={classes.Quiz}>


                <div className={classes.QuizWrapper}>
                    <h1>Give your answers</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                    />
                </div>
            </div>
        );
    }
}

export default Quiz;