export const numberInQueryString = (req, res, next) => {
    if(req.query.size) {
        if(!req.query.size.match(/^[0-9]+$/)) {
            return res.status(400).json({ messsage: 'Size has to be a number' });
        };
    }
    return next()
}