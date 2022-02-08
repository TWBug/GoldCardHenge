/**
 * We want to click button, merge master -> test-prod. Once we know it's working
 * we can merge into real prod. Ideally, you also get a warning if there are
 * changes in the CMS that have not yet been merged to master.
 */

// @note Use the test-prod branch when developing this component to avoid
// unwanted changes to the prod branch.
// const PROD_BRANCH = 'test-prod';
const PROD_BRANCH = 'gh-pages(BK)';

const TextSpinner = (props) => {
    const [dots, setDots] = React.useState('');
    React.useEffect(() => {
        const interval = setInterval(() => {
            const nextLength = (dots.length % 3) + 1;
            setDots(
                Array.from({ length: nextLength })
                    .map(() => '.')
                    .join('')
            );
        }, 200);
        return () => {
            clearInterval(interval);
        };
    });
    return <span {...props}>Loading{dots}</span>;
};

const Button = (props) => {
    const { style = {}, className = '', children, ...rest } = props;
    const svgHeight = 20;
    return (
        <button
            className={['tego-Button', className].join(' ')}
            style={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                border: '0px',
                cursor: 'pointer',
                height: '27px',
                lineHeight: '27px',
                fontSize: '12px',
                fontWeight: 600,
                borderRadius: '3px',
                padding: '0px 14px 0px 14px',
                marginRight: '8px',
                ...style,
            }}
            {...rest}
        >
            <span style={{ marginRight: 5 }}>{children}</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${svgHeight} ${svgHeight}`}
                width={svgHeight}
                height={svgHeight}
                fill="currentColor"
                style={{ transform: 'scale(0.7)' }}
            >
                <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                />
            </svg>
        </button>
    );
};
class DeploymentManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            loading: false,
        };

        this.user = null;

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
        // Append styles
        document.head.appendChild(this.styleTag);

        // Display or hide the button based on route
        const fn = () => {
            try {
                // User is a full github-user object, but most notable for our use is user.token
                this.user = JSON.parse(localStorage.getItem('netlify-cms-user'));
                console.log(`[Deployment Manager] Authenciated as ${this.user.email}`);
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
            } catch (err) {
                console.warn('[Deployment Manager] Failed to authenticate. Will retry.');
                this.timeout = setTimeout(fn, 1000);
            }
        };
        fn(); // Run once to get things started

        window.addEventListener('hashchange', this.handleRouteChange);
    }

    componentWillUnmount() {
        if (this.timeout) clearTimeout(this.timeout);
        document.head.removeChild(this.styleTag);
    }

    render() {
        if (!this.state.show) return null;
        const handleDeploy = (e) => {
            e.preventDefault();
            if (
                window.confirm(
                    'Are you sure? If you confirm then the site will be deployed to hengetech.com.tw.'
                )
            ) {
                this.setState({ loading: true });
                return fetch('https://api.github.com/repos/TWBug/GoldCardHenge/merges', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/vnd.github.v3+json',
                        Authorization: `token ${this.user.token}`,
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                    body: JSON.stringify({
                        base: PROD_BRANCH,
                        head: 'master', // Merge this branch into the base branch
                        commit_message: 'Merged via CMS',
                    }),
                })
                    .then((res) => {
                        if (res.status >= 300) {
                            return Promise.reject(res.text());
                        }
                        if (res.status === 204) {
                            return Promise.resolve(
                                window.alert('No changes to deploy. Everything is up to date.')
                            );
                        }
                        if (res.status === 209) {
                            return Promise.resolve(
                                window.alert(
                                    'Conflicting changes. See: https://github.com/TWBug/GoldCardHenge/compare/gh-pages(BK)...master'
                                )
                            );
                        }
                        return res.json().then((json) => {
                            window.alert('Success!');
                        });
                    })
                    .then(() => {
                        this.setState({ loading: false });
                    })
                    .catch((err) => {
                        this.setState({ loading: false });
                        console.warn(err);
                        window.alert('Error. Deployment failed. See the console log for details.');
                    });
            }
        };
        const { loading } = this.state;
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
                        onClick={handleDeploy}
                        disabled={loading}
                        style={{ opacity: loading ? 0.6 : 1 }}
                    >
                        {loading ? (
                            <TextSpinner
                                style={{ width: 60, textAlign: 'left', display: 'block' }}
                            />
                        ) : (
                            'Deploy'
                        )}
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
