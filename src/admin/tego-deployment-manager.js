class DeploymentManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageReady: false,
        };
    }

    componentDidMount() {
        const fn = () => {
            const headerControls = document.querySelector('[class*="AppHeaderActions"]');
            if (headerControls) {
                this.targetBox = headerControls.getBoundingClientRect();
                this.setState({ pageReady: true });
            } else {
                this.to = setTimeout(fn, 1000);
            }
        };

        this.to = setTimeout(fn, 1000);
    }

    componentWillUnmount() {
        if (this.to) clearTimeout(this.to);
    }

    render() {
        if (!this.state.pageReady) return null;
        return (
            <h1
                style={{
                    position: 'absolute',
                    top: this.targetBox.top,
                    right: this.targetBox.width + 20,
                    height: 56, // height of header
                    display: 'flex',
                    alignItems: 'center',
                    zIndex: 999,
                }}
                {...this.props}
            >
                Hey we made it
            </h1>
        );
    }
}

try {
    const root = document.createElement('div');
    root.classList.add('DeploymentManager');
    document.body.appendChild(root);
    ReactDOM.render(<DeploymentManager />, root);
} catch (err) {
    console.warn(err);
}
