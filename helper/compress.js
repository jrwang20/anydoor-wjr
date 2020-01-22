const {createGzip, createDeflate} = require('zlib');

module.exports = (rs, req, res) => {
    const acceptEncoding = req.headers['accept-encoding'];
    if(!acceptEncoding || !acceptEncoding.match(/\b(gzip|deflate)\b/)) {
        return rs;
    } else if (acceptEncoding.match(/\bgzip\b/)) {
        return rs.pipe(createGzip());
    }
}