import type { MiddlewareHandler } from "astro";

const onRequest: MiddlewareHandler = (context, next) => {
    if (
        !context.url.pathname.startsWith("/en") &&
        !context.url.pathname.startsWith("/th")
    ) {
        return context.redirect("/en" + context.url.pathname, 301);
    }

    return next();
};

export default onRequest;
