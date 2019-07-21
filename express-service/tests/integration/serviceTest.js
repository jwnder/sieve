const expect = require('chai').expect;
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');

chai.use(chaiHttp);

describe("Server", () => {
    describe("GET /", () => {
        it("Test value 10", (done) => {
            chai.request(app)
                .get('/service/10')
                .end((err, res) => {
                    expect(res.status).to.equals(200);
                    expect(res.body).to.eql([3,5])
                    done();
                 });
        });
        it("Test value 18", (done) => {
            chai.request(app)
                .get('/service/18')
                .end((err, res) => {
                    expect(res.status).to.equals(200);
                    expect(res.body).to.eql([7])
                    done();
                 });
        });
    })
});
