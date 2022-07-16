import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import React, { useEffect, useState } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout"

function index({ campaigns }) {
    
    function renderCampaigns() {
        const items = campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true
            };
        });
        return <Card.Group items={items} />;
    };

    return (
    <Layout>
    <div>
        <h3>Open Campaigns</h3>
        
        <Button floated="right" content="Create Campaign" icon="add circle" primary />
        {renderCampaigns()}
    </div>
    </Layout>
    );
}

index.getInitialProps = async () => {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
}

export default index