import React from 'react';
import Controls from './Controls';
import Statistics from './Statistics';
import Notification from './Notification';

class Counter extends React.Component {
    static defaultProps = {
        step: 1,
        initialValue: 0,
    };

    constructor() {
        super();

        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
        };
    }

    handleClick = event => {
        let key = event.target.textContent.toLowerCase();
        this.setState(prevState => {
            return {
                [key]: prevState[key] + this.props.step,
            };
        });
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        return total > 0 ? (this.state.good / total) * 100 : 0;
    };

    render() {
        const total = this.countTotalFeedback();
        let statistics;
        if (total === 0) {
            statistics = <Notification message="There is no feedback" />;
        } else {
            statistics = (
                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.neutral}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                />
            );
        }
        return (
            <div>
                <h1>Please, leave your feedback</h1>
                <Controls onClick={this.handleClick} />
                <div>
                    <h2>Statistics</h2>
                    {statistics}
                </div>
            </div>
        );
    }
}

export default Counter;
