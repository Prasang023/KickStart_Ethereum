import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xb699a5dA51d086A9694cBde701918C876DadC79B'
);

export default instance;