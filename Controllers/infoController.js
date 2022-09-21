"use strict";

const sdv = require("sportsdataverse");

async function nextEvent (teamId) {
    const team = await sdv.nfl.getTeamInfo(teamId);
    let nextEvent = team.team.nextEvent[0];
    let game = nextEvent.name;
    let zulu = new Date(nextEvent.date);
    let date = zulu.toLocaleString('en-US', {
        timeZone: 'CST',
    });
    let event = game + " " + date;

    return event;
}

module.exports = {
    nextEvent
};