describe("Hello", function(){
    var request = require("request");
    var base_url = "http://localhost:8080/";

    describe("GET /", function() {
        it("returns status code 200", function(done) {
            request(base_url, function(error, response, body) {
                expect(response.statusCode).toEqual(200);
                done();
            });
        });
    });
});
