import React from 'react'

class CountdownTimer extends React.Component {
    
    constructor(){
        super();
        this.state = {
            count: Date.now()
        }
    }

    componentDidMount(){
            this.myInterval = setInterval(() => {
                    this.setState({
                        count:this.state.count+1000
                    })
            },1000)

    }


    componentWillUnmount(){
        clearInterval(this.myInterval)
    }

    render(){
        const endDate = new Date("Wed Mar 25 2021 00:00:00 GMT+0200")
        const {count} = this.state
        const timeLeft = Math.abs(endDate - count);
        
        const days = Math.floor(timeLeft/ (1000 * 60 * 60 * 24));
        const hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 *60));
        const mins = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60))
        const sec = Math.floor(timeLeft % (1000 * 60) /1000)

    return (
        <div className = "row justify-content-center">
            <div className = "col-3">
                <h5 className = "border-bottom">{days}</h5>
                <p>Zile</p>
            </div>
            <div className = "col-3">
                <h5 className = "border-bottom">{hours}</h5>
                <p>Ore</p>
            </div>
            <div className = "col-3">
                <h5 className = "border-bottom">{mins}</h5>
                <p>Minute</p>
            </div>
            <div className = "col-3">
                <h5 className = "border-bottom">{sec}</h5>
                <p>Secunde</p>
            </div>
            
        </div>
    )}
}

export default CountdownTimer
