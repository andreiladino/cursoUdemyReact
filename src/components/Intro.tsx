import * as React from 'react'

interface IIntroProps {
    textss: string
}

export default class Intro extends React.Component<IIntroProps> {
    public render() {
        const {textss} = this.props

        return (
            <p className="App-intro">
                <span>{textss}</span>
            </p>
        )
    }
}