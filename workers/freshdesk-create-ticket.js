addEventListener('fetch', (event) => {
    const allowedMethods = ['GET', 'POST', 'HEAD', 'OPTIONS'];

    const request = event.request;

    if (!allowedMethods.includes(request.method)) {
        return event.respondWith(respond({ message: `${request.method} not supported` }, 405));
    }

    if (request.method === 'GET') {
        return event.respondWith(respond({ message: '成功' }, 200));
    }

    if (request.method === 'OPTIONS') {
        return event.respondWith(handleOptions(request));
    }

    return event.respondWith(handleRequest(request));
});

// Get the API key here: https://help.taiwangoldcard.tw/a/profiles/66008025726/edit
API_KEY = 'a4rJMbhBOCagI7iu4KN';

function respond(body, status = 200, origin = '*') {
    const headers = new Headers([['Content-Type', 'application/json']]);
    // Set CORS headers
    headers.set('Access-Control-Allow-Origin', origin);

    // Append to/Add Vary header so browser will cache response correctly
    headers.append('Vary', 'Origin');

    return new Response(JSON.stringify(body), {
        headers,
        status,
    });
}

/**
 * Respond to the request
 * const exampleBody = {
 *     email: 'it+test@taiwangoldcard.tw',
 *     subject: '咱們來測試系統吧 - ' + Date.now(),
 *     description: 'Oh wht a day',
 *     status: 2,
 *     priority: 1,
 *
 *     // Enum('About the Gold Card Program', 'About the Application Process', 'Questions about Taiwan', 'General')
 *     type: 'General',
 *  };
 * @param {Request} request
 */
async function handleRequest(request) {
    try {
        // Not going to validate since the Freshdesk API will do that for us
        const formData = await request.json();

        // FD: Fetch Tickets (GET https://taiwangoldcard.freshdesk.com/api/v2/tickets)
        const ticket = await fetch('https://taiwangoldcard.freshdesk.com/api/v2/tickets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Basic ' + btoa(API_KEY + ':X'),
            },
            body: JSON.stringify(formData),
        });
        const status = ticket.status;
        const json = await ticket.json();

        console.log(json);

        return respond(json, status);
    } catch (err) {
        console.log(err);
        return respond({ message: 'Server error' }, 500);
    }
}
// These headers must be present on all responses to all CORS preflight
// requests. In practice, this means all responses to OPTIONS requests.
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
    'Access-Control-Max-Age': '86400',
};

function handleOptions(request) {
    // Make sure the necessary headers are present
    // for this to be a valid pre-flight request
    let headers = request.headers;
    if (
        headers.get('Origin') !== null &&
        headers.get('Access-Control-Request-Method') !== null &&
        headers.get('Access-Control-Request-Headers') !== null
    ) {
        // Handle CORS pre-flight request.
        // If you want to check or reject the requested method + headers
        // you can do that here.
        let respHeaders = {
            ...corsHeaders,
            // Allow all future content Request headers to go back to browser
            // such as Authorization (Bearer) or X-Client-Name-Version
            'Access-Control-Allow-Headers': request.headers.get('Access-Control-Request-Headers'),
        };

        return new Response(null, {
            headers: respHeaders,
        });
    } else {
        // Handle standard OPTIONS request.
        // If you want to allow other HTTP Methods, you can do that here.
        return new Response(null, {
            headers: {
                Allow: 'GET, HEAD, POST, OPTIONS',
            },
        });
    }
}
