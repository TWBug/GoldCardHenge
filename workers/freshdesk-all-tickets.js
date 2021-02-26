addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request));
});

// Get the API key here: https://help.taiwangoldcard.tw/a/profiles/66008025726/edit
API_KEY = 'a4rJMbhBOCagI7iu4KN';

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
    // FD: Fetch Tickets (GET https://taiwangoldcard.freshdesk.com/api/v2/tickets)
    const body = await fetch('https://taiwangoldcard.freshdesk.com/api/v2/tickets', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + btoa(API_KEY + ':X'),
        },
    })
        .then((res) => res.json())
        .then(console.log.bind(console))
        .catch(console.error.bind(console));

    return new Response(body, { status: 200 });
}
