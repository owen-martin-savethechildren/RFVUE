module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
    globals: {
        "$": true,
        "_": true,
        "jQuery": true,
        "site": true,
        "joint": true,
        "dagre": true,
        //"jspreadsheet": true
        //"rfJoint": true,
        //"backbone": true
    },
};
