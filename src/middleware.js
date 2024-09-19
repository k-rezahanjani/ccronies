import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Create and export the middleware with routing configuration
const middleware = createMiddleware(routing);

// Middleware error handling wrapper
export default function middlewareHandler(request) {
    try {
        return middleware(request);
    } catch (error) {
        console.error("Middleware error:", error);
        return new Response('Internal Server Error', { status: 500 });
    }
}

// Optimized matcher configuration for the middleware
export const config = {
    matcher: [
        // Match the root and locale paths
        '/',
        '/(en|fa)/:path*',
        // Exclude paths that should not trigger middleware
        '/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)'
    ]
};
