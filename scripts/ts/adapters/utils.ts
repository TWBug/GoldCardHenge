const defaultHeaders = {
    // @note This awesome user agent string is meant to not trigger any
    // automated scrape prevention, but also inform the recipient of our
    // presence should they decide to view their logs. They've already
    // agreed to let us scrape their site, but who knows if htey utilize any
    // intermediate scrape prevention software that they don't even know
    // about. After all, they are a job board.
    'User-Agent':
        'Mozilla/5.0 (Macintosh) AppleWebKit/537 (KHTML, like Gecko) Chrome/88.TEGO.special Safari/537.TEGO.special',
};

export const getHeaders = (url: string) => {
    let urlHeaders = {};

    try {
        const x = new URL(url);
        urlHeaders = {
            Authorization: x.hostname,
            Referer: x.hostname, // @note Referer is misspelled in the HTTP spec, so it is here too
        };
    } catch (err) {
        console.warn(`[ERR] Parsing URL ${url} Ignoring`, err);
    }

    return {
        ...defaultHeaders,
        ...urlHeaders,
    };
};
