
const chai = require('chai');
const chaiHttp = require('chai-http');
const Koa = require('koa');

const {expect,} = chai;

chai.use(chaiHttp)

const createFakeServer = () => {
    const app = new Koa();
    const apiPort = 3000;

    app.use(async(ctx) => {
        ctx.body = 'Hello, world!';
    })

    return app.listen(apiPort);
}

describe('GET /', () => {

    let fakeServer = null;

    beforeEach(() => {
        fakeServer = createFakeServer()
    }); 

    it('should return the object', (done) => {
        chai.request(fakeServer).get("/").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.equal('Hello, world!');
            done();
        });
    });
});
