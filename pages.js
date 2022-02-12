const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://github.com/ashwinkumar1211/ashwinkumar1211.github.io.git";

ghpages.publish(
    pathname, {
        branch: "master",
        repo: repoURL,
    },
    (err) => {
        if (err) console.log("ERROR: ", err);
        else console.log("PUBLISHED");
    }
);