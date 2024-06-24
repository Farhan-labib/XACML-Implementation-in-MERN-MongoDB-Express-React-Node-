const PDP = require('./PDP');

const PEP = async (role, action, resource) => {
    console.log(`From PEP= Role: ${role}, Action: ${action}, Resource: ${resource}`);
    const decision = await PDP(role, action, resource);
    console.log(`From PDP= Decision: ${decision}`);
    return decision;
}

module.exports = PEP;
 