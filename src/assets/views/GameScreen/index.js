import React from 'react';

import { Section, Title, Button, Grid, Grid__Item } from './styles';

class GameScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            field: Array(9).fill(null),
            xTurn: true,
        
            xScore: 0,
            oScore: 0,
        
            game: false,
        }

        this.newGame = this.newGame.bind(this);
        this.switchScreen = this.switchScreen.bind(this);
        this.handlePlayerTurn = this.handlePlayerTurn.bind(this);
    }

    newGame() {
        this.setState({
            field: Array(9).fill(null),
            xTurn: true,
        
            xScore: 0,
            oScore: 0,
        
            game: false,
        });

        this.switchScreen();
    }

    switchScreen() {
        this.setState(prevState => ({
            game: !prevState.game
        }))
    }

    handlePlayerTurn(event) {
        if (this.state.field[event.target.value] == null)
        {
            let field = this.state.field;
            field[event.target.value] = this.state.xTurn ? 'x' : 'o';

            this.setState(prevState => ({
                field: field,
                xTurn: !prevState.xTurn
            }));

            this.checkWinCondition();
            this.checkDrawCondition();
        }
    }

    checkWinCondition() {
        const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

        for (let i = 0; i < winConditions.length; i++) {
            if (this.state.field[winConditions[i][0]] && this.state.field[winConditions[i][0]] == this.state.field[winConditions[i][1]] && this.state.field[winConditions[i][0]] == this.state.field[winConditions[i][2]]) {
                if (this.state.field[winConditions[i][0]] == 'x') {
                    this.setState(prevState => ({
                        field: Array(9).fill(null),
                        xTurn: true,

                        xScore: prevState.xScore + 1
                    }))
                    break;
                } else {
                    this.setState(prevState => ({
                        field: Array(9).fill(null),

                        oScore: prevState.oScore + 1
                    }))
                    break;
                }
            }
        }
    }

    checkDrawCondition() {
        if(!this.state.field.includes(null))
        {
            this.setState({
                field: Array(9).fill(null),
                xTurn: true,
            })
        }
    }

    render() {
        const winner = this.state.xScore == 3 ? 'x' : this.state.oScore == 3 ? 'o' : null;
        const game = this.state.game;
        let screen;

        if (game) {
            screen = (
                <Section>
                    <Title>{this.state.xScore} - {this.state.oScore}</Title>
                    <Grid>
                        {
                            this.state.field.map((i, key) =>
                                <Grid__Item key={key} value={key} onClick={this.handlePlayerTurn}>{i}</Grid__Item>
                            )
                        }
                    </Grid>
                    <Button onClick={this.switchScreen}>Главное меню</Button>
                </Section>
            )
        } else {
            screen = (
                <Section>
                    <Title>Крестики - Нолики</Title>
                    { this.state.xScore > 0 || this.state.yScore > 0 ? <Button onClick={this.switchScreen}>Продолжить игру</Button> : null }
                    <Button onClick={this.newGame}>Новая игра</Button>
                </Section>
            )
        }

        if (winner) {
            screen = (
                <Section>
                    <Title>Победитель - {winner}</Title>
                    <Button onClick={this.newGame}>Новая игра</Button>
                </Section>
            )
        }

        return <>{screen}</>
    }
}

export default GameScreen;
