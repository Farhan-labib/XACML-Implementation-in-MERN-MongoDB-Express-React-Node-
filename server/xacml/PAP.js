const fs = require('fs');
const util = require('util');
const xml2js = require('xml2js'); 
const readFileAsync = util.promisify(fs.readFile);

const PAP = async () => {
    try {
        // Read the XML file
        const xml = await readFileAsync('./policies/policy.xml', 'utf8');
         // console.log(`From PAP= XML: ${xml}`);
        // Parse XML to JavaScript object
        const parser = new xml2js.Parser({ explicitArray: false });
        const parsedXml = await parser.parseStringPromise(xml);
         // console.log(`From PAP= Parsed XML: ${JSON.stringify(parsedXml)}`);

        // Return the parsed XML object
        return JSON.stringify(parsedXml);
    } catch (error) {
        console.error('Error reading or parsing policy.xml:', error);
        throw error;
    }
}

module.exports = PAP;
