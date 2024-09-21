import { SFNClient, StartExecutionCommand } from "@aws-sdk/client-sfn";

const client = new SFNClient({ region: 'us-east-1' });
const stateMachineARN = process.env.STATE_MACHINE_ARN;

const start = (event) => {
    try{
        const { message } = event;
        const params = {
            stateMachineArn: stateMachineARN,
            input: JSON.stringify({ message })
        };
        const command = new StartExecutionCommand(params);
        return client.send(command);
    }
    catch(e){
        console.error("Error: ", e);
        throw e;
    }
}

export default start;