const Button = (props) => {
    const { style = {}, ...rest } = props;
    return (
        <button
            style={{
                display: 'block',
                position: 'relative',
                border: '0px',
                cursor: 'pointer',
                height: '27px',
                lineHeight: '27px',
                fontSize: '12px',
                fontWeight: 600,
                borderRadius: '3px',
                padding: '0px 24px 0px 14px',
                backgroundColor: 'rgb(121, 130, 145)',
                color: 'rgb(255, 255, 255)',
                marginRight: '8px',
                ...style,
            }}
            {...rest}
        ></button>
    );
};
class DeploymentManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };

        // Only show this control if we are on the "home page" layout, where the
        // header lines up with the appropriate built-in controls.
        this.handleRouteChange = (e) => {
            const isSubpage = e.newURL.match(/\/admin\/#\/collections\/(.+)\/.+/);
            if (isSubpage) {
                this.setState({ show: false });
            } else {
                this.setState({ show: true });
            }
            console.log('change route', e);
            console.log('this', this);
        };
    }

    componentDidMount() {
        const fn = () => {
            const headerControls = document.querySelector('[class*="AppHeaderActions"]');
            if (headerControls) {
                this.targetBox = headerControls.getBoundingClientRect();
                this.setState({ show: true });
            } else {
                this.to = setTimeout(fn, 1000);
            }
        };

        window.addEventListener('hashchange', this.handleRouteChange);

        this.to = setTimeout(fn, 1000);
    }

    componentWillUnmount() {
        if (this.to) clearTimeout(this.to);
    }

    render() {
        if (!this.state.show) return null;
        return (
            <div
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
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        console.log('deploy me!');
                    }}
                >
                    Deploy
                </Button>
            </div>
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
