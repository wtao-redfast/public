import express from "express";

const app = express();
app.listen(3000);

app.get("/api/location/search", (req, res) => {
    let woeid = 20200525;
    switch (req.query.query) {
        case "shanghai":
            woeid = 20201212;
            break;
        case "san jose":
            woeid = 20201213;
            break;
        default:
            break;
    }
    res.json([
        {
            title: req.query.query,
            woeid: woeid,
        },
    ]);
});

app.get("/api/location/:woeid/", (req, res) => {
    let the_temp = 0;
    switch (req.params.woeid) {
        case "2020121":
            the_temp = -15;
            break;
        case "20201213":
            the_temp = 17;
            break;
        default:
            break;
    }
    res.json({
        consolidated_weather: [
            {
                weather_state_abbr: "lc",
                the_temp: the_temp,
            },
        ],
    });
});
