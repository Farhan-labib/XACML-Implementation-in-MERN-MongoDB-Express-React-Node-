const PAP = require('./PAP');
const PDP = async (role, action, resource) => {
    const policies = await PAP();
    console.log(`From PAP= Policies: ${policies}`);

    
    return 'Permit';
}

module.exports = PDP;
 