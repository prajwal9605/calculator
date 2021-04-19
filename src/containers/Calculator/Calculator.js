import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import classes from './Calculator.module.css';
import Screen from '../../components/Screen/Screen';

class Calculator extends Component {

    state = {
        res: "0",
        firstOperand: null,
        secondOperand: null,
        operation: null
    }

    deleteBtnClickedHandler = () => {
        let res = this.state.res.toString();
        res = Number.parseFloat(res.substring(0, res.length - 1));
        this.setState({
            res: Number.isNaN(res) ? 0 : res
        });
    }

    clearBtnClickedHandler = () => {
        this.setState({
            res: "0",
            firstOperand: null
        });
    }

    numberClickedHandler = (numberClicked) => {
        let res = this.state.res;
        res = res === "0" ? numberClicked : res + numberClicked;
        this.setState({
            res: res
        });
    }

    operationClickedHandler = (operation) => {
        if (this.state.firstOperand == null) {
            let res = this.state.res;
            this.setState({
                firstOperand: Number.parseFloat(res),
                res: "0",
                operation: operation
            });
        } else {
            let secondOperand = Number.parseFloat(this.state.res);
            let res = "";
            let showRes = false;

            if (operation === "=") {
                showRes = true;
            }

            switch (this.state.operation) {
                case "+":
                    res = this.state.firstOperand + secondOperand;
                    break;
                case "-":
                    res = this.state.firstOperand - secondOperand;
                    break;
                case "x":
                    res = this.state.firstOperand * secondOperand;
                    break;
                case "/":
                    res = this.state.firstOperand / secondOperand;
                    break;

                default:
                    break;
            }
            this.setState({
                res: showRes ? res.toFixed(2).toString() : "0",
                firstOperand: res,
                operation: operation
            });
        }
    }

    equalsClickedHandler = () => {
        this.operationClickedHandler("=");
    }

    render() {
        return (
            <div className={classes.Calculator}>
                <Screen>{this.state.res}</Screen>
                <div className={classes.ButtonRow}>
                    <Button
                        clicked={this.clearBtnClickedHandler}>AC</Button>
                    <Button
                        btnType="Delete"
                        clicked={this.deleteBtnClickedHandler}>DEL</Button>
                    <Button
                        btnType="Operation"
                        clicked={() => this.operationClickedHandler("%")}>%</Button>
                    <Button 
                        btnType="Operation"
                        clicked={() => this.operationClickedHandler("/")}>/</Button>
                </div>
                <div className={classes.ButtonRow}>
                    <Button
                        clicked={() => this.numberClickedHandler("7")}>7</Button>
                    <Button
                        clicked={() => this.numberClickedHandler("8")}>8</Button>
                    <Button
                        clicked={() => this.numberClickedHandler("9")}>9</Button>
                    <Button
                        btnType="Operation"
                        clicked={() => this.operationClickedHandler("x")}>x</Button>
                </div>
                <div className={classes.ButtonRow}>
                    <Button
                        clicked={() => this.numberClickedHandler("4")}>4</Button>
                    <Button
                        clicked={() => this.numberClickedHandler("5")}>5</Button>
                    <Button
                        clicked={() => this.numberClickedHandler("6")}>6</Button>
                    <Button
                        btnType="Operation"
                        clicked={() => this.operationClickedHandler("-")}>-</Button>
                </div>
                <div>
                    <Button
                        clicked={() => this.numberClickedHandler("1")}>1</Button>
                    <Button
                        clicked={() => this.numberClickedHandler("2")}>2</Button>
                    <Button
                        clicked={() => this.numberClickedHandler("3")}>3</Button>
                    <Button
                        btnType="Operation"
                        clicked={() => this.operationClickedHandler("+")}>+</Button>
                </div>
                <div>
                    <Button
                        clicked={() => this.numberClickedHandler(".")}>.</Button>
                    <Button
                        clicked={() => this.numberClickedHandler("0")}>0</Button>
                    <Button>()</Button>
                    <Button 
                        btnType="Equals"
                        clicked={this.equalsClickedHandler}>=</Button>
                </div>
            </div>
        );
    }
}

export default Calculator;