import './question.scss';

function Question(props) {

    let answer=false;
    let show=false;

    function handleSubmit(e){
        e.preventDefault();
        show=!show;
        console.log(e.target.value);
        if(e.value==="brussels"){
            answer=true;
        }
    }

    return ( 
        <div>
            <div className="question">
                <form onSubmit={handleSubmit}>
                    <h1>What is the capital of Belgium?</h1>
                    <input type="radio" id="brussels" name="capital" value="brussels"></input>
                    <label htmlFor="brussels">Brussels</label><br></br>
                    <input type="radio" id="paris" name="capital" value="paris"></input>
                    <label htmlFor="paris">Paris</label><br></br>
                    <input type="radio" id="london" name="capital" value="london"></input>
                    <label htmlFor="london">London</label><br></br>
                    <input type="submit" value="Submit"></input>
                </form> 
            </div>
            {show &&
            <div className="answer">
                {answer &&
                <h1> Correct !</h1>
                }
                {answer === false &&
                <h1>False</h1>
                }                
            </div>
            }
        </div>
        


    );
}

export default Question