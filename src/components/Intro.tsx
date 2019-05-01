import * as React from 'react'

interface IJnvvvtroProps {
    text?: string
}



export default class Intro extends React.Component<IJnvvvtroProps> {
    public state = {
        textggg: 'Soy un tales'
    }
    public render() {
        const {text} = this.props
        const t = text ? text : this.state.textggg

        return (
            <p className="App-intro">
                <span>{t}</span>
            </p>
        )
    }
}