export const notFound = (req, res, next) => {
    // Render the 404.pug template for unmatched routes
    res.status(404).render('404', { path: req.url, pageTitle: 'Page Not Found' });
};