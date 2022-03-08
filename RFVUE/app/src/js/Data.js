const data = [
    ['No Splash', '', 'Model A', 'Task 3', '1', 'Sajeeb', '3d 1h', '1h', 'Done', '', '*', ''],
    ['Intro', 'Intro', 'Model A, Model C', 'Circle Progress', '2', 'Sajeeb', '2h', '2h', 'Done', 'Done', '*', ''],
    ['Social Media Login', 'Login', '', 'DB Login', '2', 'Sajeeb;Martin;Shakil', '3h', '3h', 'Pending', 'Pending', '', ''],
    ['', '', '', 'FB Login, Twitter, LinkedIn, Google', '1', 'Shakil', '4h', '4h', 'Pending', 'Pending', '', ''],
    //['No Splash', '', '', '', '', '', '', '', '', '', '', ''],
    //['No Splash', '', '', '', '', '', '', '', '', '', '', ''],
    //['No Splash', '', '', '', '', '', '', '', '', '', '', ''],
    //['No Splash', '', '', '', '', '', '', '', '', '', '', ''],
    //['No Splash', '', '', '', '', '', '', '', '', '', '', ''],
    //['No Splash', '', '', '', '', '', '', '', '', '', '', ''],
    //['No Splash', '', '', '', '', '', '', '', '', '', '', ''],
    //['No Splash', '', '', '', '', '', '', '', '', '', '', ''],
    //['No Splash', '', '', '', '', '', '', '', '', '', '', ''],
    //['No Splash', '', '', '', '', '', '', '', '', '', '', ''],
    //['No Splash', '', '', '', '', '', '', '', '', '', '', ''],
    //['No Splash', '', '', '', '', '', '', '', '', '', '', ''],
    //['No Splash', '', '', '', '', '', '', '', '', '', '', ''],
    //['No Splash', '', '', '', '', '', '', '', '', '', '', ''],
    //['No Splash', '', '', '', '', '', '', '', '', '', '', ''],
    //['No Splash', '', '', '', '', '', '', '', '', '', '', ''],
    //['No Splash', '', '', '', '', '', '', '', '', '', '', ''],
]

const columns = [
    { type: 'hidden' },
    { type: 'hidden' },
    { type: 'text', title: 'Screen/Functions', width: 100 },
    { type: 'text', title: 'Type', width: 100 },
    { type: 'text', title: 'Models', width: 120 },
    { type: 'text', title: 'Tasks', width: 120 },
    { type: 'numeric', title: 'Sprint', width: 50 },
    {
        type: 'dropdown', title: 'Developer', width: 120, source: ["Martin", "Sajeeb", "Shakil", "Team"], multiple: true },
    { type: 'text', title: 'ET', width: 50 },
    { type: 'text', title: 'CT', width: 50 },
    { type: 'dropdown', title: 'Prototype', width: 120, source: ["Done", "Pending"] },
    { type: 'dropdown', title: 'Coding', width: 120, source: ["Done", "Pending"] },
    { type: 'text', title: 'Today', width: 50 },
    { type: 'text', title: 'Comments', width: 120 },
    { type: 'text', title: 'Portfolio', width: 120 }

]

const merge = {
    A3: [1, 2],
    A9: [1, 13],
    B3: [1, 5],
    B9: [1, 13],
    C9: [1, 13]
};

const style = {
    C1: "display: none; text-align: center; font-family: monospace;"
}

export default {
    data,
    columns,
    merge,
    style
}