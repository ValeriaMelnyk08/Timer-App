import React from "react";
import '../CSS/main.css'
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            length: 100,
            time: props.startTime,
            auto: props.autostart,
            step: props.step
        };
        this.resetTimer = this.resetTimer.bind(this);
        this.startStopTimer = this.startStopTimer.bind(this);
    }
    componentDidMount() {
        this.countDown()
    }
    countDown = () => {
        if (this.state.auto) {
            this.setState((prevState) => {
                let newWidth = this.state.length - this.state.length / this.state.time *  this.state.step / 1000;
                return{
                    time: prevState.time - this.state.step/1000,
                    length: newWidth,
                }
            });
        }
    }

    componentDidUpdate(prevProps){
        if((this.state.time > 0) && this.state.auto ){
            setTimeout(this.countDown, this.state.step) 
        }
        
    }

    resetTimer() {
        this.setState((state,props) => ({
          length:100,
            time: this.props.startTime,
            auto: true
        }));
    }

    startStopTimer() {
        this.setState((state) => ({
          auto: !state.auto
        }));
    }
    
    render() {
        return (
            <div className="timerMain">
                <div className="text"> Timer </div>
                <div className="timerCont">
                    <button className="timerStopStart" onClick={this.startStopTimer}>{this.state.auto ? "stop" : "start"}</button>
                    <button className="timerReset" onClick={this.resetTimer}>Reset</button>
                </div>
                <div className="timer">
                    <div className="timerLength" style={{width: this.state.length + '%'}}></div>
                </div>
            </div>
        );
    }
}

export default Timer;

