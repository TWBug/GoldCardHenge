/**
 * We want to click button, merge master -> test-prod. Once we know it's working
 * we can merge into real prod. Ideally, you also get a warning if there are
 * changes in the CMS that have not yet been merged to master.
 */

const Button = (props) => {
    const { style = {}, className = '', ...rest } = props;
    return (
        <button
            className={['tego-Button', className].join(' ')}
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

        const styleTag = document.createElement('style');

        // Need to put hover styles in an actual style tag
        styleTag.innerText = `
        .tego-Button {
            color: rgb(255, 255, 255);
            background-color: rgb(121, 130, 145);
        }
        .tego-Button:hover {
            color: rgb(255, 255, 255);
            background-color: rgb(85, 90, 101);
        }
        `.trim();

        this.styleTag = styleTag;

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
        document.head.appendChild(this.styleTag);
        const fn = () => {
            const headerControls = document.querySelector('[class*="AppHeaderActions"]');
            if (headerControls) {
                this.targetBox = headerControls.getBoundingClientRect();
                // Call the handler once to determine whether or not to show these
                // controls on the current route. Without this deep linking to a subpage
                // will still show the controls.
                this.handleRouteChange({ newURL: window.location.href });
            } else {
                this.timeout = setTimeout(fn, 1000);
            }
        };

        window.addEventListener('hashchange', this.handleRouteChange);

        this.timeout = setTimeout(fn, 1000);
    }

    componentWillUnmount() {
        if (this.timeout) clearTimeout(this.timeout);
        document.head.removeChild(this.styleTag);
    }

    render() {
        if (!this.state.show) return null;
        return (
            <div
                style={{
                    position: 'relative',
                    minWidth: '800px',
                    maxWidth: '1440px',
                    padding: '0px 12px',
                    margin: '0px auto',
                    zIndex: 999,
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: this.targetBox.top,
                        right: this.targetBox.width + 20,
                        height: 56, // height of header
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                    }}
                    {...this.props}
                >
                    <Button
                        onClick={(e) => {
                            e.preventDefault();
                            console.log('Deploy!');
                        }}
                    >
                        Deploy
                    </Button>
                </div>
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
