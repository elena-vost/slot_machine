class App extends React.Component {
    render () {
        return (
        <div>
            <Hello 
            to="Jorge" 
            from="Lena"
            bangs={4}
            img="https://media.tenor.com/images/dad77f1452951f4cf586395209598978/tenor.gif"
                        />
            <p>Let's play a game:)))</p>
            <NumPicker />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));