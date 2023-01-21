import React,{useState} from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

const FirstQuiz  = () => {
    const [points,addPoint] = useState<number>(0)
    const [value,setValue] = useState<string[]>([])

    // const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue((value) => (event.target as HTMLInputElement).value);
    // // };

    // // const questionHandler = 
    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault();

    // // if (value[0] === 'best') {
    //     addPoint((points) => points +1 )
    // } else if (value[0] === 'worst') addPoint((points) => points +1 ){
    //    {/*faire comprendre que c nul*/}
    // }// else {
    // //      {/*faire comprendre que c nul*/}
    // // }
    // }

    return (<div>This is the quiz
        <form>
        <FormControl sx={{ m: 3 }} variant="standard">
            <FormLabel id="demo-error-radios">Which of these options is not a smart money move according to the ressource you just consulted?</FormLabel>
                <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={value[0]}
                // onChange={answerHandler}
                >
                <FormControlLabel value={0} control={<Radio />} label="Review your insurance coverage" />
                <FormControlLabel value={2} control={<Radio />} label="Check your credit score" />
                <FormControlLabel value={3} control={<Radio />} label="Prepare your will" />
                <FormControlLabel value={1} control={<Radio />} label="Negotiate your insurance plan with other insurance firms" />
                <FormControlLabel value={4} control={<Radio />} label="Make a budget" />
                </RadioGroup>
            <br></br>
            <FormLabel id="demo-error-radios">Why should you rebalance your portfolio according to the ressource you just consulted?</FormLabel>
                <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={value[1]}
                // onChange={answerHandler}
                >
                <FormControlLabel value={0} control={<Radio />} label="Your portfolio's energy is out of balance and needs to be realigned" />
                <FormControlLabel value={2} control={<Radio />} label="A psychic has revealed insider information about the upcoming industry changes" />
                <FormControlLabel value={1} control={<Radio />} label="Markets  go up and down" />
                <FormControlLabel value={3} control={<Radio />} label="Huslter's University told you to invest" />
                <FormControlLabel value={4} control={<Radio />} label="A dream you had last night showed a clear sign to make certain investement" />
                </RadioGroup>
            <br></br>
            <FormLabel id="demo-error-radios">What is a smart money move according to the ressource you just consulted?</FormLabel>
                <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={value[2]}
                // onChange={answerHandler}
                >
                <FormControlLabel value={0} control={<Radio />} label="Gambling" />
                <FormControlLabel value={2} control={<Radio />} label="Investing in crypto" />
                <FormControlLabel value={1} control={<Radio />} label="Maximizing employee benefits" />
                <FormControlLabel value={3} control={<Radio />} label="Buying coffee to increase your productivity" />
                <FormControlLabel value={4} control={<Radio />} label="Investing in the stock market" />
                </RadioGroup>
            <br></br>
            <FormLabel id="demo-error-radios">What event can have an impact on your financial plan according to the ressource you just consulted?</FormLabel>
                <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={value[3]}
                // onChange={answerHandler}
                >
                <FormControlLabel value={1} control={<Radio />} label="Loosing your job" />
                <FormControlLabel value={0} control={<Radio />} label="Getting robbed at gunpoint while ordering your coffee at Tim Hortons." />
                <FormControlLabel value={2} control={<Radio />} label="Your favorist artist announcing a show near you" />
                <FormControlLabel value={3} control={<Radio />} label="Apple announcing the new iPhone" />
                <FormControlLabel value={4} control={<Radio />} label="Loosing your wallet" />
                </RadioGroup>
            <br></br>

            <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
            Check Answer
            </Button>
        </FormControl>
        </form>
        </div>)
}

export default FirstQuiz
// class Quiz extends Component {
//   constructor() {
//     super();
//     this.state = {
//       questionBank: [],
//       score: 0,
//       responses: 0
//     };
//   }
  
//   // Function to get question from ./question
//   getQuestions = () => {
//     questionAPI().then(question => {
//       this.setState({questionBank: question});
//     });
//   };
  
//   // Set state back to default and call function
//   playAgain = () => {
//     this.getQuestions();
//     this.setState({score: 0, responses: 0});
//   };
  
//   // Function to compute scores
//   computeAnswer = (answer, correctAns) => {
//     if (answer === correctAns) {
//       this.setState({
//         score: this.state.score + 1
//       });
//     }
//     this.setState({
//       responses: this.state.responses < 5
//         ? this.state.responses + 1
//         : 5
//     });
//   };
  
//   // componentDidMount function to get question
//   componentDidMount() {
//     this.getQuestions();
//   }
  
//   render() {
//     return (<div className="container">
//       <div className="title">
//         QuizOn
//       </div>
  
//       {this.state.questionBank.length > 0 && 
//        this.state.responses < 5 && 
//        this.state.questionBank.map(({question, answers,
//        correct, questionId}) => <QuestionBox question=
//        {question} options={answers} key={questionId}
//        selected={answer => this.computeAnswer(answer, correct)}/>)}
  
//       {
//         this.state.responses === 5
//           ? (<Result score={this.state.score}
//             playAgain={this.playAgain}/>)
//           : null
//       }
  
//     </div>)
//   }
// }
  
// ReactDOM.render(<Quiz/>, document.getElementById("root"))